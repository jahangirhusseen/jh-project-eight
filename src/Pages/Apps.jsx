import React, { useState } from "react";
import AllApps from "./AllApps";
import useApps from "../Hooks/useApps";
import SkeletonLoader from "./SkeletonLoader";
import { useNavigate } from "react-router";
import imgLoading from "../assets/logo-Hero.png";
const Apps = () => {
  const allApp = useApps();
  const { app, loading } = allApp;
  const navigate = useNavigate();
  // Search option
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const term = search.trim().toLocaleLowerCase();
  const searchApp = term
    ? app.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : app;
  const handleSearchItems = (e) => {
    setSearch(e.target.value);
    setIsSearch(true);
    setTimeout(() => {
      setIsSearch(false);
    }, 400);
  };

  return (
    <>
      <div className="py-20">
        <div className="container mx-auto px-4 py-4">
          {loading ? (
            <>
              <SkeletonLoader count={app.length} />
            </>
          ) : (
            <>
              <div className="text-center">
                <h2 className="text-5xl font-bold text-[#001931] my-4">
                  Our All Applications
                </h2>
                <p className="text-xl text-[#627382]">
                  Explore All Apps on the Market developed by us. We code for
                  Millions
                </p>
              </div>
              <div className="flex justify-between items-center mt-10">
                <h2>({searchApp.length}) Apps Found</h2>
                <div className="">
                  <label className="input outline-0 focus-within:border-[#001931]">
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="[#001931]"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </g>
                    </svg>
                    <input
                      onChange={handleSearchItems}
                      type="search"
                      placeholder="search Apps"
                    />
                  </label>
                </div>
              </div>

              {isSearch ? (
                <div className="text-center mt-10">
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
              ) : searchApp.length === 0 ? (
                <div className="">
                  <h2 className="text-center py-5 text-3xl font-bold text-[#001931] mb-4">
                    App Not Found
                  </h2>
                  <button
                    onClick={() => navigate("/")}
                    className="btn flex 
          mx-auto my-4 rounded  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold px-3 py-4"
                  >
                    Show All Apps!
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
                  {searchApp.map((app) => (
                    <AllApps key={app.id} app={app}></AllApps>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Apps;
