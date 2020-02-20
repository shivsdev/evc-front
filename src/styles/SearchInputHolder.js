import styled from 'styled-components';
import TopBarStyles from './TopBarStyles';

export default styled(TopBarStyles)`
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
