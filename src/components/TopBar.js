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
    color: #4a71b5;
    span {
      display: inline-block;
      padding-top: 0.2em;
    }
  }
  .page-name {
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
  }
  .page-action {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2vw;
    color: #4a71b5;
    text-transform: capitalize;
  }
`;

function TopBar(props) {
  const { passedHistory, title, updateOrAdd } = props;

  return (
    <TopBarStyles>
      <div className="back-operation" onClick={() => passedHistory.goBack()}>
        <span className="icon">
          <AiOutlineLeft />
        </span>

        <span className="icon-text">Back</span>
      </div>

      <div className="page-name">{ title }</div>

      <div className="page-action" onClick={() => updateOrAdd}>
        done
      </div>
    </TopBarStyles>
  );
}

export default TopBar;
