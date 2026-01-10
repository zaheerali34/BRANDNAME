import React from "react";

function Events() {
  return (
    <div className="relative h-[300px] md:h-[350px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('./five.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#0a1a2f]/70">
          <h1 className="text-white text-[3rem] max-sm:text-[2rem] max-sm:px-[5rem] pt-[10rem] px-[10rem]">
            Access Events
          </h1>
          <p className="text-white font-semibold text-[1rem] px-[10rem] max-md:px-[2rem]">
            At Signum Global, we provide the highest quality predictive
            research, market insights and policy events. Here is a sample
            non-exhaustive list of our events.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Events;
