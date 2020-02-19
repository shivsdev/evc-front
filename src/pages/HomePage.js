import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import BasicDetails from "../components/BasicDetails";
import ExpandedDetails from "../components/ExpandedDetails";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";

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
      :focus {
        outline: 0;
        border-color: #4872b8;
      }
      svg {
        display: inline;
        margin-right: 8px;
      }
    }
  }
  .mapboxgl-compact {
    display: none;
  }
  a.mapboxgl-ctrl-logo {
    display: none;
  }
  img {
    width: 100%;
  }
`;

// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

export default function HomePage(props) {

  useEffect(() => {

    mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpdnNkZXYiLCJhIjoiY2s2dGE2aWRrMDZldDNsdGZ3d3AydXh0bSJ9.Vsru1l3AYG6n1UVjUtG6QQ';

    var map = new mapboxgl.Map({
      container: 'map_container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-0.1278, 51.5074],
      zoom: 12
    });

    // Add geolocate control to the map.
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      }), "bottom-right"
    );

    // map.addControl(
    //   new MapboxGeocoder({
    //     accessToken: mapboxgl.accessToken,
    //     mapboxgl: mapboxgl
    //   })
    // );

  })

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let fromQuery = useQuery();

  function checkUrlForExpanded() {
    let query = fromQuery.get("do");
    if (query === "expand") {
      return <ExpandedDetails {...props} />;
    } else if (query === "show") {
      return <BasicDetails {...props} />;
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
        <div id="map_container" style={{height: "90vh"}}></div>
        {checkUrlForExpanded()}
      </HomePageStyles>
    </>
  );
}
