import React from "react";
import styled from "styled-components";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegHandPointRight } from "react-icons/fa";

const Styles = styled.div`
  display: flex;
  padding: 2em;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #fff;
  h1 {
    font-size: 180%;
    color: #4b72b8;
    text-align: center;
    text-shadow: 0.6px 0.5px #333;
  }
  .buttons-holder {
    margin-top: 20%;
    width: 100%;
    button {
      display: flex;
      width: 100%;
      padding: 1.5vh;
      background: #4b72b8;
      color: white;
      border: 1px solid rgba(41, 67, 113, 1);
      border-radius: 20px;
      outline: 0;
      align-items: center;
      font-size: 100%;
      justify-content: center;
      text-transform: capitalize;
      :first-child {
        margin-bottom: 1em;
      }
      :focus {
        border-color: #4b72b8;
        background: rgba(41, 67, 113, 1);
        transition: all 0.2s ease-in-out;
      }
      .spinner {
        margin-left: 10px;
      }
    }
    a {
      margin-top: 2em;
      display: inline-block;
      text-align: center;
      color: black;
      font-size: 90%;
      color: #454545;
      border: 1px solid #999;
      padding: 8px;
      border-radius: 20px;
      .icon {
        display: inline-block;
        min-width: 15%;
        svg {
          color: indianred;
          margin-right: .5em;
        }
      }
      .content {
        /* border-bottom: 1pxs solid #999; */
      }
    }  
  }
`;

export default function LandingPage(props) {
  const { history } = props;
  return (
    <Styles>
      <h1>Electric Vehicle Charging app</h1>
      <div className="buttons-holder">
        <button onClick={() => history.push("/login")}>
          Login to account
          <span style={{ display: "none" }} className="spinner">
            <FaSpinner />
          </span>
        </button>
        <button onClick={() => history.push("/register")}>
          Create new account
        </button>
        <Link to="/charge-points">
          <span className="icon">
            <FaRegHandPointRight />
          </span>
          <span className="content">Skip now</span>
        </Link>
      </div>
    </Styles>
  );
}
