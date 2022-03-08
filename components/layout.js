import Link from "next/link";
import React, { useState, useEffect } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user")) setUser(localStorage.getItem("user"));
  }, []);

  // only show nav when logged in
  if (!user) return null;

  return (
    <>
      <>
        <div className="App wrapper">
          <Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
          <div className="content">
            <Header toggleSidebar={toggleSidebar} />
            <div>{children}</div>
          </div>
        </div>
      </>
    </>
  );
}
