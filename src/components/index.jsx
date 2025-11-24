import React, { useState } from "react";
import logoimg from "../components/img/logo.png";
import insta from "../components/img/insta.png";
import face from "../components/img/fack.png";
import search from "../components/img/search.svg";
import like from "../components/img/Outline.svg";
import shop from "../components/img/shop.svg";
import { X, ChevronDown, ChevronUp } from "lucide-react"; // <-- qo‘shildi
import menuu from "../components/img/Menu.png";
import { NavLink, Link  } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (name) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  return (
    <div className="pt-3.5 pb-3.5 w-full shadow-lg z-12 bg-[#fffffff6] fixed">
      <div className="max-w-[1220px] pl-3 pr-3 m-auto flex items-center justify-between">
        <Link to={"/"}>
          <img className="w-30" src={logoimg} alt="" />
        </Link>

        <div className="max-[1083px]:hidden">
          <ul className="flex items-center gap-9">
            <NavLink
              to={"/allproduct"}
              className={({isActive}) => isActive ? "border-b-3 pb-0.5 border-[#359740]" : "relative font-[500] group py-1 cursor-pointer text-[#70737C]"}
            >
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#359740] duration-200 group-hover:w-full"></span>
              ALL PRODUCTS
            </NavLink>
            <NavLink
              to={"/about"}
               className={({isActive}) => isActive ? "border-b-3 pb-0.5 border-[#359740]" : "relative font-[500] group py-1 cursor-pointer text-[#70737C]"}
            >
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#359740] duration-200 group-hover:w-full"></span>
              ABOUT SEEDRA
            </NavLink>
            <NavLink
              to={"/our"}
               className={({isActive}) => isActive ? "border-b-3 pb-0.5 border-[#359740]" : "relative font-[500] group py-1 cursor-pointer text-[#70737C]"}
            >
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#359740] duration-200 group-hover:w-full"></span>
              OUR BLOG
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({isActive}) => isActive ? "border-b-3 pb-0.5 border-[#359740]" : "relative font-[500] group py-1 cursor-pointer text-[#70737C]"}
            >
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#359740] duration-200 group-hover:w-full"></span>
              CONTACTS
            </NavLink>
          </ul>
        </div>

        <div className="flex gap-5 items-center">
          <div className="flex gap-2 max-[593px]:hidden">
            <img
              className="hover:scale-105 w-6.5 cursor-pointer"
              src={insta}
              alt=""
            />
            <img
              className="hover:scale-105 w-6.5 cursor-pointer"
              src={face}
              alt=""
            />
          </div>

          <div className="flex p-0 pl-4 pr-4 border-1 border-[#EFEFEF] rounded-full max-[513px]:hidden">
            <button className="cursor-pointer">
              <img src={search} alt="" />
            </button>
            <input
              className="pt-3 pb-3 pl-2 pr-7 outline-0"
              type="text"
              placeholder="Search"
            />
          </div>

          <div className="flex gap-4 items-center">
            <img
              className="hover:scale-105 w-6.5 cursor-pointer"
              src={like}
              alt=""
            />
            <img
              className="hover:scale-105 w-6.5 cursor-pointer"
              src={shop}
              alt=""
            />

            <button
              onClick={() => setOpen(true)}
              className="menue min-[513px]:hidden"
            >
              <img src={menuu} alt="" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed top-0 left-0 w-[80%] h-full bg-white z-50 shadow-2xl flex flex-col p-5 overflow-y-auto transition-all duration-300">
          <button onClick={() => setOpen(false)} className="mb-5">
            <X size={26} />
          </button>

          <div className="w-full flex items-center gap-2 border rounded-full px-4 py-3 bg-[#F7F7F7] mb-6">
            <img src={search} alt="" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-full outline-none"
            />
          </div>

          <div className="flex flex-col gap-4">
            {[
              "All vegetables",
              "Bundles",
              "Herbs",
              "Vegetables",
              "Fruits",
              "Supplies",
              "Flowers",
            ].map((category) => (
              <div key={category}>
                <button
                  className="w-full flex justify-between items-center text-[17px] font-medium text-[#4A4A4A]"
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                  {openCategory === category ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>

                {category === "Vegetables" && openCategory === "Vegetables" && (
                  <div className="ml-4 mt-2 flex flex-col gap-2 text-[#6B6B6B]">
                    <p>Cucumber</p>
                    <p>Onion</p>
                    <p>Garlic</p>
                  </div>
                )}
              </div>
            ))}

            <hr className="my-4" />

            <div className="flex justify-between items-center text-[17px] font-medium">
              <p>Our blog</p>
            </div>
            <div className="flex justify-between items-center text-[17px] font-medium">
              <p>About Seedra</p>
            </div>
          </div>

          <div className="flex gap-4 absolute bottom-5 left-5">
            <img src={insta} className="w-7" alt="" />
            <img src={face} className="w-7" alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
