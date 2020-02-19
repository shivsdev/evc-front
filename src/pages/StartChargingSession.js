import React from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import TopBarStyles from "../styles/TopBarStyles";
import { Link } from "react-router-dom";
import { TiFlash } from "react-icons/ti";
import { GoInfo, GoCreditCard } from "react-icons/go";
import { FaCar } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Styles = styled.div`
  padding: 3vh 0;
  .location,
  .vehicle,
  .payment-method {
    h4 {
      margin-top: 6vh;
      color: #888;
      font-weight: normal;
      text-transform: uppercase;
      font-size: 90%;
      padding: 0 5vw;
      a {
        float: right;
        text-transform: capitalize;
        color: #0573ff;
      }
    }
    > div {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      margin: 1vh 0;
      background: white;
      padding: 1vh 0;
      display: grid;
      grid-template-columns: 2fr 8fr 2fr;
      > span {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #999;

        span {
          padding: 0px 3px;
          padding-top: 3px;
          background: #4a71b5;
          color: white;
          border-radius: 3px;
        }
        > svg {
          font-size: 130%;
        }
      }
      .content {
        > p {
          font-size: 80%;
          :last-child {
            color: #999;
            margin-top: 0.5vh;
            font-size: 70%;
          }
        }
      }
    }
  }
  .location {
    h4 {
      margin-top: 2vh;
    }
  }
  > p {
    padding: 0 5vw;
    padding-top: 5vh;
    font-size: 80%;
    color: #777;
    text-align: center;
  }
`;

const SelectPicker = styled.div`
  display: block;
  margin-top: 10px;
  ul {
    width: 100%;
    li {
      width: 100%;
      text-align: center;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      padding: 10px;
    }
  }
`;

export default function StartChargingSession(props) {
  const { history } = props;

  return (
    <>
      <TopBarStyles>
        <div className="back-operation" onClick={() => history.push("/")}>
          <span className="icon">
            <AiOutlineLeft />
          </span>
          <span className="icon-text">back</span>
        </div>
        <div className="page-name"> Start Charging Session </div>
      </TopBarStyles>

      <Styles>
        <div className="location">
          <h4>Location</h4>
          <div>
            <span className="charge-icon">
              <span>
                <TiFlash />
              </span>
            </span>
            <div
              className="content"
              onClick={() => history.push("/selected?do=show")}
            >
              <p>
                <strong>Charge Point A</strong> - Link Road Car Park
              </p>
              <p>Link Road, Great Missenden, HP16 9AE</p>
            </div>
            <span className="info-icon">
              <GoInfo onClick={() => console.log("vehicle info")} />
            </span>
          </div>
        </div>

        <div className="vehicle">
          <h4>
            vehicle <Link to="/account/vehicles/add">Add Vehicle </Link>
          </h4>
          <div>
            <span className="vehicle-icon">
              <span>
                <FaCar />
              </span>
            </span>
            <div className="content">
              <p>
                <strong>WP11 HVV</strong>
              </p>
              <p>Black Ford Focus</p>
            </div>
            <span className="info-icon">
              <FiChevronDown />
            </span>
          </div>
        </div>
        <div className="payment-method">
          <h4>
            Payment Method{" "}
            <Link to="/account/payment-methods/add">Add payment Card</Link>
          </h4>
          <div>
            <span className="payment-icon">
              <span>
                <GoCreditCard />
              </span>
            </span>
            <div className="content">
              <p>Charge Point A - Link Road Car Park</p>
              <p>Link Road, Great Missenden, HP16 9AE</p>
            </div>
            <span className="info-icon">
              <FiChevronDown />
            </span>
          </div>
        </div>
        <p>
          Please connect your vehicle to the charge point before attempting to
          start the charging session.
        </p>

        <button
          onClick={() => history.push("/start/verify")}
          style={{
            background: "#4a71b5",
            display: "block",
            width: "90%",
            margin: "auto",
            border: 0,
            color: "white",
            padding: "8px",
            borderRadius: "5px",
            marginTop: "3em",
            outline: 0
          }}
        >
          Next
        </button>

        <SelectPicker style={{ display: "none" }}>
          <div className="select-picker">
            <button>Cancel</button>
            <button>Done</button>
          </div>
          <ul>
            <li>option first</li>
            <li>Option Two</li>
            <li>Option Three</li>
          </ul>
        </SelectPicker>
      </Styles>
    </>
  );
}
