import React, { useState, useEffect } from "react";
import styled from "styled-components";
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

export default function ProfileName(props) {
  const { history } = props;

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  let id = parseInt(props.match.params.id);
  const [hold] = useState(0);

  useEffect(() => {
    let id = parseInt(props.match.params.id);
    if (id) {
      let profileData = props.profileData.filter(profile => profile.id === id);
      setFirstName(profileData[0].firstName);
      setLastName(profileData[0].lastName);
    } else {
      setFirstName(props.newProfileData.firstName);
      setLastName(props.newProfileData.lastName);
    }
  }, [hold, props]);

  let splitedPath = props.location.pathname.split("/");
  let pathname = splitedPath.splice(0, splitedPath.length - 1);
  let backUrl = pathname.join("/");

  function handleSubmit() {
    if(!firstName) {
      alert("First name required");
      return;
    }
    if(id) {
      let clonedData = JSON.parse(JSON.stringify(props.profileData));
      clonedData.map(profile => {
        if (profile.id === id) {
          profile.firstName = firstName;
          profile.lastName = lastName;
        }
        return true;
      });
      props.setProfileData(clonedData);
    } else {
      props.setNewProfileData(prev => ({...prev, firstName, lastName }))
    }
    history.push(backUrl);
  }

  return (
    <>
      <TopBarStyles>
        <div className="back-operation" onClick={() => history.push(backUrl)}>
          <span className="icon">
            <AiOutlineLeft />
          </span>
          <span className="icon-text">back</span>
        </div>
        <div className="page-name"> name </div>
        <div className="page-action" onClick={handleSubmit}>
          done
        </div>
      </TopBarStyles>

      <Styles>
        <div className="form-group">
          <label>First</label>
          <input
            type="text"
            name="first"
            onChange={e => setFirstName(e.target.value)}
            value={firstName || ""}
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <label>Last</label>
          <input
            type="text"
            name="last"
            onChange={e => setLastName(e.target.value)}
            value={lastName || ""}
            placeholder="Last Name"
          />
        </div>
      </Styles>
    </>
  );
}

ProfileName.propTypes = {
  profileData: PropTypes.array.isRequired,
  setProfileData: PropTypes.func.isRequired
};
