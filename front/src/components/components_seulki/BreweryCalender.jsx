import react, { useCallback, useMemo, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons/faCircleArrowLeft";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons/faCircleArrowRight";
import "../../css/css_seulki/seulki.css";

import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  differenceInCalendarDays,
  getMonth,
  isSaturday,
  isSunday,
  isSameDay,
} from "date-fns";

export default function BreweryCalender({ onDateSelect }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const weekMock = ["일", "월", "화", "수", "목", "금", "토"];
  const today = new Date(); // 오늘 날짜

  const nextMonthHandler = useCallback(() => {
    setCurrentDate(addMonths(currentDate, 1));
  }, [currentDate]);

  const prevMonthHandler = useCallback(() => {
    setCurrentDate(subMonths(currentDate, 1));
  }, [currentDate]);

  const createMonth = useMemo(() => {
    const monthArray = [];
    let day = startDate;
    while (differenceInCalendarDays(endDate, day) >= 0) {
      monthArray.push(day);
      day = addDays(day, 1);
    }
    return monthArray;
  }, [startDate, endDate]);

  const handleDateClick = (date) => {
    if (date >= today || isSameDay(date, today)) {
      setSelectedDate(new Date(date));
      onDateSelect(new Date(date));
    }
  };

  return (
    <section className="calendar-s">
      <div className="monthtitle-s">
        <button className="prevbutton-s" onClick={prevMonthHandler}>
          <FontAwesomeIcon icon={faCircleArrowLeft} />
        </button>
        <div className="month-s">
          {format(currentDate, "yyyy년")} &nbsp;
          {format(currentDate, "M월")}
        </div>
        <button className="nextbutton-s" onClick={nextMonthHandler}>
          <FontAwesomeIcon icon={faCircleArrowRight} />
        </button>
      </div>

      <div className="daycontainer-s">
        {weekMock.map((v, i) => {
          let style;
          if (i === 0) {
            style = {
              color: "red",
            };
          } else if (i === 6) {
            style = {
              color: "blue",
            };
          }

          return (
            <div key={`day${i}`} style={style}>
              {v}
            </div>
          );
        })}
      </div>
      <div className="datecontainer-s">
        {createMonth.map((v, i) => {
          let style;
          const validation = getMonth(currentDate) === getMonth(v);
          const isBeforeToday =
            v < today && format(v, "yyyyMMdd") !== format(today, "yyyyMMdd");

          const isToday = format(today, "yyyyMMdd") === format(v, "yyyyMMdd");

          if (validation && isSaturday(v)) {
            style = {
              color: "blue",
            };
          } else if (validation && isSunday(v)) {
            style = {
              color: "tomato",
            };
          }

          return (
            <div
              key={`date${i}`}
              className={`${validation ? "currentmonth-s" : "diffmonth-s"}
              ${
                selectedDate &&
                format(selectedDate, "yyyyMMdd") === format(v, "yyyyMMdd")
                  ? "selected-s"
                  : ""
              }`}
              style={
                isBeforeToday && !isToday
                  ? { opacity: "0.5", cursor: "not-allowed" }
                  : style
              }
              onClick={() => {
                handleDateClick(v);
              }}
            >
              <div className="topLine-s">
                <span className="day-s">{format(v, "d")}</span>
                {isToday && <span className="today-s">(오늘)</span>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
