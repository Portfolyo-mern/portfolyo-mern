import React from "react";
import "./dashboard.scss";
import Banner from "./dashboard/Banner";
import Nav from "./dashboard/Nav";


function Dashboard() {
  return (
    <div classname="dashboardmain">
      <Banner/>
      <Nav/>
    </div>
  );
}

export default Dashboard;
