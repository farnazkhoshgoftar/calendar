import React from "react";
import dateFns from "date-fns";
import styled from "styled-components";

const CalendarWeekDaysContainer = styled.div`
  height: 69px;
  background-color: red;
  text-transform: uppercase;
  font-weight: 600;
  color: white;
  font-size: 12px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  padding: 15px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
const CalendarWeekDays = ({ currentMonth }) => {
  const dateFormat = "dddd";
  const days = [];
  let startDate = dateFns.startOfWeek(currentMonth);

  for (let i = 0; i < 7; i++) {
    days.push(
      <div key={i}>
        {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
      </div>
    );
  }

  return <CalendarWeekDaysContainer>{days}</CalendarWeekDaysContainer>;
};
export default CalendarWeekDays;
