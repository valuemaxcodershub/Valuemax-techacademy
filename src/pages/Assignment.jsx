import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Sidebar from "../components/Sidebar";

/**
 * Assignment Component
 * 
 * This page serves as a placeholder or future view for assignments
 * within the admin dashboard layout.
 * 
 * Features:
 * - Supports dark and light themes based on localStorage 'theme' value
 * - Applies theme to the root HTML element using useEffect
 * - Uses shared layout components: AdminHeader and Sidebar
 * 
 * State:
 * - darkMode: Boolean — toggles between light and dark mode
 * 
 * Dependencies:
 * - AdminHeader: Top navigation bar with theme toggle
 * - Sidebar: Side navigation menu
 * 
 * Notes:
 * - Content area currently only displays a heading ('Assignment')
 * - Future implementation can include assignment lists, upload, or grading features
 */


const Assignment = () => {
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
            <h1>Assignment</h1>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
