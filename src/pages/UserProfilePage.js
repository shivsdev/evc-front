import React from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import FooterNavbar from "../components/FooterNavbar";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const UserProfilePageStyles = styled.div`
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
        margin-top: 0.3em;
        display: block;
        background: white;
        padding: 0.45em;
        padding-left: 5vw;
        border-bottom: 1px solid #ddd;
        border-top: 1px solid #ddd;
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

function UserProfilePage({history, location, match}) {
  
  return (
    <UserProfilePageStyles>
      <TopBar />

      <ul>
        <li>
          <label>NAME</label>
          <Link to={`${match.url}/edit-name`}>
            Paul Smith <MdChevronRight />
          </Link>
        </li>
        <li>
          <label>EMAIL ADDRESS</label>
          <Link to={`${match.url}/edit-email`}>
            p.smith@hotmail.com <MdChevronRight />
          </Link>
        </li>
        <li>
          <label>MOBILE NUMBER</label>
          <Link to={`${match.url}/edit-phone`}>
            +44 (0)7851782536 <MdChevronRight />
          </Link>
        </li>
        <li>
          <label>ADDRESS</label>
          <a>
            29 Acacia Road RG12 6NQ <MdChevronRight />
          </a>
        </li>
        <li>
          <a className="change-password">Change Password</a>
        </li>
      </ul>

      <FooterNavbar history={ history } />
    </UserProfilePageStyles>
  );
}

export default UserProfilePage;
