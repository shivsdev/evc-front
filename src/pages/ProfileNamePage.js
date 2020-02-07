import React, { useState } from "react";
import styled from 'styled-components';

const ProfileNamePageStyles = styled.form`
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
  const PageTitle = "name";
  const [first, setFirst] = useState("Paul");
  const [last, setLast] = useState("Smith");

  if(PageTitle !== props.title) {
    props.setTitle(PageTitle);
  }
  props.setPassedHistory(props.history);

  return (
    <ProfileNamePageStyles>
      <div className="form-group">
        <label>First</label>
        <input
          type="text"
          name="first"
          onChange={(e) => setFirst(e.target.value)}
          value={first}
          placeholder="First Name"
        />
      </div>
      <div className="form-group">
        <label>Last</label>
        <input
          type="text"
          name="last"
          onChange={(e) => setLast(e.target.value)}
          value={last}
          placeholder="Last Name"
        />
      </div>
    </ProfileNamePageStyles>
  );
}
