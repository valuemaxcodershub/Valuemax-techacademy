import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaCircleUser,
  FaHouse,
  FaBook,
  FaUser,
  FaUserTie,
  FaCertificate,
  FaAngleDown,
} from "react-icons/fa6";
import darkMode from "./Header";

const Sidebar = (props) => {
  const [isCertificationOpen, setIsCertificationOpen] = useState(false);
  const [isCourseManagementOpen, setIsCourseManagementOpen] = useState(false);
  const [isStudentManagementOpen, setIsStudentManagementOpen] = useState(false);
  const [isAdminManagementOpen, setIsAdminManagementOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(
  //   localStorage.getItem("theme") === "dark"
  // );
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "darkMode");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    console.log("It works");
  }, [darkMode]);
  const navLinkActiveCss =
    "flex pt-3 justify-items-end mr-6 border-b border-yellow-200 text-cyan-400 rounded-lg pl-2 pr-2 pb-1";
  const navLinkNotActiveCss =
    "flex pt-3 justify-items-end mr-6 hover:border-b hover:border-yellow-200 hover:text-cyan-400 rounded-lg pl-2 pr-2";
  const navLinkBtnCss =
    "bg-transparent flex justify-between items-center pt-0 mt-1 mr-6 hover:border-b hover:border-yellow-200 hover:text-cyan-400 rounded-lg pl-2 pr-2 hide-outline pb-1";
  const btnNavLinkActiveCss =
    "pl-9 text-left pt-1 mr-6 border-b border-yellow-200 text-cyan-400 rounded-lg pr-2";
  const btnNavLinkNotActiveCss =
    "pl-9 text-left pt-1 mr-6 hover:border-b hover:border-yellow-200 hover:text-cyan-400 rounded-lg pr-2";
  return (
    <aside className="min-w-[290px] md:w-[290px] h-screen hidden sm:block">
      <div
        className={
          darkMode
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
        <button
          className={navLinkBtnCss}
          onClick={() => {
            setIsCourseManagementOpen((prevState) => !prevState);
          }}
        >
          <div className="flex items-center">
            <FaBook size={25} className="pr-2" />
            Course Management
          </div>
          <FaAngleDown
            size={20}
            className={`pr-1 ${isCourseManagementOpen ? "rotate-180" : ""} `}
          />
        </button>
        {isCourseManagementOpen && (
          <>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? btnNavLinkActiveCss : btnNavLinkNotActiveCss
              }
            >
              Add New Course
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? btnNavLinkActiveCss : btnNavLinkNotActiveCss
              }
            >
              Manage Courses
            </NavLink>
          </>
        )}
        <button
          className={navLinkBtnCss}
          onClick={() => {
            setIsStudentManagementOpen((prevState) => !prevState);
          }}
        >
          <div className="flex items-center">
          <FaUser size={25} className="pr-2" />
          Student Management
          </div>
          <FaAngleDown
            size={20}
            className={`pr-1 ${isStudentManagementOpen ? "rotate-180" : ""} `}
          />
        </button>
        {isStudentManagementOpen && (
          <>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? btnNavLinkActiveCss : btnNavLinkNotActiveCss
              }
            >
              Add New Student
            </NavLink>
            <NavLink
              to="/student-management"
              className={({ isActive }) =>
                isActive ? btnNavLinkActiveCss : btnNavLinkNotActiveCss
              }
            >
              Manage Students
            </NavLink>
          </>
        )}
        <button
          className={navLinkBtnCss}
          onClick={() => {
            setIsAdminManagementOpen((prevState) => !prevState);
          }}
        >
          <div className="flex items-center">
          <FaUserTie size={25} className="pr-2" />
          Admin Management
          </div>
          <FaAngleDown
            size={20}
            className={`pr-1 ${isAdminManagementOpen ? "rotate-180" : ""} `}
          />
        </button>
        {isAdminManagementOpen && (
          <>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? btnNavLinkActiveCss : btnNavLinkNotActiveCss
              }
            >
              Add New Admin
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? btnNavLinkActiveCss : btnNavLinkNotActiveCss
              }
            >
              Manage Admins
            </NavLink>
          </>
        )}
        <button
          className={navLinkBtnCss}
          onClick={() => {
            setIsCertificationOpen((prevState) => !prevState);
          }}
        >
          <div className="flex items-center">
            <FaCertificate size={26} className="pr-2" />
            <p>Certification</p>
          </div>
          <FaAngleDown
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
