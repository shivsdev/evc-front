import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import { AiOutlineLeft } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import TopBarStyles from "../styles/TopBarStyles";

const VehiclesPageStyles = styled.div`
  background: #f0f1f5;
  width: 100%;
  height: 100vh;
  .vehicle-list {
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
        span {
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

function VehiclesPage(props) {
  const { match, history } = props;

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

        <div className="page-name"> vehicles </div>
        <div className="page-action" onClick={() => history.push(`${match.url}/add`)}>
          <IoIosAdd />
        </div>
      </TopBarStyles>

      <VehiclesPageStyles>
        <ul className="vehicle-list">
          <li>
            <Link to={`${match.url}/1`}>
              WP11 HV
              <span>
                Black Ford Focus <MdChevronRight />
              </span>
            </Link>
          </li>

          <li>
            <Link to={`${match.url}/2`}>
              KL03 XTU
              <span>
                White Ford Focus <MdChevronRight />
              </span>
            </Link>
          </li>
        </ul>
      </VehiclesPageStyles>
    </>
  );
}

export default VehiclesPage;
