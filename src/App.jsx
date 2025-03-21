import Training from "./pages/training";
import Admin from "./pages/admin";
import GenerateID from "./pages/GenerateID";
import Sidebar from "./components/Sidebar";
import StudentManagement from "./pages/StudentManagement";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
      <Routes>
        <Route index element={<Training />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/generate-id" element={<GenerateID />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/student-management" element={<StudentManagement />} />
        <Route path="/header" element={<Header />} />
      </Routes>
  );
}

export default App;
