import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaCircleUser,
  FaHouse,
  FaBook,
  FaUser,
  FaUserTie,
  FaAngleUp,
  FaCertificate,
} from "react-icons/fa6";
import logo from "../assets/valuemax-logo.png";

const Sidebar = (props) => {
  const [isCertificationOpen, setIsCertificationOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(
  //   localStorage.getItem("theme") === "dark"
  // );
  useEffect(() => {
    if (props.mode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "darkMode");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    console.log("It works");
  }, [props.mode]);
  const navLinkActiveCss =
    "flex pt-3 justify-items-end mr-6 border-b border-yellow-200 text-cyan-400 rounded-lg pl-2 pr-2";
  const navLinkNotActiveCss =
    "flex pt-3 justify-items-end mr-6 hover:border-b hover:border-yellow-200 hover:text-cyan-400 rounded-lg pl-2 pr-2";
  const navLinkBtnCss =
    "bg-transparent flex justify-between items-center p-0 mt-2 mr-6 hover:border-b hover:border-yellow-200 hover:text-cyan-400 rounded-lg pl-2 pr-2 hide-outline";
  const btnNavLinkActiveCss =
    "pl-9 text-left pt-3 mr-6 border-b border-yellow-200 text-cyan-400 rounded-lg pl-2 pr-2";
  const btnNavLinkNotActiveCss =
    "pl-9 text-left pt-3 mr-6 hover:border-b hover:border-yellow-200 hover:text-cyan-400 rounded-lg pl-2 pr-2";
  return (
    <aside className="min-w-[260px] md:w-[260px] h-screen hidden sm:block">
      <div
        className={
          props.mode
            ? "border-r border-b border-slate-500 p-4"
            : "border-r border-b border-blue-600 p-4"
        }
      >
        <img src={logo} alt="valuemax-logo.png" />
      </div>
      <div
        className={
          props.mode
            ? "p-5 border-b border-slate-500"
            : "p-5 border-b border-blue-600"
        }
      >
        <FaCircleUser size={100} className="mx-auto" color="white" />
        <h3 className="text-2xl text-white">Administrator</h3>
      </div>
      <nav className="flex flex-col mt-2  text-white pl-3 text-lg">
        <NavLink
          to="/admin"
          end="true"
          className={({ isActive }) =>
            isActive ? navLinkActiveCss : navLinkNotActiveCss
          }
        >
          <FaHouse size={28} className="pr-2" />
          Dashboard
        </NavLink>
        <NavLink
          to="/"
          end="true"
          className={({ isActive }) =>
            isActive ? navLinkActiveCss : navLinkNotActiveCss
          }
        >
          <FaBook size={25} className="pr-2" />
          Course Management
        </NavLink>
        <NavLink
          to="/"
          end="true"
          className={({ isActive }) =>
            isActive ? navLinkActiveCss : navLinkNotActiveCss
          }
        >
          <FaUser size={25} className="pr-2" />
          Student Management
        </NavLink>
        <NavLink
          to="/"
          end="true"
          className={({ isActive }) =>
            isActive ? navLinkActiveCss : navLinkNotActiveCss
          }
        >
          <FaUserTie size={25} className="pr-2" />
          Admin Management
        </NavLink>
        <button
          to="/"
          end="true"
          className={navLinkBtnCss}
          onClick={() => {
            setIsCertificationOpen((prevState) => !prevState);
          }}
        >
          <div className="flex items-center">
            <FaCertificate size={26} className="pr-2" />
            <p>Certification</p>
          </div>
          <FaAngleUp
            size={20}
            className={`pr-1 ${isCertificationOpen ? "rotate-180" : ""} `}
          />
        </button>
        {isCertificationOpen && (
          <>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? btnNavLinkActiveCss : btnNavLinkNotActiveCss
              }
            >
              Generate Certificate
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? btnNavLinkActiveCss : btnNavLinkNotActiveCss
              }
            >
              Manage Certificate
            </NavLink>
          </>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
