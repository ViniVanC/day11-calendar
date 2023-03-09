import React from "react";
import { Month } from "./Month";

export const Container = () => {
  return (
    <div className="Container rounded-xl bg-black p-10 text-yellow drop-shadow-[#bb625b]">
      <header>Jan</header>
      <hr />
      <Month />
    </div>
  );
};
