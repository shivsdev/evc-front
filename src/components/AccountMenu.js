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

let userId = 1;

const AccountMenu = (props) => {

  const logout = () => {
    props.setLoggedIn(!props.loggedIn);
  };

  return (
    <AccountMenuStyles>
      <nav>
        <ul>
          <li>
            <Link to={`account/profile/${userId}`}>
              <span className="menu-icon">
                <FaUser />
              </span>
              <span className="menu-text">
                User Profile <MdChevronRight />
              </span>
            </Link>
          </li>
          <li>
            <Link to={`account/vehicles`}>
              <span className="menu-icon">
                <FaCar />
              </span>
              <span className="menu-text">
                Vehicles <MdChevronRight />
              </span>
            </Link>
          </li>
          <li>
            <Link to={`account/payment-methods`}>
              <span className="menu-icon">
                <FaCreditCard />
              </span>
              <span className="menu-text">
                payment methods <MdChevronRight />
              </span>
            </Link>
          </li>
          <li>
            <Link to={`account/notifications`}>
              <span className="menu-icon">
                <IoIosNotifications />
              </span>
              <span className="menu-text">
                Notifications <MdChevronRight />
              </span>
            </Link>
          </li>
          <li>
            <Link to={`account/settings`}>
              <span className="menu-icon">
                <FiSettings />
              </span>
              <span className="menu-text">
                Settings <MdChevronRight />
              </span>
            </Link>
          </li>
        </ul>

        <button
          className="logout-button"
          onClick={logout}
          style={{
            color: "red",
            textTransform: "capitalize",
            width: "100%",
            background: "white",
            padding: "15px 0",
            textAlign: "center",
            border: 0,
            borderTop: "1px solid #ddd",
            borderBottom: "1px solid #ddd",
            outline: 0
          }}
        >
          Log out
        </button>
      </nav>
    </AccountMenuStyles>
  );
};

export default AccountMenu;
