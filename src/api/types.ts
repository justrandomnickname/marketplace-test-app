export type MarketplaceItem = {
  id: number;
  name: string;
  img: string;
};

export type MarketplaceRequest = { items: MarketplaceItem[] };

export type MarketplaceRequestProps = {
  page?: number;
  search?: string;
  ids?: string;
};
