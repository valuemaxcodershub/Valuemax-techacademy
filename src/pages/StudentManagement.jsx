import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import students from "../students.json";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const StudentManagement = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "darkMode"
  );
  const [filteredData, setFilteredData] = useState(students);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredData(students);
    } else {
      const filtered = students.filter((item) => (
        item.Name.toLowerCase().includes(searchTerm.toLowerCase()) || item.Course.toLowerCase().includes(searchTerm.toLowerCase()) || item.Status.toLowerCase().includes(searchTerm.toLowerCase()) || item.Payment.toLowerCase().includes(searchTerm.toLowerCase()) || item.Age.toString().includes(searchTerm.toLowerCase()) || item.Date.toLowerCase().includes(searchTerm.toLowerCase())
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
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Age</th>
                  <th className="p-2 text-left">Course</th>
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-left">Payment</th>
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
                    <td className="p-2 text-left">{item.Age}</td>
                    <td className="p-2 text-left">{item.Course}</td>
                    <td className="p-2 text-left">{item.Date}</td>
                    <td className="p-2 text-left">{item.Status}</td>
                    <td className="p-2 text-left">{item.Payment}</td>
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

export default StudentManagement;
