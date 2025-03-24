import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import courses from "../courses.json";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const CourseManagement = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "darkMode"
  );
  const [filteredData, setFilteredData] = useState(courses);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredData(courses);
    } else {
      const filtered = courses.filter((item) => (
        item.Title.toLowerCase().includes(searchTerm.toLowerCase()) || item.Teacher.toLowerCase().includes(searchTerm.toLowerCase()) || item.Duration.toLowerCase().includes(searchTerm.toLowerCase()) || item.Price.toString().includes(searchTerm.toLowerCase())
      ));
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
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
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
            <SearchBar onSearch={handleSearch} />
            <table className="w-full mt-4">
              <thead>
                <tr className={darkMode ? "bg-black" : "bg-blue-900"}>
                  <th className="p-2 text-left">Title</th>
                  <th className="p-2 text-left">Teacher</th>
                  <th className="p-2 text-left">Duration</th>
                  <th className="p-2 text-left">Price</th>
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
                    <td className="p-2 text-left">{item.Title}</td>
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
