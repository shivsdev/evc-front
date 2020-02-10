import React from "react";
import styled from "styled-components";
import { MdChevronRight } from "react-icons/md";
import { AiOutlineLeft} from "react-icons/ai";
import { Link } from "react-router-dom";
import TopBarStyles from "../styles/TopBarStyles";

const HelpPageStyles = styled.div`
  .help-menu {
    margin-top: 8vh;
    border-bottom: 1px solid #ebebec;
    border-top: 1px solid #ebebec;
    li {
      padding-left: 5vw;
      background: white;
      a {
        display: block;
        padding: 10px;
        border-bottom: 1px solid #ebebec;
        color: black;
        svg {
          color: #c9c9c9;
          float: right;
        }
      }
      :last-child {
        a {
          border-bottom: 0;
        }
      }
    }
  }
`;

function HelpPage(props) {

  const { match, history } = props;

  return (
    <>
      <TopBarStyles>
        <div
          className="back-operation"
          onClick={() => history.push("/") }
        >
          <span className="icon">
            <AiOutlineLeft />
          </span>
          <span className="icon-text">back</span>
        </div>
        <div className="page-name"> Charging Sessions </div>
      </TopBarStyles>
      <HelpPageStyles>
        <ul className="help-menu">
          <li>
            <Link to={`${match.url}/guide`}>
              User Guide <MdChevronRight />
            </Link>
          </li>

          <li>
            <Link to={`${match.url}/faq`}>
              FAQs <MdChevronRight />
            </Link>
          </li>

          <li>
            <Link to={`${match.url}/contact`}>
              Contact us <MdChevronRight />
            </Link>
          </li>
        </ul>
      </HelpPageStyles>
    </>
  );
}

export default HelpPage;
