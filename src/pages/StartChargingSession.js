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
    margin-top: 0.4vh;
    h4 {
      color: #888;
      font-weight: normal;
      text-transform: uppercase;
      font-size: 95%;
      padding: 0 5vw;
      a {
        float: right;
        text-transform: capitalize;
      }
    }
    > div {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      margin: 2vh 0;
      background: white;
      padding: 2vh 5vw;
      display: grid;
      grid-template-columns: 1fr 8fr 1fr;
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
        }
      }
    }
  }
  > p {
    padding: 0 8vw;
    padding-top: 5vh;
    font-size: 15px;
    color: #999;
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
            <div className="content">
              <p onClick={ () => console.log('move to location')}><strong>Charge Point A</strong> - Link Road Car Park</p>
              <p onClick={ () => console.log('move to location')}>Link Road, Great Missenden, HP16 9AE</p>
            </div>
            <span className="info-icon">
              <GoInfo onClick={() => console.log('vehicle info')} />
            </span>
          </div>
        </div>

        <div className="vehicle">
          <h4>
            vehicle <Link to="/">Add Vehicle </Link>
          </h4>
          <div>
            <span className="vehicle-icon">
              <span>
                <FaCar />
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
        <div className="payment-method">
          <h4>
            Payment Method <Link to="/payment-card">Add payment Card</Link>
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
      </Styles>
    </>
  );
}
