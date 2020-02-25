import styled from 'styled-components';

export default styled.li`
  background: white;
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
  padding: 1vh 0;
  border-top: 1px solid #ccc;
  &:last-child {
    border-bottom: 1px solid #ccc;
  }
  .charge-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      padding: 3px 4px;
      background: #4b72b8;
      color: white;
      border-radius: 5px;
    }
  }

  > div {
    > p {
      font-size: 90%;
      :last-child {
        color: #999;
        font-size: 70%;
        padding-top: 2px;
      }
    }
  }

  .favorite-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4b72b8;
    svg {
      font-size: 120%;
    }
  }
`;
