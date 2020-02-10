import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import TopBarStyles from "../styles/TopBarStyles";

const ProfileAddressPageStyles = styled.form`
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

export default function ProfileAddressPage(props) {
  const { history, profileData, setProfileData } = props;
  const { address } = profileData;
  console.log(profileData);

  const [addressLineOne, setAddressLineOne] = useState(address.addressLineOne);
  const [addressLineTwo, setAddressLineTwo] = useState(address.addressLineTwo);
  const [city, setCity] = useState(address.city);
  const [country, setCountry] = useState(address.country);
  const [postcode, setPostcode] = useState(address.postcode);

  // To prevent goback() func error when loaded directly to the url for first time.
  let pathname = props.location.pathname.split("/").splice(0, 4);
  let backUrl = pathname.join("/");

  function handleSubmit() {
    address.addressLineOne = addressLineOne;
    address.addressLineTwo = addressLineTwo;
    address.city = city;
    address.country = country;
    address.postcode = postcode;
    setProfileData(profileData);
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
      <ProfileAddressPageStyles>
        <div className="form-group">
          <label>Address 1</label>
          <input
            type="text"
            name="address_line_one"
            onChange={e => setAddressLineOne(e.target.value)}
            value={addressLineOne}
            placeholder="Address line one"
          />
        </div>
        <div className="form-group">
          <label>Address 2</label>
          <input
            type="text"
            name="address_line_two"
            onChange={e => setAddressLineTwo(e.target.value)}
            value={addressLineTwo}
            placeholder="Address line two"
          />
        </div>
        <div className="form-group">
          <label>city</label>
          <input
            type="text"
            name="city"
            onChange={e => setCity(e.target.value)}
            value={city}
            placeholder="Select City"
          />
        </div>

        <div className="form-group">
          <label>country</label>
          <input
            type="text"
            name="country"
            onChange={e => setCountry(e.target.value)}
            value={country}
            placeholder="Select Country"
          />
        </div>

        <div className="form-group">
          <label>postcode</label>
          <input
            type="text"
            name="postcode"
            onChange={e => setPostcode(e.target.value)}
            value={postcode}
            placeholder="Select Country"
          />
        </div>
      </ProfileAddressPageStyles>
    </>
  );
}
