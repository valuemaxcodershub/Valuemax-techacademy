import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Sidebar from "../components/Sidebar";

/**
 * EditAssignment Component
 *
 * Description:
 * - Admin view for editing existing assignments.
 * - Currently serves as a placeholder layout with theme switching and navigation setup.
 *
 * Features:
 * - Dark mode toggle support with persistent state using localStorage.
 * - Renders AdminHeader and Sidebar for consistent admin UI structure.
 *
 * Current State:
 * - Displays a static title "Edit Assignment".
 * - No logic or form to edit actual assignment content implemented yet.
 *
 * Dependencies:
 * - AdminHeader: Top bar with dark mode toggle and navigation
 * - Sidebar: Navigation drawer for admin sections
 *
 * TODO:
 * - Add form fields to update assignment data (title, description, due date, etc.)
 * - Integrate with assignment API or data source
 * - Handle form validation, submission, and feedback
 */


const EditAssignment = () => {
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
            <h1>Edit Assignment</h1>
          </main>
        </div>
      </div>
    </div>
  );
};

export default EditAssignment;
