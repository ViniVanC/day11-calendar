import { useEffect, useState } from "react";
import moment from "moment";
import { v4 } from "uuid";

const startOfWeek = moment().startOf("isoWeek");

const daysOfWeek = [];
for (let i = 0; i < 7; i++) {
  daysOfWeek.push(moment(startOfWeek).add(i, "days").format("ddd"));
}

export const useCalendar = () => {
  const [monthDays, setMonthDays] = useState(null);
  const [monthName, setMonthName] = useState(null);
  const [day, setDay] = useState(null);
  const [year, setYear] = useState(null);
  const [daysList, setDaysList] = useState([]);

  // створюю масив з днями
  useEffect(() => {
    let arr = [];

    for (let i = 1; i <= monthDays; i++) {
      arr.push({ id: v4(), dayNumber: i, openEventBubble: false });
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

  return { day, daysList, setDaysList, daysOfWeek, monthName, monthDays, year };
};
