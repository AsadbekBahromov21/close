import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/Header";
import Hero from "../hero/hero";

const Layout = () => {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default memo(Layout);
