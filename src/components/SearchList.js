import React, { useState } from "react";
import styled from "styled-components";
import { IoIosFlash } from "react-icons/io";
import { FiStar } from "react-icons/fi";
import { TiStarFullOutline } from "react-icons/ti";

const Styles = styled.li`
  background: white;
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
  padding: 2vh 0;
  border-top: 1px solid #ccc;
  &:last-child {
    border-bottom: 1px solid #ccc;
  }
  .charge-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      padding: 3px 4px;
      background: #4b72b8;
      color: white;
      border-radius: 5px;
    }
  }

  > div {
    > p {
      font-size: 90%;
      :last-child {
        color: #999;
        font-size: 70%;
        padding-top: 2px;
      }
    }
  }

  .favorite-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4b72b8;
    svg {
      font-size: 120%;
    }
  }
`;

export default function SearchList(props) {
  const [isFavourite, setIsFavourite] = useState(props.isFavourite);

  return (
    <Styles>
      <span className="charge-icon">
        <span>
          <IoIosFlash />
        </span>
      </span>
      <div>
        <p>
          <strong>{props.streetNo}</strong> - {props.streetName}
        </p>
        <p>{ props.fullAddress }</p>
      </div>
      <span className="favorite-icon">
        {( isFavourite ) ? (
          <TiStarFullOutline onClick={() => setIsFavourite(!isFavourite)} />
        ) : (
          <FiStar onClick={() => setIsFavourite(!isFavourite)} />
        )}
      </span>
    </Styles>
  );
}