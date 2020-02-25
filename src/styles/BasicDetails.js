import styled from "styled-components";

export default styled.div`
  position: fixed;
  bottom: 52px;
  background: white;
  width: 100%;
  border-radius: 20px 20px 0 0;
  padding: 3% 5%;
  border-top: 1px solid #ddd;
  .cpoint-location {
    margin-top: 1.5vh;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
    p {
      color: #ccc;
      padding-top: 0.3em;
      font-size: 95%;
    }
  }
  .cpoint-info {
    padding-top: 3vh;
    padding-bottom: 3vh;
    overflow: auto;
    border-bottom: 1px solid #ccc;
    .details,
    .picture {
      display: inline-block;
      float: left;
    }
    .details {
      width: 70%;
    }
    .picture {
      width: 30%;
    }
  }
  > span {
    display: block;
    text-align: center;
    position: relative;
    img {
      cursor: pointer;
      max-height: 15px;
    }
    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      font-size: 130%;
      color: #c7c7c7;
    }
  }
`;
