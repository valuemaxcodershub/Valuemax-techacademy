import Training from "./pages/training";
import Admin from "./pages/admin";
import GenerateID from "./pages/GenerateID";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
      <Routes>
        <Route index element={<Training />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/generate-id" element={<GenerateID />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
  );
}

export default App;
