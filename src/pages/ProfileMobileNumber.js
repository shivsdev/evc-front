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

export default function ProfileMobileNumber(props) {
  const { profileData, history, setProfileData } = props;
  const [phoneCode, setPhoneCode] = useState(44);
  const [country, setCountry] = useState(`+${phoneCode} (United Kingdom)`);
  const [mobile, setMobile] = useState();
  const [hold] = useState(0);

  useEffect(() => {
    let id = parseInt(props.match.params.id);
    if (id) {
      let clonedData = JSON.parse(JSON.stringify(profileData));
      clonedData.map(profile => {
        if (profile.id === id) {
          setPhoneCode(profile.phoneCode);
          setMobile(profile.mobile);
        }
        return true;
      });
    }
  }, [hold, profileData, props]);

  let splitedPath = props.location.pathname.split("/");
  let pathname = splitedPath.splice(0, splitedPath.length - 1);
  let backUrl = pathname.join("/");

  function handleSubmit() {
    if (mobile ) {
      let id = parseInt(props.match.params.id);
      if(id) {
        let clonedData = JSON.parse(JSON.stringify(profileData));
        clonedData.map(profile => {
          if (profile.id === id) {
            profile.mobile = mobile;
          }
          return true;
        });
        setProfileData(clonedData);
      } else {
        props.setNewProfileData(prev => ({...prev, mobile, phoneCode}))
      }
      history.push(backUrl);
    } else {
      alert("Enter your Mobile number");
      return false;
    }
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

      <Styles>
        <div className="form-group">
          <input
            type="text"
            name="country"
            disabled
            onChange={e => setCountry(e.target.value)}
            value={country || ""}
            placeholder="Select your country"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="mobile"
            onChange={e => setMobile(parseInt(e.target.value))}
            value={mobile || ""}
            placeholder="Enter your mobile number"
          />
        </div>
      </Styles>
      <p style={{ color: "#676767", fontSize: "80%", padding: "10px" }}>
        {" "}
        A verification code will be sent to this number.{" "}
      </p>
    </>
  );
}
