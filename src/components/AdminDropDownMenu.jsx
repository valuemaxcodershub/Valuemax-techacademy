import React from "react";
import { Link } from "react-router-dom";

const AdminDropDownMenu = (props) => {
  const menuLinkCss ="block text-white text-left p-2 border-b border-b-slate-200";
    return (
    <div
      className={
        props.darkMode
          ? "sm:hidden bg-gray-800 p-4"
          : "sm:hidden bg-blue-800 p-4"
      }
    >
      <Link
        to="/admin"
        className={menuLinkCss}
        onClick={props.toggleMobileMenu}
      >
        Dashboard
      </Link>
      <Link
        to="/student-management"
        className={menuLinkCss}
        onClick={props.toggleMobileMenu}
      >
        Student Management
      </Link>
      <Link
        to="/course-management"
        className={menuLinkCss}
        onClick={props.toggleMobileMenu}
      >
        Manage Courses
      </Link>
      <Link
        to="/admin-management"
        className={menuLinkCss}
        onClick={props.toggleMobileMenu}
      >
        Manage Admins
      </Link>
      <Link
        to="/certificate-management"
        className={menuLinkCss}
        onClick={props.toggleMobileMenu}
      >
        Manage Certificate
      </Link>
      {/* <Link to="/" className={menuLinkCss} onClick={props.toggleMobileMenu}>
        Generate ID Card
      </Link> */}
      <Link
        to="/certificate-management"
        className={menuLinkCss}
        onClick={props.toggleMobileMenu}
      >
        Manage ID Cards
      </Link>
      <Link
        to="/id-card"
        className={menuLinkCss}
        onClick={props.toggleMobileMenu}
      >
        Personal ID Card
      </Link>
      <Link
        to="/assignment"
        className={menuLinkCss}
        onClick={props.toggleMobileMenu}
      >
        Upload Assignment
      </Link>
      <Link
        to="/edit-assignment"
        className={menuLinkCss}
        onClick={props.toggleMobileMenu}
      >
        Edit Assignment
      </Link>
      <Link
        to="/view-assignment-answers"
        className={menuLinkCss}
        onClick={props.toggleMobileMenu}
      >
        View Student Submission
      </Link>
      <Link
        to="/outline"
        className={menuLinkCss}
        onClick={props.toggleMobileMenu}
      >
        Outline
      </Link>
    </div>
  );
};

export default AdminDropDownMenu;
