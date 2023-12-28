"use client";

import { AppContextProvider } from "@/app/context";

import { Navbar } from "../navbar";
import { ShoppingCart } from "../shopping-cart";

import { StaticMarketplaceList } from "./marketplace-list";

import styles from "./styles.module.scss";

export const HomePage = () => (
  <AppContextProvider>
    <div className={styles.home}>
      <div className={styles.home__left}>
        <Navbar />
        <div className={styles.home__divider} />
        <StaticMarketplaceList />
      </div>
      <div className={styles.home__right}>
        <ShoppingCart />
      </div>
    </div>
  </AppContextProvider>
);
