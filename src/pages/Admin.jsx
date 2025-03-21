import React, { useEffect, useState } from "react";
import { FaMoon, FaSun, FaGraduationCap } from "react-icons/fa6";
import { BiSolidBook, BiSolidDoorOpen } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { IoIosPeople, IoMdCreate } from "react-icons/io";
import logo from "../assets/valuemax-logo.png";
import Sidebar from "../components/Sidebar";
import DashboardLinkButtons from "../components/DashboardLinkButtons";

const Admin = () => {
  const [darkMode, setDarkMode] = useState(
    !(localStorage.getItem("theme") === "dark")
  );

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

  const dashboardBtnCss =
    "flex flex-col justify-center items-center min-w-[280px] w-full";
  const dashboardLinkCss =
    "bg-white rounded-lg min-w-[280px] text-black p-2 mr-4 mt-2 grow";

  const studentIcon = <GoPerson size={70} />;
  const courseIcon = <BiSolidBook size={70} />;
  const adminIcon = <IoIosPeople size={70} />;
  const generateCertificateIcon = <IoMdCreate size={70} />;
  const manageCertificateIcon = <FaGraduationCap size={70} />;
  return (
    <div
      className={
        darkMode
          ? "flex flex-row bg-slate-800 roboto-uniquifier"
          : "flex flex-row bg-blue-700 roboto-uniquifier"
      }
    >
      <div>
        <div
          className={
            darkMode
              ? "border-r border-b border-slate-500 p-4 hidden sm:block"
              : "border-r border-b border-blue-600 p-4 hidden sm:block"
          }
        >
          <img src={logo} alt="valuemax-logo.png" />
        </div>
        <Sidebar mode={darkMode} />
      </div>
      <main
        className={
          darkMode
            ? "flex bg-slate-600 w-[2000px] flex-col"
            : "flex bg-blue-600 w-[2000px] flex-col"
        }
      >
        <div
          className={
            darkMode
              ? "bg-slate-800 h-[69px] w-full flex justify-between sm:justify-end"
              : "bg-blue-700 h-[69px] w-full flex justify-between sm:justify-end"
          }
        >
          <div className={darkMode ? "sm:hidden p-4" : "sm:hidden p-4"}>
            <img src={logo} alt="valuemax-logo.png" />
          </div>
          <div className="flex">
            <button
              className="mr-6 text-white"
              onClick={() => {
                setDarkMode((prevState) => !prevState);
              }}
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button className="w-[100px] bg-white flex rounded-lg justify-between items-center px-2 py-1 my-4 mr-4 text-black">
              <BiSolidDoorOpen size={20} />
              Log Out
            </button>
          </div>
        </div>
        <div className="m-6 flex flex-col items-start">
          <h2 className="text-4xl mb-4 text-white">Dashboard</h2>
          <div className="flex flex-row flex-wrap">
            <DashboardLinkButtons
              destination="/student-management"
              icon={studentIcon}
              title="Student Management"
            />
            <DashboardLinkButtons
              destination="/"
              icon={courseIcon}
              title="Course Management"
            />
            <DashboardLinkButtons
              destination="/"
              icon={adminIcon}
              title="Admin Management"
            />
            <DashboardLinkButtons
              destination="/"
              icon={generateCertificateIcon}
              title="Generate Certificate"
            />
            <DashboardLinkButtons
              destination="/"
              icon={manageCertificateIcon}
              title="Manage Certificate"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
