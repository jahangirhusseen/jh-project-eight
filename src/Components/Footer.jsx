import React from "react";
import logoImg from "./../assets/logo-Hero.png";
import { NavLink, useNavigate } from "react-router";
import { Facebook, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#001931]">
        <footer className="container pt-20 pb-10 mx-auto  text-[#A1A1AA]  ">
          <div className="footer grid sm:grid-cols-2 lg:grid-cols-6 p-10">
            <nav className="col-span-2">
              <h6 className="text-lg md:text-2xl font-semibold text-white mb-3">
                {/* <NavLink
                  to={"/"}
                  className="btn hover:bg-transparent bg-transparent border-none hover:shadow-none text-xl text-white"
                ></NavLink> */}
                <button
                  className="cursor-pointer flex space-x-2 items-center"
                  onClick={() => navigate("/")}
                >
                  <img src={logoImg} alt="" />
                  HERO.IO
                </button>
              </h6>
              <p className="w-full lg:w-[310px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </nav>
            <nav>
              <h6 className="text-base font-semibold text-white/80 mb-3">
                Company
              </h6>
              <a className="link link-hover">About Us</a>
              <a className="link link-hover">Our Mission</a>
              <a className="link link-hover">Contact Saled</a>
            </nav>
            <nav>
              <h6 className="text-base font-semibold text-white/80 mb-3">
                Services
              </h6>
              <a className="link link-hover">Services</a>
              <a className="link link-hover">Customer Stories</a>
              <a className="link link-hover">Download Apps</a>
            </nav>
            <nav>
              <h6 className="text-base font-semibold text-white/80 mb-3">
                Information
              </h6>
              <a className="link link-hover">Privacy Policy</a>
              <a className="link link-hover">Terms & Conditions</a>
              <a className="link link-hover">Join Us</a>
            </nav>
            <nav>
              <h6 className="text-base font-semibold text-white/80 mb-3">
                Social Links
              </h6>
              <div className="flex gap-4">
                <div className="bg-white p-2 rounded-full text-[#000000]">
                  <NavLink to={"/"}>
                    <Twitter size={16} />
                  </NavLink>
                </div>
                <div className="bg-white p-2 rounded-full text-[#000000]">
                  <NavLink to={"/"}>
                    <Linkedin size={16} />
                  </NavLink>
                </div>
                <div className="bg-white p-2 rounded-full text-[#000000]">
                  <NavLink to={"/"}>
                    <Facebook size={16} />
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
          <div className="footer border-t border-[#E5E7EB20]  pt-4 justify-center ">
            <p className="pt-5">
              Copyright © {new Date().getFullYear()} - All right reserved
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
