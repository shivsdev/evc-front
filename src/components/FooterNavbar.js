import React from "react";
import { TiFlash } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { GoCalendar } from "react-icons/go";
import { IoMdHelpBuoy } from "react-icons/io";
import styled from "styled-components";

const FooterNavbarStyles = styled.footer`
  position: absolute;
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
        margin-top: .5em;
        button {
          background: 0;
          font-size: 70%;
          border: 0;
          outline: 0;
          margin-bottom: .2em;
          .icon {
            display: flex;
            font-size: 140%;
            margin: auto;
            width: 28px;
            height: 25px;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: #A1A1A1;
            border-radius: 3px;
            svg {
                color: #F5F6F7
            }
          }
          .icon-text {
            display: block;
            font-size: 93%;
            color: #A1A1A1;
            margin-top: .3em;
          }
        }
      }
    }
  }
`;

function FooterNavbar({history}) {
  return (
    <>
      <FooterNavbarStyles>
        <nav>
          <ul>
            <li>
              <button onClick={ () => history.push('/')}>
                <span className="icon">
                  <TiFlash />
                </span>
                <span className="icon-text">Charge</span>
              </button>
            </li>
            <li>
            <button onClick={() => history.push('/account')}>
                <span className="icon">
                  <FaUser />
                </span>
                <span className="icon-text">Account</span>
              </button>
            </li>
            <li>
            <button onClick={() => history.push('/charging-sessions')}>
                <span className="icon">
                  <GoCalendar />
                </span>
                <span className="icon-text">Charging Sessions</span>
              </button>
            </li>
            <li>
              <button onClick={() => history.push('/help')}>
                <span className="icon">
                  <IoMdHelpBuoy />
                </span>
                <span className="icon-text">Help</span>
              </button>
            </li>
          </ul>
        </nav>        
      </FooterNavbarStyles>
    </>
  );
}

export default FooterNavbar;
