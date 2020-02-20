import styled from "styled-components";

export default styled.header`
  background: #f9fafb;
  text-align: center;
  padding: 0.5em 0;
  position: relative;

  .back-operation {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2vw;
    color: #4a71b5;
    text-transform: capitalize;
    span {
      display: inline-block;
      padding-top: 0.2em;
    }
  }
  .page-name {
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
  }
  .page-action {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2vw;
    color: #4a71b5;
    text-transform: capitalize;
  }
`;
