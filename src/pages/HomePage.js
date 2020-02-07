import React from "react";
import styled from "styled-components";

import FooterNavbar from "../components/FooterNavbar";
import MapImage from "../assets/map-image.jpg";

const HomePageStyles = styled.div`
  img {
    width: 100%;
  }
`;

function HomePage(props) {
  const PageTitle = "charge";
  const { history, title, setTitle } = props;
  if(PageTitle !== title) {
    setTitle(PageTitle);
  }
  props.setPassedHistory(props.history);

  return (
    <>
      <HomePageStyles>
        <img src={MapImage} alt="Home page map" />
      </HomePageStyles>

      <FooterNavbar history={ history } />
    </>
  );
}

export default HomePage;
