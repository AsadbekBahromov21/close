import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
