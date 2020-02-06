import React from "react";
import styled from "styled-components";

const TopBarStyles = styled.header`
  background: #F9FAFB;
  text-align: center;
  padding: 0.5em 0;
  font-weight: bold;
`;

function TopBar(props) {
  return (
    <TopBarStyles>
      <div>Account</div>
    </TopBarStyles>
  );
}

export default TopBar;
