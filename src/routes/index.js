import { Route, BrowserRouter as Router } from "react-router-dom";

import IntroductionPage from "../pages/introductionPage";
import LiveTab from "../pages/mainPage/liveTab";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/">
        <IntroductionPage />
      </Route>
      <Route exact path="/main">
        <LiveTab />
      </Route>
    </Router>
  );
};
export default Routes;
