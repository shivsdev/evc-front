import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";

import TopBarStyles from "../styles/TopBarStyles";

const Styles = styled.form`
  margin-top: 5vh;
  > p {
    padding-left: 5vw;
    color: #555;
    text-transform: uppercase;
    font-size: 95%;
    margin-bottom: 5px;
  }
  .new-password {
    margin-top: 5vh;
  }
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
      width: 30%;
      text-transform: capitalize;
    }
    input {
      width: 70%;
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

export default function ProfileSetPassword(props) {
  const { history } = props;
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [verifyPwd, setVerifyPwd] = useState("");

  function handleSubmit() {
    console.log("password changed");
  }

  return (
    <>
      <TopBarStyles>
        <div
          className="back-operation"
          onClick={() => history.push("/account/create-account")}
        >
          <span className="icon">
            <AiOutlineLeft />
          </span>
          <span className="icon-text">back</span>
        </div>
        <div className="page-name"> change password </div>
        <div className="page-action" onClick={handleSubmit}>
          done
        </div>
      </TopBarStyles>
      <Styles>
        <p className="new-password">set password</p>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="new_pwd"
            onChange={e => setNewPwd(e.target.value)}
            value={newPwd}
            placeholder="enter password"
          />
        </div>
        <div className="form-group">
          <label>Verify</label>
          <input
            type="password"
            name="verify_pwd"
            onChange={e => setVerifyPwd(e.target.value)}
            value={verifyPwd}
            placeholder="re-enter password"
          />
        </div>
      </Styles>

      <p style={{color: "#676767", fontSize: "80%", padding: "10px"}}>Your password must be at least 6 characters long, include a number, an uppercase letter and a lowercase letter. </p>

    </>
  );
}
