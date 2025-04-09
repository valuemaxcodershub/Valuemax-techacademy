import React, { useEffect, useState } from "react";
import {
  FaMoon,
  FaSun,
  FaGraduationCap,
  FaBars,
  FaIdCard,
  FaFolderOpen,
} from "react-icons/fa6";
import { BiSolidBook, BiSolidDoorOpen } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { IoIosPeople, IoMdClose } from "react-icons/io";
import logo from "../assets/valuemax-logo.png";
import Sidebar from "../components/Sidebar";
import DashboardLinkButtons from "../components/DashboardLinkButtons";
import Modal from "../components/Modal";
import AdminDropDownMenu from "../components/AdminDropDownMenu";
import { Link } from "react-router-dom";

const Admin = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "darkMode"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

  const studentIcon = <GoPerson size={70} />;
  const courseIcon = <BiSolidBook size={70} />;
  const adminIcon = <IoIosPeople size={70} />;
  const manageCertificateIcon = <FaGraduationCap size={70} />;
  const personalIDCardIcon = <FaIdCard size={70} />;
  const manageIDCardIcon = <FaFolderOpen size={70} />;

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logging out...");
    closeModal();
  };

  // Changes in the admin header should be made again on the header component

  return (
    <div className="flex flex-row min-h-screen poppins-regular">
      <div
        className={darkMode ? "bg-sidebar-dark" : "hidden sm:block bg-sidebar-light"}
      >
        <div
          className={
            darkMode
              ? "border-r border-b bg-black border-slate-500 p-4 hidden sm:block"
              : "border-r border-b border-blue-600 bg-blue-700 p-4 hidden sm:block"
          }
        >
          <Link to="/">
            <img src={logo} alt="valuemax-logo.png" />
          </Link>
        </div>
        <Sidebar mode={darkMode} />
      </div>
      <main
        className={
          darkMode ? "flex bg-admin-dark flex-col" : "flex bg-admin-light flex-col"
        }
      >
        <div
          className={
            darkMode
              ? "bg-black h-[72px] w-full flex justify-between sm:justify-end"
              : "bg-blue-700 h-[72px] w-full flex justify-between sm:justify-end"
          }
        >
          <div className={darkMode ? "sm:hidden p-4" : "sm:hidden p-4"}>
            <Link to="/">
              <img src={logo} alt="valuemax-logo.png" />
            </Link>
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
            <button
              className="w-[110px] bg-white flex rounded-lg justify-between items-center px-2 py-1 my-4 mr-4 text-black"
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
              <p className="dark:text-white">
                Are you sure you want to log out?
              </p>
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
          </div>
          <button
            className="sm:hidden text-white mr-4"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <IoMdClose size={20} /> : <FaBars size={20} />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <AdminDropDownMenu
            darkMode={darkMode}
            toggleMobileMenu={toggleMobileMenu}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            isMobileMenuOpen={isMobileMenuOpen}
          />
        )}
        <div className="m-6 flex flex-col items-start">
          <h2 className={darkMode ? "text-4xl mb-4 text-white admin-2" : "text-4xl mb-4 text-black admin-2"}>Dashboard</h2>
          <div className="flex flex-row flex-wrap">
            <DashboardLinkButtons
              destination="/student-management"
              icon={studentIcon}
              title="Student Management"
            />
            <DashboardLinkButtons
              destination="/course-management"
              icon={courseIcon}
              title="Course Management"
            />
            <DashboardLinkButtons
              destination="/admin-management"
              icon={adminIcon}
              title="Admin Management"
            />
            <DashboardLinkButtons
              destination="/certificate-management"
              icon={manageCertificateIcon}
              title="Manage Certificates"
            />
            <DashboardLinkButtons
              destination="/"
              icon={manageIDCardIcon}
              title="Manage ID Cards"
            />
            <DashboardLinkButtons
              destination="/certificate-management"
              icon={personalIDCardIcon}
              title="Personal ID Card"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
