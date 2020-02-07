import React, { useState } from "react";
import styled from "styled-components";

const ProfileMobileNumberPageStyles = styled.form`
  margin-top: 5vh;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  .form-group {
    background: white;
    padding: 2.5vh 5vw;
    font-size: 100%;
    overflow: auto;
    position: relative;
    input {
      display: block;
      border: 0;
      outline: 0;
      font-size: 100%;
      width: 100%;
    }
    &:not(:last-child) {
      border-bottom: 1px solid #e5e5e5;
    }
  }
`;

export default function ProfileMobileNumberPage(props) {
  const PageTitle = "mobile number";
  const [country, setCountry] = useState("+44 (United Kingdom)");
  const [mobile, setMobile] = useState("5947372637");

  if (PageTitle !== props.title) {
    props.setTitle(PageTitle);
  }
  props.setPassedHistory(props.history);

  return (
    <>
      <ProfileMobileNumberPageStyles>
        <div className="form-group">
          <input
            type="text"
            name="country"
            onChange={e => setCountry(e.target.value)}
            value={country}
            placeholder="Select your country"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="mobile"
            onChange={e => setMobile(e.target.value)}
            value={mobile}
            placeholder="Enter your mobile number"
          />
        </div>
      </ProfileMobileNumberPageStyles>
      <p style={{color: "#676767", fontSize: "80%", padding: "10px"}}> A verification code will be sent to this number. </p>
    </>
  );
}
