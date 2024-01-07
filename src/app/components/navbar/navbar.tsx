"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/app/components/ui/input";

import styles from "./styles.module.scss";

export const Navbar: React.FC = () => {
  const router = useRouter();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      search: { value: string };
    };

    router.push(`/marketplace/1?search=${target.search.value}`);
  };

  return (
    <form className={styles.navbar} onSubmit={onSubmit}>
      <Input
        className={styles.navbar__input}
        placeholder="Введите текст"
        name={"search"}
      />
      <button className={styles.navbar__bttn} type="submit">
        Искать
      </button>
    </form>
  );
};
