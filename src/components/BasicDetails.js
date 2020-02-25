import React from "react";
import ChargePointImage from "../assets/charge-point.png";
import { AiFillCloseCircle } from "react-icons/ai";
import ChevronUp from "../assets/arrow-up.svg";
import Styles from "../styles/BasicDetails";

export default function BasicDetails(props) {

  function handleSlide() {
    let path  = props.location.pathname;
    props.history.push({
      pathname: path,
      search: '?do=expand'
    });
  }

  return (
    <Styles>
      <span>
        <img
          src={ChevronUp}
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
    </Styles>
  );
}
