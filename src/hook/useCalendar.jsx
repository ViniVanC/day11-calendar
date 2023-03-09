import moment from "moment";
import { useEffect, useState } from "react";

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

  return { day, monthName, monthDays, year };
};
