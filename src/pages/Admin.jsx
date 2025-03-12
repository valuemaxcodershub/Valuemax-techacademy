import React from "react";
import { NavLink } from "react-router-dom";
import { FaCircleUser, FaHouse, FaBook, FaUser, FaUserTie, FaAngleUp, FaAngleDown, FaCertificate } from "react-icons/fa6";
import { BiSolidDoorOpen } from "react-icons/bi";


const Admin = () => {
  return (
    <>
      <aside className="bg-blue-700 w-[30%] h-[100vh]">
        <div className="border-r-1 border-b-1 border-slate-400 p-4">
          <img src="src/assets/valuemax-logo.png" alt="valuemax-logo.png" />
        </div>
        <div className="p-5 border-r-1 border-b-1 border-slate-400">
          <FaCircleUser size={100} className="mx-auto" color="white" />
          <h3 className="text-2xl text-white">Administrator</h3>
        </div>
        <nav className="flex flex-col mt-2  text-white pl-3 text-lg">
          <NavLink to="/admin" end className="flex pt-3 justify-items-end">
            <FaHouse size={28} className="pr-2"/>
            Dashboard
          </NavLink>
          <NavLink to="/" end className="flex pt-3 justify-items-end">
            <FaBook size={23} className="pr-2"/>
            Course Management
          </NavLink>
          <NavLink to="/" end className="flex pt-3 justify-items-center">
            <FaUser size={25} className="pr-2"/>
            Student Management
          </NavLink>
          <NavLink to="/" end className="flex pt-3 justify-items-center">
            <FaUserTie size={25} className="pr-2"/>
            Admin Management
          </NavLink>
          <button to="/" end className="bg-transparent flex justify-between items-center p-0 mt-2">
            <div className="flex items-center">
              <FaCertificate size={26} className="pr-2" />
              <p>Certification</p>
            </div>
            <FaAngleUp size={20} className="pr-1"/>
          </button>
          <NavLink to="/" className="pl-7 text-left pt-3">
            Create Certificate
          </NavLink>
          <NavLink to="/" className="pl-7 text-left pt-3">
            Manage Certificate
          </NavLink>
          <NavLink to="/" end className="flex pt-3 justify-items-center">
            <BiSolidDoorOpen size={30} className="pr-2"/>
            Log Out
          </NavLink>
        </nav>
      </aside>

      <main></main>
    </>
  );
};

export default Admin;
