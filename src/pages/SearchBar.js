import React, { useState, useEffect } from "react";
import { AiOutlineSearch, AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";

import SearchInputHolder from "../styles/SearchInputHolder";
import Styles from "../styles/SearchBar";
import SearchList from "../components/SearchList";

export default function SearchBar(props) {
  const { history } = props;
  const [searchInput, setSearchInput] = useState("");
  const [input, setInput] = useState();
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (input) {
      input.focus();
    }
  });

  function handleSearch(e) {
    let value = e.target.value;
    let valueLength = value.length;
    setSearchInput(value);
    if (valueLength < 1) {
      setSearchData([]);
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
    if (valueLength < searchInput.length) setSearchData(filterData([]));
    else setSearchData(filterData(searchData));
    console.log("==================");
    let accessToken =
      "pk.eyJ1Ijoic2hpdnNkZXYiLCJhIjoiY2s2dGE2aWRrMDZldDNsdGZ3d3AydXh0bSJ9.Vsru1l3AYG6n1UVjUtG6QQ";
    let url = "https://api.mapbox.com/geocoding/v5/mapbox.places/";

    axios
      .get(
        `${url + value}.json?&country=in&limit=7&access_token=${accessToken}`
      )
      .then(({ data }) => {
        let arr = [];
        data.features.map(item =>
          arr.push({
            id: item.id,
            streetNo: "2614(temp)",
            streetName: item.text,
            fullAddress: item.place_name,
            isFavourite: false
          })
        );        
        setSearchData(arr);
      });
  }

  function handleClearSearch() {
    setSearchInput("");
    setSearchData([]);
  }

  return (
    <>
      <SearchInputHolder>
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
            onClick={() => {
              handleClearSearch();
              input.focus();
            }}
          />
        </div>
        <div className="page-action" onClick={() => history.push("/")}>
          cancel
        </div>
      </SearchInputHolder>

      <Styles>
        {searchInput.length > 0 ? (
          searchData.length > 0 ? (
            <div className="search_results">
              <p>
                Searching for "<strong>{searchInput}</strong>"
              </p>
            </div>
          ) : null
        ) : (
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
            searchData.map(item => (
              <SearchList key={item.id} {...item} history={history} />
            ))
          ) : (
            <div
              style={{ color: "#999", padding: "5vh 5vw", textAlign: "center" }}
            >
              <p>Nothing found for "{searchInput}"</p>
              <span>alter your search term and try again </span>
            </div>
          )}
        </ul>
      </Styles>
    </>
  );
}
