import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import TopBarStyles from "../styles/TopBarStyles";
import VisaIcon from "../assets/visa.svg";

const UpdatePaymentMethodStyles = styled.div`
  // margin-top: 5vh;
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

function UpdatePaymentMethod(props) {
  const { history } = props;
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = () => {
    console.log("Card Added");
  };

  const handleRemoveCard = () => {
    console.log("Remove Card");
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

        <div className="page-name"> update card </div>

        <div className="page-action" onClick={handleSubmit}>
          done
        </div>
      </TopBarStyles>

      <div style={{ textAlign: "center" }}>
        <img
          src={VisaIcon}
          style={{ width: "70px", height: "70px" }}
          alt="visa icon"
        />
      </div>

      <UpdatePaymentMethodStyles>
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
      </UpdatePaymentMethodStyles>
      <div style={{borderTop: "1px solid #ccc", borderBottom: "1px solid #ccc", marginTop: "10vh" }}>
        <button
          onClick={handleRemoveCard}
          style={{
            color: "red",
            textTransform: "capitalize",
            width: "100%",
            background: "white",
            padding: "15px 0",
            textAlign: "center",
            border: 0,
            outline: 0
          }}
          >
          Remove
        </button>
      </div>
    </>
  );
}

export default UpdatePaymentMethod;
