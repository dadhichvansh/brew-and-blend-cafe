import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MapPin, Clock, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

const LocationHours = () => {
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

    handleScroll(); // trigger once on mount
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 px-5 md:px-20 font-outfit"
    >
      <div className="section-container">
        <div className="text-center mb-12">
          <h2
            className="section-title transform transition-all duration-700 text-4xl font-playfair font-medium"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Find Us
          </h2>
          <p
            className="section-subtitle mx-auto mt-10 text-xl text-coffee-dark transform transition-all duration-700 delay-100"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Visit our cozy café in the heart of the city
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map */}
          <div
            className="rounded-lg overflow-hidden shadow-lg h-[400px] transform transition-all duration-700 delay-200"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7362175667!2d-122.41941532365156!3d37.77492897976195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858094ac2d94c3%3A0x192df6b8ee20e0a0!2sFerry%20Building%2C%20San%20Francisco%2C%20CA%2094111!5e0!3m2!1sen!2sus!4v1631675458&maptype=roadmap&zoom=16"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Brew & Blend Café Location"
            ></iframe>
          </div>

          {/* Info Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 transform transition-all duration-700 delay-300"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {/* Address */}
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-md hover-scale">
              <div className="w-12 h-12 bg-coffee-light rounded-full flex items-center justify-center mb-4">
                <MapPin size={20} className="text-coffee-dark" />
              </div>
              <h3 className="text-xl font-playfair mb-2">Location</h3>
              <p className="text-muted-foreground mb-4 text-coffee-dark">
                123 Coffee Street
                <br />
                San Francisco, CA 94111
                <br />
                United States
              </p>
              <Button
                size="sm"
                className="border-coffee-dark text-coffee-dark hover:bg-coffee-dark/10 group border"
              >
                <NavLink to="/location" className={`flex items-center gap-2`}>
                  Get Directions
                  <ArrowRight
                    size={14}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </NavLink>
              </Button>
            </div>

            {/* Hours */}
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-md hover-scale">
              <div className="w-12 h-12 bg-coffee-light rounded-full flex items-center justify-center mb-4">
                <Clock size={20} className="text-coffee-dark" />
              </div>
              <h3 className="text-xl font-playfair mb-2">Hours</h3>
              <ul className="text-muted-foreground mb-4 space-y-2 text-coffee-dark">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>7AM - 9PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>8AM - 9PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>8AM - 8PM</span>
                </li>
              </ul>
              <Button
                size="sm"
                className="border-coffee-dark text-coffee-dark hover:bg-coffee-dark/10 group border"
              >
                <NavLink to="/location" className={`flex items-center gap-2`}>
                  View Details
                  <ArrowRight
                    size={14}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </NavLink>
              </Button>
            </div>

            {/* Phone */}
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-md hover-scale">
              <div className="w-12 h-12 bg-coffee-light rounded-full flex items-center justify-center mb-4">
                <Phone size={20} className="text-coffee-dark" />
              </div>
              <h3 className="text-xl font-playfair mb-2">Phone</h3>
              <p className="text-muted-foreground mb-4 text-coffee-dark">
                <a
                  href="tel:+14155551234"
                  className="hover:text-coffee-dark transition-colors"
                >
                  +1 (415) 555-1234
                </a>
              </p>
              <Button
                size="sm"
                className="border-coffee-dark text-coffee-dark hover:bg-coffee-dark/10 group border"
              >
                <a
                  href="tel:+14155551234"
                  className={`flex items-center gap-2`}
                >
                  Call Us
                  <ArrowRight
                    size={14}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </Button>
            </div>

            {/* Email */}
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-md hover-scale">
              <div className="w-12 h-12 bg-coffee-light rounded-full flex items-center justify-center mb-4">
                <Mail size={20} className="text-coffee-dark" />
              </div>
              <h3 className="text-xl font-playfair mb-2">Email</h3>
              <p className="text-muted-foreground mb-4 text-coffee-dark">
                <a
                  href="mailto:hello@brewandblend.com"
                  className="hover:text-coffee-dark transition-colors"
                >
                  hello@brewandblend.com
                </a>
              </p>
              <Button
                size="sm"
                className="border-coffee-dark text-coffee-dark hover:bg-coffee-dark/10 group border"
              >
                <NavLink to="/contact" className={`flex items-center gap-2`}>
                  Contact Us
                  <ArrowRight
                    size={14}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHours;
