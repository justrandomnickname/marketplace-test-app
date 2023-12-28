import { MarketplaceRequest } from "./types";

export const pregenerateMarketplaceData =
  async (): Promise<MarketplaceRequest> => {
    const marketplaceData = await fetch(
      `http://localhost:4000/api/marketplace`,
      {
        /** regenerate static data every 60s */
        next: { revalidate: 6000 },
      }
    )
      .then((response) => {
        return response;
      })
      .then((response) => response.json());

    return marketplaceData;
  };
