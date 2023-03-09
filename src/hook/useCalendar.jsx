import moment from "moment";
import { createContext, useContext, useEffect, useState } from "react";
import { v4 } from "uuid";

const CalendarContext = createContext();
export const useCalendar = () => useContext(CalendarContext);

const startOfWeek = moment().startOf("isoWeek");

const daysOfWeek = [];
for (let i = 0; i < 7; i++) {
  daysOfWeek.push(moment(startOfWeek).add(i, "days").format("ddd"));
}

export const CalendarProvider = ({ children }) => {
  const [daysList, setDaysList] = useState([]);
  const [monthDays, setMonthDays] = useState(null);
  const [monthName, setMonthName] = useState(null);
  const [day, setDay] = useState(null);
  const [year, setYear] = useState(null);
  const [openInfoBubble, setOpenInfoBubble] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
  });
  const [dayInfoBubble, setDayInfoBubble] = useState();
  const [currentDayId, setCurrentDayId] = useState();
  const [currentDayEvens, setCurrentDayEvens] = useState([]);

  // створюю масив з днями
  useEffect(() => {
    let arr = [];

    for (let i = 1; i <= monthDays; i++) {
      arr.push({
        id: v4(),
        dayNumber: i,
        events: [],
      });
    }

    setDaysList(arr);
  }, [monthDays]);

  useEffect(() => {
    const today = moment();

    setMonthDays(today.daysInMonth());
    setMonthName(today.format("MMM"));
    setDay(today.date());
    setYear(today.year());
  }, []);

  const addEvent = () => {
    setDaysList(
      daysList.map((item) =>
        item.id === currentDayId
          ? {
              ...item,
              events: [
                ...item.events,
                {
                  eventId: v4(),
                  title: newEvent.title,
                  description: newEvent.description,
                },
              ],
            }
          : item
      )
    );

    setNewEvent((item) => ({ ...item, title: "", description: "" }));
  };

  const removeEvent = (eventId) => {
    setDaysList(
      daysList.map((day) =>
        day.id === currentDayId
          ? {
              ...day,
              events: currentDayEvens.filter(
                (item) => eventId !== item.eventId
              ),
            }
          : day
      )
    );
    setOpenInfoBubble(false);
  };

  const handleOpenInfoBubble = (dayId) => {
    setOpenInfoBubble(true);

    daysList.map((day) =>
      day.id === dayId
        ? (setDayInfoBubble(day.dayNumber),
          setCurrentDayId(day.id),
          setCurrentDayEvens(day.events))
        : ""
    );
  };

  return (
    <CalendarContext.Provider
      value={{
        day,
        daysList,
        setDaysList,
        daysOfWeek,
        monthName,
        monthDays,
        year,
        newEvent,
        setNewEvent,
        addEvent,
        removeEvent,
        openInfoBubble,
        setOpenInfoBubble,
        dayInfoBubble,
        handleOpenInfoBubble,
        currentDayEvens,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
