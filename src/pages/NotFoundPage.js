import React from "react";
import styled from "styled-components";

const NotFoundPageStyles = styled.div`
  background: #f0f1f5;
  width: 100%;
  height: 100vh;
`;

function NotFoundPage(props) {
  const PageTitle = "account";
  
  if(PageTitle !== props.title) {
    props.setTitle(PageTitle);
  }

  return (
    <NotFoundPageStyles>
      <div> 404!, Page not found </div>
    </NotFoundPageStyles>
  );
}

export default NotFoundPage;
