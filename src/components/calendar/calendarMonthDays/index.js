import React from "react";
import dateFns, { format } from "date-fns";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  padding: 15px;
`;

const CalendarMonthDays = ({ parentCallback, selectedDate, currentMonth }) => {
  const monthStart = dateFns.startOfMonth(currentMonth);
  const monthEnd = dateFns.endOfMonth(monthStart);
  const startDate = dateFns.startOfWeek(monthStart);
  const endDate = dateFns.endOfWeek(monthEnd);

  const dateFormat = "D";
  const rows = [];

  let days = [];
  let day = startDate;
  let formattedDate = "";

  const onDateClick = (day) => {
    parentCallback(format(day, "YYYY/MM/DD"));
  };

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = dateFns.format(day, dateFormat);
      const cloneDay = day;
      days.push(
        <div
          className="number"
          key={day}
          onClick={() => onDateClick(dateFns.parse(cloneDay, "yyyy-MM-dd"))}
        >
          <span
            className={` ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
          >
            {formattedDate}
          </span>
        </div>
      );
      day = dateFns.addDays(day, 1);
    }
    rows.push(<Row key={day}>{days}</Row>);
    days = [];
  }
  return <div>{rows}</div>;
};
export default CalendarMonthDays;
