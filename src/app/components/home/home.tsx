"use client";

import dynamic from "next/dynamic";
import "reactjs-popup/dist/index.css";

import { AppContextProvider } from "@/app/context";

import { Navbar } from "@/app/components/navbar";
import { ShoppingCart } from "@/app/components/shopping-cart";

import { StaticMarketplaceList } from "./marketplace-list";
import { PopupNext } from "./popupText";

import styles from "./styles.module.scss";

const Popup = dynamic(() => import("reactjs-popup"), { ssr: false });

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

    <Popup modal open={true} position="right center">
      <PopupNext />
    </Popup>
  </AppContextProvider>
);
