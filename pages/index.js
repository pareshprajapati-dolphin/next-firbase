// import TodoList from "../components/todo-list";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { app, database } from "../components/config/firebase";
// import { addDoc, collection, getDocs } from "firebase/firestore";

import Layout from "../components/common/layout";
import TodoList from "../components/todo-list";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import TopupPoints from "../components/TopupPoints";
import TransctionHistory from "../components/TransctionHistory";

Home.title = "Home";
export default function Home(props) {
  const [topupPoints, setTopupPoints] = useState(false);
  const [showTrans, setShowTrans] = useState(false);

  return (
    <>
      <Head>
        <title> Basic Authentication Example | Home page</title>
        <meta name="description" content="Meta description for the home page" />
      </Head>
      <Layout>
        {topupPoints ? (
          <TopupPoints setTopupPoints={setTopupPoints} />
        ) : showTrans ? (
          <TransctionHistory setShowTrans={setShowTrans} />
        ) : (
          <>
            <div className="container">
              <div className="mr-3 mt-4 d-flex justify-content-between">
                <h1 className="mt-2">Account Summary Page</h1>
                <button
                  className="btn btn-secondary "
                  style={{ margin: "11px 0px" }}
                  type="button"
                  onClick={() => {
                    setTopupPoints(!topupPoints);
                  }}
                >
                  Top-Up Points
                </button>
              </div>
            </div>
            <div className="container">
              <div className="row mt-3">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-5">
                  <h3>Points Allocation</h3>
                  <div className="col-sm-6 col-md-4 col-lg-10 topupPoint">
                    <p
                      style={{
                        padding: "10px",
                        marginBottom: "0px ",
                        fontWeight: "bolder",
                      }}
                    >
                      Hotel
                      <span style={{ float: "right", color: "#c7883e" }}>
                        1000
                      </span>
                      <hr className="linetage" />
                    </p>
                    <p
                      style={{
                        padding: "10px",
                        marginBottom: "0px ",
                        fontWeight: "bold",
                      }}
                    >
                      Farm
                      <span style={{ float: "right", color: "#c7883e" }}>
                        2000
                      </span>
                      <hr className="linetage" />
                    </p>

                    <p
                      style={{
                        padding: "10px",
                        marginBottom: "0px ",
                        fontWeight: "bolder",
                      }}
                    >
                      Retail
                      <span style={{ float: "right", color: "#c7883e" }}>
                        3000
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <h2>points Allocation 3 char design</h2>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-5 mt-4">
                <h3>Points Allocation</h3>
                <div className="col-sm-6 col-md-4 col-lg-10 topupPoint">
                  <p
                    style={{
                      padding: "10px",
                      marginBottom: "0px ",
                      fontWeight: "bolder",
                    }}
                  >
                    Living
                    <span
                      style={{
                        float: "right",
                        color: "#c7883e",
                        padding: "0px 2px ",
                      }}
                    >
                      1000
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        style={{ marginLeft: "5px" }}
                      />
                    </span>
                    <hr className="linetage" />
                  </p>
                  <p
                    style={{
                      padding: "10px",
                      marginBottom: "0px ",
                      fontWeight: "bold",
                    }}
                  >
                    Farmimg
                    <span
                      style={{
                        float: "right",
                        color: "#c7883e",
                        padding: "0px 2px ",
                      }}
                    >
                      2000
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        style={{ marginLeft: "7px" }}
                      />
                    </span>
                    <hr className="linetage" />
                  </p>

                  <p
                    style={{
                      padding: "10px",
                      marginBottom: "0px ",
                      fontWeight: "bolder",
                    }}
                  >
                    Manufacturing
                    <span
                      style={{
                        float: "right",
                        color: "#c7883e",
                        padding: "0px 2px",
                      }}
                    >
                      3000
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        style={{ marginLeft: "7px", color: "#c7883e" }}
                      />
                    </span>
                  </p>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-3 topupPoint ">
                <button
                  className="list-group-item"
                  onClick={() => setShowTrans(!showTrans)}
                >
                  Transction History
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ float: "right", marginTop: "7px" }}
                  />
                </button>
              </div>
            </div>
          </>
        )}
      </Layout>
    </>
  );
}
