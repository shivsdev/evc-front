import React, { useState } from "react";
import styled from "styled-components";

const ProfileAddressPageStyles = styled.form`
  margin-top: 5vh;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  .form-group {
    background: white;
    padding: 2.5vh 5vw;
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
  const PageTitle = "address";
  const [addressLineOne, setAddressLineOne] = useState("29 Acacia Road");
  const [addressLineTwo, setAddressLineTwo] = useState("");
  const [city, setCity] = useState("London");
  const [country, setCountry] = useState("United Kingdom");
  const [postcode, setPostcode] = useState("RG12 6NQ");

  if (PageTitle !== props.title) {
    props.setTitle(PageTitle);
  }
  props.setPassedHistory(props.history);

  return (
    <>
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
