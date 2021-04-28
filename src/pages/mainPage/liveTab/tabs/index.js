import React, { useEffect, useState } from "react";
import TabPane from "../tabPane";
import styled from "styled-components";

const TabsHeader = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 100%;
  background-color: white;
  li {
    width: 50%;
    text-align: center;
    cursor: pointer;
    padding:10px 0;
  }
  li.active {
    border-bottom: 3px solid red;
  }
`;
const TabContent = styled.div`
  padding: 20px;
`;

const Tabs = (props) => {
  const { children } = props;
  const [tabHeader, setTabHeader] = useState([]);
  const [childContent, setChildConent] = useState({});
  const [active, setActive] = useState("");
  useEffect(() => {
    const headers = [];
    const childCnt = {};

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const { name } = element.props;
      headers.push(name);
      childCnt[name] = element.props.children;
    });
    setTabHeader(headers);
    setActive(headers[0]);
    setChildConent({ ...childCnt });
  }, [props, children]);

  const changeTab = (name) => {
    setActive(name);
  };

  return (
    <>
      <TabsHeader>
        {tabHeader.map((item, key) => {
          return (
            <li
              onClick={() => changeTab(item)}
              key={key}
              className={item === active ? "active" : ""}
            >
              {item}
            </li>
          );
        })}
      </TabsHeader>
      <TabContent>
        {Object.keys(childContent).map((key) => {
          if (key === active) {
            return (
              <div className="tabChild" key={key}>
                {childContent[key]}
              </div>
            );
          } else {
            return null;
          }
        })}
      </TabContent>
    </>
  );
};

Tabs.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName];

    let error = null;
    React.Children.forEach(prop, function (child) {
      if (child.type !== TabPane) {
        error = new Error(
          "`" + componentName + "` children should be of type `TabPane`."
        );
      }
    });
    return error;
  },
};

export default Tabs;
