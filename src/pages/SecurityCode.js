import React from 'react'
import styled from 'styled-components';
import TopBarStyles from '../styles/TopBarStyles';
import { AiOutlineLeft } from "react-icons/ai";

const Styles = styled.div`
  > p {
    width: 70%;
    margin: 3vh auto;
    color: #797979;
  }
  input {
    margin-top: 1em;
    width: 100%;
    padding: 10px;
    padding-left: 20px;
    outline: 0;
    border: 0;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    font-size: 100%;
    &::placeholder {
      color: #ccc;
    }
  }
  button {
    display: block;
    width: 90%;
    margin: auto;
    margin-top: 3em;
    background: #B7B7B8;
    border: 1px solid #eee;
    padding: 10px;
    color: white;
    border-radius: 5px;
  }
`;

export default function SecurityCode (props) {
  return (
    <>
      <TopBarStyles>
        <div className="back-operation" onClick={() => props.history.push("/start/verify")}>
          <span className="icon">
            <AiOutlineLeft />
          </span>
          <span className="icon-text">back</span>
        </div>
        <div className="page-name"> Security Code </div>
      </TopBarStyles>
      <Styles>
        <p>Please enter the security code for Visa card •••• •••• •••• 4770</p>
        <input type="text" placeholder="Security Code" />
        <button onClick={() => props.history.push("/charging-sessions")}>Process Payment</button>
      </Styles>
    </>
  )
}
