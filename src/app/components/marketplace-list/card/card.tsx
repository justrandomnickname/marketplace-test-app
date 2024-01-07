import React from "react";
import Image from "next/image";

import { MarketplaceItem } from "@/api";
import { useAppContext } from "@/app/context";

import styles from "./styles.module.scss";

export const Card: React.FC<MarketplaceItem> = (item) => {
  const { img, name, id } = item;

  const context = useAppContext();

  return (
    <div className={styles.card}>
      <div className={styles["card__img-wrapper"]}>
        <Image
          loader={({ src, width }) => src + "?w=" + width}
          src={img}
          className={styles["card__img-wrapper__img"]}
          style={{ objectFit: "contain" }}
          fill
          sizes="100%"
          alt="img"
        />
      </div>
      <div className={styles.card__info}>
        <div className={styles.card__info__text}>{name}</div>
        id:{id}
        <div className={styles.card__info__actions}>
          <button
            className={styles.card__info__actions__action}
            onClick={() => context?.addToCart(item)}
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};
