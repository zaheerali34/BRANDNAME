import { useState, useEffect } from "react";

const backgroundImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1501466044931-62695aada8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const citiesList =
    "New York | London | Washington | Boston | San Francisco | Mexico City | Dubai";

  return (
    <div className="relative h-[80vh] w-full overflow-hidden font-serif">
      <div className="absolute top-0 left-0 w-full h-full">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-[0.2em] uppercase mb-6 drop-shadow-lg">
          BRANDNAME
        </h1>

        <h2 className="text-2xl md:text-2xl font-light italic mb-24 drop-shadow-md">
           DEMO ADVISORS GROUP
        </h2>

        <div className="absolute bottom-10 w-full text-center">
          <div className="max-w-4xl mx-auto h-px bg-white/20 mb-6"></div>
          <p className="text-[10px] md:text-xs lg:text-sm font-medium tracking-[0.4em] uppercase drop-shadow-sm opacity-80">
            {citiesList}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;