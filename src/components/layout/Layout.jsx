import React from "react";
import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-160px)] px-4">
        <Outlet /> {/* This renders the current page component */}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
