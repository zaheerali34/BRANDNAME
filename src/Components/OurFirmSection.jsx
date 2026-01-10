import React from "react";

const backgroundImageUrl =
  './two.jpg';

const OurFirmSection = () => {
  return (
    <section
      className="relative w-full py-20 md:py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-[#0F1329]/80"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-start  text-white">
        <h2 className="text-4xl md:text-4xl font-serif font-normal tracking-wide mb-10">
          Our Firm
        </h2>

        <p className="text-lg md:text-[1rem] font-serif leading-relaxed max-w-4xl mb-6 opacity-90">
          Signum Global is an independent advisory firm operating at the
          intersection of policy and global markets. Signum Global works with
          financial institutions and multi-national businesses to anticipate and
          assess policy agendas that will have a material impact upon markets,
          sectors, and asset classes. We provide the highest-quality predictive
          research, market insights and policy events.
        </p>

        <p className="text-lg md:text-[1rem] font-serif leading-relaxed max-w-4xl mb-12 opacity-90">
          Signum Global's Executive team enjoys unique exposure to
          decision-making at the most senior levels – political, financial and
          corporate. Our clients are better prepared to navigate increasing
          macro and geopolitical volatility with greater clarity and certainty.
          The firm operates globally from offices in New York, Washington,
          Boston, San Francisco, Mexico City, London, and Dubai.
        </p>

        <button className="bg-[#619ce7] hover:bg-[#4f8ac7] text-white font-serif text-lg py-3 px-8 rounded transition duration-300 ease-in-out m-auto">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default OurFirmSection;
