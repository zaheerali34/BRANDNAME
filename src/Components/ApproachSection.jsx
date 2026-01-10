import React from "react";
import One from "/OurFirm/2.jpg";
import Two from "/OurFirm/3.jpg";
import Three from "/OurFirm/4.png";
import Four from "/OurFirm/5.png";
import Five from "/OurFirm/6.png";

const ApproachSection = () => {
  const cards = [
    {
      title: "Predictive",
      desc: "Determine what matters for investors and C-suites ahead of policy announcements and events",
    },
    {
      title: "Pro-active",
      desc: "Deliver insights by fielding senior policymakers and practitioners with actionable analysis",
    },
    {
      title: "Political",
      desc: "Deploy our deep knowledge of key personalities and policy agendas that influence decisions and market outcomes",
    },
  ];

  return (
    <section className="bg-[#162136] py-20 font-serif">
      <div className="max-w-7xl mx-auto px-10">
        {/* 1. Main Heading */}
        <h2 className="text-white text-center text-4xl md:text-5xl font-normal mb-16 tracking-wide">
          The Signum Global Approach
        </h2>

        {/* 2. Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#1c2a44] p-10 md:p-12 min-h-[300px] flex flex-col justify-start border border-white/5 shadow-xl"
            >
              <h3 className="text-white text-3xl font-normal mb-6 tracking-tight">
                {card.title}
              </h3>
              <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed opacity-85">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white py-20 px-6 md:px-16 flex flex-wrap justify-between items-center gap-2 shadow-inner">
          <img
            src={One}
            alt="Partner"
            className="h-10 md:h-20 object-contain  "
          />
          <img
            src={Two}
            alt="Partner"
            className="h-10 md:h-20 object-contain  "
          />
          <img
            src={Three}
            alt="Partner"
            className="h-10 md:h-20 object-contain  "
          />
          <img
            src={Four}
            alt="Partner"
            className="h-10 md:h-20 object-contain  "
          />
          <img
            src={Five}
            alt="Partner"
            className="h-10 md:h-20 object-contain  "
          />
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
