import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import PropTypes from "prop-types";

import TopBarStyles from "../styles/TopBarStyles";
import VehicleList from "../components/VehicleList";

const VehiclesPageStyles = styled.div`
  background: #f0f1f5;
  width: 100%;
  height: 100vh;
  .vehicle-list {
    margin-top: 8vh;
    border-bottom: 1px solid #ebebec;
    border-top: 1px solid #ebebec;
    li {
      padding-left: 5vw;
      background: white;
      a {
        display: block;
        padding: 10px;
        border-bottom: 1px solid #ebebec;
        color: black;
        span {
          color: #c9c9c9;
          float: right;
        }
      }
      :last-child {
        a {
          border-bottom: 0;
        }
      }
    }
  }
`;

function VehiclesPage(props) {
  const { match, history, vehiclesData } = props;
  const [vehicles] = useState(vehiclesData);

  return (
    <>
      <TopBarStyles>
        <div
          className="back-operation"
          onClick={() => history.push("/account")}
        >
          <span className="icon">
            <AiOutlineLeft />
          </span>
          <span className="icon-text">account</span>
        </div>

        <div className="page-name"> vehicles </div>
        <div
          className="page-action"
          onClick={() => history.push(`${match.url}/add`)}
        >
          <IoIosAdd />
        </div>
      </TopBarStyles>

      <VehiclesPageStyles>
        <ul className="vehicle-list">
          {vehicles.map(vehicle => {
            return (
              <VehicleList
                key={vehicle.id}
                id={vehicle.id}
                url={match.url}
                registration={vehicle.registration}
                description={vehicle.description}
              />
            );
          })}
        </ul>
      </VehiclesPageStyles>
    </>
  );
}

VehiclesPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  vehiclesData: PropTypes.array.isRequired,
  setVehiclesData: PropTypes.func.isRequired
};

export default VehiclesPage;
