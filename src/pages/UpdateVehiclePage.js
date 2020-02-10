import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import TopBarStyles from "../styles/TopBarStyles";

const UpdateVehiclePageStyles = styled.div`
  margin-top: 5vh;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
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
`;

function UpdateVehiclePage(props) {
  const { history } = props;
  const [country, setCountry] = useState("united kingdom");
  const [registration, setRegistration] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    console.log("vehicle updated");
  }

  // To prevent goback() func error when loaded directly to the url for first time.
  let pathname = props.location.pathname.split("/").splice(0, 3);
  let backUrl = pathname.join("/");

  return (
    <>
      <TopBarStyles>
        <div
          className="back-operation"
          onClick={() => history.push(backUrl)}
        >
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
        onClick={() => window.confirm("remove vehicle")}
      >
        Remove
      </button>
    </>
  );
}

export default UpdateVehiclePage;
