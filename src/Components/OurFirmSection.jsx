import React from "react";

const backgroundImageUrl =
  'https://images.unsplash.com/photo-1562767332-ce0b1e2426bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const OurFirmSection = () => {
  return (
    <section
      className="relative w-full py-20 md:py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-[#0F1329]/80"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-start  text-white">
        <h2 className="text-4xl md:text-4xl font-serif font-normal tracking-wide mb-10">
          Demo Section Title
        </h2>

        <p className="text-lg md:text-[1rem] font-serif leading-relaxed max-w-4xl mb-6 opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
          cillum dolore eu fugiat nulla pariatur.
        </p>

        <p className="text-lg md:text-[1rem] font-serif leading-relaxed max-w-4xl mb-12 opacity-90">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. 
          Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, 
          est eros bibendum elit, nec luctus magna felis sollicitudin mauris. 
          Integer in mauris eu nibh euismod gravida.
        </p>

        <button className="bg-[#619ce7] hover:bg-[#4f8ac7] text-white font-serif text-lg py-3 px-8 rounded transition duration-300 ease-in-out m-auto">
          Demo Button
        </button>
      </div>
    </section>
  );
};

export default OurFirmSection;