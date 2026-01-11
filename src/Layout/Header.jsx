import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [meun, setMeun] = useState(false);

  const handleMenu = () => {
    setMeun(!meun);
  };
  return (
    <header className="fixed top-0 left-0 w-full z-20 max-md:bg-zinc-800/70 pt-2">
      <nav className="max-w-8xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-4">
          <div className="shrink-0">
            <NavLink to="/">
              <div className="p-12 max-md:p-4 flex flex-col leading-none ">
                <span className="text-[30px] tracking-[0.2em] font-serif uppercase text-white max-sm:text-[15px]">
                  BRANDNAME
                </span>
                <span className="text-[10px] tracking-[0.4em] font-sans font-light mt-1 text-white uppercase max-sm:text-[8px]">
                  DEMO ADVISORS GROUP
                </span>
              </div>
            </NavLink>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink
                to={"/our-firm"}
                className={({ isActive }) =>
                  `text-xs font-medium tracking-widest uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-blue-400"
                      : "text-white hover:text-gray-300"
                  }`
                }
              >
                OUR FIRM
              </NavLink>
              <NavLink
                to={"/people"}
                className={({ isActive }) =>
                  `text-xs font-medium tracking-widest uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-blue-400"
                      : "text-white hover:text-gray-300"
                  }`
                }
              >
                PEOPLE
              </NavLink>
              <NavLink
                to={"/services"}
                className={({ isActive }) =>
                  `text-xs font-medium tracking-widest uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-blue-400"
                      : "text-white hover:text-gray-300"
                  }`
                }
              >
                SERVICES
              </NavLink>
              <NavLink
                to={"/research"}
                className={({ isActive }) =>
                  `text-xs font-medium tracking-widest uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-blue-400"
                      : "text-white hover:text-gray-300"
                  }`
                }
              >
                RESEARCH
              </NavLink>
              <NavLink
                to={"/events"}
                className={({ isActive }) =>
                  `text-xs font-medium tracking-widest uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-blue-400"
                      : "text-white hover:text-gray-300"
                  }`
                }
              >
                EVENTS
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `text-xs font-medium tracking-widest uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-blue-400"
                      : "text-white hover:text-gray-300"
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>

          <div onClick={handleMenu} className="hidden max-md:block max-sm:mr-3">
            <button className="text-blue-400">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {meun && (
            <div className="absolute top-17.5 left-1/2 -translate-x-1/2 bg-[#3d4559b4] w-[70%] md:w-75 p-10 max-md:block hidden animate-in fade-in slide-in-from-top-2 duration-500 ease-out">
              <div className="flex flex-col space-y-4">
                <NavLink
                  to={"/our-firm"}
                  className="text-white hover:text-blue-400 transition-colors duration-200"
                >
                  OUR FIRM
                </NavLink>
                <NavLink
                  to={"/people"}
                  className="text-white hover:text-blue-400 transition-colors duration-200"
                >
                  PEOPLE
                </NavLink>
                <NavLink
                  to={"/services"}
                  className="text-white hover:text-blue-400 transition-colors duration-200"
                >
                  SERVICES
                </NavLink>
                <NavLink
                  to={"/research"}
                  className="text-white hover:text-blue-400 transition-colors duration-200"
                >
                  RESEARCH
                </NavLink>
                <NavLink
                  to={"/events"}
                  className="text-white hover:text-blue-400 transition-colors duration-200"
                >
                  EVENTS
                </NavLink>
                <NavLink
                  to={"/contact"}
                  className="text-white hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
