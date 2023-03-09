import React from "react";
import { useCalendar } from "../hook/useCalendar";
import { Month } from "./Month";

export const Container = () => {
  const { day, monthName, year } = useCalendar();

  return (
    <div className="Container rounded-xl bg-black p-10 text-yellow drop-shadow-[#bb625b]">
      <header>
        <div className="flex items-end gap-[10px] text-[30px] font-bold leading-[40px]">
          <span>{day}</span>
          <span>{monthName}</span>
          <span className="text-[18px] leading-[30px] opacity-75">{year}</span>
        </div>
      </header>
      <hr className="mb-[30px] border-yellow/50" />
      <Month />
    </div>
  );
};
