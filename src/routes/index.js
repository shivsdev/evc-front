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
  const {
    profileData,
    setProfileData,
    vehiclesData,
    setVehiclesData,
    paymentMethodsData,
    setPaymentMethodsData
  } = props;
  const profileProps = {
    profileData,
    setProfileData
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
      <Route
        exact
        path="/account"
        component={p => <AccountPage {...p} {...profileProps} />}
      />
      <Route
        exact
        path="/account/profile/:id"
        component={p => <UserProfilePage {...p} {...profileProps} />}
      />
      <Route
        exact
        path="/account/profile/:id/name"
        component={p => <ProfileNamePage {...p} {...profileProps} />}
      />
      <Route
        exact
        path="/account/profile/:id/email"
        component={p => <ProfileEmailPage {...p} {...profileProps} />}
      />
      <Route
        exact
        path="/account/profile/:id/mobile-number"
        component={p => <ProfileMobileNumberPage {...p} {...profileProps} />}
      />
      <Route
        exact
        path="/account/profile/:id/address"
        component={p => <ProfileAddressPage {...p} {...profileProps} />}
      />
      <Route
        exact
        path="/account/profile/:id/change-password"
        component={p => <ProfileChangePasswordPage {...p} {...profileProps} />}
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
        component={ p => <PaymentMethodPage {...p} {...paymentMethodProps} />}
      />
      <Route
        exact
        path="/account/payment-methods/add"
        component={ p => <AddPaymentMethod {...p} {...paymentMethodProps} />}
      />
      <Route
        exact
        path="/account/payment-methods/:id"
        component={ p => <UpdatePaymentMethod {...p} {...paymentMethodProps} />}
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
