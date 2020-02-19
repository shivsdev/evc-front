import React from "react";
import styled from "styled-components";
import ChargePointImage from "../assets/charge-point.png";
import { AiFillCloseCircle } from "react-icons/ai";
// import { ChargeIcon } from "../assets/charge-point.svg";
import ChevronDown from "../assets/arrow-down.svg";
// import ChevronUp from "../assets/arrow-up.svg";

const Styles = styled.div`
  position: fixed;
  bottom: 52px;
  background: white;
  width: 100%;
  border-radius: 20px 20px 0 0;
  padding: 3% 5%;
  border-top: 1px solid #ddd;
  z-index: 2;
  .cpoint-location {
    margin-top: 1.5vh;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
    p {
      color: #ccc;
      padding-top: 0.3em;
      font-size: 95%;
    }
  }
  .cpoint-info {
    padding-top: 3vh;
    padding-bottom: 3vh;
    overflow: auto;
    border-bottom: 1px solid #ccc;
    .details,
    .picture {
      display: inline-block;
      float: left;
    }
    .details {
      width: 70%;
    }
    .picture {
      width: 30%;
    }
  }
  .cpoint-sockets {
    button {
      display: block;
      width: 100%;
      padding: 7px 10px;
      margin: 2vh 0;
      border: 1px solid #ccc;
      border-radius: 5px;
      color: #fff;
      font-size: 100%;
      cursor: not-allowed;
      outline: 0;
      &.active {
        background: #4872b8;
      }
    }
  }
  > span {
    display: block;
    text-align: center;
    position: relative;
    img {
      cursor: pointer;
      max-height: 15px;
    }
    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      font-size: 130%;
      color: #c7c7c7;
    }
  }
`;

export default function ExpandedDetails(props) {

  function handleSlide() {
    let path  = props.location.pathname;
    props.history.push({
      pathname: path,
      search: '?do=show'
    });
  }

  return (
    <Styles>
      <span>
        <img
          src={ChevronDown}
          style={{ width: "20%" }}
          alt="Chevron down icon"
          onClick={() => handleSlide()}
        />
      <AiFillCloseCircle onClick={() => props.history.push('/')} />
      </span>
      <div className="cpoint-location">
        <h3>Link Road Car Park</h3>
        <p>Link Road, Great Missenden, HP16 9AE</p>
      </div>
      <div className="cpoint-info">
        <div className="details">
          <p style={{ fontSize: "105%" }}>
            <strong>4 x type 2 sockets</strong>
          </p>
          <p
            style={{
              fontSize: "105%",
              color: "green",
              marginBottom: ".5em",
              paddingTop: ".2em"
            }}
          >
            <strong>2 Available</strong>
          </p>
          <p>7 kwh max charge</p>
          <p>£0.45 per kWh</p>
        </div>
        <div className="picture">
          <img src={ChargePointImage} alt="CHarge point location" />
        </div>
      </div>
      <div className="cpoint-sockets">
        <button onClick={() => props.history.push("/start")} className="active">Select charge point A</button>
        <button>Select charge point B</button>
        <button>Select charge point C</button>
        <button onClick={() => props.history.push("/start")} className="active">Select charge point D</button>
      </div>
    </Styles>
  );
}
