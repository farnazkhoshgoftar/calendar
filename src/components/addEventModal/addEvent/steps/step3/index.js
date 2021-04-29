import React, { useState } from "react";
import { useSelector} from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import TimeCounter from "./timeCounter";


const Container = styled.div`
p{
  font-size:26px;
  margin-top:30px;
}
`
const Row = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
font-size: 20px;
color:lightgray;
h2{
  font-size:26px;
  font-weight: 100;
}
span{
  margin-left:10px;
  cursor: pointer;
}
`


const Step3 = ({ goToStep, dayName }) => {

  const events = useSelector((state) => state.events.EventsList[dayName]);
  const [event] = useState(events[events.length - 1]);

  const deleted= () => {
    goToStep()
  }
  return (
    <>
      {event ? (
        <Container>
          <TimeCounter data={event.inputTime} />

          <Row>
            <h2>{event.inputTitle}</h2>
            <div>
              <span>
                <FontAwesomeIcon icon={faEdit} />
              </span>

              <span onClick={deleted}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </span>
            </div>
          </Row>

          <p>{event.Description}</p>

        </Container>
      ) : null}
    </>
  );
};
export default Step3;
