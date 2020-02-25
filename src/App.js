import React from "react";
import styled from "styled-components";

import MainWrapper from "./components/MainWrapper";
import FooterNavbar from "./components/FooterNavbar";

const AppStyles = styled.div`
  background: #f0f1f5;
  width: 100%;
  height: 100vh;
  position: relative;
`;

export default function App(props) {  
  return (
    <AppStyles>
      <MainWrapper {...props} />
      <FooterNavbar {...props} />
    </AppStyles>
  );
}
