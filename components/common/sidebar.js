import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightArrowLeft,
  faArrowRightFromBracket,
  faClose,
  faDollarSign,
  faEnvelope,
  faGauge,
  faGear,
  faHeart,
  faIcons,
  faList,
  faMapLocation,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import UserImage from "../../public/images/userimage.jpg";
import { useRouter } from "next/router";

export default function Sidebar({ isOpen, toggle }) {
  const router = useRouter();
  const handleClick = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <>
      <div className={isOpen ? "sidebar" : "sidebar-is-open"}>
        <nav className="nav">
          <div>
            <div className="nav_logo">
              <div className="pull-left image">
                <Image
                  src={UserImage}
                  width={40}
                  height={40}
                  className="image-cricle"
                />
                <FontAwesomeIcon
                  className="menu-close-icon"
                  icon={faClose}
                  onClick={toggle}
                />
              </div>
              <div className="pull-left info">
                <p>user name</p>
              </div>
            </div>
            <ul className="nav_list">
              <li className="nav_link">
                <Link href="/">
                  <a className={router.pathname === "/" ? "active" : " null"}>
                    <FontAwesomeIcon className="nav_icon" icon={faUserCircle} />
                    Account
                  </a>
                </Link>
              </li>
              <li className="nav_link">
                <Link href="/user">
                  <a
                    className={router.pathname === "/user" ? "active" : " null"}
                  >
                    <FontAwesomeIcon className="nav_icon" icon={faDollarSign} />
                    Manage Point
                  </a>
                </Link>
              </li>

              <li className="nav_link ">
                <Link href="/productBrand">
                  <a>
                    <FontAwesomeIcon className="nav_icon" icon={faGauge} />
                    r+ destination
                  </a>
                </Link>
              </li>

              <li className="nav_link ">
                <Link href="/productList">
                  <a>
                    {" "}
                    <FontAwesomeIcon
                      className="nav_icon"
                      icon={faMapLocation}
                    />
                    My Trips
                  </a>
                </Link>
              </li>

              <li className="nav_link ">
                <Link href="/user">
                  <a>
                    <FontAwesomeIcon className="nav_icon" icon={faHeart} />
                    Favouries
                  </a>
                </Link>
              </li>
              <li className="nav_link">
                <Link href="/user">
                  <a>
                    <FontAwesomeIcon className="nav_icon" icon={faUser} />
                    The r+ membership
                  </a>
                </Link>
              </li>
              <li className="nav_link ">
                <Link href="/user">
                  <a>
                    <FontAwesomeIcon className="nav_icon" icon={faGear} />
                    Setiings
                  </a>
                </Link>
              </li>
              <li className="nav_link ">
                <Link href="/user">
                  <a>
                    <FontAwesomeIcon className="nav_icon" icon={faEnvelope} />
                    Contacts
                  </a>
                </Link>
              </li>
            </ul>

            <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
              <span className="lines"></span>{" "}
            </div>
            <li className="nav_link ">
              <Link href="/login">
                <a onClick={(e) => handleClick(e)}>
                  <FontAwesomeIcon
                    className="nav_icon"
                    icon={faArrowRightFromBracket}
                  />
                  Logout
                </a>
              </Link>
            </li>
          </div>
        </nav>
      </div>
    </>
  );
}
