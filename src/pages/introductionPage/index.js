import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import { ReactComponent as CalendarLogo } from "../../assets/svg/calendar-logo.svg";

const Div = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: red;
  }
`;

const Logo = styled(CalendarLogo)`
  width: 100px;
  height: 200px;
`;

const IntroductionPage = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setRedirect(true),2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      {redirect ? (
        <Redirect to="/main" />
      ) : (
        <Div>
          <Logo />
          <h1>Awsome Calendar</h1>
        </Div>
      )}
    </div>
  );
};
export default IntroductionPage;
