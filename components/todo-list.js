// import { signInWithPopup } from "firebase/auth";
// import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
// import { auth, db, provider } from "../firebase";

export default function TodoList({ point }) {
  const [todos, setTodos] = useState();

  //   const LoginwithGoogle = () => {
  //     signInWithPopup(auth, provider);
  //   };

  return (
    <div className="container">
      <p> this the point page :---- {point}</p>
    </div>
  );
}
