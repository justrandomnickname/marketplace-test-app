export const cacheControl = (req, res, next) => {
  if (req.url.match(".js|.css|.woff|.jpg|.png|.gif|.ttf")) {
    res.setHeader("Cache-Control", "public,max-age=31536000"); // 365 days
  }
  next();
};
