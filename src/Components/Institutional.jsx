import React from "react";

function Institutional() {
  return (
    <section className="w-full bg-[#162136] py-16 ">
      <div className="max-w-5xl mx-auto bg-[#1c2a44] p-10 flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <img
            src="./Service/three.jpg"
            alt="Wall St"
            className="w-full"
          />
        </div>
        <div className="w-full md:w-1/2 text-white">
          <h3 className="text-3xl font-serif mb-4">
            Institutional Investor & Corporate Advisory
          </h3>
          <div className="w-full h-[1px] bg-[#7fb5f5]/50 mb-8"></div>
          <ul className="space-y-4 text-sm font-light leading-relaxed list-disc pl-5">
            <li>
              Exclusive, high-touch client service customized to individual
              client preferences
            </li>
            <li>
              CEO and Board counsel for business-critical financial and
              political issues
            </li>
            <li>
              Forecast social, political and economic trends to inform corporate
              and investor strategies
            </li>
            <li>Roadshows with world leaders in policy and technology</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Institutional;
