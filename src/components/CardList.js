import React from "react";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";

import VisaIcon from "../assets/visa.svg";
import MasterCardIcon from "../assets/mastercard.svg";

export default function CardList(props) {
  const { id, url, issuedBy, number } = props;

  let cardIcon;
  if(issuedBy === "master") {
    cardIcon = MasterCardIcon;
  } else {
    cardIcon = VisaIcon;
  }

  return (
    <li>
      <Link to={`${url}/${id}`}>
        <span className="icon">
          <img src={cardIcon} alt={`${issuedBy} card icon`} />
        </span>
        <span className="icon-content">{ number }</span>
        <MdChevronRight />
      </Link>
    </li>
  );
}
