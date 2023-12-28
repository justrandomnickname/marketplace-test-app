import { MarketplaceItem } from "@/api";

export type AppContextType = {
  cart: MarketplaceItem[];
  addToCart: (item: MarketplaceItem) => void;
};
