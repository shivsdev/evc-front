import React from "react";
import styled from "styled-components";
import TopBar from "./components/TopBar";
import FooterNavbar from "./components/FooterNavbar";
import MainWrapper from "./components/MainWrapper";

const AppStyles = styled.div`
  background: #f0f1f5;
  width: 100%;
  height: 100vh;
  position: relative;
`;

function App(props) {
  return (
    <AppStyles>
      <TopBar {...props} />

      <MainWrapper {...props} />

      <FooterNavbar {...props} />

    </AppStyles>
  );
}

export default App;
