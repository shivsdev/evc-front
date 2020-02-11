import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import TopBarStyles from "../styles/TopBarStyles";
import VisaIcon from "../assets/visa.svg";
import MasterCardIcon from "../assets/mastercard.svg";

const UpdatePaymentMethodStyles = styled.div`
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
  .confirmation-modal-container {
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
  }
`;

function UpdatePaymentMethod(props) {
  const { history, match, paymentMethodsData, setPaymentMethodsData } = props;
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [issuedBy, setIssuedBy] = useState("");
  const [cvv, setCvv] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [cardIcon, setCardIcon] = useState();
  let id = parseInt(match.params.id);

  useEffect(() => {
    let clonedPaymentMethodsData = JSON.parse(JSON.stringify(paymentMethodsData));
    let length = clonedPaymentMethodsData.cards.length;
    let idExist = false;

    for (let i = 0; i < clonedPaymentMethodsData.cards.length; i++) {
      if (clonedPaymentMethodsData.cards[i].id === id) {
        setCardNumber(clonedPaymentMethodsData.cards[i].number)
        setCardExpiry("●●●●●●");
        setCvv(clonedPaymentMethodsData.cards[i].cvv);
        setIssuedBy(clonedPaymentMethodsData.cards[i].issuedBy);
        (clonedPaymentMethodsData.cards[i].issuedBy === "visa") ? setCardIcon(VisaIcon) : setCardIcon(MasterCardIcon)
        idExist = true;
      }
    }
    if (!idExist) {
      history.push("/account/payment-methods");
    }

    let data = {
      id: id,
      cardType: "debit",
      number: "●●●● ●●●● ●●●● " + cardNumber.slice(12, 16),
      issuedBy: issuedBy,
      expiryMonth: cardExpiry.slice(0, 2),
      expiryYear: cardExpiry.slice(2, 6),
      cvv
    }

    let cards = clonedPaymentMethodsData.cards.filter(card => card.id !== id);
    clonedPaymentMethodsData.cards = cards.push(data);

    setPaymentMethodsData(clonedPaymentMethodsData);

    history.push('/account/payment-methods');
  }, [paymentMethodsData, id, history]);

  const handleSubmit = () => {
    console.log("Card Updated");
  };

  const handleRemove = () => {
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

      {showModal ? (
        <div className="confirmation-modal-container">
          <div className="confirmation-modal">
            <h3>Remove Card?</h3>
            Visa card ending 4770 will be removed from your account
            and not be available for use in parking sessions.
            <div>
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button onClick={ handleRemove}>Remove</button>
            </div>
          </div>
        </div>
      ) : null}

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
      </UpdatePaymentMethodStyles>
      <div style={{borderTop: "1px solid #ccc", borderBottom: "1px solid #ccc", marginTop: "10vh" }}>
        <button
          onClick={handleRemove}
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
