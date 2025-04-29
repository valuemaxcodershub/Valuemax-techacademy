import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Sidebar from "../components/Sidebar";

/**
 * StudentSubmissions Component
 * 
 * This page serves as a placeholder or display area for student submissions.
 * 
 * Features:
 * - Dark mode toggle, synced with localStorage.
 * - Responsive layout with sidebar and header components.
 * 
 * Components Used:
 * - AdminHeader: Displays the header with dark mode toggle.
 * - Sidebar: Navigation component.
 * 
 * State:
 * - darkMode (boolean): Determines if the dark theme is active.
 * 
 * Side Effects:
 * - useEffect: Applies/removes the "dark" class from the root HTML element and updates localStorage when `darkMode` changes.
 * 
 * Render:
 * - Renders a layout with a top AdminHeader, a Sidebar on the left, and a main content area showing "Student Submissions".
 * 
 * Note:
 * - Currently static. Additional functionality like listing submissions can be added here.
 */


const StudentSubmissions = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "darkMode"
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
            <h1>Student Submissions</h1>
          </main>
        </div>
      </div>
    </div>
  );
};

export default StudentSubmissions;
