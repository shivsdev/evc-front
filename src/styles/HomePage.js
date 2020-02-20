import styled from "styled-components";

export default styled.div`
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
