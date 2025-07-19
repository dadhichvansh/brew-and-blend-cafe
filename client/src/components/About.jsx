import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, Coffee, Users, Clock } from "lucide-react";
import { Button } from "./ui/Button";
import brew_n_blend_interior from "/about-section/brew-and-blend-interior.avif";
import coffee_beans from "/about-section/coffee-beans.avif";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation once component mounts
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Slight delay for smooth transition

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="about"
      className="relative px-5 md:px-20 py-20 md:py-32 bg-coffee-lightest font-outfit"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div>
            <div className="relative">
              <div
                className="rounded-lg overflow-hidden transform transition-all duration-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                }}
              >
                <img
                  src={brew_n_blend_interior}
                  alt="Brew & Blend Interior"
                  className="w-full h-[390px] md:h-[500px] object-cover"
                />
              </div>

              <div
                className="absolute -bottom-6 -right-4 md:-right-5 w-2/3 h-2/3 rounded-lg overflow-hidden border-8 border-white shadow-xl transform transition-all duration-700 delay-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <img
                  src={coffee_beans}
                  alt="Coffee Beans"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div>
            <div
              className="inline-block bg-coffee-medium-20 px-4 py-1 rounded-full mb-6 transform transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <p className="text-sm uppercase tracking-widest font-medium text-coffee-dark">
                Our Story
              </p>
            </div>

            <h2
              className="text-3xl md:text-4xl font-playfair font-medium mb-6 transform transition-all duration-700 delay-100"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              Crafting Memorable Coffee Experiences Since 2015
            </h2>

            <p
              className="text-muted-foreground mb-6 transform transition-all duration-700 delay-200 text-coffee-dark"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              Brew & Blend began with a simple mission: to create a space where
              coffee lovers could enjoy exceptional brews in a warm, inviting
              atmosphere. Our founders, Emma and James, turned their passion for
              coffee into a community gathering place.
            </p>

            <p
              className="text-muted-foreground mb-8 transform transition-all duration-700 delay-300 text-coffee-dark"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              Today, we source beans from ethical suppliers around the world,
              roast them in-house, and serve them alongside freshly baked
              pastries made from scratch every morning.
            </p>

            {/* Features */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 transform transition-all duration-700 delay-400"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {[
                {
                  icon: <Coffee size={20} />,
                  title: "Premium Beans",
                  desc: "Ethically sourced",
                },
                {
                  icon: <Users size={20} />,
                  title: "Community",
                  desc: "Welcoming space",
                },
                {
                  icon: <Clock size={20} />,
                  title: "Fresh Daily",
                  desc: "Made in-house",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-4 bg-white/50 rounded-lg"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 text-coffee-dark bg-coffee-light">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium font-playfair">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground text-coffee-dark">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            <Button
              className="bg-coffee-dark hover:bg-coffee-darkest active:bg-coffee-medium group transform transition-all cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <NavLink
                to="/about"
                className={`flex items-center gap-2 text-white`}
              >
                Learn More About Us
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
