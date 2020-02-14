import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdChevronRight } from "react-icons/md";

const Styles = styled.div`
  background: #f0f1f5;
  width: 100%;
  height: 100vh;

  ul {
    list-style: none;
    margin-top: 5vh;
    li {
      margin-top: 1em;
      label {
        display: block;
        padding-left: 5vw;
        color: #555;
      }
      a {
        margin-top: 0.2em;
        display: block;
        background: white;
        padding: 2vh 5vw;
        border-bottom: 1px solid #ddd;
        border-top: 1px solid #ddd;
        color: black;
        &.blur {
          color: #999;
        }
        svg {
          float: right;
          color: #c9c8cc;
          margin-top: 3px;
        }
      }

      .change-password {
        text-transform: capitalize;
        color: #4c8bff;
        margin-top: 5vh;
      }
    }
  }
`;

export default function ProfileSummary(props) {
  const {
    url,
    firstName,
    lastName,
    email,
    phoneCode,
    mobile,
    addressLineOne,
    postCode,
    setPassword,
    newProfileData
  } = props;

  let name = !firstName ? "Name" : firstName + (lastName ? " " + lastName : "");
  let mobileNumber = !mobile
    ? "Mobile Number"
    : "+ " + phoneCode + " (0) " + mobile;
  let address = newProfileData
    ? !newProfileData.address
      ? "Address"
      : newProfileData.address.addressLineOne +
        " " +
        newProfileData.address.postCode
    : !addressLineOne
      ? "Address"
      : addressLineOne + " " + postCode;

  let isBlurred = setPassword ? "blur" : null;

  function checkIsBlurred(property) {
    if (typeof property === "number") {
      return null;
    }
    if (property && property.length > 0) {
      return null;
    } else {
      return isBlurred;
    }
  }

  return (
    <Styles>
      <ul>
        <li>
          <label>NAME</label>
          <Link
            to={`${url}/name`}
            style={{ textTransform: "capitalize" }}
            className={checkIsBlurred(
              newProfileData ? newProfileData.firstName : ""
            )}
          >
            {name}
            <MdChevronRight />
          </Link>
        </li>
        <li>
          <label>EMAIL ADDRESS</label>
          <Link
            to={`${url}/email`}
            className={checkIsBlurred(
              newProfileData ? newProfileData.email : ""
            )}
          >
            {email || "Email address"}
            <MdChevronRight />
          </Link>
        </li>
        <li>
          <label>MOBILE NUMBER</label>
          <Link
            to={`${url}/mobile-number`}
            className={checkIsBlurred(
              newProfileData ? newProfileData.mobile : ""
            )}
          >
            {mobileNumber}
            <MdChevronRight />
          </Link>
        </li>
        <li>
          <label>ADDRESS</label>
          <Link
            to={`${url}/address`}
            className={
              newProfileData
                ? checkIsBlurred(
                    newProfileData.address
                      ? newProfileData.address.addressLineOne
                      : ""
                  )
                : isBlurred
            }
          >
            {address}
            <MdChevronRight />
          </Link>
        </li>
        <li>
          {setPassword ? (
            <Link to={`${url}/set-password`} className="change-password">
              Set Password
            </Link>
          ) : (
            <Link to={`${url}/change-password`} className="change-password">
              Change Password
            </Link>
          )}
        </li>
      </ul>
    </Styles>
  );
}

ProfileSummary.propTypes = {
  url: PropTypes.string.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  phoneCode: PropTypes.number,
  mobile: PropTypes.number,
  addressLineOne: PropTypes.string,
  postCode: PropTypes.string,
  setPassword: PropTypes.bool.isRequired
};
