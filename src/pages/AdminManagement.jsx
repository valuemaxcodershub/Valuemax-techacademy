import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import admins from "../admins.json";
import AdminHeader from "../components/AdminHeader";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const AdminManagement = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "darkMode"
  );
  const [filteredData, setFilteredData] = useState(admins);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState("");

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const clearForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setRole("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Put Submit logic here
    closeModal();
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredData(admins);
    } else {
      const filtered = admins.filter(
        (item) =>
          item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.Teacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.Duration.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.Price.toString().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
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

  return (
    <div
      className={
        darkMode
          ? "bg-slate-800 flex flex-col grow"
          : "bg-blue-700 flex flex-col grow"
      }
    >
      <AdminHeader setDarkMode={setDarkMode} darkMode={darkMode} />
      <div className="flex min-h-screen">
        <div className="flex justify-between w-full">
          <Sidebar mode={darkMode} />
          <main
            className={
              darkMode
                ? "bg-slate-700 text-white grow p-4 lg:p-6"
                : "bg-blue-600 text-white grow p-4 lg:p-6"
            }
          >
            <div className="grid justify-items-end">
              <button
                className="bg-white text-black rounded-md py-2 px-3 mb-3 "
                onClick={openModal}
              >
                Add new Admin
              </button>
            </div>
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              title="Add New Admin"
            >
              <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="username" className="mb-2">
                  Username:{" "}
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    className="bg-slate-300 p-2 rounded-md w-full"
                  />
                </label>
                <label htmlFor="email" className="mb-2">
                  Email:{" "}
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="bg-slate-300 p-2 rounded-md w-full"
                  />
                </label>
                <label htmlFor="password" className="mb-2 relative">
                  Password:
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-slate-300 p-2 rounded-md w-full"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 mt-3"
                  >
                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </label>

                <label htmlFor="role" className="mb-2">
                  Role:
                  <select
                    name="role"
                    id="role"
                    value={role}
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                    className="bg-slate-300 p-2 rounded-md w-full"
                  >
                    <option value="secretary">Secretary</option>
                    <option value="teacher">Teacher</option>
                  </select>
                </label>
                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    onClick={clearForm}
                    className="bg-gray-300 p-2 rounded-md mr-2"
                  >
                    Clear
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </Modal>
            <SearchBar onSearch={handleSearch} />
            <table className="w-full mt-4">
              <thead>
                <tr className={darkMode ? "bg-black" : "bg-blue-900"}>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">ID</th>
                  <th className="p-2 text-left">Role</th>
                  <th className="p-2 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? darkMode
                          ? "bg-gray-800"
                          : "bg-blue-700"
                        : darkMode
                        ? "bg-gray-900"
                        : "bg-blue-800"
                    }
                  >
                    <td className="p-2 text-left">{item.Name}</td>
                    <td className="p-2 text-left">{item.ID}</td>
                    <td className="p-2 text-left">{item.Role}</td>
                    <td className="p-2 text-left">
                      <button
                        onClick={() => {
                          navigate(`/edit-admin/${item.ID}`);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminManagement;
