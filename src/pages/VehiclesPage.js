import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";

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
  const PageTitle = "vehicles";
  const { match } = props;

  if(PageTitle !== props.title) {
    props.setTitle(PageTitle);
  }
  return (
    <VehiclesPageStyles>

      <ul className="vehicle-list">
        <li>
          <Link to={`${match.url}/guide`}>
            WP11 HV
            <span>
              Black Ford Focus <MdChevronRight />
            </span>
          </Link>
        </li>

        <li>
          <Link to={`${match.url}/faq`}>
            KL03 XTU
            <span>
              White Ford Focus <MdChevronRight />
            </span>
          </Link>
        </li>
      </ul>

    </VehiclesPageStyles>
  );
}

export default VehiclesPage;
