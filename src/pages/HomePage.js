import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import BasicDetails from "../components/BasicDetails";
import ExpandedDetails from "../components/ExpandedDetails";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import Styles from "../styles/HomePage";
import styled from "styled-components";
import FlashIcon from '../assets/flash.png'

const HomePageStyles = styled(Styles)`

`;

export default function HomePage(props) {
  const [getMap, setGetMap] = useState();
  const [hold] = useState(0);

  useEffect(() => {
    let lat, lng;
    window.navigator.geolocation.getCurrentPosition(position => {
      lat = parseFloat(position.coords.latitude);
      lng = parseFloat(position.coords.longitude);
      console.log(lat, lng);
    });

    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2hpdnNkZXYiLCJhIjoiY2s2dGE2aWRrMDZldDNsdGZ3d3AydXh0bSJ9.Vsru1l3AYG6n1UVjUtG6QQ";
    var map = new mapboxgl.Map({
      container: "map_container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-0.1278, 51.5074],
      // center: [80.25913709999999, 13.022302199999999],
      zoom: 15
    });

    map.flyTo({
      center: [80.25913709999999, 13.022302199999999],
      speed: 20, // make the flying slow
      easing: function(t) {
        return t;
      },
      // this animation is considered essential with respect to prefers-reduced-motion
      essential: true
    });
    setGetMap(map);

    // Add geolocate control to the map.
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      }),
      "bottom-right"
    );

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        // countries: 'gb',
        mapboxgl: mapboxgl
      })
    );

    // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
    // map.on('click', 'symbols', function(e) {
    // map.flyTo({ center: e.features[0].geometry.coordinates });
    // });

    // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
    // map.on('mouseenter', 'symbols', function() {
    // map.getCanvas().style.cursor = 'pointer';
    // });

    // Change it back to a pointer when it leaves.
    // map.on('mouseleave', 'symbols', function() {
    // map.getCanvas().style.cursor = '';
    // });

    map.on("load", function() {

      map.flyTo({
        center: [80.25913709999999, 13.022302199999999],
        zoom: 15
      });

      /* Image: An image is loaded and added to the map. */
      map.loadImage(FlashIcon, function(error, image) {
        if (error) throw error;
        map.addImage("custom-marker", image);

        /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
        map.addLayer({
          id: "markers",
          type: "symbol",
          /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "Point",
                    coordinates: [80.25913709999999, 13.022302199999999]
                  }
                },
                {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "Point",
                    coordinates: [80.2579, 13.0180]
                  }
                },
                {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "Point",
                    coordinates: [80.1565, 13.0382]
                  }
                },
                {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "Point",
                    coordinates: [80.2206, 13.0067]
                  }
                },
                {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "Point",
                    coordinates: [80.1948, 13.0694]
                  }
                }
              ]
            }
          },
          layout: {
            "icon-image": "custom-marker"
          }
        });
      });
    });

  }, [hold]);

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
        <div id="map_container" style={{ height: "90vh" }}></div>
        {checkUrlForExpanded()}
      </HomePageStyles>
    </>
  );
}
