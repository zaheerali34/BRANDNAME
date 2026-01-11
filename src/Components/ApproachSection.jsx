// Reliable Placeholder Links jo 100% kaam karenge
const One = "https://placehold.co/200x80/000000/FFFFFF?text=LOGO+1";
const Two = "https://placehold.co/200x80/000000/FFFFFF?text=LOGO+2";
const Three = "https://placehold.co/200x80/000000/FFFFFF?text=LOGO+3";
const Four = "https://placehold.co/200x80/000000/FFFFFF?text=LOGO+4";
const Five = "https://placehold.co/200x80/000000/FFFFFF?text=LOGO+5";

const ApproachSection = () => {
  const cards = [
    {
      title: "Strategy",
      desc: "Develop comprehensive roadmaps for organizational growth and long-term sustainability in competitive markets",
    },
    {
      title: "Efficiency",
      desc: "Optimizing internal processes and operational workflows to deliver maximum value to all stakeholders involved",
    },
    {
      title: "Solutions",
      desc: "Implementing innovative digital architectures and methodologies to solve modern business challenges effectively",
    },
  ];

  return (
    <section className="bg-[#162136] py-20 font-serif">
      <div className="max-w-7xl mx-auto px-10">
        {/* 1. Main Heading - Demo Text */}
        <h2 className="text-white text-center text-4xl md:text-5xl font-normal mb-16 tracking-wide">
          Our Professional Methodology
        </h2>

        {/* 2. Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#1c2a44] p-10 md:p-12 min-h-75 flex flex-col justify-start border border-white/5 shadow-xl"
            >
              <h3 className="text-white text-3xl font-normal mb-6 tracking-tight">
                {card.title}
              </h3>
              <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed opacity-85">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Partner Logos Section with Working Demo Images */}
        <div className="bg-white py-20 px-6 md:px-16 flex flex-wrap justify-between items-center gap-2 shadow-inner">
          <img
            src={One}
            alt="Demo Logo 1"
            className="h-10 md:h-20 object-contain grayscale opacity-60"
          />
          <img
            src={Two}
            alt="Demo Logo 2"
            className="h-10 md:h-20 object-contain grayscale opacity-60"
          />
          <img
            src={Three}
            alt="Demo Logo 3"
            className="h-10 md:h-20 object-contain grayscale opacity-60"
          />
          <img
            src={Four}
            alt="Demo Logo 4"
            className="h-10 md:h-20 object-contain grayscale opacity-60"
          />
          <img
            src={Five}
            alt="Demo Logo 5"
            className="h-10 md:h-20 object-contain grayscale opacity-60"
          />
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;