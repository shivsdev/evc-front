import React, { useState } from "react";
import AccountMenu from "../components/AccountMenu";
import { AiOutlineLeft } from "react-icons/ai";
import TopBarStyles from "../styles/TopBarStyles";

function AccountPage({ history }) {
  const [isLogged, setIsLogged] = useState(true);

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
      <AccountMenu isLogged={isLogged} setIsLogged={setIsLogged} />
    </>
  );
}

export default AccountPage;
