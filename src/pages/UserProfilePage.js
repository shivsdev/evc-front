import React from "react";
import styled from "styled-components";
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
        margin-top: 0.2em;
        display: block;
        background: white;
        padding: 0.45em;
        padding-left: 5vw;
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

function UserProfilePage(props) {
  const PageTitle = "user profile";

  if (PageTitle !== props.title) {
    props.setTitle(PageTitle);
  }
  props.setPassedHistory(props.history);

  const { match, history } = props;

  return (
    <UserProfilePageStyles>
      <ul>
        <li>
          <label>NAME</label>
          <Link to={`${match.url}/name`}>
            Paul Smith
            <MdChevronRight />
          </Link>
        </li>
        <li>
          <label>EMAIL ADDRESS</label>
          <Link to={`${match.url}/email`}>
            p.smith@hotmail.com
            <MdChevronRight />
          </Link>
        </li>
        <li>
          <label>MOBILE NUMBER</label>
        <Link to={`${match.url}/mobile-number`}>
            +44 (0)7851782536
            <MdChevronRight />
          </Link>
        </li>
        <li>
          <label>ADDRESS</label>
          <Link to={`${match.url}/address`}>
            29 Acacia Road RG12 6NQ
            <MdChevronRight />
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/change-password`} className="change-password">
            Change Password{" "}
          </Link>
        </li>
      </ul>

      <FooterNavbar history={history} />
    </UserProfilePageStyles>
  );
}

export default UserProfilePage;
