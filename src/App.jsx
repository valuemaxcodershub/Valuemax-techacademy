import Training from "./pages/Training";
import Admin from "./pages/Admin";
import GenerateID from "./pages/GenerateID";
import Sidebar from "./components/Sidebar";
import StudentManagement from "./pages/StudentManagement";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CourseManagement from "./pages/CourseManagement";

function App() {
  return (
      <Routes>
        <Route index element={<Training />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/generate-id" element={<GenerateID />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/student-management" element={<StudentManagement />} />
        <Route path="/course-management" element={<CourseManagement />} />
      </Routes>
  );
}

export default App;
