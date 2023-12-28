"use client";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

type InputProps = { callbackFn?: (inputValue: string) => void; name?: string };

export const Input: React.FC<InputProps> = ({ callbackFn, name }) => {
  const [value, setValue] = useState("");

  const [debouncedVal] = useDebounce(value, 500);

  useEffect(() => {
    if (debouncedVal.length >= 2) {
      callbackFn?.(debouncedVal);
    }
  }, [debouncedVal]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} name={name} onChange={handleOnChange} />
  );
};
