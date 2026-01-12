import React from "react";

function Research() {
  return (
    <div className="relative h-[300px] md:h-[350px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('./Research.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#0a1a2f]/70  pt-30 px-40 max-md:px-10">
          <h1 className="text-white text-[3rem] ">Research</h1>
          <p className="text-white font-semibold text-[1rem] max-md:text-[0.8rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            repudiandae facilis autem unde soluta labore quibusdam beatae,
            corporis est magni debitis ab illo vero laboriosam voluptate dolorem
            eveniet earum harum!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Research;
