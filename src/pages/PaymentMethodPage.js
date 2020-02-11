import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ApplePay from "../assets/apple-pay.svg";
import { AiOutlineLeft } from "react-icons/ai";

import TopBarStyles from "../styles/TopBarStyles";
import CardList from "../components/CardList";

const PaymentMethodPageStyles = styled.div`
  div {
    .section-title {
      p {
        color: #676767;
        font-size: 90%;
        padding: 0 5vw;
        a {
          float: right;
          font-size: 110%;
          color: #0573ff;
        }
      }
    }
  }
  .card-payment {
    margin-top: 5vh;
    ul {
      margin-top: 5px;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      li {
        a {
          display: block;
          background: white;
          overflow: auto;
          width: 100%;
          padding: 10px 0;
          color: black;
          position: relative;
          span {
            display: inline-block;
            float: left;
          }
          .icon {
            width: 10%;
            padding-left: 5vw;
            img {
              width: 25px;
            }
          }
          .icon-content {
            width: 90%;
            padding-right: 5vw;
            padding-left: 10vw;
          }
          svg {
            position: absolute;
            right: 5vw;
            top: 50%;
            transform: translateY(-50%);
            font-size: 150%;
            color: #ccc;
          }
        }
        :not(:last-child) {
          border-bottom: 1px solid #ddd;
        }
      }
    }
  }

  .other-payment {
    margin-top: 5vh;
    .section-title {
      color: #676767;
      font-size: 90%;
      padding: 0 5vw;
    }
    ul {
      margin-top: 5px;
      li {
        display: flex;
        background: white;
        padding: 10px 5vw;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        align-items: center;
        img {
          max-width: 35px;
        }
      }
      span {
        display: inline-block;
        &.icon {
          width: 10%;
        }
        &.icon-content {
          padding-left: 5vw;
          width: 90%;
        }
      }
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 25px;
      float: right;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 2px;
      bottom: 2.3px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: #7fc66f;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #7fc66f;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  }
`;

function PaymentMethodPage(props) {
  const { match, history, paymentMethodsData } = props;
  const { cards, applePay } = paymentMethodsData;

  function getCardListPropsByCard(card) {
    return {
      id: card.id,
      url: match.url,
      number: card.number,
      issuedBy: card.issuedBy
    }
  }

  return (
    <>
      <TopBarStyles>
        <div
          className="back-operation"
          onClick={() => history.push("/account")}
        >
          <span className="icon">
            <AiOutlineLeft />
          </span>
          <span className="icon-text">back</span>
        </div>

        <div className="page-name"> payment methods </div>
      </TopBarStyles>

      <PaymentMethodPageStyles>
        <div className="card-payment">
          <div className="section-title">
            <p>
              CREDIT AND DEBIT CARDS
              <Link to={"/account/payment-methods/add"}> Add </Link>
            </p>
          </div>
          <ul>
          {
            (cards.map(card => {
              let cardListProps = getCardListPropsByCard(card);
              return <CardList key={card.id} {...cardListProps} />
            }))
          }
          </ul>
        </div>

        <div className="other-payment">
          <div className="section-title">OTHER PAYMENT METHODS</div>
          <ul>
            <li>
              <span className="icon">
                <img src={ApplePay} alt="apple pay icon" />
              </span>
              <span className="icon-content">
                Apple Pay
                <label className="switch">
                  <input type="checkbox" defaultChecked={applePay.enabled} />
                  <span className="slider round"></span>
                </label>
              </span>
            </li>
          </ul>
        </div>
      </PaymentMethodPageStyles>
    </>
  );
}

export default PaymentMethodPage;
