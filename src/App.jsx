import Training from "./pages/Training";
import Admin from "./pages/Admin";
import Mainlayout from "./layouts/Mainlayout";
import Sidebar from "./components/Sidebar";
import StudentManagement from "./pages/StudentManagement";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CourseManagement from "./pages/CourseManagement";
import CoursesPage from "./pages/CoursesPage";
import NotFoundPage from "./pages/NotFoundPage";
import CoursePage from "./pages/CoursePage";
import AdminManagement from "./pages/AdminManagement";
import CertificateManagement from "./pages/CertificateManagement";
import IDCardManagement from "./pages/IDCardManagement";
import Assignment from "./pages/Assignment";
import Modal from "./components/Modal";
import AddStudent from "./pages/AddStudent";
import AdminHeader from "./components/AdminHeader";
import StudentLogin from "./pages/StudentLogin";
import AdminLogin from "./pages/AdminLogin";
import StudentSubmissions from "./pages/StudentSubmissions";
import Outline from "./pages/Outline";
import EditAssignment from "./pages/EditAssignments";
import PersonalIDCard from "./pages/PersonalIDCard";
import RoleManagement from "./pages/RoleManagement";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout/>}>
        <Route index element={<Training />}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/courses/:id" element={<CoursePage/>}/>
      </Route>
      <Route path="*" element={<NotFoundPage/>}/>
      <Route path="/student-login" element={<StudentLogin/>}/>
      <Route path="/admin-login" element={<AdminLogin/>}/>
      <Route path="/admin" element={<Admin />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/student-management" element={<StudentManagement />} />
      <Route path="/course-management" element={<CourseManagement />} />
      <Route path="/admin-management" element={<AdminManagement />} />
      <Route path="/role-management" element={<RoleManagement />} />
      <Route
        path="/certificate-management"
        element={<CertificateManagement />}
      />
      <Route path="/id-card-management" element={<IDCardManagement />} />
      <Route path="/personal-id-card" element={<PersonalIDCard />} />
      <Route path="/add-student" element={<AddStudent />} />
      <Route path="/assignment" element={<Assignment />} />
      <Route path="/student-submissions" element={<StudentSubmissions />} />
      <Route path="/outline" element={<Outline />} />
      <Route path="/edit-assignment" element={<EditAssignment />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/header" element={<AdminHeader />} />
    </Routes>
  );
}

export default App;
  