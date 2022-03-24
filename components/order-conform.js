import React from "react";

export default function OrderConform({ setTopupPoints, points }) {
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ padding: "20px 0px " }}
      >
        <div className="col-sm-6 col-md-5 col-lg-7 topupPoint px-2">
          <h1 style={{ margin: "20px 10px 20px 10px", fontWeight: "200" }}>
            Your order is Confirmed!
          </h1>
          <p style={{ margin: "10px 10px" }}>we have recevied your order</p>
          <p style={{ margin: "20px 10px" }}>
            The verification process may take upto three(3) bussiness day.Onces
            verified, your account will be updates automatically
          </p>
        </div>
      </div>

      <div
        className="d-flex justify-content-center"
        style={{ padding: "20px 0px " }}
      >
        <div className="col-sm-6 col-md-5 col-lg-7 topupPoint px-2">
          <p style={{ margin: "30px 10px 0px 10px" }}>
            Referencd Number:
            <strong style={{ float: "right", fontWeight: "bolder" }}>
              2147582Abcd
            </strong>
          </p>

          <p style={{ margin: "10px 10px 30px 10px" }}>
            Order Time :<strong style={{ float: "right" }}>time update</strong>
          </p>
          <hr className="linetage" />

          <h1 style={{ margin: "20px 10px 20px 10px", fontWeight: "200" }}>
            Order Summary
          </h1>
          <div>
            <p style={{ margin: "10px 10px" }}>
              Points top-up Amount:
              <strong style={{ float: "right", fontWeight: "bolder" }}>
                {points} pts
              </strong>
            </p>
            <span style={{ margin: "10px 10px" }}>
              1 memberShip Point= 1 US Dollar
            </span>
            <hr className="linetage" />
            <p style={{ margin: "10px 10px 30px 10px" }}>
              Order Total :
              <strong style={{ float: "right", fontWeight: "bolder" }}>
                USD {points}
              </strong>
            </p>
          </div>
          <h1 style={{ margin: "20px 10px 20px 10px", fontWeight: "200" }}>
            Payment Method
          </h1>
          <span style={{ margin: "10px 10px" }}>credit card</span>

          <div className="button">
            <button
              className="clickpaynext"
              style={{ width: "220px", fontSize: "18px" }}
              onClick={() => setTopupPoints(false)}
            >
              Back to my Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
