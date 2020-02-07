import React from "react";
import styled from "styled-components";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

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
  const PageTitle = "help";
  const { match } = props;

  if(PageTitle !== props.title) {
    props.setTitle(PageTitle);
  }
  props.setPassedHistory(props.history);
  
  return (
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
  );
}

export default HelpPage;
