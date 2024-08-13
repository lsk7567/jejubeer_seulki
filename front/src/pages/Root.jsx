import React from "react";
import Header from "../components/components_hidori/Header";
import Footer from "../components/components_hidori/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SideFloatingBar from "../components/components_mimi/sidebar/SideFloatingBar";

export default function Root() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <div>
      <ScrollToTop />
      <SideFloatingBar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
