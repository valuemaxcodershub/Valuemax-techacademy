import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaCircleUser,
  FaHouse,
  FaBook,
  FaUser,
  FaUserTie,
  FaAngleUp,
  FaCertificate,
  FaMoon,
  FaGraduationCap,
} from "react-icons/fa6";
import { BiSolidBook, BiSolidDoorOpen } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { IoIosPeople, IoMdCloudUpload } from "react-icons/io";
import logo from "../assets/valuemax-logo.png";

const Admin = () => {
  const [isCertificationOpen, setIsCertificationOpen] = useState(false);

  return (
    <div className="flex flex-row bg-blue-700">
      <aside className="min-w-[260px] md:w-[260px] h-screen">
        <div className="border-r border-b border-slate-400 p-4">
          <img src={logo} alt="valuemax-logo.png" />
        </div>
        <div className="p-5 border-r border-b border-slate-400">
          <FaCircleUser size={100} className="mx-auto" color="white" />
          <h3 className="text-2xl text-white">Administrator</h3>
        </div>
        <nav className="flex flex-col mt-2  text-white pl-3 text-lg">
          <NavLink
            to="/admin"
            end="true"
            className={({ isActive }) =>
              isActive
                ? "flex pt-3 justify-items-end mr-6 border-b border-yellow-200 text-cyan-400 rounded-lg pl-2 pr-2"
                : "flex pt-3 justify-items-end mr-6 hover:border-b hover:border-yellow-200 hover:text-cyan-400 rounded-lg pl-2 pr-2"
            }
          >
            <FaHouse size={28} className="pr-2" />
            Dashboard
          </NavLink>
          <NavLink
            to="/"
            end="true"
            className={({ isActive }) =>
              isActive
                ? "flex pt-3 justify-items-end mr-6 border-b border-yellow-200 text-cyan-400 rounded-lg pl-2 pr-2"
                : "flex pt-3 justify-items-end mr-6 hover:border-b hover:border-yellow-200 hover:text-cyan-400 rounded-lg pl-2 pr-2"
            }
          >
            <FaBook size={25} className="pr-2" />
            Course Management
          </NavLink>
          <NavLink
            to="/"
            end="true"
            className={({ isActive }) =>
              isActive
                ? "flex pt-3 justify-items-center mr-6 border-b border-yellow-200 text-cyan-400 rounded-lg pl-2 pr-2"
                : "flex pt-3 justify-items-center mr-6 hover:border-b hover:border-yellow-200 hover:text-cyan-400 rounded-lg pl-2 pr-2"
            }
          >
            <FaUser size={25} className="pr-2" />
            Student Management
          </NavLink>
          <NavLink
            to="/"
            end="true"
            className={({ isActive }) =>
              isActive
                ? "flex pt-3 justify-items-center mr-6 border-b border-yellow-200 text-cyan-400 rounded-lg pl-2 pr-2"
                : "flex pt-3 justify-items-center mr-6 hover:border-b hover:border-yellow-200 hover:text-cyan-400 rounded-lg pl-2 pr-2"
            }
          >
            <FaUserTie size={25} className="pr-2" />
            Admin Management
          </NavLink>
          <button
            to="/"
            end="true"
            className="bg-transparent flex justify-between items-center p-0 mt-2 mr-6 hover:border-b hover:border-yellow-200 hover:text-cyan-400 rounded-lg pl-2 pr-2 hide-outline"
            onClick={() => {
              setIsCertificationOpen((prevState) => !prevState);
              console.log("It worked");
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
                  isActive
                    ? "pl-9 text-left pt-3 mr-6 border-b border-yellow-200 text-cyan-400 rounded-lg pl-2 pr-2"
                    : "pl-9 text-left pt-3 mr-6 hover:border-b hover:border-yellow-200 hover:text-cyan-400 rounded-lg pl-2 pr-2"
                }
              >
                Create Certificate
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "pl-9 text-left pt-3 mr-6 border-b border-yellow-200 text-cyan-400 rounded-lg pl-2 pr-2"
                    : "pl-9 text-left pt-3 mr-6 hover:border-b hover:border-yellow-200 hover:text-cyan-400 rounded-lg pl-2 pr-2"
                }
              >
                Manage Certificate
              </NavLink>
            </>
          )}
        </nav>
      </aside>

      <main className="flex bg-slate-400 w-[2000px] flex-col">
        <div className="bg-blue-700 h-[69px] w-full flex flex-row-reverse">
          <button className="w-[100px] bg-white flex rounded-sm justify-between items-center px-2 py-1 my-4 mr-4">
            <BiSolidDoorOpen size={20} />
            Log Out
          </button>
          <button className="mr-6 text-white">
            <FaMoon size={20} />
          </button>
        </div>
        <div className="m-6 flex flex-col items-start">
          <h2 className="text-4xl mb-4 text-white">Dashboard</h2>
          <div className="flex flex-row flex-wrap">
            <Link
              to="/"
              className="bg-white rounded-sm min-w-[280px] text-black p-2 mr-4 mt-2 grow"
            >
              <button className="flex flex-col justify-center items-center w-full">
                <GoPerson size={70} />
                Student Management
              </button>
            </Link>
            <Link
              to="/"
              className="bg-white rounded-sm min-w-[280px] text-black p-2 mr-4 mt-2 grow"
            >
              <button className="flex flex-col justify-center items-center w-full">
                <BiSolidBook size={70} />
                Course Management
              </button>
            </Link>
            <Link
              to="/"
              className="bg-white rounded-sm text-black p-2 mr-4 mt-2 grow"
            >
              <button className="flex flex-col justify-center items-center min-w-[280px] w-full">
                <IoIosPeople size={70} />
                Admin Management
              </button>
            </Link>
            <Link
              to="/"
              className="bg-white rounded-sm text-black p-2 mr-4 mt-2 grow"
            >
              <button className="flex flex-col justify-center items-center min-w-[280px] w-full">
                <IoMdCloudUpload size={70} />
                Upload Certificate
              </button>
            </Link>
            <Link
              to="/"
              className="bg-white rounded-sm text-black p-2 mr-4 mt-2 grow"
            >
              <button className="flex flex-col justify-center items-center min-w-[280px] w-full">
                <FaGraduationCap size={70} />
                Manage Certificate
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
