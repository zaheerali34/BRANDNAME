import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-20">
      <nav className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between pt-8 pb-4">
          <div className="shrink-0">
            <NavLink to="/">
              <div className="text-white font-serif">
                <img
                  src="https://signumglobal.com/wp-content/uploads/2020/01/Signum-logo-02.png"
                  alt=""
                  className="w-[150px] object-cover"
                />
              </div>
            </NavLink>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
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
        </div>
      </nav>
    </header>
  );
}

export default Header;
