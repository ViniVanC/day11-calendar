import React from "react";
import { useCalendar } from "../hook/useCalendar";
import { HiXMark } from "react-icons/hi2";
import { EventItem } from "./EventItem";

export const DayInfoBubble = () => {
  const {
    newEvent,
    setNewEvent,
    monthName,
    year,
    dayInfoBubble,
    setOpenInfoBubble,
    addEvent,
    currentDayEvens,
  } = useCalendar();
  return (
    <>
      <div className="absolute top-1/2 left-1/2 z-[100] min-h-max w-full max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-black p-10 drop-shadow-xl">
        <button
          className="absolute top-[15px] right-[15px] text-[40px]"
          onClick={() => setOpenInfoBubble(false)}
        >
          <HiXMark />
        </button>
        <div className="mb-[10px] flex items-end gap-[10px] text-[30px] font-bold leading-[40px]">
          <span>{dayInfoBubble}</span>
          <span>{monthName}</span>
          <span className="text-[18px] leading-[30px] opacity-75">{year}</span>
        </div>
        <hr className="mb-[30px] border-yellow/50" />
        <ul>
          {currentDayEvens?.map(
            ({ eventId, title, description }, i) => (
              <EventItem
                key={eventId}
                id={eventId}
                num={i}
                title={title}
                description={description}
              />
            )
            // console.log(id)
          )}
        </ul>
        <form
          className="flex flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            addEvent();
            setOpenInfoBubble(false);
          }}
        >
          <input
            className="bg-transparent text-[25px] font-bold text-yellow placeholder:text-yellow/50"
            type="text"
            placeholder="Enter name event..."
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent((item) => ({ ...item, title: e.target.value }))
            }
          />
          <textarea
            className="min-h-[200px] resize-none bg-transparent text-yellow placeholder:text-yellow/50"
            placeholder="Enter description event..."
            value={newEvent.description}
            onChange={(e) =>
              setNewEvent((item) => ({ ...item, description: e.target.value }))
            }
          ></textarea>
          <button className="flex w-full items-center justify-center rounded-lg bg-pink p-4 text-[20px] font-bold transition duration-200 ease-in-out hover:scale-105 active:scale-95 ">
            Add Event
          </button>
        </form>
      </div>
      <div
        className="absolute top-0 left-0 h-[100vh] w-[100vw] bg-black/40 backdrop-blur-xl"
        onClick={() => setOpenInfoBubble(false)}
      />
    </>
  );
};
