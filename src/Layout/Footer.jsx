import React from "react";

const Footer = () => {
  const offices = [
    {
      city: "New York",
      address: [
        "Signum Global Advisors",
        "1185 Avenue of the Americas",
        "New York, NY 10036",
        "+1.212.355.3500",
      ],
    },
    {
      city: "London",
      address: [
        "Signum Global Advisors",
        "78-79 Pall Mall",
        "London, SW1Y 5ES",
        "United Kingdom",
      ],
    },
    {
      city: "Washington",
      address: ["Signum Global Advisors", "Washington, D.C."],
    },
    {
      city: "Boston",
      address: ["Signum Global Advisors", "Boston, MA"],
    },
    {
      city: "San Francisco",
      address: ["Signum Global Advisors", "San Francisco, CA"],
    },
    {
      city: "Mexico City",
      address: ["Signum Global Advisors", "Mexico City, Mexico"],
    },
    {
      city: "Dubai, U.A.E.",
      address: ["Signum Global Advisors", "Dubai, United Arab Emirates"],
    },
  ];

  const navLinks = [
    "HOME",
    "OUR FIRM",
    "PEOPLE",
    "SERVICES",
    "RESEARCH",
    "EVENTS",
    "MEDIA",
    "CONTACT",
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
          Copyright 2023. Designed By IMG
        </p>
      </div>
    </footer>
  );
};

export default Footer;
