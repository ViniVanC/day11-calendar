import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCalendar } from "../hook/useCalendar";

export const EventItem = ({ id, title, description }) => {
  const { removeEvent } = useCalendar();

  return (
    <>
      <div className="relative pr-[40px]">
        <div>
          <h1 className="mb-[20px] text-[20px] font-bold">{title}</h1>
          <p>{description}</p>
        </div>
        <button
          className="absolute top-[10px] right-[10px]"
          onClick={() => removeEvent(id)}
        >
          <FaTrash />
        </button>
      </div>
      <hr className="my-[20px] border-yellow/50" />
    </>
  );
};
