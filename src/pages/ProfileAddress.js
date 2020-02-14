import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import TopBarStyles from "../styles/TopBarStyles";

const Styles = styled.form`
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
      width: 40%;
      text-transform: capitalize;
    }
    input {
      width: 60%;
      display: block;
      border: 0;
      outline: 0;
      font-size: 100%;
    }
    &:not(:last-child) {
      border-bottom: 1px solid #e5e5e5;
    }
  }
`;

export default function ProfileAddress(props) {
  const { history, profileData, setProfileData } = props;
  const [addressLineOne, setAddressLineOne] = useState("");
  const [addressLineTwo, setAddressLineTwo] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postCode, setpostCode] = useState("");
  const [hold] = useState(0);

  let splitedPath = props.location.pathname.split("/");
  let pathname = splitedPath.splice(0, splitedPath.length - 1);
  let backUrl = pathname.join("/");

  useEffect(() => {
    let id = parseInt(props.match.params.id);
    profileData.map(profile => {
      if(profile.id === id) {
         setAddressLineOne(profile.address.addressLineOne);
         setAddressLineTwo(profile.address.addressLineTwo);
         setCity(profile.address.city);
         setCountry(profile.address.country);
         setpostCode(profile.address.postCode);
      }
      return true;
    })
  }, [hold, profileData, props]);

  function handleSubmit() {
    if(!addressLineOne || !postCode) {
      alert("Address 1 and PostCode is mandatory")
      return;
    }
    let id = parseInt(props.match.params.id);
    if(id) {
      let clonedData = JSON.parse(JSON.stringify(profileData));
      clonedData.map(profile => {
        if(profile.id === id) {
          profile.address.addressLineOne = addressLineOne;
          profile.address.addressLineTwo = addressLineTwo;
          profile.address.city = city;
          profile.address.country = country;
          profile.address.postCode = postCode;
        }
        return true;
      });
      setProfileData(clonedData);
    } else {
      let address = {};
      address.addressLineOne = addressLineOne;
      address.addressLineTwo = addressLineTwo;
      address.city = city;
      address.country = country;
      address.postCode = postCode;
      props.setNewProfileData(prev => ({ ...prev, address }));
    }
    history.push(backUrl);
  }

  return (
    <>
      <TopBarStyles>
        <div
          className="back-operation"
          onClick={() => history.push(history.push(backUrl))}
        >
          <span className="icon">
            <AiOutlineLeft />
          </span>
          <span className="icon-text">back</span>
        </div>
        <div className="page-name"> address </div>
        <div className="page-action" onClick={handleSubmit}>
          done
        </div>
      </TopBarStyles>
      <Styles>
        <div className="form-group">
          <label>Address 1</label>
          <input
            type="text"
            name="address_line_one"
            onChange={e => setAddressLineOne(e.target.value)}
            value={addressLineOne || ""}
            placeholder="Address line one"
          />
        </div>
        <div className="form-group">
          <label>Address 2</label>
          <input
            type="text"
            name="address_line_two"
            onChange={e => setAddressLineTwo(e.target.value)}
            value={addressLineTwo || ""}
            placeholder="Address line two"
          />
        </div>
        <div className="form-group">
          <label>city</label>
          <input
            type="text"
            name="city"
            onChange={e => setCity(e.target.value)}
            value={city || ""}
            placeholder="Select City"
          />
        </div>

        <div className="form-group">
          <label>country</label>
          <input
            type="text"
            name="country"
            onChange={e => setCountry(e.target.value)}
            value={country || ""}
            placeholder="Select Country"
          />
        </div>

        <div className="form-group">
          <label>postCode</label>
          <input
            type="text"
            name="postCode"
            onChange={e => setpostCode(e.target.value)}
            value={postCode || ""}
            placeholder="Select Country"
          />
        </div>
      </Styles>
    </>
  );
}
