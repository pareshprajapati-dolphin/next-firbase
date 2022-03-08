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
      <div className="navbar shadow-sm p-3 bg-white rounded" expand="md">
        <button className="header-toogle" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div class="header_img">
          <button className="logout" onClick={signOut}>
            <FontAwesomeIcon icon={faPowerOff} />
          </button>
        </div>
      </div>
    </>
  );
}
