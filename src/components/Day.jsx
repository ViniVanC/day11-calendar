import React from "react";
import { useCalendar } from "../hook/useCalendar";

export const Day = ({ id, dayNumber, dayNow, events, num }) => {
  const { handleOpenInfoBubble } = useCalendar();
  return (
    <>
      <div
        className={`relative flex h-20 w-20 items-end justify-end rounded-xl p-2 font-BungeeShade text-[30px] max-sm:w-full ${
          dayNow ? "bg-green text-black" : "bg-black text-green"
        } ${
          num === 5 ||
          num === 6 ||
          num === 12 ||
          num === 13 ||
          num === 19 ||
          num === 20 ||
          num === 26 ||
          num === 27
            ? "text-pink"
            : ""
        }`}
        style={{
          boxShadow: dayNow
            ? "none"
            : "5px 5px 10px #222b2f, -5px -5px 10px #324147",
        }}
        onClick={() => handleOpenInfoBubble(id)}
      >
        {dayNumber}
        {events.length > 0 && (
          <span className="absolute top-[5px] left-[5px] flex min-h-[30px] min-w-[30px] items-center justify-center rounded-full bg-pink font-Montserrat text-[16px] font-bold text-yellow">
            {events.length}
          </span>
        )}
      </div>
    </>
  );
};
