import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import TopBarStyles from "../styles/TopBarStyles";

const AddPaymentMethodStyles = styled.div`
  margin-top: 5vh;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  .form-group {
    background: white;
    padding: 2vh 5vw;
    font-size: 100%;
    overflow: auto;
    position: relative;

    label,
    input {
      display: inline-block;
      float: left;
    }
    label {
      width: 40%;
    }
    input {
      width: 60%;
      border: 0;
      outline: 0;
      font-size: 100%;
    }
    &:after {
      content: "";
      position: absolute;
      width: 90%;
      height: 1px;
      right: 0;
      bottom: 0;
      background: #e2e2e2;
    }
    &:last-child:after {
      display: none;
    }
  }
`;

function AddPaymentMethod(props) {
  const { history } = props;
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = () => {
    console.log("Add payment method");
  };

  return (
    <>
      <TopBarStyles>
        <div
          className="back-operation"
          onClick={() => history.push("/account/payment-methods")}
        >
          <span className="icon">
            <AiOutlineLeft />
          </span>
          <span className="icon-text">back</span>
        </div>

        <div className="page-name"> add card </div>

        <div className="page-action" onClick={handleSubmit}>
          done{" "}
        </div>
      </TopBarStyles>

      <AddPaymentMethodStyles>
        <div className="form-group">
          <label>Number</label>
          <input
            type="text"
            name="card_number"
            onChange={e => setCardNumber(e.target.value)}
            value={cardNumber}
            placeholder="Card no."
          />
        </div>
        <div className="form-group">
          <label>Expires</label>
          <input
            type="text"
            name="card_expiry"
            onChange={e => setCardExpiry(e.target.value)}
            value={cardExpiry}
            placeholder="MMYYYY"
          />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input
            type="text"
            name="cvv"
            onChange={e => setCvv(e.target.value)}
            value={cvv}
            placeholder="Security code"
          />
        </div>
      </AddPaymentMethodStyles>
      <p style={{ color: "#787878", fontSize: "90%", padding: "4vh 5vw" }}>
        A preauthorisation transaction of £1 will be performed to verify your
        card details. No funds will be debited.
      </p>
    </>
  );
}

export default AddPaymentMethod;
