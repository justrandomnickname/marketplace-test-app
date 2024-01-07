"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import {
  MarketplaceItem,
  MarketplaceRequestProps,
  getMarketplaceData,
} from "@/api";

import { MarketplaceList } from "@/app/components/marketplace-list";
import { Navbar } from "@/app/components/navbar";
import { ShoppingCart } from "@/app/components/shopping-cart";
import { AppContextProvider } from "@/app/context/store";

import styles from "./styles.module.scss";

type MarketplaceSearchPageProps = { params: { slug: string } };

export default function MarketplaceSearchPage({
  params,
}: MarketplaceSearchPageProps) {
  const [items, setItems] = useState<MarketplaceItem[]>([]);

  const searchParams = useSearchParams();

  const fetchMarketplaceData = async (props: MarketplaceRequestProps) => {
    getMarketplaceData(props).then((response) => {
      setItems(response.items);
    });
  };

  useEffect(() => {
    const search = searchParams.get("search");

    fetchMarketplaceData({ search: String(search), page: Number(params.slug) });
  }, [searchParams]);

  return (
    <AppContextProvider>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <main className={styles.wrapper}>
        <MarketplaceList className={styles.wrapper__content} items={items} />
        <ShoppingCart className={styles.wrapper__cart} />
      </main>
    </AppContextProvider>
  );
}
