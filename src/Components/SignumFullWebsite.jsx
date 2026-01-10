import React from "react";

function SignumFullWebsite() {
  return (
    <section className="w-full pt-24 flex flex-col md:flex-row items-start gap-12 text-white">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-serif mb-2">Differentiation</h2>
        <div className="w-full h-[1px] bg-blue-400/50 mb-8"></div>
        <ul className="space-y-4 text-sm font-light leading-relaxed list-disc pl-5 opacity-90">
          <li>
            Rigorous analytical capabilities: leadership has extensive
            experience in political risk...
          </li>
          <li>
            Unique policy meetings and roundtable events with senior
            principals...
          </li>
          <li>
            An independent Advisory firm, Signum Global has representation
            across the political spectrum.
          </li>
          <li>
            Signum Global offers 'calls' only on topics where we are confident
            we have an edge...
          </li>
        </ul>
        <div className="mt-12 pt-8 border-l-2 border-blue-400 pl-6 italic text-xl font-light">
          With Signum Global's help, clients are better prepared to realize
          investment gains...
        </div>
      </div>
      <div className="md:w-1/2">
        <img src="./Service/TWO.jpg" alt="NYSE" className="w-full shadow-2xl" />
      </div>
    </section>
  );
}

export default SignumFullWebsite;
