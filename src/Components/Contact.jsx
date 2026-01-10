import React from "react";

function Contact() {
  return (
    <div className="relative h-[300px] md:h-[350px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('./six.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#0a1a2f]/70">
          <h1 className="text-white text-[3rem] max-sm:text-[2rem] max-sm:px-[5rem] pt-[10rem] px-[10rem]">
            Contact Us
          </h1>
          <p className="text-white font-semibold text-[1rem] px-[10rem]">
           Here at Signum Global, our clients are better prepared to navigate increased political volatility with greater clarity and certainty. Contact us to find out how we can help you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
