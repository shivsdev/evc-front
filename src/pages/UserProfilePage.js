import React from "react";
import styled from "styled-components";
import { MdChevronRight } from "react-icons/md";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import TopBarStyles from "../styles/TopBarStyles";

const ProfileDataPageStyles = styled.div`
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

function profileDataPage(props) {
  const { match, profileData, history } = props;
  
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
          <span className="icon-text">account</span>
        </div>

        <div className="page-name"> user profile </div>
      </TopBarStyles>
      <ProfileDataPageStyles>
        <ul>
          <li>
            <label>NAME</label>
            <Link
              to={`${match.url}/name`}
              style={{ textTransform: "capitalize" }}
            >
              {profileData.firstName + " " + profileData.lastName}
              <MdChevronRight />
            </Link>
          </li>
          <li>
            <label>EMAIL ADDRESS</label>
            <Link to={`${match.url}/email`}>
              {profileData.email}
              <MdChevronRight />
            </Link>
          </li>
          <li>
            <label>MOBILE NUMBER</label>
            <Link to={`${match.url}/mobile-number`}>
              +{profileData.phoneCode + " (0) " + profileData.mobile}
              <MdChevronRight />
            </Link>
          </li>
          <li>
            <label>ADDRESS</label>
            <Link to={`${match.url}/address`}>
              {profileData.address.addressLineOne +
                " " +
                profileData.address.postcode}
              <MdChevronRight />
            </Link>
          </li>
          <li>
            <Link
              to={`${match.url}/change-password`}
              className="change-password"
            >
              Change Password{" "}
            </Link>
          </li>
        </ul>
      </ProfileDataPageStyles>
    </>
  );
}

export default profileDataPage;
