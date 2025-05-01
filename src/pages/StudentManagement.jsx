import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import students from "../students.json";
import AdminHeader from "../components/AdminHeader";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router";


/**
 * StudentManagement Component
 * 
 * Displays and manages a list of students, providing features such as:
 * - Dark mode toggle based on localStorage preference.
 * - Search/filter functionality across multiple student fields.
 * - Navigation to "Add Student" form.
 * - Responsive, styled student data table.
 * 
 * Dependencies:
 * - students.json: Local JSON data of student records.
 * - Sidebar, AdminHeader, SearchBar: Reusable UI components.
 * - react-router: For navigation using useNavigate.
 * 
 * State Variables:
 * - darkMode (boolean): Tracks if dark mode is enabled.
 * - filteredData (array): Holds the currently filtered list of students.
 * 
 * Effects:
 * - useEffect: Updates the theme on the root HTML element and saves it to localStorage.
 * 
 * Search Logic:
 * - Filters student data by matching the search term with:
 *   Name, StudentID, Course, Status, Payment, Age, or StartDate.
 * 
 * Rendered Elements:
 * - AdminHeader: Displays the top bar with theme toggle.
 * - Sidebar: Navigation sidebar.
 * - "Add new Student" button: Navigates to the form for adding a student.
 * - SearchBar: Input for filtering the student list.
 * - Table: Displays student information responsively; some columns are hidden on small screens.
 * 
 * Notes:
 * - Fix typo in className: "text-lef" → "text-left"
 */


const StudentManagement = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "darkMode"
  );
  const [filteredData, setFilteredData] = useState(students);
  const navigate = useNavigate();


  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredData(students);
    } else {
      const filtered = students.filter(
        (item) =>
          item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.ID.toString().includes(searchTerm.toLowerCase()) ||
          item.Course.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.Status.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.Payment.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.Age.toString().includes(searchTerm.toLowerCase()) ||
          item.StartDate.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const addStudent = () => {
    navigate("/add-student");
  }

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
                onClick={addStudent}
              >
                Add new Student
              </button>
            </div>
            <SearchBar onSearch={handleSearch} mode={darkMode} />
            <table className="w-full mt-4">
              <thead>
                <tr className={darkMode ? "bg-black" : "bg-slate-900"}>
                  <th className="p-2 text-left hidden lg:table-cell">S/N</th>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">ID</th>
                  <th className="p-2 text-left hidden lg:table-cell">Age</th>
                  <th className="p-2 text-left">Course</th>
                  <th className="p-2 text-left hidden lg:table-cell">Start Date</th>
                  <th className="p-2 text-left hidden lg:table-cell">Status</th>
                  <th className="p-2 text-left hidden lg:table-cell">Payment</th>
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
                          : "bg-slate-500"
                        : darkMode
                        ? "bg-gray-900"
                        : "bg-slate-600"
                    }
                  >
                    <td className="p-2 text-left hidden lg:table-cell">{index + 1}</td>
                    <td className="p-2 text-left">{item.Name}</td>
                    <td className="p-2 text-left">{item.ID}</td>
                    <td className="p-2 text-left hidden lg:table-cell">
                      {item.Age}
                    </td>
                    <td className="p-2 text-left">{item.Course}</td>
                    <td className="p-2 text-left hidden lg:table-cell">
                      {item.StartDate}
                    </td>
                    <td className="p-2 text-lef hidden lg:table-cell">{item.Status}</td>
                    <td className="p-2 text-left hidden lg:table-cell">{item.Payment}</td>
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
