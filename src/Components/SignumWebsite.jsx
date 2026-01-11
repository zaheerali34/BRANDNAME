import React from "react";

const SignumWebsite = () => {
  return (
    <div className="w-full bg-[#0F1329] font-serif">
      <section className=" text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm md:text-base leading-relaxed tracking-wide font-light opacity-90">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, voluptatem nesciunt! Recusandae voluptates harum iste perferendis, quos quo nostrum unde ullam, cupiditate expedita ducimus quam quia nemo assumenda cumque corrupti.
            <a
              href="mailto:research@signumglobal.com"
              className="text-[#7fb5f5] hover:underline ml-1"
            >
              research@dome.com
            </a>
            .
          </p>
        </div>
      </section>

      <div className="relative w-full h-[350px] md:h-[310px] bg-[#0F1329] flex items-center justify-center overflow-hidden">
        <img src="./three.jpg" alt="" />
      </div>
      
      <div className="p-12 flex flex-col leading-none ">
        <span className="text-[30px] tracking-[0.2em] font-serif uppercase text-white">
          BRANDNAME
        </span>
        <span className="text-[10px] tracking-[0.4em] font-sans font-light mt-1 text-white uppercase">
          DEMO ADVISORS GROUP
        </span>
      </div>
    </div>
  );
};

export default SignumWebsite;
