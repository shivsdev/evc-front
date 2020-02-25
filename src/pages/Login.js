import React, { useState } from "react";
import styled from "styled-components";
import { TiInfoOutline } from "react-icons/ti";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Styles = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background: linear-gradient(135deg, #fff 76%, #9ec0ff );
  h3 {
    font-size: 140%;
    color: #4b72b8;
    text-align: center;
    text-shadow: 0.6px 0.5px #333;
    margin: -5em 2em 3em 2em;
  }
  form {
    width: 75%;
    > div {
      margin-bottom: 1em;
      label {
        display: block;
        margin-bottom: .5em;
        color: #4b72b8;
        color: #999;
      }
      input {
        display: block;
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #999;
        outline: 0;
        ::placeholder {
          text-transform: capitalize;
          color: #ccc;
        }
        :focus {
          box-shadow: 0 0 5px rgba(75, 114, 184, .6);
          border: 1px solid rgba(75, 114, 184, .9);
        }
      }

      .error {
        border-color: indianred;
      }

      .error_text {
        color: indianred;
        font-size: 90%;

      }

      .text_muted {
        display: flex;        
        color: #999;
        font-size: 90%;
        margin: .5em 0;
        .icon {
          color: #c56e1be8;
          margin-right: .4em;
        }
        .content {
        }
      }
    }

    .button_holder {
      button {
        display: block;
        width: 100%;
        padding: 8px;
        border-radius: 5px;
        background: #4b72b8;
        border: 1px solid #4b72b8;
        color: #fff;
        font-size: 100%:
      }
      a {
        display: flex;
        align-items: center;
        font-size: 90%;
        margin-top: 1em;
        color: #4b72b8;
        svg {
          font-size: 170%;
        }
      }
    }
  }
`;

export default function Login(props) {
  const [mobile, setMobile] = useState("");

  const handleMobile = e => {
    let value = e.target.value;
    let length = e.target.value.length;
    let lastCharacter = value[value.length - 1];
    if (length) {
      if (isNaN(parseInt(lastCharacter))) {
        e.target.value = value.slice(0, -1);
        return;
      }
      setMobile(value);
    } else {
      setMobile("");
    }
  };

  return (
    <Styles>
      <h3>Electrical Vehicle Charging App</h3>
      <form action="">
        <div className="phone_group">
          <label htmlFor="number">Enter your phone no.</label>
          <input
            type="text"
            id="number"
            className=""
            maxLength="10"
            autoComplete="off"
            value={mobile}
            onChange={handleMobile}
            placeholder="phone no"
          />
          <span className="error_text" style={{ display: "none" }}>
            Enter 10 digit Phone Number.
          </span>
          <span className="text_muted">
            <span className="icon" title="Make sure Phone no is Correct">
              <TiInfoOutline />
            </span>
            <span className="content">
              You will receive OTP soon.
            </span>
          </span>
        </div>
        {mobile}
        <div className="otp_group" style={{ display: "none" }}>
          <label htmlFor="otp">OTP</label>
          <input type="number" id="otp" placeholder="_ _ _ _ _ _" />
        </div>

        <div className="button_holder">
          <button> Continue </button>
          <Link to={"/"}><IoIosArrowRoundBack /> Go back </Link>
        </div>
      </form>
    </Styles>
  );
}
