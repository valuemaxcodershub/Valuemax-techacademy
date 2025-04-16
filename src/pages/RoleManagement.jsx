import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import roles from "../roles.json";
import AdminHeader from "../components/AdminHeader";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

const RoleManagement = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "darkMode"
  );
  const [filteredData, setFilteredData] = useState(roles);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const editBtnCss = "bg-slate-500 rounded-lg px-3";
  const deleteBtnCss = "bg-slate-500 rounded-lg px-3";

  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      setFilteredData(roles);
    } else {
      const filtered = roles.filter(
        (item) =>
          item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.Status.toLowerCase().includes(searchTerm.toLowerCase())
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
          ? "flex flex-col grow"
          : "flex flex-col grow"
      }
    >
      <AdminHeader setDarkMode={setDarkMode} darkMode={darkMode} />
      <div className="flex min-h-screen">
        <div className="flex justify-between w-full">
          <Sidebar mode={darkMode} />
          <main
            className={
              darkMode
                ? "bg-admin-dark text-white grow p-4 lg:p-6"
                : "bg-admin-light text-white grow p-4 lg:p-6"
            }
          >
            <div className="grid justify-items-end">
              <button
                className="bg-white text-black rounded-md py-2 px-3 mb-3 "
                onClick={openModal}
              >
                Add new Role
              </button>
            </div>
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              title="Add New Role"
            >
              <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="name" className="mb-2">
                  Name:{" "}
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="bg-slate-300 p-2 rounded-md w-full"
                  />
                </label>

                <label htmlFor="status" className="mb-2">
                  Status:
                  <select
                    name="status"
                    id="status"
                    value={status}
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                    className="bg-slate-300 p-2 rounded-md w-full"
                  >
                    <option value="active">Active</option>
                    <option value="suspended">Suspended</option>
                  </select>
                </label>
                <label htmlFor="jobDescription" className="mb-2">
                  Job Description:{" "}
                  <textarea
                    name="jobDescription"
                    id="jobDescription"
                    value={jobDescription}
                    onChange={(e) => {
                      setJobDescription(e.target.value);
                    }}
                    className="bg-slate-300 p-2 rounded-md w-full"
                  />
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
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </Modal>
            <SearchBar onSearch={handleSearch} mode={darkMode} />
            <table className="w-full mt-4">
              <thead>
                <tr className={darkMode ? "bg-black" : "bg-slate-900"}>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-left"></th>
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
                          : "bg-slate-400"
                        : darkMode
                        ? "bg-gray-900"
                        : "bg-slate-500"
                    }
                  >
                    <td className="p-2 text-left">{item.Name}</td>
                    <td className="p-2 text-left">{item.Status}</td>
                    <td className="p-2 text-left">
                      <button
                        onClick={() => {
                          navigate(`/edit-role/${item.ID}`);
                        }}
                        className={editBtnCss}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          // Delete logic here
                        }}
                        className={deleteBtnCss}
                      >
                        Delete
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

export default RoleManagement;
