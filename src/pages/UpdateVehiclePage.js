import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";

import TopBarStyles from "../styles/TopBarStyles";
import RemoveConfirmation from "../components/RemoveConfirmation";

const UpdateVehiclePageStyles = styled.div`
  margin-top: 5vh;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  position: relative;

  .form-group {
    background: white;
    padding: 2vh 5vw;
    font-size: 100%;
    overflow: auto;
    position: relative;

    label,
    input {
      display: inline-block;
      float: left;
    }
    label {
      width: 50%;
    }
    input {
      width: 50%;
      border: 0;
      outline: 0;
      font-size: 100%;
    }
    &:after {
      content: "";
      position: absolute;
      width: 90%;
      height: 1px;
      right: 0;
      bottom: 0;
      background: #e2e2e2;
    }
    &:last-child:after {
      display: none;
    }
  }

  .confirmation-modal-container {
    background: rgba(0, 0, 0, 0.9);
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .confirmation-modal {
      position: relative;
      background: #fff;
      width: 80%;
      padding: 3vh 5vw;
      border-radius: 10px;
      text-align: center;
      padding-bottom: 8vh;
      > div {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-top: 1px solid #ddd;
        button {
          outline: 0;
          border: 0;
          background: transparent;
          width: 50%;
          display: inline-block;
          float: left;
          padding: 10px;
          color: #4b72b8;
          &:last-child {
            color: #ec4c3c;
            border-left: 1px solid #ddd;
          }
        }
      }
    }
  }
`;

function UpdateVehiclePage(props) {
  const { history, match, vehiclesData, setVehiclesData } = props;
  const [country, setCountry] = useState("");
  const [registration, setRegistration] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [hold] = useState(0);
  let id = parseInt(match.params.id);

  useEffect(() => {
    let idExist = false;
    let clonedVehiclesData = JSON.parse(JSON.stringify(vehiclesData));

    clonedVehiclesData.map(v => {
      if (v.id === id) {
        setCountry(v.country);
        setRegistration(v.registration);
        setDescription(v.description);
        setModalText(`${v.registration} will be removed from your account and not be
      available for use in parking sessions.`);
        idExist = true;
      }
      return true;
    });

    if (!idExist) {
      history.push("/account/vehicles");
    }
  }, [history, hold, id, vehiclesData]);

  function handleRemove() {
    let vehicles = vehiclesData.filter(vehicle => vehicle.id !== id);
    setVehiclesData(vehicles);
  }

  function handleSubmit() {
    let clonedVehiclesData = JSON.parse(JSON.stringify(vehiclesData));
    clonedVehiclesData.map(vehicle => {
      if (vehicle.id === id) {
        vehicle.id = id;
        vehicle.country = country;
        vehicle.registration = registration;
        vehicle.description = description;
      }
      return true;
    });
    setVehiclesData(clonedVehiclesData);
    history.push("/account/vehicles");
  }

  // To prevent goback() func error when loaded directly to the url for first time.
  let pathname = props.location.pathname.split("/").splice(0, 3);
  let backUrl = pathname.join("/");

  return (
    <>
      <TopBarStyles>
        <div className="back-operation" onClick={() => history.push(backUrl)}>
          <span className="icon">
            <AiOutlineLeft />
          </span>
          <span className="icon-text">vehicles</span>
        </div>

        <div className="page-name"> vehicles </div>
        <div className="page-action" onClick={handleSubmit}>
          Done
        </div>
      </TopBarStyles>

      <UpdateVehiclePageStyles>
        {showModal ? (
          <RemoveConfirmation
            modalText={modalText}
            modalFor="Vehicle"
            setShowModal={setShowModal}
            handleRemove={handleRemove}
          />
        ) : null}

        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            onChange={e => setCountry(e.target.value)}
            value={country}
            placeholder="Select Country"
          />
        </div>
        <div className="form-group">
          <label>Registration</label>
          <input
            type="text"
            name="registration"
            onChange={e => setRegistration(e.target.value)}
            value={registration}
            placeholder="Enter vehicle no."
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="last"
            onChange={e => setDescription(e.target.value)}
            value={description}
            placeholder="Enter description"
          />
        </div>
      </UpdateVehiclePageStyles>
      <button
        style={{
          marginTop: "5vh",
          display: "block",
          border: 0,
          background: "white",
          textAlign: "center",
          padding: "10px 0",
          color: "#ee2a31",
          borderBottom: "1px solid #ddd",
          borderTop: "1px solid #ddd",
          width: "100%",
          outline: 0
        }}
        onClick={() => setShowModal(true)}
      >
        Remove
      </button>
    </>
  );
}

export default UpdateVehiclePage;
