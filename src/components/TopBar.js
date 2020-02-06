import React from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";

const TopBarStyles = styled.header`
  background: #f9fafb;
  text-align: center;
  padding: 0.5em 0;
  position: relative;

  .back-operation {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2vw;
    color: #4A71B5;
    span {
      display: inline-block;
      padding-top: .2em;
    }
  }
  .page-name {
    font-weight: bold;
    text-align: center;
  }
`;

function TopBar(props) {
  return (
    <TopBarStyles>
      <div className="back-operation" onClick={() => props.history.goBack() } >
        <span className="icon">
          <AiOutlineLeft />
        </span>
        <span className="icon-text">
          Back
        </span>
      </div>
      <div className="page-name">Account</div>
    </TopBarStyles>
  );
}

export default TopBar;
