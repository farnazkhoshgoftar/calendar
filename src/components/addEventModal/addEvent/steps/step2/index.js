import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addEvent } from "../../../../../redux/actions/";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  input,
  textarea {
    border: none;
    border-bottom: 2px solid rgb(97, 193, 231);
    outline: none;
    font-size: 20px;
  }
  input {
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
    resize: none;
  }
  div {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
  }
  button {
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
  }
`;

const Step2 = ({ goToStep, dayName, onCancel }) => {
  const [inputTime, setInputTime] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addEvent(inputTime, inputTitle, description, dayName));
    setInputTime("");
    setInputTitle("");
    setDescription("");
    goToStep();
  };

  return (
    <Div>
      <input
        type="time"
        placeholder="Time"
        onChange={(e) => setInputTime(`${dayName}-${e.target.value}`)}
        value={inputTime}
      />

      <input
        placeholder="Title"
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <div>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </Div>
  );
};
export default Step2;
