// import TodoList from "../components/todo-list";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { app, database } from "../components/config/firebase";
// import { addDoc, collection, getDocs } from "firebase/firestore";

import Layout from "../components/common/layout";
import TodoList from "../components/todo-list";

export default function Home(props) {
  const [points, setPonits] = useState("");
  const [component, setComponet] = useState(false);
  const button_Data = [
    {
      name: "Name",
      value: "name",
    },
    {
      name: "Class",
      value: "class",
    },
    {
      name: "Age",
      value: "age",
    },
    {
      name: "Subjects",
      value: "subjects",
    },
    {
      name: "School",
      value: "school",
    },
    {
      name: "School1",
      value: "school1",
    },
  ];

  const handleClick = useCallback(
    (e, item) => {
      e.preventDefault();
      setPonits(item.value);
    },
    [points]
  );

  return (
    <>
      <Layout>
        <div className="container-fluid">
          <h1>Hi this the home page </h1>
          <p>You&apos;re logged in with Next.js & JWT!!</p>
        </div>
        {component ? (
          <TodoList point={points} />
        ) : (
          <>
            <div className="container bg-white">
              <div className="row">
                {button_Data.map((item, id) => (
                  <div className="col-md-4 p-3 card-hover" key={id}>
                    <button
                      className="btn btn-outline-secondary mb-1 form-control text-center"
                      value={item.value}
                      onClick={(e) => handleClick(e, item)}
                    >
                      {item.name}
                    </button>
                  </div>
                ))}
                <hr />
                <div>
                  <button
                    className="btn btn-primary btn-block float-end mb-2"
                    disabled={points === ""}
                    onClick={() => setComponet(!component)}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </Layout>
    </>
  );
}
