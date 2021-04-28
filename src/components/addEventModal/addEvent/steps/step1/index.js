import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  text-align: center;
  margin-top: 100px;
  button {
    all: unset;
    width: 100px;
    height: 100px;
    border: 1px solid gray;
    border-radius: 200px;
    font-size: 100px;
    font-weight: lighter;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;

const Add = styled.div`
  color: rgb(97, 193, 231);
  cursor: pointer;
  padding: 0 10px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top:20px;
  div {
    width: 20px;
    height: 20px;
    border: 1px solid rgb(97, 193, 231);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    font-size: 26px;
    margin-right:5px;
  }
`;

const List = styled.div`
  p {
    border-bottom: 2px solid lightgray;
    padding: 0 10px;
  }
`;
const Step1 = ({ goToStep, dayName }) => {
  const events = useSelector((state) => state.events.EventsList);
  return (
    <>
      {events[dayName] !== undefined ? (
        <List>
          {events[dayName].map((item) => (
            <p>{item.inputTitle}</p>
          ))}
          <Add
            onClick={() => {
              goToStep();
            }}
          >
            <div>
              <span>+</span>
            </div>
            Add Event
          </Add>
        </List>
      ) : (
        <Container>
          <button
            onClick={() => {
              goToStep();
            }}
          >
            +
          </button>
          <p>Add Event</p>
        </Container>
      )}
    </>
  );
};
export default Step1;
