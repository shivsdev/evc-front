import React from "react";
import styled from 'styled-components';

const UnderConstructionPageStyles = styled.div`

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export default function UnderConstructionPage(props) {
  const PageTitle = "under construction";
  if(PageTitle !== props.title) {
    props.setTitle(PageTitle);
  }
  return <UnderConstructionPageStyles>This page is under construction. </UnderConstructionPageStyles>;
}

// UnderConstructionPage.propTypes = {
//
// }
