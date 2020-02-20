import styled from "styled-components";

export default styled.div`
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
