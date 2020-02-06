import React from 'react'
import { Switch, Route } from "react-router-dom";
import AccountPage from "../pages/AccountPage";
import UserProfilePage from "../pages/UserProfilePage";
import HomePage from "../pages/HomePage";
import HelpPage from "../pages/HelpPage";
import VehiclesPage from "../pages/VehiclesPage";
import PaymentMethodPage from "../pages/PaymentMethodPage";
import ChargeSessionsPage from "../pages/ChargeSessionsPage";
import UnderConstructionPage from "../pages/UnderConstructionPage";
import NotificationsPage from "../pages/NotificationsPage";
import SettingsPage from "../pages/SettingsPage";

export default function  (props) {
  return (
    <Switch>
      <Route exact path="/charge" component={ HomePage } />
      <Route exact path="/account" component={ AccountPage } />
      <Route exact path="/account/profile" component={ UserProfilePage } />
      <Route exact path="/account/vehicles" component={ VehiclesPage } />
      <Route exact path="/account/payment-method" component={ PaymentMethodPage } />
      <Route exact path="/account/notifications" component={ NotificationsPage } />
      <Route exact path="/account/settings" component={ SettingsPage } />
      <Route exact path="/charging-sessions" component={ ChargeSessionsPage } />
      <Route exact path="/help" component={ HelpPage } />
      <Route component={ UnderConstructionPage } />
    </Switch>
  )
}
