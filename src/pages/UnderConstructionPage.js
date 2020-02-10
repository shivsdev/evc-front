import React from "react";
import styled from 'styled-components';
import { AiOutlineLeft} from "react-icons/ai";
import TopBarStyles from "../styles/TopBarStyles";

const UnderConstructionPageStyles = styled.div`

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export default function UnderConstructionPage(props) {
  const { history } = props;

  return (
    <>
      <TopBarStyles>
        <div
          className="back-operation"
          onClick={() => history.push("/") }
        >
          <span className="icon">
            <AiOutlineLeft />
          </span>
          <span className="icon-text">back</span>
        </div>
        <div className="page-name"> In Progress </div>
      </TopBarStyles>
      <UnderConstructionPageStyles>This page is under construction. </UnderConstructionPageStyles>
    </>
  );
}

// UnderConstructionPage.propTypes = {
//
// }
