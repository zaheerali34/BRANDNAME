import React from "react";

const SignumWebsite = () => {
  return (
    <div className="w-full bg-[#0F1329] font-serif">
      <section className=" text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm md:text-base leading-relaxed tracking-wide font-light opacity-90">
            To receive additional information about Signum Global Advisors or to
            receive notification about our research and events, please reach out
            to us at
            <a
              href="mailto:research@signumglobal.com"
              className="text-[#7fb5f5] hover:underline ml-1"
            >
              research@signumglobal.com
            </a>
            .
          </p>
        </div>
      </section>

      <div className="relative w-full h-[350px] md:h-[310px] bg-[#0F1329] flex items-center justify-center overflow-hidden">
        <img src="./three.jpg" alt="" />
      </div>

      <div className="p-12 flex flex-col leading-none ">
        <span className="text-[40px] tracking-[0.2em] font-serif uppercase text-white">
          SIGNUM
        </span>
        <span className="text-[15px] tracking-[0.4em] font-sans font-light mt-1 text-white uppercase">
          GLOBAL ADVISORS
        </span>
      </div>
    </div>
  );
};

export default SignumWebsite;
