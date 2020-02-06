import React from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import FooterNavbar from "../components/FooterNavbar";
import AccountMenu from "../components/AccountMenu";

const AccountPageStyles = styled.div`
  background: #f0f1f5;
  width: 100%;
  height: 100vh;
`;

function AccountPage({ history, match}) {
  return (
    <AccountPageStyles>
      <TopBar />
      <AccountMenu match={match} />
      <FooterNavbar history={ history } />
    </AccountPageStyles>
  );
}

export default AccountPage;
