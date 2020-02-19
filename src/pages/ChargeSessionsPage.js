import React, { useState } from "react";
import styled from "styled-components";
import { TiFlash } from "react-icons/ti";
import { FaCar } from "react-icons/fa";
import { AiOutlineDashboard, AiOutlineClockCircle, AiOutlineLeft } from "react-icons/ai";
import { MdChevronRight } from "react-icons/md";
import TopBarStyles from "../styles/TopBarStyles";

const themeColor = "#4B72B8";
const ChargeSessionsPageStyles = styled.div`
  .toggle-buttons {
    padding: 5%;
    button {
      display: inline-block;
      width: 50%;
      float: left;
      background: transparent;
      border: 1px solid ${themeColor};
      color: ${themeColor};
      font-size: 100%;
      padding: 6px;
      outline: 0;
      &.active {
        background: ${themeColor};
        color: white;
      }
    }
    .active-session {
      border-radius: 5px 0 0 5px;
    }
    .ended-session {
      border-radius: 0 5px 5px 0;
    }
  }
  .cs_card_holder {
    margin-top: 8vh;
    .cs_card {
      background: white;
      position: relative;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      div {
        padding: 0.5vh 5vw;
        font-size: 95%;
        .icon {
          background: ${themeColor};
          color: white;
          padding: 1px 3px;
          padding-top: 3px;          
          font-size: 120%;
          border-radius: 5px;
        }
        .content {
          margin-left: 5vw;
        }
      }
      .right-chevron {
        svg {
          position: absolute;
          right: 2vw;
          top: 50%;
          transform: translateY(-50%);
          color: #c9c8cc;
          font-size: 150%;
        }
      }
      :not(:first-child) {
        border-top: 0;
      }
    }
    &.ended {
      div {
        font-size: 90%;
      }
    }
  }
`;

export default function ChargeSessionsPage(props) {

  const { history } = props;
  const [toggle, setToggle] = useState("active-session");

  const isActiveFor = name => {
    if (name === toggle) {
      return name + " active";
    } else {
      return name;
    }
  };

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
        <div className="page-name"> Charging Sessions </div>
      </TopBarStyles>
      <ChargeSessionsPageStyles>
        <div className="toggle-buttons">
          <button
            onClick={() => setToggle("active-session")}
            className={isActiveFor("active-session")}
          >
            Active
          </button>
          <button
            onClick={() => setToggle("ended-session")}
            className={isActiveFor("ended-session")}
          >
            Ended
          </button>
        </div>

        {toggle === "active-session" ? (
          <div className="cs_card_holder">
            <div className="cs_card">
              <div className="location">
                <span className="icon">
                  <TiFlash />
                </span>
                <span className="content">
                  <strong>2614</strong> - Link road car park
                </span>
              </div>
              <div className="model">
                <span className="icon">
                  <FaCar />
                </span>
                <span className="content">
                  <strong>WP11 HVV</strong> Black Ford Focus
                </span>
              </div>
              <div className="voltage">
                <span className="icon">
                  <AiOutlineDashboard />
                </span>
                <span className="content">
                  <strong>2.95</strong> kwh(Charging)
                </span>
              </div>
              <div className="date-timing">
                <span className="icon">
                  <AiOutlineClockCircle />
                </span>
                <span className="content">
                  <strong>1.23.02</strong> remaining
                </span>
              </div>
              <div className="right-chevron">
                <MdChevronRight />
              </div>
            </div>
          </div>
        ) : (
          <div className="cs_card_holder ended">
            <div className="cs_card">
              <div className="location">
                <span className="icon">
                  <TiFlash />
                </span>
                <span className="content">
                  <strong>Charge Point A</strong> - Link road car park
                </span>
              </div>
              <div className="model">
                <span className="icon">
                  <FaCar />
                </span>
                <span className="content">
                  <strong>WP11 HVV</strong> White Audi A4
                </span>
              </div>
              <div className="voltage">
                <span className="icon">
                  <AiOutlineDashboard />
                </span>
                <span className="content">
                  <strong>2.95</strong> kwh(Charging)
                </span>
              </div>
              <div className="date-timing">
                <span className="icon">
                  <AiOutlineClockCircle />
                </span>
                <span className="content">
                  <strong>1.23.02</strong> remaining
                </span>
              </div>
              <div className="right-chevron">
                <MdChevronRight />
              </div>
            </div>
            <div className="cs_card">
              <div className="location">
                <span className="icon">
                  <TiFlash />
                </span>
                <span className="content">
                  <strong>Charge point B</strong> - Prestwood car park
                </span>
              </div>
              <div className="model">
                <span className="icon">
                  <FaCar />
                </span>
                <span className="content">
                  <strong>WP11 HVV</strong> Black Ford Focus
                </span>
              </div>
              <div className="voltage">
                <span className="icon">
                  <AiOutlineDashboard />
                </span>
                <span className="content">
                  <strong>6.42</strong> kwh
                </span>
              </div>
              <div className="date-timing">
                <span className="icon">
                  <AiOutlineClockCircle />
                </span>
                <span className="content">
                  <strong>19 September 2019</strong> 11:19 AM - 1:21 PM
                </span>
              </div>
              <div className="right-chevron">
                <MdChevronRight />
              </div>
            </div>
          </div>
        )}
      </ChargeSessionsPageStyles>
    </>
  );
}

// ChargeSessionsPage.propTypes = {
//
// }
