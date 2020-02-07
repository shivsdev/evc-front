import React from "react";
import { TiFlash } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { GoCalendar } from "react-icons/go";
import { IoMdHelpBuoy } from "react-icons/io";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FooterNavbarStyles = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: white;
  nav {
    ul {
      display: flex;
      list-style: none;
      justify-content: space-around;
      width: 100%;
      margin: 0;
      border-top: 1px solid #ddd;

      li {
        display: inline;
        margin-top: 0.5em;
        a {
          display: inline-block;
          background: 0;
          font-size: 70%;
          border: 0;
          outline: 0;
          margin-bottom: 0.2em;
          .icon {
            display: flex;
            font-size: 140%;
            margin: auto;
            width: 28px;
            height: 25px;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: #a1a1a1;
            border-radius: 3px;
            svg {
              color: #f5f6f7;
            }
          }
          .icon-text {
            display: block;
            font-size: 93%;
            color: #a1a1a1;
            margin-top: 0.3em;
          }
          &.active {
            .icon {
              background: #4872B8;
            }
            .icon-text {
              color: #4872B8;
            }
          }
        }
      }
    }
  }
`;

function FooterNavbar(props) {

  return (
    <>
      <FooterNavbarStyles>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                <span className="icon">
                  <TiFlash />
                </span>
                <span className="icon-text">Charge</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/account" activeClassName="active">
                <span className="icon">
                  <FaUser />
                </span>
                <span className="icon-text">Account</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/charging-sessions" activeClassName="active">
                <span className="icon">
                  <GoCalendar />
                </span>
                <span className="icon-text">Charging Sessions</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/help" activeClassName="active">
                <span className="icon">
                  <IoMdHelpBuoy />
                </span>
                <span className="icon-text">Help</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </FooterNavbarStyles>
    </>
  );
}

export default FooterNavbar;
