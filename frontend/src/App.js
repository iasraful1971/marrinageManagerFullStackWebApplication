import {
  BrowserRouter, Route, Switch
} from "react-router-dom";
import MyDetails from "./component/auth/MyDetails";
import FindPartner from "./component/findPartner/findPartner";
import SingleBioDataPageView from "./component/findPartner/SingleBioDataPageView";

import Home from './component/Home/Home';
import { ThreeForm } from "./component/Schedule/UseForm";
import { AuthTab } from "./component/tabs/AuthTab";
import PrivateRoute from "./more/PrivateRoute";
import ScrollToTop from "./more/ScrollToTop";

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Switch>
      <Route path="/" component={Home} exact />  
      <Route path="/account"  component={AuthTab} exact />   
      <PrivateRoute path="/schedule" component={ThreeForm} exact />
      <Route path="/single-bio-data-view/:id" component={SingleBioDataPageView} exact />
      <PrivateRoute path="/me" component={MyDetails}exact  />
      <Route path="/find-partner/:currentPage?" component={FindPartner} exact  />
         
      </Switch>
  </BrowserRouter>
   
    </>
  );
}

export default App;
