import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import data from "../data.json";
import logo from "../assets/valuemax-logo.png";
import Header from "../components/Header";

const StudentManagement = () => {
  const [darkMode, setDarkMode] = useState(
    !(localStorage.getItem("theme") === "darkMode")
  );

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
    <div className={darkMode ? "bg-slate-800 flex flex-col" : "bg-blue-700 flex flex-col"}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
      <div className="flex">
        <Sidebar mode={darkMode} />
        <main className={darkMode ? "bg-slate-700 text-white grow p-4" : "bg-blue-600 text-white grow p-4"}>
          <img src={logo} alt="valuemax-logo.png" className="sm:hidden" />

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
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? darkMode ? "bg-gray-800" : "bg-blue-700" : darkMode ? "bg-gray-900" : "bg-blue-800"}
                >
                  <td className="p-2">{item.Name}</td>
                  <td className="p-2">{item.Age}</td>
                  <td className="p-2">{item.Course}</td>
                  <td className="p-2">{item.Date}</td>
                  <td className="p-2">{item.Status}</td>
                  <td className="p-2">{item.Payment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default StudentManagement;