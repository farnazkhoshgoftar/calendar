import React, { useState } from "react";
import styled from "styled-components";

import CalendarHeader from "./calendarHeader";
import CalendarWeekDays from "./calendarWeekDays";
import CalendarMonthDays from "./calendarMonthDays";
import AddEvent from "../../components/addEventModal/addEvent";

const CalendarContainer = styled.div`
  width: 100%;
  max-width: 520px;
  min-height: 450px;
  margin: 0 auto;
  background-color: white;
`;

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [openModal, setOpenModal] = useState(false);

  const CalendarHeaderCallbackFunction = (childData) => {
    setCurrentMonth(childData);
  };
  const CalendarMonthDaysCallbackFunction = (childData) => {
    setSelectedDate(childData);
    setOpenModal(true);
  };
  const onCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <CalendarContainer>
        <CalendarHeader
          currentMonth={currentMonth}
          parentCallback={CalendarHeaderCallbackFunction}
        />
        <CalendarWeekDays currentMonth={currentMonth} />
        <CalendarMonthDays
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          parentCallback={CalendarMonthDaysCallbackFunction}
        />
      </CalendarContainer>
      <AddEvent dayName={selectedDate} onClose={onCloseModal} open={openModal} />
    </>
  );
};

export default Calendar;
