import React from "react";
import { useAppContext } from "@/app/context";

import { Card } from "../marketplace-list/card";

import styles from "./styles.module.scss";

type ShoppingCartProps = { className?: string };

export const ShoppingCart: React.FC<ShoppingCartProps> = ({ className }) => {
  const context = useAppContext();

  return (
    <section className={className}>
      Shopping Cart:
      <div className={styles.cards}>
        {context?.cart.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
