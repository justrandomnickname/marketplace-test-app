import { MarketplaceRequest, MarketplaceRequestProps } from "./types";

export const getMarketplaceData = async ({
  page = 1,
  search,
  ids = "",
}: MarketplaceRequestProps): Promise<MarketplaceRequest> => {
  const marketplaceData = await fetch(
    `http://localhost:4000/api/marketplace?p=${page}&search=${search}&ids=${ids}`
  )
    .then((response) => {
      return response;
    })
    .then((response) => response.json());

  return marketplaceData;
};
