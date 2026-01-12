
const OurFirmInner = () => {
  return (
    <section className="w-full font-serif overflow-hidden">
      <div className="relative h-75 md:h-65 w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // Demo image from Unsplash
            backgroundImage: `url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1500')`,
          }}
        >
          <div className="absolute inset-0 bg-[#0a1a2f]/70">
            <h1 className="text-white text-[3rem] pt-30 px-40 max-md:px-10">
              Demo Heading
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-[#0b162a] text-white py-20 px-10 md:px-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="text-xl md:text-2xl leading-relaxed font-light italic opacity-90">
            <p>
              This is a demo paragraph representing the introductory statement. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="text-base md:text-lg leading-relaxed font-light opacity-80 space-y-6">
            <p>
              In this section, you can place your secondary demo content. 
              Our group provides high-quality solutions and professional 
              advice to help navigate complex global environments with 
              clarity and strategic insight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFirmInner;