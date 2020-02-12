import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .confirmation-modal {
    position: relative;
    background: #fff;
    width: 80%;
    padding: 3vh 5vw;
    border-radius: 10px;
    text-align: center;
    padding-bottom: 8vh;
    > div {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-top: 1px solid #ddd;
      button {
        outline: 0;
        border: 0;
        background: transparent;
        width: 50%;
        display: inline-block;
        float: left;
        padding: 10px;
        color: #4b72b8;
        &:last-child {
          color: #ec4c3c;
          border-left: 1px solid #ddd;
        }
      }
    }
  }
`;

export default function RemoveConfirmation(props) {
  const { modalText, modalFor, setShowModal, handleRemove } = props;

  return (
    <Styles>
      <div className="confirmation-modal">
        <h3>Remove {modalFor} ?</h3>
        {modalText}
        <div>
          <button onClick={() => setShowModal(false)}>Cancel</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </Styles>
  );
}
