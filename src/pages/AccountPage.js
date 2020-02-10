import React from "react";
import AccountMenu from "../components/AccountMenu";
import { AiOutlineLeft } from "react-icons/ai";
import TopBarStyles from "../styles/TopBarStyles";

function AccountPage({ history }) {
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

      <AccountMenu />
    </>
  );
}

export default AccountPage;
