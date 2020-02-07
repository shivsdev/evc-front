import React from "react";
import { Switch, Route } from "react-router-dom";
import AccountPage from "../pages/AccountPage";

import UserProfilePage from "../pages/UserProfilePage";
import ProfileNamePage from "../pages/ProfileNamePage";
import ProfileEmailPage from "../pages/ProfileEmailPage";
import ProfileMobileNumberPage from "../pages/ProfileMobileNumberPage";
import ProfileAddressPage from "../pages/ProfileAddressPage";
import ProfileChangePasswordPage from "../pages/ProfileChangePasswordPage";

import HomePage from "../pages/HomePage";
import HelpPage from "../pages/HelpPage";
import VehiclesPage from "../pages/VehiclesPage";
import PaymentMethodPage from "../pages/PaymentMethodPage";
import ChargeSessionsPage from "../pages/ChargeSessionsPage";
import UnderConstructionPage from "../pages/UnderConstructionPage";
import NotificationsPage from "../pages/NotificationsPage";
import SettingsPage from "../pages/SettingsPage";

export default function(props) {
  const { title, setTitle, passedHistory, setPassedHistory } = props;

  const extraProps = {
    title,
    setTitle,
    passedHistory,
    setPassedHistory
  };

  return (
    <Switch>
      <Route
        exact
        path="/"
        component={p => <HomePage {...p} {...extraProps} />}
      />
      <Route
        exact
        path="/account"
        component={p => <AccountPage {...p} {...extraProps} />}
      />
      <Route
        exact
        path="/account/profile"
        component={p => <UserProfilePage {...p} {...extraProps} />}
      />
      <Route
        exact
        path="/account/profile/name"
        component={p => <ProfileNamePage {...p} {...extraProps} />}
      />
      <Route
        exact
        path="/account/profile/email"
        component={p => <ProfileEmailPage {...p} {...extraProps} />}
      />
      <Route
        exact
        path="/account/profile/mobile-number"
        component={p => <ProfileMobileNumberPage {...p} {...extraProps} />}
      />
      <Route
        exact
        path="/account/profile/address"
        component={p => <ProfileAddressPage {...p} {...extraProps} />}
      />
      <Route
        exact
        path="/account/profile/change-password"
        component={p => <ProfileChangePasswordPage {...p} {...extraProps} />}
      />
      <Route
        exact
        path="/account/vehicles"
        component={p => <VehiclesPage {...p} {...extraProps} />}
      />
      <Route
        exact
        path="/account/payment-method"
        component={p => <PaymentMethodPage {...p} {...extraProps} />}
      />
      <Route
        exact
        path="/account/notifications"
        component={p => <NotificationsPage {...p} {...extraProps} />}
      />
      <Route
        exact
        path="/account/settings"
        component={p => <SettingsPage {...p} {...extraProps} />}
      />
      <Route
        exact
        path="/charging-sessions"
        component={p => <ChargeSessionsPage {...p} {...extraProps} />}
      />
      <Route
        exact
        path="/help"
        component={p => <HelpPage {...p} {...extraProps} />}
      />
      <Route
        component={p => <UnderConstructionPage {...p} {...extraProps} />}
      />
    </Switch>
  );
}
