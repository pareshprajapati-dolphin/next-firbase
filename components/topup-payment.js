import React, { useState } from "react";
import OrderConform from "./order-conform";

export default function TopupPayment({ points, setShow, setTopupPoints }) {
  const [paymentDatils, setPaymentDatils] = useState(false);
  const [orderConfirm, setorderConfirm] = useState(false);

  return (
    <>
      {orderConfirm ? null : (
        <div
          className="d-flex justify-content-center"
          style={{ padding: "20px 0px " }}
        >
          <div className="col-sm-6 col-md-5 col-lg-7 topupPoint px-2">
            <h1 style={{ margin: "20px 10px 20px 10px", fontWeight: "200" }}>
              Top-up points
            </h1>
            <p style={{ margin: "10px 10px", fontWeight: "bolder" }}>
              Order Summary
            </p>
            <p style={{ margin: "10px 10px" }}>
              Points top-up Amount:
              <strong style={{ float: "right", fontWeight: "bolder" }}>
                {points} pts
              </strong>
            </p>
            <span style={{ margin: "10px 10px" }}>
              1 memberShip Point = 1 US Dollar
            </span>
            <hr className="linetage" />
            <p style={{ margin: "10px 10px 30px 10px" }}>
              Order Total :
              <strong style={{ float: "right", fontWeight: "bolder" }}>
                USD {points}
              </strong>
            </p>
          </div>
        </div>
      )}
      {paymentDatils ? (
        <>
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
                Privacy Policy{" "}
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
                    {" "}
                    <input
                      className="inputText"
                      type="text"
                      id="user_card_number_input"
                      placeholder="Card Number*"
                      onkeyup="userCardNumber(this.value)"
                      data-slots="0"
                      data-accept="\d"
                      require
                    />{" "}
                  </div>
                  <div className="input-text">
                    <input
                      className="inputText"
                      type="text"
                      onkeyup="usercardcvv(this.value)"
                      placeholder="Expiration Date*"
                      data-slots="MY"
                      require
                    />{" "}
                  </div>
                  <div className="input-text ">
                    {" "}
                    <input
                      className="inputText"
                      type="text"
                      placeholder="CVV*"
                      data-slots="0"
                      data-accept="\d"
                      size="3"
                      require
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
      )}
    </>
  );
}
