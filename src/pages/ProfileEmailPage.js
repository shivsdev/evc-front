import React, { useState } from "react";
import styled from 'styled-components';

const ProfileEmailPageStyles = styled.form`
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
  const PageTitle = "email";
  const [email, setEmail] = useState("p.smith@hotmail.com");

  if(PageTitle !== props.title) {
    props.setTitle(PageTitle);
  }
  props.setPassedHistory(props.history);
  return (
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
  );
}
