import React, { useEffect, useState } from "react";
import logo from "../assets/valuemax-logo.png";
import { FaBars, FaMoon, FaSun } from "react-icons/fa6";
import { BiSolidDoorOpen } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import AdminDropDownMenu from "./AdminDropDownMenu";
import Modal from "./Modal";

const AdminHeader = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    // Put Logout functionaliity here
    console.log("Logging Out");
    closeModal();
    // setTimeout(() => { // Add a slight delay
    //   navigate('/');
    // }, 50); // 50ms delay (adjust as needed)
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
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

  // Changes in the admin header should be made again on the header component
  return (
    <div className="block sm:flex">
      <div
        className={
          props.darkMode
            ? "border-r border-b border-slate-500 p-4 bg-black min-w-[290px] md:w-[290px] hidden sm:block"
            : "border-r border-b border-blue-600 p-4 bg-blue-700 min-w-[290px] md:w-[290px] hidden sm:block"
        }
      >
        <Link to="/">
          <img src={logo} alt="valuemax-logo.png" />
        </Link>
      </div>
      <div
        className={
          props.darkMode
            ? "bg-black h-full w-full flex justify-between sm:justify-end"
            : "bg-blue-700 h-full w-full flex justify-between sm:justify-end"
        }
      >
        <div className={props.darkMode ? "sm:hidden p-4" : "sm:hidden p-4"}>
          <Link to="/">
          <img src={logo} alt="valuemax-logo.png" />
          </Link>
        </div>
        <div className="flex">
          <button
            className="mr-6 text-white"
            onClick={() => {
              props.setDarkMode((prevState) => !prevState);
            }}
          >
            {props.darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <button
            className="w-[110px] bg-white flex rounded-lg justify-between items-center px-2 py-1 my-4 mr-4"
            onClick={openModal}
          >
            <BiSolidDoorOpen size={20} />
            Log Out
          </button>
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title="Confirm Logout"
          >
            <p className="dark:text-white">Are you sure you want to log out?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white p-2 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white p-2 rounded-md"
              >
                Log Out
              </button>
            </div>
          </Modal>
          <button
            className="sm:hidden text-white mr-4"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <IoMdClose size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <AdminDropDownMenu
          darkMode={props.darkMode}
          toggleMobileMenu={toggleMobileMenu}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      )}
    </div>
  );
};

export default AdminHeader;
