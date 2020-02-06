import React from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import FooterNavbar from "../components/FooterNavbar";

const NotFoundPageStyles = styled.div`
  background: #f0f1f5;
  width: 100%;
  height: 100vh;
`;

function NotFoundPage({ history }) {
  return (
    <NotFoundPageStyles>
      <TopBar />
      <div> 404!, Page not found </div>
      <FooterNavbar history={ history } />
    </NotFoundPageStyles>
  );
}

export default NotFoundPage;
