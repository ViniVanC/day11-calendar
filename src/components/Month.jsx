import React from "react";
import { useCalendar } from "../hook/useCalendar";
import { Day } from "./Day";
import { DayInfoBubble } from "./DayInfoBubble";

export const Month = () => {
  const { day, daysOfWeek, daysList, openInfoBubble } = useCalendar();

  return (
    <div>
      <div className="mb-4 hidden grid-cols-7 gap-5 sm:grid">
        {daysOfWeek?.map((day, i) => (
          <div
            key={day}
            className={`flex h-10 w-20 items-center justify-center rounded-xl p-2 text-[20px] font-bold ${
              i >= 5 ? "text-pink" : "text-green"
            }`}
            style={{
              boxShadow: "5px 5px 10px #222b2f, -5px -5px 10px #324147",
            }}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-5 max-sm:flex max-sm:flex-col">
        {daysList?.map(({ id, dayNumber, events }, i) => (
          <Day
            key={id}
            id={id}
            dayNumber={dayNumber}
            dayNow={day === dayNumber}
            events={events}
            num={i}
          />
        ))}
      </div>
      {openInfoBubble ? <DayInfoBubble /> : ""}
    </div>
  );
};
