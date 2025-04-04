import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import certificates from "../certificates.json";
import admins from "../admins.json";
import students from "../students.json";
import AdminHeader from "../components/AdminHeader";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";

const CertificateManagement = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "darkMode"
  );
  const [filteredData, setFilteredData] = useState(certificates);
  const [filteredCertificateData, setFilteredCertificateData] = useState(null);
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

  const handleCertificateSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredCertificateData(null);
    } else {
      searchTerm.toLowerCase();
      const filteredStudents = students.filter(
        (item) =>
          item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.ID.toString().includes(searchTerm.toLowerCase())
      );
      // const filteredAdmins = admins.filter(
      //   (item) =>
      //     item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      //     item.ID.toString().includes(searchTerm.toLowerCase())
      // );

      // const filtered = [...filteredStudents, ...filteredAdmins];
      // Filter out items already in IDCards
      // const finalFiltered = filtered.filter(
      //   (item) => !certificates.some((certificate) => certificate.ID === item.ID)
      // );
      setFilteredCertificateData(filteredStudents);
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
              <SearchBar onSearch={handleCertificateSearch} />
              <table className="w-full mt-4 text-white">
                <thead>
                  <tr className={darkMode ? "bg-slate-950" : "bg-blue-900"}>
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">ID</th>
                    <th className="p-2 text-left"></th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {filteredCertificateData?.map((item, index) => (
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
                      <td className="p-2 text-left">{item.ID}</td>
                      <td className="p-2 text-left">
                        <button
                          className="py-1 px-3 bg-white rounded-md text-black"
                          onClick={() => {
                            console.log(item);
                          }}
                        >
                          Generate
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Modal>
            <SearchBar onSearch={handleSearch} />
            <table className="w-full mt-4">
              <thead>
                <tr className={darkMode ? "bg-black" : "bg-blue-900"}>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">ID</th>
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
                          : "bg-blue-700"
                        : darkMode
                        ? "bg-gray-900"
                        : "bg-blue-800"
                    }
                  >
                    <td className="p-2 text-left">{item.Name}</td>
                    <td className="p-2 text-left">{item.ID}</td>
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
