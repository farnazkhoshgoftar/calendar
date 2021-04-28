import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CircleText from "../../../../circleText";
import { deleteEvent } from "../../../../../redux/actions";

const Container = styled.div`
  text-align: center;
  margin-top: 100px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
`;
const Btn = styled.button`
  all: unset;
  width: 150px;
  text-align: center;
  border: 2px solid rgb(97, 193, 231);
  color: rgb(97, 193, 231);
  padding: 5px 0;
  &:hover {
    background-color: rgb(97, 193, 231);
    color: white;
  }
`;
const Step4 = ({ goToStep, dayName, onCancel }) => {
  const dispatch = useDispatch();

  const deleted = () => {
    dispatch(deleteEvent(dayName));
    goToStep(1);
  };
  return (
    <Container>
      <CircleText text={<FontAwesomeIcon icon={faTrashAlt} />} />
      <p>Are you sure?</p>
      <Row>
        <Btn onClick={deleted}>Delete</Btn>
        <Btn onClick={onCancel}>Cancel</Btn>
      </Row>
    </Container>
  );
};
export default Step4;
