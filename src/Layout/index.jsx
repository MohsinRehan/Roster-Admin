import React from "react";
import LeftSideBar from "../Component/Elements/LeftSideNavbar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="d-flex">
      <LeftSideBar />
      <main className="Main-content">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
