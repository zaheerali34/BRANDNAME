import React from "react";
import SignumFullWebsite from "./SignumFullWebsite";

const ResearchSection = () => {
  const expertise = [
    "Geopolitics",
    "Fiscal & Monetary",
    "Interest Rates",
    "Currencies",
    "Elections",
    "Trade Policy",
    "Global Equities",
    "Asset Allocation",
    "Legislation",
    "Security & Defense",
    "Emerging Technology",
    "Blockchain",
    "Regulation",
    "Infrastructure",
    "Cyberterrorism",
    "Cryptocurrencies",
  ];

  return (
    <section className="bg-[#162136] py-20 px-6 md:px-20 font-serif text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-normal mb-10 tracking-wide">
          Global Areas of Expertise
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 border border-white/10 mb-20">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="py-4 px-2 text-center text-[13px] tracking-wider border border-white/5 bg-white/5 hover:bg-white/10 transition-colors uppercase font-light"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="bg-[#1c2a44] p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center border border-white/5 shadow-2xl">
          {/* Image Side */}
          <div className="w-full md:w-1/2 overflow-hidden">
            <img
              src="./Research.jpg"
              alt="Downing Street"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-normal mb-2 tracking-tight">
              Policy Research & Analytics
            </h3>
            <div className="w-full h-[1.5px] bg-[#7fb5f5] mb-8"></div>

            <ul className="space-y-4">
              {[
                "Generate the highest quality independent, predictive policy research",
                "Assess and anticipate the impact of actions by lawmakers in Washington, Westminster, Brussels, and elsewhere",
                "Deliver company and portfolio specific insights to meet key commercial objectives",
                "Provide greater predictability in times of uncertainty",
              ].map((point, i) => (
                <li key={i} className="flex items-start group">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0 group-hover:bg-[#7fb5f5] transition-colors"></span>
                  <p className="text-sm md:text-base font-light leading-relaxed opacity-85">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-20">
          {[
            {
              title: "Geopolitics",
              desc: "Identify key international events and trends, analyze their political and market significance",
            },
            {
              title: "Europe Post-Brexit",
              desc: "Provide insight and analysis of UK parliamentary process, UK x EU negotiations, and implications",
            },
            {
              title: "National Policy",
              desc: "Assess & anticipate domestic policy agendas, party politics and potential outcomes",
            },
            {
              title: "Emerging Technology",
              desc: "Forecast regulatory environments affecting 'Big Tech', blockchain and cryptocurrencies",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-[#1c2a44] p-8 border-t-2 border-[#7fb5f5] shadow-xl "
            >
              <h3 className="text-xl font-normal mb-6 h-12 flex items-center">
                {card.title}
              </h3>
              <p className="text-[13px] font-light leading-relaxed text-gray-400">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

          <SignumFullWebsite />
      </div>
    </section>
  );
};

export default ResearchSection;
