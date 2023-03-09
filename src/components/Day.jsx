import React from "react";

export const Day = ({ dayNumber, dayNow }) => {
  return (
    <div
      className={`flex h-20 w-20 items-end justify-end rounded-xl p-2 font-BungeeShade text-[30px] text-green ${
        dayNow ? "bg-green text-black " : "bg-black"
      }`}
      style={{
        boxShadow: dayNow
          ? "none"
          : "5px 5px 10px #222b2f, -5px -5px 10px #324147",
      }}
    >
      {dayNumber}
    </div>
  );
};
