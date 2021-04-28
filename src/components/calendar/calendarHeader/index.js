import React from "react";
import dateFns from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const CalendarHeaderContainer = styled.div`
  font-size: 26px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  padding: 15px;
  span{
    cursor: pointer;
  }
`;

const CalendarHeader = ({ parentCallback, currentMonth }) => {
  const dateFormat = "MMMM YYYY";

  const prevMonth = () => {
    parentCallback(dateFns.subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    parentCallback(dateFns.addMonths(currentMonth, 1));
  };

  return (
    <CalendarHeaderContainer>
      <span onClick={prevMonth}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </span>
      <div>
        <span>{dateFns.format(currentMonth, dateFormat)}</span>
      </div>

      <span onClick={nextMonth}>
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </CalendarHeaderContainer>
  );
};
export default CalendarHeader;
