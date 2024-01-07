"use client";

import React, { PropsWithChildren } from "react";
import ReactPopup from "reactjs-popup";

import { getModalIsOpened, setModalIsOpened } from "./helpers";

export const Popup: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactPopup
      modal
      onClose={setModalIsOpened}
      open={!getModalIsOpened()}
      position="right center"
    >
      {children}
    </ReactPopup>
  );
};
