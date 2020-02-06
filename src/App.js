import React from "react";
import { Switch, Route } from "react-router-dom";
import AccountPage from "./pages/AccountPage";
import UserProfilePage from "./pages/UserProfilePage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import HelpPage from "./pages/HelpPage";
import VehiclesPage from "./pages/VehiclesPage";

function App(props) {
  return (
    <Switch>
      <Route exact path="/" component={ HomePage } />
      <Route exact path="/account" component={ AccountPage } />
      <Route exact path="/account/profile" component={ UserProfilePage } />
      <Route exact path="/account/vehicles" component={ VehiclesPage } />
      <Route exact path="/charging-sessions" component={ UserProfilePage } />
      <Route exact path="/help" component={ HelpPage } />
      <Route component={ NotFoundPage } />
    </Switch>
  );
}

export default App;
