import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";

import TopBarStyles from "../styles/TopBarStyles";
import VisaIcon from "../assets/visa.svg";
import MasterCardIcon from "../assets/mastercard.svg";
import RemoveConfirmation from "../components/RemoveConfirmation";

const UpdatePaymentMethodStyles = styled.div`
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  position: relative;

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
  const { history, match, paymentMethodsData, setPaymentMethodsData } = props;
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [issuedBy, setIssuedBy] = useState("");
  const [cvv, setCvv] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [cardIcon, setCardIcon] = useState();
  const [hold] = useState();
  let id = parseInt(match.params.id);

  useEffect(() => {
    let clonedData = JSON.parse(JSON.stringify(paymentMethodsData));
    let idExist = false;
    clonedData.cards.map(card => {
      if (card.id === id) {
        setCardNumber(card.number);
        setCardExpiry("●●●●●●");
        setCvv(card.cvv);
        setIssuedBy(card.issuedBy);

        issuedBy === "visa"
          ? setCardIcon(VisaIcon)
          : setCardIcon(MasterCardIcon);
        setModalText(
          `${card.issuedBy.toUpperCase()} card ending ${card.number.slice(
            card.number.length - 4,
            card.number.length
          )} will be removed from your account and not be availbale for use in parking sessions.`
        );
        idExist = true;
      }
      return true;
    });

    if (!idExist) {
      history.push("/account/payment-methods");
    }
  }, [history, hold, id, issuedBy, paymentMethodsData]);

  const handleSubmit = () => {
    let clonedData = JSON.parse(JSON.stringify(paymentMethodsData));
    clonedData.cards.map(card => {
      if (card.id === id) {
        card.expiryMonth = cardExpiry.slice(0, 2);
        card.expiryYear = cardExpiry.slice(2, 6);
        card.cvv = cvv;
      }
      return true;
    });
    setPaymentMethodsData(clonedData);
    history.push("/account/payment-methods");
  };

  const handleRemove = () => {
    // let data = {
    //   id: id,
    //   cardType: "debit",
    //   number: "●●●● ●●●● ●●●● " + cardNumber.slice(12, 16),
    //   issuedBy: issuedBy,
    //   expiryMonth: cardExpiry.slice(0, 2),
    //   expiryYear: cardExpiry.slice(2, 6),
    //   cvv
    // };

    let clonedData = JSON.parse(JSON.stringify(paymentMethodsData));
    let cardsAfterRemoval = clonedData.cards.filter(card => card.id !== id);
    clonedData.cards = cardsAfterRemoval;
    setPaymentMethodsData(clonedData);
    history.push("/account/payment-methods");
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
          src={cardIcon}
          style={{ width: "70px", height: "70px" }}
          alt="visa icon"
        />
      </div>

      <UpdatePaymentMethodStyles>
        <div className="form-group">
          <label>Number</label>
          <input
            type="text"
            disabled={true}
            name="card_number"
            onChange={e => setCardNumber(e.target.value)}
            value={cardNumber}
            minLength="16"
            maxLength="16"
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
            minLength="6"
            maxLength="6"
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
            minLength="3"
            maxLength="3"
            placeholder="Security code"
          />
        </div>

        {showModal ? (
          <RemoveConfirmation
            modalText={modalText}
            modalFor="Card"
            setShowModal={setShowModal}
            handleRemove={handleRemove}
          />
        ) : null}
      </UpdatePaymentMethodStyles>

      <div
        style={{
          borderTop: "1px solid #ccc",
          borderBottom: "1px solid #ccc",
          marginTop: "10vh"
        }}
      >
        <button
          onClick={() => setShowModal(true)}
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
