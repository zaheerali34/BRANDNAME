import React, { useState, useEffect } from "react";

const backgroundImages = [
  "01.jpg",
  "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "two.jpg",
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
            <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-wider uppercase mb-6 drop-shadow-md">
          SIGNUM GLOBAL ADVISORS
        </h1>

        <h2 className="text-2xl md:text-4xl font-light italic mb-24 drop-shadow-sm">
          Policy & Strategy
        </h2>

        <div className="absolute bottom-10 w-full text-center">
          <p className="text-xs md:text-sm lg:text-base font-medium tracking-widest uppercase drop-shadow-sm">
            {citiesList}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
