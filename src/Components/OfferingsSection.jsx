import React from 'react';

const OfferingsSection = () => {
  return (
    <section className="bg-[#162136] text-white py-20 px-10 md:px-32 font-serif">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Main Paragraph */}
        <p className="text-xl md:text-2xl leading-relaxed font-light mb-16 opacity-90 max-w-6xl">
          Signum Global defines policy broadly as legislation, regulation, elections, trade, security, tech, energy, climate, geopolitics and macroeconomic policy. We differentiate ourselves from the competition by offering:
        </p>

        {/* 2. Features Grid (Two Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">
          
          {/* Left Column */}
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"></span>
              <span className="text-base md:text-lg font-light opacity-85 leading-relaxed">
                Independent analysis and forecasts on investible topics
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"></span>
              <span className="text-base md:text-lg font-light opacity-85 leading-relaxed">
                High-touch, customized service according to individual client requirements
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"></span>
              <span className="text-base md:text-lg font-light opacity-85 leading-relaxed">
                Unique access through exclusive roundtables to high-level policymakers and thought leaders
              </span>
            </li>
          </ul>

          {/* Right Column */}
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"></span>
              <span className="text-base md:text-lg font-light opacity-85 leading-relaxed">
                Trips to Washington, London, Rome and Brussels to meet members of congress/parliament
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"></span>
              <span className="text-base md:text-lg font-light opacity-85 leading-relaxed">
                E-mail and phone access to the firm's Principals 24/7
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"></span>
              <span className="text-base md:text-lg font-light opacity-85 leading-relaxed">
                Speaking engagements and asset gathering support
              </span>
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;