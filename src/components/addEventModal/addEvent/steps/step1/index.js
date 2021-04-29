import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { deleteEventList } from "../../../../../redux/actions";


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
  margin-top: 20px;
  div {
    width: 20px;
    height: 20px;
    border: 1px solid rgb(97, 193, 231);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    font-size: 26px;
    margin-right: 5px;
  }
`;


const Row=styled.div`
display:flex;
justify-content:space-between;
border-bottom: 2px solid lightgray;
margin:20px 0;
padding:0 10px;
span{
  margin-left:10px;
  cursor: pointer;
}
`
const Step1 = ({ goToStep, dayName }) => {
  const events = useSelector((state) => state.events.EventsList);

  const dispatch = useDispatch();

  const deleted = (dayName, id) => {
    dispatch(deleteEventList(dayName, id));
  };

  return (
    <>
      {events[dayName] !== undefined ? (
        <div>
          {events[dayName].map((item) => (
            <Row>
              <p>{item.inputTitle}</p>
              <div>
              <span>
                <FontAwesomeIcon icon={faEdit} />
              </span>
              <span onClick={() => deleted(item.dayName, item.id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </span>
              </div>
            </Row>
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
        </div>
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
