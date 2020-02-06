import React from "react";
import styled from "styled-components";

const NotFoundPageStyles = styled.div`
  background: #f0f1f5;
  width: 100%;
  height: 100vh;
`;

function NotFoundPage(props) {
  return (
    <NotFoundPageStyles>
      <div> 404!, Page not found </div>
    </NotFoundPageStyles>
  );
}

export default NotFoundPage;
