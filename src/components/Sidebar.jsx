import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaCircleUser,
  FaHouse,
  FaBook,
  FaUser,
  FaUserTie,
  FaCertificate,
  FaAngleDown,
  FaRegIdCard,
  FaDoorOpen,
} from "react-icons/fa6";
import darkMode from "./Header";
import { FaFileAlt } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import Modal from "./Modal";

const Sidebar = (props) => {
  const [isCertificationOpen, setIsCertificationOpen] = useState(false);
  const [isCourseManagementOpen, setIsCourseManagementOpen] = useState(false);
  const [isStudentManagementOpen, setIsStudentManagementOpen] = useState(false);
  const [isAdminManagementOpen, setIsAdminManagementOpen] = useState(false);
  const [isIDCardManagementOpen, setIsIDCardManagementOpen] = useState(false);
  const [isAssignmentOpen, setIsAssignmentOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(
  //   localStorage.getItem("theme") === "dark"
  // );

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
    setTimeout(() => {
      // Add a slight delay
      navigate("/");
    }, 50); // 50ms delay (adjust as needed)
    // navigate('/');
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
  const navLinkActiveCss =
    "flex pt-1 justify-items-end mr-6 border-b border-yellow-200 text-cyan-400 rounded-lg pl-2 pr-2 pb-1";
  const navLinkNotActiveCss =
    "flex pt-1 justify-items-end mr-6 hover:border-b hover:border-yellow-200 hover:text-cyan-400 rounded-lg pl-2 pr-2";
  const navLinkBtnCss =
    "bg-transparent flex justify-between items-center pt-0 mt-1 mr-6 hover:border-b hover:border-yellow-200 hover:text-cyan-400 rounded-lg pl-2 pr-2 hide-outline pb-1";
  const btnNavLinkActiveCss =
    "pl-9 text-left pt-1 mr-6 border-b border-yellow-200 text-cyan-400 rounded-lg pr-2";
  const btnNavLinkNotActiveCss =
    "pl-9 text-left pt-1 mr-6 hover:border-b hover:border-yellow-200 hover:text-cyan-400 rounded-lg pr-2";
  const outlineNavLinkActiveCss =
    "pl-2 text-left pt-1 mr-6 border-b border-yellow-200 text-cyan-400 rounded-lg pr-2";
  const outlineNavLinkNotActiveCss =
    "pl-2 text-left pt-1 mr-6 hover:border-b hover:border-yellow-200 hover:text-cyan-400 rounded-lg pr-2";
  return (
    <aside className="min-w-[290px] md:w-[290px] hidden sm:block">
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

        <NavLink
          to="/admin-management"
          className={({ isActive }) =>
            isActive ? navLinkActiveCss : navLinkNotActiveCss
          }
        >
          <FaUserTie size={25} className="pr-2" />
          Manage Admins
        </NavLink>
        <NavLink
          to="/course-management"
          className={({ isActive }) =>
            isActive ? navLinkActiveCss : navLinkNotActiveCss
          }
        >
          <FaBook size={25} className="pr-2" />
          Manage Courses
        </NavLink>
        <NavLink
          to="/certificate-management"
          className={({ isActive }) =>
            isActive ? navLinkActiveCss : navLinkNotActiveCss
          }
        >
          <FaCertificate size={25} className="pr-2" />
          Manage Certificates
        </NavLink>
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
              to="/add-student"
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
            setIsIDCardManagementOpen((prevState) => !prevState);
          }}
        >
          <div className="flex items-center">
            <FaRegIdCard size={26} className="pr-2" />
            <p>ID Card Management</p>
          </div>
          <FaAngleDown
            size={20}
            className={`pr-1 ${isIDCardManagementOpen ? "rotate-180" : ""} `}
          />
        </button>
        {isIDCardManagementOpen && (
          <>
            <NavLink
              to="/id-card-management"
              className={({ isActive }) =>
                isActive ? btnNavLinkActiveCss : btnNavLinkNotActiveCss
              }
            >
              Manage ID Cards
            </NavLink>
            <NavLink
              to="/id-card/"
              className={({ isActive }) =>
                isActive ? btnNavLinkActiveCss : btnNavLinkNotActiveCss
              }
            >
              Personal ID Card
            </NavLink>
          </>
        )}
        <button
          className={navLinkBtnCss}
          onClick={() => {
            setIsAssignmentOpen((prevState) => !prevState);
          }}
        >
          <div className="flex items-center">
            <MdAssignment size={29} className="pr-2" />
            <p>Resources</p>
          </div>
          <FaAngleDown
            size={20}
            className={`pr-1 ${isAssignmentOpen ? "rotate-180" : ""} `}
          />
        </button>
        {isAssignmentOpen && (
          <>
            <NavLink
              to="/assignment"
              className={({ isActive }) =>
                isActive ? btnNavLinkActiveCss : btnNavLinkNotActiveCss
              }
            >
              Give Assignment
            </NavLink>
            <NavLink
              to="/edit-assignment"
              className={({ isActive }) =>
                isActive ? btnNavLinkActiveCss : btnNavLinkNotActiveCss
              }
            >
              Edit Assignment
            </NavLink>
            <NavLink
              to="/view-assignment-answers"
              className={({ isActive }) =>
                isActive ? btnNavLinkActiveCss : btnNavLinkNotActiveCss
              }
            >
              View Student Submission
            </NavLink>
            <NavLink
              to="/outline"
              className={({ isActive }) =>
                isActive ? btnNavLinkActiveCss : btnNavLinkNotActiveCss
              }
            >
              Outline
            </NavLink>
          </>
        )}
        <button className={navLinkBtnCss} onClick={openModal}>
          <div className="flex items-center">
            <FaDoorOpen size={29} className="pr-2" />
            <p>Log Out</p>
          </div>
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} title="Confirm Logout">
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
      </nav>
    </aside>
  );
};

export default Sidebar;
