import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";

import AccountPage from "../pages/AccountPage";
import UserProfilePage from "../pages/UserProfilePage";
import ProfileNamePage from "../pages/ProfileNamePage";
import ProfileEmailPage from "../pages/ProfileEmailPage";
import ProfileMobileNumberPage from "../pages/ProfileMobileNumberPage";
import ProfileAddressPage from "../pages/ProfileAddressPage";
import ProfileChangePasswordPage from "../pages/ProfileChangePasswordPage";

import VehiclesPage from "../pages/VehiclesPage";
import AddVehiclePage from "../pages/AddVehiclePage";
import UpdateVehiclePage from "../pages/UpdateVehiclePage";

import PaymentMethodPage from "../pages/PaymentMethodPage";
import AddPaymentMethod from "../pages/AddPaymentMethod";
import UpdatePaymentMethod from "../pages/UpdatePaymentMethod";

import NotificationsPage from "../pages/NotificationsPage";

import SettingsPage from "../pages/SettingsPage";

import ChargeSessionsPage from "../pages/ChargeSessionsPage";

import HelpPage from "../pages/HelpPage";

import UnderConstructionPage from "../pages/UnderConstructionPage";

export default function AllRoutes(props) {

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/account" component={(p) => <AccountPage {...p} {...props}  /> } />
      <Route exact path="/account/profile/:id" component={(p) => <UserProfilePage {...p} {...props} />} />
      <Route
        exact
        path="/account/profile/:id/name"
        component={(p) => <ProfileNamePage {...p} {...props} />}
      />
      <Route
        exact
        path="/account/profile/:id/email"
        component={(p) => <ProfileEmailPage {...p} {...props} />}
      />
      <Route
        exact
        path="/account/profile/:id/mobile-number"
        component={(p) => <ProfileMobileNumberPage {...p} {...props} />}
      />
      <Route
        exact
        path="/account/profile/:id/address"
        component={(p) => <ProfileAddressPage {...p} {...props} />}
      />
      <Route
        exact
        path="/account/profile/:id/change-password"
        component={(p) => <ProfileChangePasswordPage {...p} {...props} />}
      />
      <Route exact path="/account/vehicles" component={VehiclesPage} />
      <Route exact path="/account/vehicles/add" component={AddVehiclePage} />
      <Route exact path="/account/vehicles/:id" component={UpdateVehiclePage} />
      <Route
        exact
        path="/account/payment-methods"
        component={PaymentMethodPage}
      />
      <Route
        exact
        path="/account/payment-methods/add"
        component={AddPaymentMethod}
      />
      <Route
        exact
        path="/account/payment-methods/:id"
        component={UpdatePaymentMethod}
      />
      <Route
        exact
        path="/account/notifications"
        component={NotificationsPage}
      />
      <Route exact path="/account/settings" component={SettingsPage} />
      <Route exact path="/charging-sessions" component={ChargeSessionsPage} />
      <Route exact path="/help" component={HelpPage} />
      <Route component={UnderConstructionPage} />
    </Switch>
  );
}
