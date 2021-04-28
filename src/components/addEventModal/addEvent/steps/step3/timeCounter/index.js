import { differenceInSeconds, format } from "date-fns";
import { useEffect, useState } from "react";
import styled from 'styled-components';

const Time=styled.p`
  font-size:26px;
  text-align: center;
`

const TimeCounter = ({ data }) => {
  const [time, setTime] = useState();

  const convertor = (timeStamp) => {
    let diff = differenceInSeconds(timeStamp, Date.now()) * 1000;
    return format(diff, "DD:HH:mm:ss");
  };

  useEffect(() => {
    setTime(convertor(data));
    setInterval(() => {
      setTime(convertor(data));
    }, 1000);
  }, []);

  return <Time>{time}</Time>;
};
export default TimeCounter;
