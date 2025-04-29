import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import courses from "../courses.json";
import certificates from "../certificates.json";
// import admins from "../admins.json";
// import students from "../students.json";
import AdminHeader from "../components/AdminHeader";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";


/**
 * CertificateManagement Component
 * 
 * Description:
 * - Admin interface for managing course completion certificates.
 * - Displays a list of certificates with search and download functionality.
 * - Allows admin to generate new certificates for courses via a modal form.
 * 
 * State Variables:
 * - darkMode: Tracks current theme preference (light/dark).
 * - filteredData: Currently displayed certificates after search filtering.
 * - coursesData: List of courses used in certificate generation.
 * - isModalOpen: Controls visibility of the certificate generation modal.
 * 
 * Features:
 * - Dark mode support based on localStorage 'theme'
 * - Search functionality to filter displayed certificates
 * - Certificate generation modal with course selection dropdown
 * - Table view showing name, ID, course, and download button
 * 
 * Dependencies:
 * - Sidebar, AdminHeader: Layout/navigation components
 * - Modal: Reusable modal dialog component
 * - SearchBar: Search input component
 * - courses.json & certificates.json: Static data sources
 * 
 * Future Enhancements:
 * - Add user selection (e.g., from student/admin pool) before certificate generation
 * - Connect to backend API for persistent storage and generation
 */


const CertificateManagement = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "darkMode"
  );
  const [filteredData, setFilteredData] = useState(certificates);
  const [coursesData, setCoursesData] = useState(courses);
  // const [filteredCertificateData, setFilteredCertificateData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredData(certificates);
    } else {
      const filtered = certificates.filter(
        (item) =>
          item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.ID.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.Course.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const handleCertificateGeneration = (event) => {
    event.target.preventDefault();
    // certificate generation logic
    closeModal();
  }

  // const handleCertificateSearch = (searchTerm) => {
  //   if (!searchTerm) {
  //     setFilteredCertificateData(null);
  //   } else {
  //     searchTerm.toLowerCase();
  //     const filteredStudents = students.filter(
  //       (item) =>
  //         item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //         item.ID.toString().includes(searchTerm.toLowerCase())
  //     );
  //     // const filteredAdmins = admins.filter(
  //     //   (item) =>
  //     //     item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     //     item.ID.toString().includes(searchTerm.toLowerCase())
  //     // );

  //     // const filtered = [...filteredStudents, ...filteredAdmins];
  //     // Filter out items already in IDCards
  //     // const finalFiltered = filtered.filter(
  //     //   (item) => !certificates.some((certificate) => certificate.ID === item.ID)
  //     // );
  //     setFilteredCertificateData(filteredStudents);
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
                className="bg-white text-black rounded-md py-2 px-3 mb-3 "
                onClick={openModal}
              >
                Generate New Certificate
              </button>
            </div>
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              title="Generate New Certificate"
            >
              <form onSubmit={handleCertificateGeneration}>
              <select name="certificate" id="certificate-select" className="w-full">
                {coursesData.map((item, index) => (
                  <option value={item.Name}>{item.Name}</option>
                ))}
              </select>
              <div className="flex justify-end mt-4">
                <button type="submit" className="bg-blue-500 p-2 rounded-xl text-white mt-4 hover:bg-blue-600">Generate</button>
              </div>
              </form>
            </Modal>
            <SearchBar onSearch={handleSearch} mode={darkMode} />
            <table className="w-full mt-4">
              <thead>
                <tr className={darkMode ? "bg-black" : "bg-slate-900"}>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left hidden lg:table-cell">ID</th>
                  <th className="p-2 text-left">Course</th>
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
                    <td className="p-2 text-left hidden lg:table-cell">{item.ID}</td>
                    <td className="p-2 text-left">{item.Course}</td>
                    <td className="p-2 text-left">
                      <a href={item.CertificateDownloadLink} target="_blank">
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

export default CertificateManagement;
