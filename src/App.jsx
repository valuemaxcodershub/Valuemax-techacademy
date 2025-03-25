import Training from "./pages/Training";
import Admin from "./pages/Admin";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Mainlayout from "./layouts/Mainlayout";
import Login from "./pages/Login";
import CoursesPage from "./pages/CoursesPage";
import NotFoundPage from "./pages/NotFoundPage";
import CoursePage from "./pages/CoursePage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Mainlayout/>}>
          <Route index element={<Training />}/>
          <Route path="/courses" element={<CoursesPage/>}/>
          <Route path="/courses/:id" element={<CoursePage/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
  );
}

export default App;
  