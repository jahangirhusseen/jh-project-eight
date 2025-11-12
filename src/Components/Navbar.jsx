import { Github } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import logoImg from "./../assets/logo-Hero.png";

const Navbar = () => {
  return (
    <>
      <div className="bg-base-100 shadow-sm">
        <div className="navbar container px-4 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/apps">Apps</NavLink>
                </li>
                <li>
                  <NavLink to={"/installation"}>Installation</NavLink>
                </li>
              </ul>
            </div>
            <NavLink
              to={"/"}
              className="btn hover:bg-transparent bg-transparent border-none hover:shadow-none text-xl px-0"
            >
              <img src={logoImg} alt="" />
              HERO.IO
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/apps">Apps</NavLink>
              </li>
              <li>
                <NavLink to={"/installation"}>Installation</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end ">
            <NavLink
              target="_blank"
              to={"https://github.com/jahangirhusseen"}
              className="btn rounded bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold px-3 py-4"
            >
              <div className="p-1 bg-white flex justify-center items-center rounded-full">
                <Github size={18} color="#632EE3" />
              </div>
              Contribute
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
