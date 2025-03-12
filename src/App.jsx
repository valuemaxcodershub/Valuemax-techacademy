import Training from "./pages/training";
import Admin from "./pages/admin";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
      <Routes>
        <Route index element={<Training />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
  );
}

export default App;
