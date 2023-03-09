import React from "react";
import { useCalendar } from "../hook/useCalendar";
import { useDB } from "../hook/useDB";
import { Day } from "./Day";

export const Month = () => {
  const { day, daysOfWeek } = useCalendar();
  const { daysList } = useDB();

  return (
    <div>
      <div className="mb-4 grid grid-cols-7 gap-5">
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
      <div className="grid grid-cols-7 gap-5">
        {daysList?.map(({ id, dayNumber }) => (
          <Day key={id} dayNumber={dayNumber} dayNow={day === dayNumber} />
        ))}
      </div>
    </div>
  );
};
