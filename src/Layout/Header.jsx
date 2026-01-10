import React from "react";

function Header() {
  const navigation = [
    { name: "OUR FIRM", href: "#" },
    { name: "PEOPLE", href: "#" },
    { name: "SERVICES", href: "#" },
    { name: "RESEARCH", href: "#" },
    { name: "EVENTS", href: "#" },
    { name: "CONTACT", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-20">
      <nav className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between pt-8 pb-4">
          <div className="flex-shrink-0">
            <div className="text-white font-serif">
              <img
                src="https://signumglobal.com/wp-content/uploads/2020/01/Signum-logo-02.png"
                alt=""
                className="w-[150px] object-cover"
              />
            </div>
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
