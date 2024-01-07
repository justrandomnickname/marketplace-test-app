"use client";
import React, { InputHTMLAttributes, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  callbackFn?: (inputValue: string) => void;
  name?: string;
};

export const Input: React.FC<InputProps> = (props) => {
  const { callbackFn } = props;

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
    <input type="text" value={value} onChange={handleOnChange} {...props} />
  );
};
