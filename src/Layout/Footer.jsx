import React from "react";

const Footer = () => {
  const offices = [
    {
      city: "City Name One",
      address: [
        "Demo Company Name",
        "123 Business Street Road",
        "State, Country 00000",
        "+0.000.000.0000",
      ],
    },
    {
      city: "City Name Two",
      address: [
        "Demo Company Name",
        "456 Global Avenue Lane",
        "Postal Code, Region",
        "International Office",
      ],
    },
    {
      city: "City Name Three",
      address: ["Demo Company Name", "Region Headquarters"],
    },
    {
      city: "City Name Four",
      address: ["Demo Company Name", "Branch Location"],
    },
    {
      city: "City Name Five",
      address: ["Demo Company Name", "Western Division"],
    },
    {
      city: "City Name Six",
      address: ["Demo Company Name", "Pacific Central"],
    },
    {
      city: "City Name Seven",
      address: ["Demo Company Name", "Middle East Hub"],
    },
  ];

  const navLinks = [
    "LINK ONE",
    "LINK TWO",
    "LINK THREE",
    "LINK FOUR",
    "LINK FIVE",
    "LINK SIX",
    "LINK SEVEN",
    "LINK EIGHT",
  ];

  return (
    <footer className="bg-[#0b162a] text-white font-serif">
      <div className="pt-16 pb-12 px-10">
        <nav className="flex flex-wrap gap-x-10 gap-y-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-[11px] tracking-[0.2em] font-medium hover:text-gray-400 transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      <div className="px-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-10">
          {offices.map((office, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="text-2xl font-normal mb-6 tracking-wide">
                {office.city}
              </h4>
              <div className="space-y-1">
                {office.address.map((line, i) => (
                  <p
                    key={i}
                    className="text-[12px] leading-relaxed text-gray-300 font-sans tracking-wide"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#08101d] py-8 px-10 border-t border-white/5">
        <p className="text-[11px] tracking-widest text-gray-400">
          Copyright 2026. Designed By Demo Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;