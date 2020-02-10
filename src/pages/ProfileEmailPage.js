import React, { useState } from "react";
import styled from 'styled-components';
import { AiOutlineLeft } from "react-icons/ai";
import TopBarStyles from "../styles/TopBarStyles";
import PropTypes from "prop-types";

const ProfileEmailPageStyles = styled.form`
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

export default function ProfileEmailPage(props) {
  const { profileData, history } = props;

  const [email, setEmail] = useState(profileData.email);

  // To prevent goback() func error when loaded directly to the url for first time.
  let pathname = props.location.pathname.split("/").splice(0, 4);
  let backUrl = pathname.join("/");

  function handleSubmit() {
    if(email) {
      profileData.email = email;
    }
    props.setProfileData(profileData);
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
        <div className="page-name"> email </div>
        <div className="page-action" onClick={handleSubmit}>
          done
        </div>
      </TopBarStyles>

      <ProfileEmailPageStyles>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your Email"
          />
        </div>
      </ProfileEmailPageStyles>
    </>
  );
}

ProfileEmailPage.propTypes = {
  profileData: PropTypes.object.isRequired
}
