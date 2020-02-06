import React from "react";
import AccountMenu from "../components/AccountMenu";


function AccountPage(props) {
  return (
    <>
      <AccountMenu match={props.match} />
    </>
  );
}

export default AccountPage;
