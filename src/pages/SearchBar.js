import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineSearch, AiFillCloseCircle } from "react-icons/ai";

import TopBarStyles from "../styles/TopBarStyles";
import SearchList from "../components/SearchList";

const SearchInput = styled(TopBarStyles)`
  display: block;
  overflow: auto;
  text-align: unset;
  padding: 0.5em;
  .search-input,
  .page-action {
    display: inline-flex;
  }
  .search-input {
    width: 80%;
    position: relative;
    .search,
    .close {
      position: absolute;
      left: 5px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      color: #999;
    }
    .search {
      font-size: 110%;
    }
    .close {
      left: unset;
      right: 5px;
      font-size: 130%;
      color: #c5c5c5;
    }
    input {
      padding: 1.2vh 1vw;
      border-radius: 10px;
      border: 1px solid #ccc;
      outline: 0;
      width: 100%;
      background: transparent;
      padding-left: 25px;
      font-size: 100%;
    }
  }
  .page-action {
    position: unset;
    display: inline-block;
    width: 20%;
    text-align: center;
    height: 100%;
  }
`;

const Styles = styled.div`
  background: #f0f1f5;
  height: 100vh;
  width: 100vw;
  .search_results {
    color: #4b72b8;
    color: #999;
    p {
      padding: 1vh 5vw;
      strong {
        color: #000;
        font-weight: normal;
        border-bottom: 2px dotted black;
      }
    }
  }
  .search_by {
    display: block;
    padding: 3vh 5vw;
    .holder {
      background: #4b72b8;
      padding: 1px;
      border-radius: 5px;
      > button {
        display: inline-block;
        width: 33.33%;
        padding: 8px 5px;
        border: 0;
        background: white;
        outline: 0;
        color: #4b72b8;
        &.active {
          background: #4b72b8;
          color: white;
        }
        &:first-child {
          border-radius: 5px 0 0 5px;
        }
        &:last-child {
          border-radius: 0 5px 5px 0;
        }
      }
    }
  }
`;

const FakeSearchData = [
  {
    id: 1,
    streetNo: "2614",
    streetName: "Link Road Car Park",
    fullAddress: "Link Road, Great Missenden, HP1609AE",
    isFavourite: false
  },
  {
    id: 2,
    streetNo: "1432",
    streetName: "First Street",
    fullAddress: "south street, FLower park, HWPCK123",
    isFavourite: true
  },
  {
    id: 3,
    streetNo: "1298",
    streetName: "South Street",
    fullAddress: "pink road, silicon valley, FLORCL12",
    isFavourite: false
  },
  {
    id: 4,
    streetNo: "2314",
    streetName: "Link Road Car Park",
    fullAddress: "Link Road, Great Missenden, HP1609AE",
    isFavourite: false
  }
];

export default function SearchBar(props) {
  const { history } = props;
  const [searchInput, setSearchInput] = useState("");
  const [input, setInput] = useState();
  const [searchData, setSearchData] = useState(FakeSearchData);

  useEffect(() => {
    if(input) {
      input.focus()
    }
  })

  function handleSearch(e) {
    let value = e.target.value;
    let valueLength = value.length;
    setSearchInput(value);
    if(valueLength < 1) {
      setSearchData(FakeSearchData);
      return false;
    }
    function filterData(data) {
      return data.filter(item => {
        let expr = RegExp(value.toLowerCase());
        return (
          expr.test(item.streetNo) ||
          expr.test(item.fullAddress.toLowerCase()) ||
          expr.test(item.streetName.toLowerCase())
        );
      });
    }
    if(valueLength < searchInput.length)
      setSearchData(filterData(FakeSearchData));
     else
      setSearchData(filterData(searchData));

  }

  function handleClearSearch() {
    setSearchInput("");
    setSearchData(FakeSearchData);
  }

  return (
    <>
      <SearchInput>
        <div className="search-input">
          <AiOutlineSearch className="search" onClick={() => input.focus()} />
          <input
            type="text"
            placeholder=""
            value={searchInput || ""}
            onChange={e => handleSearch(e)}
            ref={e => setInput(e)}
          />
          <AiFillCloseCircle
            className="close"
            onClick={() => {handleClearSearch(); input.focus()}}
          />
        </div>
        <div className="page-action" onClick={() => history.push("/")}>
          cancel
        </div>
      </SearchInput>
      <Styles>

        {(searchInput.length > 0 ) ? searchData.length > 0 ? (

          <div className="search_results">
            <p>
              Searching for "<strong>{searchInput}</strong>"
            </p>
          </div>
        ): null : (
          <div className="search_by">
            <div className="holder">
              <button onClick={() => console.log("Near By")}>Nearby</button>
              <button className="active" onClick={() => console.log("Recent")}>
                Recent
              </button>
              <button onClick={() => console.log("Favourite")}>
                Favourites
              </button>
            </div>
          </div>
        )}

        <ul>
          {searchData.length > 0 ? (
            searchData.map(item => <SearchList key={item.id} {...item} history={history} />)
          ) : (
            <div style={{color: "#999", padding: "5vh 5vw", textAlign: "center"}}>
              <p>Nothing found for "{searchInput}"</p>
              <span>alter your search term and try again </span>
            </div>
          )}
        </ul>
      </Styles>
    </>
  );
}
