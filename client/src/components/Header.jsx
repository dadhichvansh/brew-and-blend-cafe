import { useEffect, useRef, useState } from "react";
import { Logo } from "./ui/Logo";
import { AlignRight, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "./ui/Button";
import { useContext } from "react";
import { NavigationContext } from "./NavigationProvider";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const { navItems, scrollToSection } = useContext(NavigationContext);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Determine if scrolled past threshold
      setIsScrolled(currentScrollPos > 20);

      // Hide/show navbar based on scroll direction
      setVisible(
        () => currentScrollPos < 10 || prevScrollPos > currentScrollPos
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    // Close menu on route change
    setIsMenuOpen(false);
  }, [location]);

  // Mobile navigation menu
  const menuRef = useRef(null);
  const itemRefs = useRef([]);
  const preorderBtnRef = useRef(null);
  const footerRef = useRef(null);

  itemRefs.current = []; // Reset on each render

  const addToRefs = (el) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.sectionId);
      if (section) observer.observe(section);
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.sectionId);
        if (section) observer.unobserve(section);
      });
    };
  });

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 md:px-3 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/60 backdrop-blur-md shadow-sm py-3"
          : "bg-white/80 backdrop-blur-sm py-6"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className={`w-full px-3 flex items-center justify-between`}>
        <div>
          <Logo />
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((navItem) => (
            <NavLink
              key={navItem.name}
              to={navItem.to}
              onClick={() => {
                scrollToSection(navItem.to);
              }}
              className={`relative nav-link ${
                activeSection === navItem.sectionId
                  ? "border-b-coffee-dark border-b-2 text-coffee-dark"
                  : "before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-coffee-dark before:transition-all before:duration-300 hover:before:w-full transition-colors duration-300"
              } hover:text-coffee-dark transition-colors duration-300`}
            >
              {navItem.name}
            </NavLink>
          ))}

          <Button
            size={"sm"}
            onClick={() => scrollToSection("/contact")}
            className="bg-coffee-dark hover:bg-coffee-darkest active:bg-coffee-medium text-white
              transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            <NavLink to="/contact">Pre-Order</NavLink>
          </Button>
        </nav>

        {/* Mobile navigation */}
        <div className="flex justify-center items-center md:hidden">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <AlignRight />
          </button>
        </div>
        {isMenuOpen && (
          <nav
            ref={menuRef}
            className="bg-coffee-brown font-outfit text-white py-6 fixed inset-0 min-h-screen flex flex-col space-y-10 md:hidden"
          >
            <div className="flex items-center justify-between px-3">
              <div>
                <Logo />
              </div>

              {/* Close menu button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={"1.7rem"} />
              </button>
            </div>

            <div>
              {/* Nav menu items */}
              <ul className="flex flex-col items-center space-y-3 px-6">
                {navItems.map((navItem) => (
                  <li
                    key={navItem.name}
                    ref={addToRefs}
                    className={`border-b-underline-color text-4xl pb-4`}
                  >
                    <NavLink
                      to={navItem.to}
                      onClick={() => {
                        setIsMenuOpen(false);
                        scrollToSection(navItem.to);
                      }}
                    >
                      {navItem.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="px-5 mt-6" ref={preorderBtnRef}>
                <Button className="mt-4 bg-coffee-dark hover:bg-coffee-darkest active:bg-coffee-medium text-white transition-all transform hover:scale-105 w-full">
                  <NavLink
                    to={"/contact"}
                    className={`w-full h-full`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToSection("/contact");
                    }}
                  >
                    Pre-Order
                  </NavLink>
                </Button>
              </div>
            </div>

            {/* Mobile nav menu footer */}
            <div
              className="flex flex-col items-center text-center text-sm"
              ref={footerRef}
            >
              <div>
                <p>© 2025 Brew & Blend Café. All rights reserved.</p>
              </div>
              <div className="flex space-x-4">
                <span>
                  <NavLink to={"/"} onClick={() => setIsMenuOpen(false)}>
                    Privacy Policy
                  </NavLink>
                </span>
                <span>
                  <NavLink to={"/"} onClick={() => setIsMenuOpen(false)}>
                    Terms of Service
                  </NavLink>
                </span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
