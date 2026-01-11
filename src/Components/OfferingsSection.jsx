import React from 'react';

const OfferingsSection = () => {
  return (
    <section className="bg-[#162136] text-white py-20 px-10 md:px-32 font-serif">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Main Paragraph with Demo Text */}
        <p className="text-xl md:text-2xl leading-relaxed font-light mb-16 opacity-90 max-w-6xl">
          Our organization provides a comprehensive suite of strategic solutions including 
          market analysis, resource management, global logistics, and digital transformation. 
          We distinguish our services from others in the industry by providing:
        </p>

        {/* 2. Features Grid (Two Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">
          
          {/* Left Column - Demo Points */}
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"></span>
              <span className="text-base md:text-lg font-light opacity-85 leading-relaxed">
                Advanced data-driven insights and forecasting for various business sectors
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"></span>
              <span className="text-base md:text-lg font-light opacity-85 leading-relaxed">
                Personalized consulting models tailored to specific organizational goals
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"></span>
              <span className="text-base md:text-lg font-light opacity-85 leading-relaxed">
                Exclusive networking opportunities with industry veterans and global partners
              </span>
            </li>
          </ul>

          {/* Right Column - Demo Points */}
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"></span>
              <span className="text-base md:text-lg font-light opacity-85 leading-relaxed">
                International workshops and seminars hosted in major economic hubs worldwide
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"></span>
              <span className="text-base md:text-lg font-light opacity-85 leading-relaxed">
                Direct communication channels with our lead specialists around the clock
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"></span>
              <span className="text-base md:text-lg font-light opacity-85 leading-relaxed">
                Comprehensive training programs and long-term project sustainability support
              </span>
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;