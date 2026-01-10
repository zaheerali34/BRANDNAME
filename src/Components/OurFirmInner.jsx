import React from "react";

const OurFirmInner = () => {
  return (
    <section className="w-full font-serif overflow-hidden">
      <div className="relative h-[300px] md:h-[260px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('./OurFirm/1.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-[#0a1a2f]/70">
            <h1 className="text-white text-[3rem] pt-[10rem] px-[10rem]">
              Our Firm
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-[#0b162a] text-white py-20 px-10 md:px-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="text-xl md:text-2xl leading-relaxed font-light italic opacity-90">
            <p>
              Charles Myers, former Vice Chairman of Evercore, launched the firm
              in 2018 given the need in the marketplace for an independent
              consulting firm working at the intersection of global policy and
              financial markets.
            </p>
          </div>

          <div className="text-base md:text-lg leading-relaxed font-light opacity-80 space-y-6">
            <p>
              Signum Global provides best-in-class research and customized
              advice for an exclusive set of institutions, ultimately helping
              clients navigate a world of ever growing macro and geopolitical
              uncertainty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFirmInner;
