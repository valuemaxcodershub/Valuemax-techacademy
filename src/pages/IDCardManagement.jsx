import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import IDCards from "../IDCard.json";
import AdminHeader from "../components/AdminHeader";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";

/**
 * IDCardManagement Component
 * 
 * This component provides functionality for managing ID cards. It includes:
 * - A table displaying a list of ID cards with the ability to download them.
 * - A search bar for filtering the displayed ID cards by name or ID.
 * - A modal for generating new ID cards.
 * - A dark mode toggle to switch between dark and light themes.
 * 
 * The component interacts with `IDCard.json`, a JSON file that contains the list of ID cards, and allows the user to perform various operations related to ID cards.
 * 
 * State Management:
 * - `darkMode`: Boolean state that tracks whether dark mode is enabled or not.
 * - `filteredData`: Holds the filtered list of ID cards based on the search input.
 * - `isModalOpen`: Boolean state that controls the visibility of the modal for generating a new ID card.
 * 
 * Dependencies:
 * - `useState`, `useEffect`: React hooks for managing state and side effects.
 * - `Sidebar`: A component used to display the sidebar navigation.
 * - `AdminHeader`: The header component that includes a dark mode toggle.
 * - `SearchBar`: A component that provides a search functionality for filtering ID cards.
 * - `Modal`: A modal component that handles the creation of new ID cards.
 * 
 * Usage:
 * - The user can click on the "Generate New ID Card" button to open a modal where they can select a course for ID card generation.
 * - The search bar allows filtering the ID cards by name or ID.
 * - The table displays a list of ID cards with an option to download each card by clicking the "Click" button.
 * The component also handles dark mode by applying the appropriate classes to the HTML document based on the user's preference.
 */

const IDCardManagement = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "darkMode"
  );
  const [filteredData, setFilteredData] = useState(IDCards);
  // const [filteredIDData, setFilteredIDData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredData(IDCards);
    } else {
      const filtered = IDCards.filter(
        (item) =>
          item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.ID.toString().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const handleIDCardGeneration = (event) => {
    event.target.preventDefault();
    // id card generation logic
    closeModal();
  }

  // const handleIDSearch = (searchTerm) => {
  //   if (!searchTerm) {
  //     setFilteredIDData(null);
  //   } else {
  //     searchTerm.toLowerCase();
  //     const filteredStudents = students.filter(
  //       (item) =>
  //         item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //         item.ID.toString().includes(searchTerm.toLowerCase())
  //     );
  //     const filteredAdmins = admins.filter(
  //       (item) =>
  //         item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //         item.ID.toString().includes(searchTerm.toLowerCase())
  //     );

  //     const filtered = [...filteredStudents, ...filteredAdmins];
  //     // Filter out items already in IDCards
  //     const finalFiltered = filtered.filter(
  //       (item) => !IDCards.some((idCard) => idCard.ID === item.ID)
  //     );
  //     setFilteredIDData(finalFiltered);
  //   }
  // };

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
                className="bg-slate-400 text-white rounded-md py-2 px-3 mb-3 "
                onClick={openModal}
              >
                Generate New ID Card
              </button>
            </div>
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              title="Generate New ID Card"
            >
              <form onSubmit={handleIDCardGeneration}>
              <select name="idCard" id="certificate-select" className="w-full">
                {filteredData.map((item, index) => (
                  <option value={item.Course}>{item.Course}</option>
                ))}
              </select>
              <div className="flex justify-end mt-4">
                <button type="submit" className="bg-blue-500 p-2 rounded-xl text-white mt-4 hover:bg-blue-600">Generate</button>
              </div>
              </form>
            </Modal>
            <SearchBar onSearch={handleSearch} mode={darkMode}/>
            <table className="w-full mt-4">
              <thead>
                <tr className={darkMode ? "bg-black" : "bg-slate-900"}>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">ID</th>
                  <th className="p-2 text-left">Download</th>
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
                    <td className="p-2 text-left">{item.Name}</td>
                    <td className="p-2 text-left">{item.ID}</td>
                    <td className="p-2 text-left">
                      <a href={item.IDCardDownloadLink} target="_blank">
                        <button className="py-1 px-3 bg-white rounded-md text-black">
                          Click
                        </button>
                      </a>
                    </td>
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

export default IDCardManagement;
