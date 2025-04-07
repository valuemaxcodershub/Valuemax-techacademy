import React, { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Sidebar from "../components/Sidebar";

const PersonalIDCard = () => {
  const [darkMode, setDarkMode] = useState(
      localStorage.getItem("theme") === "darkMode"
    );
  return (
    <div
      className={
        darkMode
          ? "bg-slate-800 flex flex-col grow"
          : "bg-blue-700 flex flex-col grow"
      }
    >
      <AdminHeader setDarkMode={setDarkMode} darkMode={darkMode} />
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
            <h1>Personal ID Card</h1>
          </main>
        </div>
      </div>
    </div>
  )
}

export default PersonalIDCard