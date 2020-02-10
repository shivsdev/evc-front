import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";

import TopBarStyles from "../styles/TopBarStyles";

const ProfileMobileNumberPageStyles = styled.form`
  margin-top: 5vh;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  .form-group {
    background: white;
    padding: 2vh 5vw;
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
  const { profileData, history, setProfileData } = props;  

  const [country, setCountry] = useState(`+${profileData.phoneCode} (United Kingdom)`);
  const [mobile, setMobile] = useState(profileData.mobile);
  // To prevent goback() func error when loaded directly to the url for first time.
  let pathname = props.location.pathname.split("/").splice(0, 4);
  let backUrl = pathname.join("/");

  function handleSubmit() {
    if(mobile && mobile.length > 10) {
      profileData.mobile = mobile;
    }
    setProfileData(profileData);
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
        <div className="page-name"> mobile number </div>
        <div className="page-action" onClick={handleSubmit}>
          done
        </div>
      </TopBarStyles>

      <ProfileMobileNumberPageStyles>
        <div className="form-group">
          <input
            type="text"
            name="country"
            disabled
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
