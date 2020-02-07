import React from "react";
import AccountMenu from "../components/AccountMenu";

function AccountPage(props) {
  const PageTitle = "account";

  if(PageTitle !== props.title) {
    props.setTitle(PageTitle);
  }

  return (
    <>
      <AccountMenu match={props.match} />
    </>
  );
}

export default AccountPage;
