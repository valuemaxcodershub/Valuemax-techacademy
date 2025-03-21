import React, { useEffect, useState } from "react";
import logo from "../assets/valuemax-logo.png";
import { FaMoon, FaSun } from "react-icons/fa6";
import { BiSolidDoorOpen } from "react-icons/bi";

const Header = (props) => {
  // const [darkMode, setDarkMode] = useState(
  //   !(localStorage.getItem("theme") === "dark")
  // );

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "darkMode");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  //   console.log("It works");
  // }, [darkMode]);
  return (
    <div className="flex">
      <div
        className={
          props.darkMode
            ? "border-r border-b border-slate-500 p-4 bg-slate-800 min-w-[290px] md:w-[290px]"
            : "border-r border-b border-blue-600 p-4 bg-blue-700 min-w-[290px] md:w-[290px]"
        }
      >
        <img src={logo} alt="valuemax-logo.png" />
      </div>
      <div
        className={
          props.darkMode
            ? "bg-slate-800 h-[69px] w-full flex justify-between sm:justify-end"
            : "bg-blue-700 h-[69px] w-full flex justify-between sm:justify-end"
        }
      >
        <div className={props.darkMode ? "sm:hidden p-4" : "sm:hidden p-4"}>
          <img src={logo} alt="valuemax-logo.png" />
        </div>
        <div className="flex">
          <button
            className="mr-6 text-white"
            onClick={() => {
              props.setDarkMode((prevState) => !prevState);
            }}
          >
            {props.darkMode ?  <FaSun size={20} /> :<FaMoon size={20} />}
          </button>
          <button className="w-[100px] bg-white flex rounded-lg justify-between items-center px-2 py-1 my-4 mr-4">
            <BiSolidDoorOpen size={20} />
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
