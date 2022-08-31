// layouts/Dashboard/Dashboard.tsx

import React from "react";
import { Outlet } from "react-router-dom";
import "./Dashboard.style.scss";
import Navbar from "../../components/Navbar";

type Props = {
  children?: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className={"dashboard-layout"} data-testid={"DashboardLayout"}>
      <Navbar />
      <div className={"app-body"}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
