import React from "react";
import { Link } from "react-router-dom";

/**
 * DashboardLinkButtons Component
 * 
 * A reusable button component for navigating within the admin dashboard.
 * Each button includes an icon and a title, and redirects to a specified route.
 * 
 * Props:
 * - destination (string): The route path the button should navigate to.
 * - icon (JSX.Element): An icon to visually represent the button's function.
 * - title (string): Text label displayed under the icon.
 * 
 * Features:
 * - Responsive and styled for visual consistency across dashboard pages.
 * - Uses `Link` from `react-router-dom` for client-side routing.
 * - Styled with Tailwind CSS utility classes and includes shadows for emphasis.
 */


const DashboardLinkButtons = (props) => {
  
  const dashboardBtnCss =
    "flex flex-col justify-center items-center min-w-[280px] w-full";
  const dashboardLinkCss =
    "bg-white rounded-xl poppins-regular shadow-md shadow-black min-w-[280px] text-black p-2 mr-4 mt-2 grow";
  return (
    <Link to={props.destination} className={dashboardLinkCss}>
      <button className={dashboardBtnCss}>
        {props.icon}
        {props.title}
      </button>
    </Link>
  );
};

export default DashboardLinkButtons;
