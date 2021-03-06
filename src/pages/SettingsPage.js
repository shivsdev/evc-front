import React from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import { MdChevronRight} from "react-icons/md";
import TopBarStyles from "../styles/TopBarStyles";

const SettingsPageStyles = styled.div`
  background: #f0f1f5;
  width: 100%;
  height: 100vh;
  p {
    padding-left: 5vw;
    color: #565656;
    font-size: 90%;
    margin-bottom: 8px;
    margin-top: 4vh;
  }
  .notification-list {
    li {
      display: block;
      padding-left: 5vw;
      background: white;
      > a {
        color: black;
      }
      &:first-child {
        border-top: 1px solid #ddd;;
      }
      &:last-child {
        border-bottom: 1px solid #ddd;
      }
      .content {
        display: block;
        padding: 10px;
        border-bottom: 1px solid #ebebec;
      }
    }
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
    float: right
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2.3px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #7FC66F;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #7FC66F;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

function SettingsPage(props) {
  const { history } = props;

  return (
    <>
      <TopBarStyles>
        <div
          className="back-operation"
          onClick={() => history.push("/account")}
        >
          <span className="icon">
            <AiOutlineLeft />
          </span>
          <span className="icon-text">back</span>
        </div>

        <div className="page-name"> Settings </div>

      </TopBarStyles>
      <SettingsPageStyles>
        <p>Language</p>
        <ul className="notification-list">
          <li>
            <div>
              <span className="content">
                English (United Kingdom)
                <label className="switch">
                  <MdChevronRight />
                </label>
              </span>
            </div>
          </li>
        </ul>

        <p>REQUIRE LOGIN</p>
        <ul className="notification-list">
          <li>
            <span className="content">
              Whenever I use the app
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </span>
          </li>

          <li>
            <span className="content">
              When I start a parking session
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </span>
          </li>
        </ul>

      </SettingsPageStyles>
    </>
  );
}

export default SettingsPage;
