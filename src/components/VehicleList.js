import React from "react";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import PropTypes from "prop-types";

export default function VehicleList(props) {
  const { id, url, registration, description } = props;
  return (
    <li>
      <Link to={`${url}/${id}`}>
        {registration}
        <span>
          {description} <MdChevronRight />
        </span>
      </Link>
    </li>
  );
}

VehicleList.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  registration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
