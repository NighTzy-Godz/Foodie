import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../common/Navbar";

const HomeSharedLayout = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Outlet />
    </React.Fragment>
  );
};

export default HomeSharedLayout;
