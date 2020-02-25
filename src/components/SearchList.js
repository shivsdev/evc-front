import React, { useState } from "react";
import { IoIosFlash } from "react-icons/io";
import { FiStar } from "react-icons/fi";
import { TiStarFullOutline } from "react-icons/ti";
import PropTypes from 'prop-types';
import Styles from "../styles/SearchList";

export default function SearchList(props) {
  const [isFavourite, setIsFavourite] = useState(props.isFavourite);    // - Search location to find near by (custom store of us).

  return (
    <Styles>
      <span className="charge-icon">
        <span>
          <IoIosFlash />
        </span>
      </span>
      <div onClick={() => props.history.push('/selected?do=show', {center: [80.2184,12.9801]}) }>
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

SearchList.propTypes = {
  isFavourite: PropTypes.bool.isRequired,
  streetName: PropTypes.string.isRequired,
  fullAddress: PropTypes.string.isRequired,
  streetNo: PropTypes.string.isRequired,
  history: PropTypes.object
}
