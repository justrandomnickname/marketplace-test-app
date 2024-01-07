import React from "react";

import styles from "./styles.module.scss";

export async function Header() {
  return (
    <div className={styles.header}>
      <p className={styles.header__text}>Лучший Магазин Автозапчастей</p>
    </div>
  );
}
