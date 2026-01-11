import React from "react";

const SignumWebsite = () => {
  return (
    <div className="w-full bg-[#0F1329] font-serif">
      <section className=" text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm md:text-base leading-relaxed tracking-wide font-light opacity-90">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
            voluptatem nesciunt! Recusandae voluptates harum iste perferendis,
            quos quo nostrum unde ullam, cupiditate expedita ducimus quam quia
            nemo assumenda cumque corrupti.
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

      <div
        className="relative w-full h-[350px] md:h-[310px] bg-[#0F1329] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1713098965471-d324f294a71d?q=80&w=2102&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(15, 19, 41, 0.2)",
        }}
      >
        <div className="p-12 flex flex-col leading-none ">
          <span className="text-[30px] tracking-[0.2em] font-serif uppercase text-white">
          BRANDNAME
        </span>
        <span className="text-[10px] tracking-[0.4em] font-sans font-light mt-1 text-white uppercase">
          DEMO ADVISORS GROUP
        </span>
        </div>
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
