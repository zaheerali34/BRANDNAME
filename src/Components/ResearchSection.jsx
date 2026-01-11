import React from "react";
import SignumFullWebsite from "./SignumFullWebsite";

const ResearchSection = () => {
  const expertise = [
    "Mathematics",
    "Social Science",
    "Physics",
    "Chemistry",
    "Biology",
    "English Lit",
    "Economics",
    "World History",
    "Computer Science",
    "Arts & Design",
    "Data Analytics",
    "Robotics",
    "Environmental Studies",
    "Physical Education",
    "Foreign Languages",
    "Public Speaking",
  ];

  return (
    <section className="bg-[#162136] py-20 px-6 md:px-20 font-serif text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-normal mb-10 tracking-wide">
          Our Academic Disciplines
        </h2>

        {/* Subjects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-white/10 mb-20">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="py-4 px-2 text-center text-[13px] tracking-wider border border-white/5 bg-white/5 hover:bg-white/10 transition-colors uppercase font-light"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Feature Box */}
        <div className="bg-[#1c2a44] p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center border border-white/5 shadow-2xl">
          {/* Image Side - Educational Image */}
          <div className="w-full md:w-1/2 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Classroom Research"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-normal mb-2 tracking-tight">
              Educational Excellence
            </h3>
            <div className="w-full h-[1.5px] bg-[#7fb5f5] mb-8"></div>

            <ul className="space-y-4">
              {[
                "Generate the highest quality pedagogical resources and academic materials",
                "Assess and anticipate the learning needs of students across different grades",
                "Deliver specialized mentorship programs to meet individual student goals",
                "Provide a stable learning environment in times of academic transition",
                "Empower students with critical thinking and problem-solving skills",
              ].map((point, i) => (
                <li key={i} className="flex items-start group">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0 group-hover:bg-[#7fb5f5] transition-colors"></span>
                  <p className="text-sm md:text-base font-light leading-relaxed opacity-85">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-20">
          {[
            {
              title: "STEM Education",
              desc: "Identify key scientific concepts and trends, analyze their practical and research significance for students.",
            },
            {
              title: "Language Arts",
              desc: "Provide deep insight into linguistic patterns, creative writing techniques, and literary analysis.",
            },
            {
              title: "Civics & Policy",
              desc: "Assess domestic social structures, governance systems, and their historical outcomes in society.",
            },
            {
              title: "Digital Literacy",
              desc: "Forecast the impact of emerging technology on modern education, including AI and digital collaboration.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-[#1c2a44] p-8 border-t-2 border-[#7fb5f5] shadow-xl "
            >
              <h3 className="text-xl font-normal mb-6 h-12 flex items-center">
                {card.title}
              </h3>
              <p className="text-[13px] font-light leading-relaxed text-gray-400">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

          <SignumFullWebsite />
      </div>
    </section>
  );
};

export default ResearchSection;