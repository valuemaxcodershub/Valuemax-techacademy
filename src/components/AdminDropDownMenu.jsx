import React from "react";
import { Link } from "react-router-dom";


/**
 * AdminDropDownMenu Component
 * 
 * This component renders a collapsible dropdown navigation menu for mobile views
 * in the admin panel. It provides links to various admin routes.
 * 
 * Props:
 * - darkMode (boolean): Determines if dark theme styles are applied.
 * - toggleMobileMenu (function): Closes the dropdown after a link is clicked.
 * 
 * Features:
 * - Mobile-friendly (hidden on screens larger than `sm`).
 * - Dynamic styling based on `darkMode`.
 * - All links navigate to relevant admin routes and trigger `toggleMobileMenu` on click.
 * 
 * Notes:
 * - The "Generate ID Card" link is commented out; re-enable if needed.
 * - Ensure consistent styling across themes using `menuLinkCss`.
 */


const AdminDropDownMenu = (props) => {
  const menuLinkCss ="block text-white text-left p-2 border-b border-b-slate-200";
    return (
    <div
      className={
        props.darkMode
          ? "sm:hidden bg-gray-950 p-4"
          : "sm:hidden bg-slate-600 p-4"
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
        to="/id-card-management"
        className={menuLinkCss}
        onClick={props.toggleMobileMenu}
      >
        Manage ID Cards
      </Link>
      <Link
        to="/personal-id-card"
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
        to="/student-submissions"
        className={menuLinkCss}
        onClick={props.toggleMobileMenu}
      >
        Student Submissions
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
