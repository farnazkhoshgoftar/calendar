import React from "react";
import styled from "styled-components";

import Tabs from "./tabs/";
import TabPane from "./tabPane";
import Calendar from "../../../components/calendar";
import Events from "../../../components/events";

const TabsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: lightgray;
`;
const P = styled.p`
  text-align: center;
  font-size: 26px;
  color: gray;
  margin-top: 60px;
  margin-bottom: 50px;
`;
const LiveTab = () => {
  return (
    <TabsContainer>
      <Tabs>
        <TabPane name="Calendar">
          <P>Pick a day</P>
          <Calendar />
        </TabPane>

        <TabPane name="Event">
          <Events />
        </TabPane>
      </Tabs>
    </TabsContainer>
  );
};
export default LiveTab;
