import React from "react";
import { Link } from "react-router-dom";

const DashboardLinkButtons = (props) => {
  
  const dashboardBtnCss =
    "flex flex-col justify-center items-center min-w-[280px] w-full";
  const dashboardLinkCss =
    "bg-white rounded-lg min-w-[280px] text-black p-2 mr-4 mt-2 grow";
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
