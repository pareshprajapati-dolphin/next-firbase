import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { faBars, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Header({ toggleSidebar }) {
  const router = useRouter();

  const signOut = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <>
      <div className="navbar shadow bg-white " expand="md">
        <button className="header-toogle" onClick={toggleSidebar}>
          Project logo
        </button>
        <div classname="header_img">
          <p style={{ margin: "7px 0px" }}>
            Member Points :
            <span style={{ margin: "0px 5px", color: "#c7883e" }}>3000</span>
          </p>
        </div>
      </div>
    </>
  );
}
