import React, { useState, useCallback } from "react";
import TopupPayment from "./topup-payment";

export default function TopupPoints({ setTopupPoints }) {
  const [points, setPonits] = useState("");
  const [show, setShow] = useState(false);

  const points_Data = [
    {
      name: "100 pts",
      value: "100",
    },
    {
      name: "500 pts",
      value: "500",
    },
    {
      name: "1000 pts",
      value: "1000",
    },
    {
      name: "5,000 pts",
      value: "5000",
    },
    {
      name: "10,000 pts",
      value: "10000",
    },
    {
      name: "20,000 pts",
      value: "20000",
    },
  ];

  const handleClick = useCallback((e, item) => {
    e.preventDefault();
    setPonits(item.value);
  }, []);

  return (
    <>
      {show ? (
        <TopupPayment
          points={points}
          setShow={setShow}
          setTopupPoints={setTopupPoints}
        />
      ) : (
        <div
          className="d-flex justify-content-center text-dark"
          style={{ padding: "20px 0px " }}
        >
          <div className="col-sm-6 col-md-6 col-lg-7 topupPoint px-2">
            <h1 style={{ margin: "20px 10px", fontWeight: "200" }}>
              Top-up points
            </h1>
            <p style={{ margin: "15px 10px", fontWeight: "bolder" }}>
              Top-up Amount
            </p>
            <p style={{ margin: "20px 10px" }}>select from preset</p>
            <span style={{ margin: "10px 10px" }}>
              1 memberShip Point= 1 US Dollar
            </span>

            <div className="row row-cols-3 mt-1 px-2">
              {points_Data.map((item, id) => (
                <div className="col py-3 card-hover" key={id}>
                  <button
                    className="btn btn-outline-secondary mb-1 form-control text-center px-2 py-3 roundedCustom h-100 shadow p-1"
                    value={item.value}
                    type="button"
                    onClick={(e) => handleClick(e, item)}
                  >
                    {item.name}
                  </button>
                </div>
              ))}
            </div>
            <div className="py-2 px-2">
              <input className="form-control py-2" placeholder="Enter Amount" />
            </div>

            <div className="my-2 px-2">
              <button
                className="btn btn-primary btn-block float-end mb-2"
                disabled={points === ""}
                onClick={() => setShow(!show)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
