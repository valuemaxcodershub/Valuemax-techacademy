import Training from "./pages/Training";
import Admin from "./pages/Admin";
import GenerateID from "./pages/GenerateID";
import Sidebar from "./components/Sidebar";
import StudentManagement from "./pages/StudentManagement";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CourseManagement from "./pages/CourseManagement";
import AdminManagement from "./pages/AdminManagement";
import CertificateManagement from "./pages/CertificateManagement";
import IDCardManagement from "./pages/IDCardManagement";

function App() {
  return (
      <Routes>
        <Route index element={<Training />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/generate-id" element={<GenerateID />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/student-management" element={<StudentManagement />} />
        <Route path="/course-management" element={<CourseManagement />} />
        <Route path="/admin-management" element={<AdminManagement />} />
        <Route path="/certificate-management" element={<CertificateManagement />} />
        <Route path="/id-card-management" element={<IDCardManagement />} />
      </Routes>
  );
}

export default App;
