import React, { useState } from "react";
import AccountMenu from "../components/AccountMenu";
import { AiOutlineLeft } from "react-icons/ai";
import TopBarStyles from "../styles/TopBarStyles";

function AccountPage({ history }) {
  const [loggedIn, setLoggedIn] = useState(true);
  console.log(loggedIn)
  return (
    <>
      <TopBarStyles>
        <div className="back-operation" onClick={() => history.push("/")}>
          <span className="icon">
            <AiOutlineLeft />
          </span>
          <span className="icon-text">back</span>
        </div>

        <div className="page-name"> account </div>

      </TopBarStyles>

      <AccountMenu loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </>
  );
}

export default AccountPage;
