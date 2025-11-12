import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import imgLoading from "../assets/logo-Hero.png";
const MainLayouts = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <div className="relative min-h-screen">
        {isLoading && (
          <>
            <div className="fixed inset-0 flex items-center justify-center bg-white/95 z-[9999]">
              <h2 className="flex justify-center items-center text-5xl font-bold text-[#001931] my-4">
                L{" "}
                <img
                  src={imgLoading}
                  class="rounded-lg w-10 h-10 object-cover transform hover:scale-105 transition-transform animate-spin duration-300"
                  alt="Image"
                />{" "}
                ading
              </h2>
            </div>
          </>
        )}
        <Navbar />
        <div className="bg-[#ffffff]">
          <Outlet></Outlet>
          <ToastContainer />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayouts;
