import React from "react";

import { MarketplaceItem } from "@/api";
import { useAppContext } from "@/app/context";

import styles from "./styles.module.scss";

export const Card: React.FC<MarketplaceItem> = (item) => {
  const { img, name } = item;

  const context = useAppContext();

  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={img} width={100} height={100} />
      <div className={styles.card__element}>{name}</div>
      <div className={styles.card__element}>
        <button onClick={() => context?.addToCart(item)}>В корзину</button>
      </div>
    </div>
  );
};
