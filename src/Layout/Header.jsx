import React from "react";
import { NavLink } from "react-router-dom"; // Ensure you're using react-router-dom

function Header() {
  const navigation = [
    { name: "OUR FIRM", href: "/our-firm" },
    { name: "PEOPLE", href: "/people" },
    { name: "SERVICES", href: "/services" },
    { name: "RESEARCH", href: "/research" },
    { name: "EVENTS", href: "/events" },
    { name: "CONTACT", href: "/contact" },
  ];

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
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white text-xs font-medium tracking-widest uppercase hover:text-gray-300 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
