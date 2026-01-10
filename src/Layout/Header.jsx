import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [meun, setMeun] = useState(false);

  const handleMenu = () => {
    setMeun(!meun);
  }
  return (
    <header className="fixed top-0 left-0 w-full z-20 max-md:bg-zinc-800/70">
      <nav className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-start max-md:items-center justify-between pt-8 max-md:pt-4 pb-4">
          <div className="shrink-0">
            <NavLink to="/">
              <div className="text-white font-serif">
                <img
                  src="https://signumglobal.com/wp-content/uploads/2020/01/Signum-logo-02.png"
                  alt=""
                  className="w-[150px] object-cover max-md:w-[80px]"
                />
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

          <div onClick={handleMenu}>
          <button className="md:hidden text-blue-400">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          </div>
          
          {
            meun && (
              <div className="absolute top-17.5 left-1/2 -translate-x-1/2 bg-[#3d4559b4] w-[70%] md:w-75 p-10 max-md:block hidden animate-in fade-in slide-in-from-top-2 duration-500 ease-out">
                <div className="flex flex-col space-y-4">
                  <NavLink to={"/our-firm"} className="text-white hover:text-blue-400 transition-colors duration-200">OUR FIRM</NavLink>
                  <NavLink to={"/people"} className="text-white hover:text-blue-400 transition-colors duration-200">PEOPLE</NavLink>
                  <NavLink to={"/services"} className="text-white hover:text-blue-400 transition-colors duration-200">SERVICES</NavLink>
                  <NavLink to={"/research"} className="text-white hover:text-blue-400 transition-colors duration-200">RESEARCH</NavLink>
                  <NavLink to={"/events"} className="text-white hover:text-blue-400 transition-colors duration-200">EVENTS</NavLink>
                  <NavLink to={"/contact"} className="text-white hover:text-blue-400 transition-colors duration-200">Contact</NavLink>
                </div>
              </div>
            )
          }

        </div>
      </nav>
    </header>
  );
}

export default Header;
