import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import TopBarStyles from "../styles/TopBarStyles";
import PropTypes from "prop-types";

const ProfileNamePageStyles = styled.form`
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

export default function ProfileNamePage(props) {

  const { profileData, history } = props;

  const [first, setFirst] = useState(profileData.firstName);
  const [last, setLast] = useState(profileData.lastName);

  // To prevent goback() func error when loaded directly to the url for first time.
  let pathname = props.location.pathname.split("/").splice(0, 4);
  let backUrl = pathname.join("/");

  function handleSubmit() {
    profileData.firstName = first;
    profileData.lastName = last;
    props.setProfileData(profileData);
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
        <div className="page-name"> name </div>
        <div className="page-action" onClick={handleSubmit}>
          done
        </div>
      </TopBarStyles>

      <ProfileNamePageStyles>
        <div className="form-group">
          <label>First</label>
          <input
            type="text"
            name="first"
            onChange={e => setFirst(e.target.value)}
            value={first || ""}
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <label>Last</label>
          <input
            type="text"
            name="last"
            onChange={e => setLast(e.target.value)}
            value={last || ""}
            placeholder="Last Name"
          />
        </div>
      </ProfileNamePageStyles>
    </>
  );
}

ProfileNamePage.propTypes = {
  profileData: PropTypes.object.isRequired,
  setProfileData: PropTypes.func.isRequired
};
