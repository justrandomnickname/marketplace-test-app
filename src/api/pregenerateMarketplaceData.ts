import { API } from "./constants";
import { MarketplaceRequest } from "./types";

export const pregenerateMarketplaceData =
  async (): Promise<MarketplaceRequest> => {
    const marketplaceData = await fetch(`${API}api/marketplace`, {
      /** regenerate static data every 60s */
      next: { revalidate: 6000 },
    })
      .then((response) => {
        return response;
      })
      .then((response) => response.json());

    return marketplaceData;
  };
