import React from "react";

const SignumContact = () => {
  return (
    <div className="bg-[#0b162a] text-white font-serif p-8 md:p-24">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto pt-24 border-t border-white/10">
          <p className="text-xs italic mb-8 opacity-70">
            "*" indicates required fields
          </p>

          <form className="space-y-10">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[13px] tracking-widest font-bold uppercase block">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full bg-white text-[#0b162a] p-3 focus:outline-none border-none"
                />
                <span className="text-[10px] opacity-60 block uppercase">
                  First
                </span>
              </div>
              <div className="space-y-2 pt-6 md:pt-7">
                <input
                  type="text"
                  className="w-full bg-white text-[#0b162a] p-3 focus:outline-none border-none"
                />
                <span className="text-[10px] opacity-60 block uppercase">
                  Last
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] tracking-widest font-bold uppercase block">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full bg-white text-[#0b162a] p-3 focus:outline-none border-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] tracking-widest font-bold uppercase block">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="8"
                className="w-full bg-white text-[#0b162a] p-3 focus:outline-none border-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#8fb2cf] hover:bg-[#7fb5f5] text-[#0b162a] font-serif py-4 transition-colors uppercase tracking-[0.3em] text-sm"
            >
              Submit
            </button>
          </form>

          <div className="mt-24 text-center space-y-4">
            <a
              href="#"
              className="inline-block transition-transform hover:scale-110"
            >
              <svg className="w-12 h-12 fill-white mx-auto" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <p className="text-sm tracking-[0.4em] uppercase font-light pt-4 border-t border-white/10 w-64 mx-auto">
              Follow Signum on LinkedIn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignumContact;
