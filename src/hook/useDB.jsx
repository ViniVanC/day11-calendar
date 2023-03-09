import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { useCalendar } from "./useCalendar";

export const useDB = () => {
  const [daysList, setDaysList] = useState([]);
  const { monthDays } = useCalendar();

  // створюю масив з днями
  useEffect(() => {
    let arr = [];

    for (let i = 1; i <= monthDays; i++) {
      arr.push({ id: v4(), dayNumber: i });
    }

    setDaysList(arr);
  }, [monthDays]);

  return { daysList };
};
