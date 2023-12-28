"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Input } from "../ui/input";

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
    <form onSubmit={onSubmit}>
      <Input name={"search"} />
      <button type="submit">Искать</button>
    </form>
  );
};
