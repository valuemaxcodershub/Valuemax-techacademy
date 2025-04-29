import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Sidebar from "../components/Sidebar";


/**
 * PersonalIDCard Component
 * 
 * This component represents the "Personal ID Card" page in the admin section. It includes:
 * - A toggle for dark mode, which switches between dark and light themes based on the user's preference.
 * - A header that contains the dark mode toggle button.
 * - A sidebar that provides navigation options.
 * - A main content area where the title "Personal ID Card" is displayed.
 * 
 * The component interacts with the `localStorage` to save the user's theme preference across sessions.
 * 
 * State Management:
 * - `darkMode`: A boolean that tracks whether the user prefers dark mode or light mode.
 * 
 * Dependencies:
 * - `useState`, `useEffect`: React hooks for managing state and side effects.
 * - `AdminHeader`: The header component that includes a dark mode toggle.
 * - `Sidebar`: A sidebar navigation component.
 * 
 * Usage:
 * - The component automatically applies the dark mode theme if the user's previous preference was set to dark mode in `localStorage`.
 * - The theme can be toggled using the `AdminHeader` component's dark mode toggle button, which updates the `darkMode` state.
 * - The content of the page is wrapped with a header, sidebar, and a main section that displays the "Personal ID Card" title.
 */

const PersonalIDCard = () => {
  /**
   * State to track whether the dark mode is enabled or not.
   * The value is retrieved from `localStorage` to persist the user's theme choice.
   */
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "darkMode"
  );

  /**
   * Effect hook that runs whenever `darkMode` changes.
   * It applies the dark mode class to the document's root element
   * and updates the `localStorage` with the current theme.
   */
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
    <div className={darkMode ? "flex flex-col grow" : "flex flex-col grow"}>
      {/* AdminHeader: Header with a dark mode toggle */}
      <AdminHeader setDarkMode={setDarkMode} darkMode={darkMode} />
      <div className="flex min-h-screen">
        <div className="flex justify-between w-full">
          {/* Sidebar: Navigation sidebar */}
          <Sidebar mode={darkMode} />
          <main
            className={
              darkMode
                ? "bg-admin-dark text-white grow p-4 lg:p-6"
                : "bg-admin-light text-white grow p-4 lg:p-6"
            }
          >
            {/* Page content */}
            <h1>Personal ID Card</h1>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PersonalIDCard;
