import { useState } from "react";
import { v4 } from "uuid";
import { useCalendar } from "./useCalendar";

export const useEvent = () => {
  const { daysList, setDaysList } = useCalendar();
  const [newEvent, setNewEvent] = useState({
    eventId: v4(),
    title: "",
    description: "",
  });

  function addEvent(dayId) {}

  function removeEvent(eventId) {}

  function handleOpenEventBubble(dayId) {
    setDaysList(
      daysList.map((day) => {
        day.id === dayId
          ? [...daysList, { ...day, openEventBubble: !day.openEventBubble }]
          : day;
      })
    );
  }

  return {
    newEvent,
    setNewEvent,
    addEvent,
    removeEvent,
    handleOpenEventBubble,
  };
};
