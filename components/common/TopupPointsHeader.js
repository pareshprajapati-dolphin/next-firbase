import React from "react";

export default function TopupPointsHeader({ points }) {
  return (
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
  );
}
