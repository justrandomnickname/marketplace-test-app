"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { MarketplaceItem, getMarketplaceData } from "@/api";
import shoppingCartService from "../services/shopping-cart-service";

import { AppContextType } from "./types";

const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [items, setItems] = useState<MarketplaceItem[]>([]);

  const fetchShoppingCartData = useCallback(
    (ids?: string) => {
      if (!ids) {
        return;
      }

      getMarketplaceData({ ids }).then((response) => {
        setItems(response.items);
      });
    },
    [getMarketplaceData, setItems]
  );

  const addToCart = useCallback(
    (item: MarketplaceItem) => {
      setItems(() => [...items, item]);
      shoppingCartService.setNewItem(item.id);
    },
    [setItems]
  );

  useEffect(() => {
    const ids = shoppingCartService.getIds();

    fetchShoppingCartData(ids?.join(","));
  }, []);

  return (
    <AppContext.Provider value={{ addToCart, cart: items }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
