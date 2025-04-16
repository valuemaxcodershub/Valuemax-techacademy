import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import courses from "../courses.json";
import admins from "../admins.json";
import AdminHeader from "../components/AdminHeader";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";

const CourseManagement = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "darkMode"
  );
  const [filteredData, setFilteredData] = useState(courses);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Form states
  const [name, setName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const clearForm = () => {
    setName("");
    setTeacher("");
    setDuration("");
    setPrice("");
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredData(courses);
    } else {
      const filtered = courses.filter(
        (item) =>
          item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.Teacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.Duration.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.Price.toString().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add submit logic
    console.log({ name, teacher, duration, price });
    closeModal();
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
                Add new Course
              </button>
            </div>
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              title="Add New Course"
            >
              <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="name" className="mb-2">
                  Name:
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-slate-300 p-2 rounded-md w-full"
                  />
                </label>
                <label htmlFor="courseCode" className="mb-2">
                  Course Code:
                  <input
                    type="text"
                    id="courseCode"
                    value={courseCode}
                    onChange={(e) => setCourseCode(e.target.value)}
                    className="bg-slate-300 p-2 rounded-md w-full"
                  />
                </label>
                <label htmlFor="duration" className="mb-2">
                  Duration:
                  <input
                    type="text"
                    id="duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="bg-slate-300 p-2 rounded-md w-full"
                  />
                </label>
                <label htmlFor="price" className="mb-2">
                  Price:
                  <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
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
            <SearchBar onSearch={handleSearch} mode={darkMode}/>
            <table className="w-full mt-4">
              <thead>
                <tr className={darkMode ? "bg-black" : "bg-slate-900"}>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Teacher</th>
                  <th className="p-2 text-left">Duration</th>
                  <th className="p-2 text-left">Price(&#8358;)</th>
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
                    <td className="p-2 text-left">{item.Teacher}</td>
                    <td className="p-2 text-left">{item.Duration}</td>
                    <td className="p-2 text-left">{item.Price}</td>
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

export default CourseManagement;
