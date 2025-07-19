import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/Button";
import { Coffee, Clock, ThumbsUp } from "lucide-react";
import coffee_background from "/contact-section/coffee-background.avif";

const Contact = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsInView(true);
        }
      }
    };

    handleScroll(); // Run once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative px-5 py-20 md:py-32 bg-coffee-dark text-white font-outfit"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={coffee_background}
          alt="Coffee Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-coffee-darkest/80"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium mb-6 transform transition-all duration-700"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Skip the Line, Pre-Order Online
          </h2>

          <p
            className="text-lg md:text-xl text-white/80 mb-10 transform transition-all duration-700 delay-100"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Pre-order your favorite coffee and pastries for pickup at your
            convenience. No waiting, no hassle, just great coffee when you need
            it.
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 transform transition-all duration-700 delay-200"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-medium mb-2 font-playfair">
                Choose Your Order
              </h3>
              <p className="text-white/70 text-sm">
                Select from our full menu of drinks and pastries
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-medium mb-2 font-playfair">
                Pick a Time
              </h3>
              <p className="text-white/70 text-sm">
                Select when you'd like to pick up your order
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-medium mb-2 font-playfair">Enjoy</h3>
              <p className="text-white/70 text-sm">
                Skip the line and pick up your order at the designated time
              </p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-white text-coffee-dark hover:bg-white/90 active:bg-coffee-medium transform transition-all duration-700 cursor-pointer"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <NavLink to="/contact">Pre-Order Now</NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
