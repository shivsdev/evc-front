import React from "react";
import styled from "styled-components";
import { FaUser, FaCar, FaCreditCard } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const AccountMenuStyles = styled.div`
  margin-top: 8vh;
  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        a {
          display: flex;
          background: white;
          align-items: center;
          padding: 0 3px;
          .menu-icon {
            width: 10%;
            padding: 3px 0;
            margin-left: 10px;
            text-align: center;
            background: #4b72b8;
            margin-right: 1em;
            border-radius: 5px;
            svg {
              color: white;
            }
          }
          .menu-text {
            float: right;
            padding: 10px 10px;
            width: 80%;
            color: #000;
            border-bottom: 1px solid #ebebec;
            text-transform: capitalize;
            svg {
              float: right;
              color: #c9c8cc;
            }
          }
        }
      }
    }
  }

  .logout-button {
    margin-top: 5vh;
    display: block;
    background: white;
    text-align: center;
    padding: 10px 0;
    color: #ee2a31;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
  }

  a {
    text-decoration: none;
  }
`;

const AccountMenu = ({ match }) => {
  return (
    <AccountMenuStyles>
      <nav>
        <ul>
          <li>
            <Link to={`${match.url}/profile`}>
              <span className="menu-icon">
                <FaUser />
              </span>
              <span className="menu-text">
                User Profile <MdChevronRight />
              </span>
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/vehicles`}>
              <span className="menu-icon">
                <FaCar />
              </span>
              <span className="menu-text">
                Vehicles <MdChevronRight />
              </span>
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/payment-method`}>
              <span className="menu-icon">
                <FaCreditCard />
              </span>
              <span className="menu-text">
                payment methods <MdChevronRight />
              </span>
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/notifications`}>
              <span className="menu-icon">
                <IoIosNotifications />
              </span>
              <span className="menu-text">
                Notifications <MdChevronRight />
              </span>
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/settings`}>
              <span className="menu-icon">
                <FiSettings />
              </span>
              <span className="menu-text">
                Settings <MdChevronRight />
              </span>
            </Link>
          </li>
        </ul>

        <Link className="logout-button" to={`${match.url}/logout`}>
          Log out
        </Link>

      </nav>
    </AccountMenuStyles>
  );
};

export default AccountMenu;
