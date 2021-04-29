import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { deleteEventList } from "../../redux/actions";

const Contanier = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  h2 {
    color: rgb(180, 41, 41);
  }
`;
const RowContainer = styled.div`
  margin-bottom: 30px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  font-size: 20px;
  align-items: center;

  span {
    margin-left: 10px;
    cursor: pointer;
  }
`;

const Events = () => {
  const events = useSelector((state) => state.events.EventsList);
  console.log("events", events);
  const dispatch = useDispatch();

  const deleted = (dayName, id) => {
    dispatch(deleteEventList(dayName, id));
  };

  return (
    <Contanier>
      {Object.keys(events).map((key) => {
        return (
          <RowContainer>
            {events[key].length ? <h2>{key}</h2> : null}
            {events[key].map((item) => (
              <Row key={item.id}>
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
          </RowContainer>
        );
      })}
    </Contanier>
  );
};
export default Events;
