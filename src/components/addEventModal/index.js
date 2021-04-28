import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ModalContianer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  padding-top: 100px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  color: gray;
  font-size: 22px;
`;
const ModalSquare = styled.div`
  width: 100%;
  max-width: 520px;
  min-height: 400px;
  background-color: white;
  margin: 0 auto;
  padding: 20px;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  button {
    all: unset;
    cursor: pointer;
  }
`;
const AddEventModal = ({ children, open = false, onClose }) => {
  const [openModal, setOpenModal] = useState(open);
  const closeModal = () => {
    setOpenModal(false);
    onClose();
  };
  useEffect(() => {
    setOpenModal(open);
  });
  return (
    <>
      {openModal ? (
        <ModalContianer>
          <ModalSquare>
            <ModalHeader>
              <p>Events</p>
              <button onClick={closeModal}>X</button>
            </ModalHeader>
            <div>{children}</div>
          </ModalSquare>
        </ModalContianer>
      ) : null}
    </>
  );
};
export default AddEventModal;
