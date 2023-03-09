import { useEffect, useState } from "react";
import moment from "moment";

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

  useEffect(() => {
    const today = moment();

    setMonthDays(today.daysInMonth());
    setMonthName(today.format("MMM"));
    setDay(today.date());
    setYear(today.year());
  }, []);

  return { day, daysOfWeek, monthName, monthDays, year };
};
