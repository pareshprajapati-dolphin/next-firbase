import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faGauge,
  faList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ isOpen, toggle }) {
  return (
    <>
      <div className={isOpen ? "sidebar" : "sidebar-is-open"}>
        <nav className="nav">
          <div>
            <div className="nav_logo">
              <span className="nav_logo-name">Next js</span>
              <FontAwesomeIcon
                className="menu-close-icon"
                icon={faClose}
                onClick={toggle}
              />
            </div>

            <ul className="nav_list">
              <li className="nav_link ">
                <Link href="/">
                  <a>
                    <FontAwesomeIcon className="nav_icon" icon={faGauge} />
                    DashBoard
                  </a>
                </Link>
              </li>
              <li className="nav_link">
                <Link href="/categoryList">
                  <a>
                    <FontAwesomeIcon className="nav_icon" icon={faList} />
                    Category
                  </a>
                </Link>
              </li>

              <li className="nav_link ">
                <Link href="/productBrand">
                  <a>
                    <FontAwesomeIcon className="nav_icon" icon={faGauge} />
                    Product Brand
                  </a>
                </Link>
              </li>

              <li className="nav_link ">
                <Link href="/productList">
                  <a>
                    {" "}
                    <FontAwesomeIcon className="nav_icon" icon={faList} />
                    Product
                  </a>
                </Link>
              </li>

              <li className="nav_link ">
                <Link href="/user">
                  <a>
                    <FontAwesomeIcon className="nav_icon" icon={faUser} />
                    User
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
