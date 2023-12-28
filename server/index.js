const express = require("express");
const cors = require("cors");
const mockData = require("../__mock__/marketplaceData.json");
const bodyParser = require("body-parser");
const cacheControl = require("./cache-control");

const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cacheControl);
server.use(cors());

const getPage = (page) => {
  const result = mockData.slice((page - 1) * 2, page * 2);

  return result;
};

server.get("/api/generate/marketplace", (request, response) => {
  return response
    .status(200)
    .json({ items: [getPage(1), getPage(2), getPage(3)] });
});

server.get("/api/marketplace", (request, response) => {
  try {
    const { p: page, search, ids } = request.query;

    if (ids) {
      const idsArr = String(ids).split(",").filter(Boolean);
      const result = idsArr
        .map((id) => mockData.find((item) => item.id === Number(id)))
        .filter(Boolean);

      return response.status(200).json({ items: result });
    }

    if (search && search !== "undefined") {
      const searchData = mockData.filter((item) => {
        if (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          String(item.id).includes(search)
        ) {
          return true;
        }

        return false;
      });
      return response.status(200).json({ items: searchData });
    }

    if (page) {
      return response.status(200).json({ items: getPage(page) });
    }
  } catch (e) {
    return response.status(200).json({ items: getPage(1) });
  }

  return response.status(200).json({ items: mockData });
});

server.get("*", (request, response) => {
  return requestHandler(request, response);
});

server.listen(4000, (err) => {
  if (err) throw err;
  console.log("> server ready port[4000]");
});
