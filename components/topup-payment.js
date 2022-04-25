import React, { useState } from "react";
import TopupPointsHeader from "./common/TopupPointsHeader";
import OrderConform from "./order-conform";
import { findDebitCardType, stripeCardExpirValidation } from "./utils";

export default function TopupPayment({ points, setShow, setTopupPoints }) {
  const [paymentDatils, setPaymentDatils] = useState(false);
  const [orderConfirm, setorderConfirm] = useState(false);
  const [cardType, setCardType] = useState();

  const [state, dispatch] = useState({
    card: "",
    expiry: "",
    securityCode: "",
  });

  const handleInputData = (e) => {
    dispatch({
      ...state,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "card" && cardType)
      handleValidations(e.target.name, e.target.value);
  };

  const handleBlur = (e) => {
    console.log(e.target.name, e.target.value);
    handleValidations(e.target.name, e.target.value);
  };

  const handleValidations = (type, value) => {
    console.log(type);
    let errorText;
    switch (type) {
      case "card":
        setCardType(findDebitCardType(value));
        break;
      // case "expiry":
      //   errorText =
      //     value === "" ? "Required" : stripeCardExpirValidation(value);
      //   break;
      case "securityCode":
        errorText = value === "" ? "Required" : minLength(3)(value);
        break;
      default:
        break;
    }
  };
  return (
    <>
      {paymentDatils ? (
        <>
          <TopupPointsHeader points={points} />
          <div
            className="d-flex justify-content-center text-dark"
            style={{ padding: "20px 0px " }}
          >
            <div className="col-sm-6 col-md-5 col-lg-7 topupPoint px-2">
              <h1 style={{ margin: "20px 10px 20px 10px", fontWeight: "bold" }}>
                Payment Details
              </h1>
              <p style={{ margin: "10px 10px", fontWeight: "200" }}>
                credir card *902
              </p>
            </div>
          </div>
          <div
            className="d-flex justify-content-center text-dark"
            style={{ padding: "20px 0px " }}
          >
            <div className="col-sm-6 col-md-5 col-lg-7 topupPoint px-2">
              <p style={{ margin: "20px 10px 20px 10px" }}>
                By submmitting this order, you agree to our term & condition and
                Privacy Policy
              </p>
              <div className="button">
                <button
                  className="btn clickpay"
                  onClick={() => setPaymentDatils(!paymentDatils)}
                >
                  Back
                </button>
                <button
                  className="clickpaynext"
                  onClick={() => {
                    setorderConfirm(!orderConfirm),
                      setPaymentDatils(!paymentDatils);
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      ) : orderConfirm ? (
        <OrderConform setTopupPoints={setTopupPoints} points={points} />
      ) : (
        <>
          <TopupPointsHeader points={points} />
          <div
            className="d-flex justify-content-center text-dark"
            style={{ padding: "20px 0px " }}
          >
            <div className="col-sm-6 col-md-5 col-lg-7 px-2 topupPoint">
              <h1 style={{ margin: "20px 10px 20px 10px", fontWeight: "200" }}>
                Payment Details
              </h1>

              <div className="row">
                <div className="col-sm-6 col-md-4 ">
                  <ul
                    className="border-end h-100 pl-1"
                    style={{ listStyle: "none" }}
                  >
                    <li className="paymentDetail">
                      <a className="border-buttom" href="#">
                        Credit Card
                      </a>
                    </li>
                    <hr className="linetage" />
                    <li className="paymentDetail">
                      <a href="#">Bank trasfer</a>
                    </li>
                    <hr className="linetage" />
                  </ul>
                </div>
                <div className="col-sm-6 col-md-8 ">
                  <div className="right-side">
                    <div className="input-text">
                      <input
                        className="inputText"
                        type="text"
                        name="card"
                        data-slots="0"
                        maxLength={16}
                        data-accept="\d"
                        onChange={handleInputData}
                        required
                      />
                      <span>{cardType}</span>
                    </div>
                    <div className="input-text">
                      <input
                        className="inputText"
                        type="text"
                        name="expiry"
                        data-slots="0"
                        data-accept="\d"
                        onChange={handleInputData}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                    <div className="input-text ">
                      <input
                        className="inputText"
                        type="text"
                        id="user_card_number_input"
                        placeholder="Card Number*"
                        name="securityCode"
                        data-slots="0"
                        maxLength={3}
                        data-accept="\d"
                        onChange={handleInputData}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                    <div className="button">
                      <button
                        className="btn clickpay"
                        onClick={() => setShow(false)}
                      >
                        Back
                      </button>
                      <button
                        className="clickpaynext"
                        onClick={() => setPaymentDatils(!paymentDatils)}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
