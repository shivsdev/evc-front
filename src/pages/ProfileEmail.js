import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { AiOutlineLeft } from "react-icons/ai";
import PropTypes from "prop-types";

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
    }
    label {
      width: 30%;
    }
    input {
      border: 0;
      outline: 0;
      font-size: 100%;
    }
  }
`;

export default function ProfileEmail(props) {
  const { profileData, history } = props;

  const [email, setEmail] = useState(profileData.email);
  const [hold] = useState(0);

  useEffect(() => {
    let id = parseInt(props.match.params.id);
    if(id) {
      profileData.map(profile => {
        if(profile.id === id) {
          setEmail(profile.email);
        }
        return true;
      });
    }
  }, [hold, profileData, props])

  let splitedPath = props.location.pathname.split("/");
  let pathname = splitedPath.splice(0, splitedPath.length - 1);
  let backUrl = pathname.join("/");

  function handleSubmit() {
    if(!email) {
      alert("Enter email to proceed");
      return true;
    }
    let id = parseInt(props.match.params.id);

    if(id) {
      let clonedData = JSON.parse(JSON.stringify(props.profileData));
      clonedData.map(profile => {
        if(profile.id === id) {
          profile.email = email;
        }
        return true;
      });
      props.setProfileData(clonedData);
    } else {
      props.setNewProfileData(prev => ({...prev, email}))
    }
    history.push(backUrl);
  }

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
          <span className="icon-text">back</span>
        </div>
        <div className="page-name"> email </div>
        <div className="page-action" onClick={handleSubmit}>
          done
        </div>
      </TopBarStyles>

      <Styles>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email || ""}
            placeholder="Enter your Email"
          />
        </div>
      </Styles>
    </>
  );
}

ProfileEmail.propTypes = {
  profileData: PropTypes.array.isRequired
}
