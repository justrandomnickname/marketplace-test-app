import React from "react";
import cn from "classnames";

import { MarketplaceItem } from "@/api";
import { Card } from "./card";

import styles from "./styles.module.scss";

type MarketplaceListProps = { items: MarketplaceItem[]; className?: string };

export const MarketplaceList: React.FC<MarketplaceListProps> = ({
  items,
  className,
}) => (
  <div className={cn(styles.list, className)}>
    {items.map((item) => (
      <Card key={item.id} {...item} />
    ))}
  </div>
);
