import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import MapImage from "../assets/map-image.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import BasicDetails from "../components/BasicDetails";
import ExpandedDetails from "../components/ExpandedDetails";

const HomePageStyles = styled.div`
  position: relative;
  .search-input {
    position: absolute;
    width: 100%;
    padding: 5%;
    z-index: 1;
    a {
      border: 1px solid #999;
      border-radius: 10px;
      display: block;
      width: 100%;
      padding: 10px;
      color: #ccc;
      background: white;
      svg {
        display: inline;
        margin-right: 8px;
      }
    }
  }
  img {
    width: 100%;
  }
`;

export default function HomePage(props) {

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let fromQuery = useQuery();

  function checkUrlForExpanded() {
    let query = fromQuery.get('do');
    if(query === "expand") {
      return <ExpandedDetails {...props} />
    } else if(query === "show"){
      return <BasicDetails {...props} />
    }
}

  return (
    <>
      <HomePageStyles>
        <div className="search-input">
          <Link to="/search">
            <AiOutlineSearch />
            Where would you like to charge?
          </Link>
        </div>

        <img src={MapImage} onClick={() => props.history.push('/selected?do=show')} alt="Home page map" />

        {  checkUrlForExpanded() }

      </HomePageStyles>
    </>
  );
}
