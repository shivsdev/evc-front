import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import SearchBar from "../pages/SearchBar";
import StartChargingSession from "../pages/StartChargingSession";
import SecurityCode from "../pages/SecurityCode";

import AccountPage from "../pages/AccountPage";
import CreateAccount from "../pages/CreateAccount";
import UserProfile from "../pages/UserProfile";
import ProfileName from "../pages/ProfileName";
import ProfileEmail from "../pages/ProfileEmail";
import ProfileMobileNumber from "../pages/ProfileMobileNumber";
import ProfileAddress from "../pages/ProfileAddress";
import ProfileChangePassword from "../pages/ProfileChangePassword";
import ProfileSetPassword from "../pages/ProfileSetPassword";

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
  const {
    profileData,
    setProfileData,
    vehiclesData,
    setVehiclesData,
    paymentMethodsData,
    setPaymentMethodsData,
    newProfileData,
    setNewProfileData
  } = props;

  const profileProps = {
    profileData,
    setProfileData,
    newProfileData,
    setNewProfileData
  };

  const vehicleProps = {
    vehiclesData,
    setVehiclesData
  };

  const paymentMethodProps = {
    paymentMethodsData,
    setPaymentMethodsData
  };

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/selected" component={HomePage} />
      <Route exact path="/search" component={SearchBar} />
      <Route exact path="/start" component={StartChargingSession} />
      <Route exact path="/start/verify" component={ SecurityCode } />
      <Route
        exact
        path="/account"
        component={p => <AccountPage {...p} {...profileProps} />}
      />
      <Route
        exact
        path="/account/create-account"
        component={p => <CreateAccount {...p} {...profileProps} />}
      />
      <Route
        exact
        path="/account/profile/:id"
        component={p => <UserProfile {...p} {...profileProps} />}
      />
      <Route
        exact
        path="/account/profile/:id/name"
        component={p => <ProfileName {...p} {...profileProps} />}
      />
      <Route
        exact
        path="/account/profile/:id/email"
        component={p => <ProfileEmail {...p} {...profileProps} />}
      />
      <Route
        exact
        path="/account/profile/:id/mobile-number"
        component={p => <ProfileMobileNumber {...p} {...profileProps} />}
      />
      <Route
        exact
        path="/account/profile/:id/address"
        component={p => <ProfileAddress {...p} {...profileProps} />}
      />
      <Route
        exact
        path="/account/profile/:id/change-password"
        component={p => <ProfileChangePassword {...p} {...profileProps} />}
      />
      <Route
        exact
        path="/account/create-account/name"
        component={p => <ProfileName {...p} {...profileProps} />}
      />
      <Route
        exact
        path="/account/create-account/email"
        component={p => <ProfileEmail {...p} {...profileProps} />}
      />
      <Route
        exact
        path="/account/create-account/mobile-number"
        component={p => <ProfileMobileNumber {...p} {...profileProps} />}
      />
      <Route
        exact
        path="/account/create-account/address"
        component={p => <ProfileAddress {...p} {...profileProps} />}
      />
      <Route
        exact
        path="/account/create-account/set-password"
        component={p => <ProfileSetPassword {...p} {...profileProps} />}
      />
      <Route
        exact
        path="/account/vehicles"
        component={p => <VehiclesPage {...p} {...vehicleProps} />}
      />
      <Route
        exact
        path="/account/vehicles/add"
        component={p => <AddVehiclePage {...p} {...vehicleProps} />}
      />
      <Route
        exact
        path="/account/vehicles/:id"
        component={p => <UpdateVehiclePage {...p} {...vehicleProps} />}
      />
      <Route
        exact
        path="/account/payment-methods"
        component={p => <PaymentMethodPage {...p} {...paymentMethodProps} />}
      />
      <Route
        exact
        path="/account/payment-methods/add"
        component={p => <AddPaymentMethod {...p} {...paymentMethodProps} />}
      />
      <Route
        exact
        path="/account/payment-methods/:id"
        component={p => <UpdatePaymentMethod {...p} {...paymentMethodProps} />}
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
