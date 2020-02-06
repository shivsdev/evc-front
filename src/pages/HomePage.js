import React from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import FooterNavbar from "../components/FooterNavbar";

const HomePageStyles = styled.div`
  background: #f0f1f5;
  width: 100%;
  height: 100vh;
`;

function HomePage({ history }) {
  return (
    <HomePageStyles>
      <TopBar />
      <div> Home page comes here </div>
      <FooterNavbar history={ history } />
    </HomePageStyles>
  );
}

export default HomePage;
