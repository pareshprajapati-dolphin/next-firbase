import {
  faArrowLeft,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useCallback } from "react";
import useFullPageLoader from "../../hooks/useFullPageLoader";
import Pagination from "../Table/Pagination";

export default function TransctionHistory({ setShowTrans }) {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [user, setUser] = useState([]);
  const [test, setTest] = useState(false);
  const [currenPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(50);
  const [pageLimit, setPageLimit] = useState(5);
  const limit = [5, 10, 15, 20];

  const columns = [
    { title: "Date", key: "date" },
    { title: "Transaction", key: "transaction" },
    {
      title: "Amount",
      key: "amount",
    },
    {
      title: "Status",
      key: "status",
    },
    {},
  ];

  useEffect(() => {
    const getData = async () => {
      showLoader();
      const req = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await req.json();
      setUser(data);
      hideLoader();
    };

    getData();
  }, []);

  const subData = [
    {
      name: "Hotel",
      points: "1000pts",
      status: "procesing",
    },
    {
      name: "Farm",
      points: "2000pts",
      status: "procesing",
    },
    {
      name: "Retail",
      points: "3000pts",
      status: "procesing",
    },
  ];

  const handleChangePageNumber = useCallback(
    (num) => {
      console.log(num);
      setCurrentPage(num);
    },
    [setCurrentPage]
  );

  return (
    <>
      <div className="navbar shadow p-3 bg-white" style={{ fontSize: "19px" }}>
        <button className="btn" onClick={() => setShowTrans(false)}>
          <FontAwesomeIcon
            style={{ margin: "0px 10px 0px 0px" }}
            icon={faArrowLeft}
          />
          Back
        </button>
      </div>
      <div
        className="d-flex justify-content-center"
        style={{ padding: "20px 0px " }}
      >
        <div className="topupPoint">
          <div className="px-3">
            <div className="col-sm-6 col-md-6 col-lg-12  px-2">
              <h1 style={{ margin: "20px 10px", fontWeight: "200" }}>
                Transction History
              </h1>
            </div>
            <div className="row px-3">
              <div className="col-sm-12 col-md-6 col-lg-7">
                <label className="label">Transction Type</label>
                <select
                  className="select"
                  // {...selectValue}
                  // onChange={(e) => {
                  //   setValue(e.target.value);
                  // }}
                >
                  <option value="">Current Type</option>
                  <option value="A">Current Type A</option>
                  <option value="B">Current Type A</option>
                </select>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-5">
                <label className="label">Time period</label>
                <select
                  className="select"
                  // {...selectValue}
                  // onChange={(e) => {
                  //   setValue(e.target.value);
                  // }}
                >
                  <option value="">Current Type</option>
                  <option value="A">Current Type A</option>
                  <option value="B">Current Type A</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-12 px-2">
              <table className="table">
                <thead>
                  <tr>
                    {columns?.map((column, idx) => (
                      <th key={idx}> {column.title} </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {user &&
                    user.map((user, index) => (
                      <tr key={index}>
                        <td>{user.name}</td>
                        <td>
                          {user.username}
                          {subData.map((data) => (
                            <>
                              {test[index] ? (
                                <>
                                  <br /> {data.name}
                                </>
                              ) : null}
                            </>
                          ))}
                        </td>
                        <td>
                          {user.email}
                          {subData.map((data) => (
                            <>
                              {test[index] ? (
                                <>
                                  <br /> {data.points}
                                </>
                              ) : null}
                            </>
                          ))}
                        </td>
                        <td>
                          {user.phone}
                          {subData.map((data) => (
                            <>
                              {test[index] ? (
                                <>
                                  <br /> {data.status}
                                </>
                              ) : null}
                            </>
                          ))}
                        </td>
                        <td>
                          <FontAwesomeIcon
                            icon={test[index] ? faChevronUp : faChevronDown}
                            onClick={() =>
                              setTest((prev) => ({
                                ...prev,
                                [index]: !test[index],
                              }))
                            }
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="row px-2 my-2">
              <div className="col-sm-12 col-mb-6  col-lg-8">
                <Pagination
                  activePage={currenPage}
                  totalItemsCount={totalPages}
                  handleChangePageNumber={handleChangePageNumber}
                />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <label> Items per Page:</label>
                <select
                  className="w-50 rounded-lg f-50"
                  onChange={(e) => setPageLimit(e.target.value)}
                >
                  {limit.map((num) => (
                    <option>{num}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export async function getServerSideProps() {
//   const req = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await req.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
