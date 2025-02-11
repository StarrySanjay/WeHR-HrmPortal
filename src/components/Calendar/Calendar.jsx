import { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  const onNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const onPrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const renderDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const prevMonthDays = getDaysInMonth(year, month - 1);

    const days = [];

    // Previous month's days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(
        <div key={`prev-${i}`} className="day other-month">
          {prevMonthDays - i}
        </div>
      );
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = day === 7 || day === 17;
      const isFestival = month === 0 && day === 7;

      days.push(
        <div
          key={day}
          className={`day ${isFestival ? "selected-festival" : ""} ${
            isSelected && !isFestival ? "selected" : ""
          }`}
        >
          {day}
        </div>
      );
    }

    // Next month's days to fill the grid
    const totalDays = firstDay + daysInMonth;
    const nextDays = 7 - (totalDays % 7);

    for (let i = 1; i <= (nextDays === 7 ? 0 : nextDays); i++) {
      days.push(
        <div key={`next-${i}`} className="day other-month">
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={onPrevMonth}>&#8249;</button>
          <span>{months[currentDate.getMonth()]}</span>
          <button onClick={onNextMonth}>&#8250;</button>
        </div>
        <div className="weekdays">
          {daysOfWeek.map((day) => (
            <div key={day} className="weekday">
              {day}
            </div>
          ))}
        </div>
        <div className="days">{renderDays()}</div>
      </div>
      {currentDate.getMonth() === 0 && (
        <div className="festival-info">
          <span>Jan 7 - Onam Festival</span>
        </div>
      )}
    </div>
  );
};

export default Calendar;
