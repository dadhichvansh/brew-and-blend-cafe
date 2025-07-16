import { useEffect, useState } from "react";
import hero_image from "/hero-section/hero-image.avif";
import { Button } from "./ui/Button";
import { NavLink } from "react-router-dom";
import { Clock, Coffee, MapPin } from "lucide-react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`${
            loaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          <div
            style={{ backgroundImage: `url(${hero_image})` }}
            className={`absolute inset-0 w-full -z-10 bg-cover bg-center md:bg-[position:top] bg-no-repeat`}
          ></div>
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Text content */}
      <div
        className={`container mx-auto px-4 md:px-6 relative z-10 text-white text-center transform transition-all duration-1000 ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 bg-coffee-dark/80 backdrop-blur-sm px-4 py-1 rounded-full">
            <p className="text-sm uppercase tracking-widest font-medium font-outfit">
              Welcome to Brew & Blend
            </p>
          </div>

          <h1 className="text-4xl/5 md:text-6xl/6 lg:text-7xl/18 font-playfair font-medium leading-tight md:leading-tight mb-6">
            Artisanal Coffee & Cozy Vibes
          </h1>

          <p className="text-lg md:text-xl font-outfit mb-8 max-w-2xl mx-auto text-white/90">
            Experience our carefully crafted coffee selections, fresh pastries,
            and welcoming atmosphere in the heart of the city.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 font-outfit">
            <Button
              size="lg"
              className="bg-coffee-dark hover:bg-coffee-darkest active:bg-coffee-medium text-white w-full sm:w-auto cursor-pointer"
            >
              <NavLink to="/contact">Pre-Order Now</NavLink>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-coffee-medium/30 hover:bg-coffee-medium/50 active:bg-coffee-light w-full sm:w-auto cursor-pointer"
            >
              <NavLink to="/menu">Explore Menu</NavLink>
            </Button>
          </div>

          <div className="font-outfit flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-white/90">
            <div className="flex items-center gap-2">
              <Coffee size={18} />
              <span>Premium Beans</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>Open Daily 7AM-9PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>123 Coffee Street</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-[30px] h-[50px] border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
