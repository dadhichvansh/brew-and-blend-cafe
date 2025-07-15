import gsap from "gsap";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "./Button";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Menu", to: "/menu" },
  { name: "About", to: "/about" },
  { name: "Location", to: "/location" },
  { name: "Contact", to: "/contact" },
];

const MobileNavMenu = ({ onClose }) => {
  const menuRef = useRef();
  const itemRefs = useRef([]);
  const preorderBtnRef = useRef();
  const footerRef = useRef();

  itemRefs.current = []; // Reset on each render

  const addToRefs = (el) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();
    // Slide in menu
    tl.fromTo(
      menuRef.current,
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 0.4, ease: "power2.out" }
    );

    // Stagger items in
    tl.fromTo(
      itemRefs.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "power1.out",
      }
    );

    tl.fromTo(preorderBtnRef.current, { opacity: 0 }, { opacity: 1 });

    tl.fromTo(
      footerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power1.out",
      }
    );
  });

  return (
    <nav
      ref={menuRef}
      className="bg-coffee-brown font-outfit text-white px-auto py-6 fixed top-0 left-0 w-full h-full flex flex-col justify-between md:hidden"
    >
      <div className="flex items-center justify-between px-3">
        <div>
          <Logo />
        </div>

        {/* Close menu button */}
        <button onClick={onClose} aria-label="Close Menu">
          <X size={"1.7rem"} />
        </button>
      </div>

      <div>
        {/* Nav menu items */}
        <ul className="flex flex-col justify-center items-center px-6">
          {navItems.map((navItem) => (
            <li
              key={navItem.to}
              ref={addToRefs}
              className={`border-b-underline-color text-4xl pb-4`}
            >
              <NavLink to={navItem.to} onClick={onClose}>
                {navItem.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="px-5 pointer" ref={preorderBtnRef}>
          <Button className="mt-4 bg-coffee-dark hover:bg-coffee-darkest font-outfit text-white transition-all duration-300 transform hover:scale-105 w-full">
            <NavLink to={"/order"} className={`text-base`} onClick={onClose}>
              Pre-Order
            </NavLink>
          </Button>
        </div>
      </div>

      {/* Nav menu footer */}
      <div
        className="flex flex-col space-y-2 justify-center items-center px-5 text-sm"
        ref={footerRef}
      >
        <div>
          <p>© 2025 Brew & Blend Café. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <span>
            <NavLink to={"/"} onClick={onClose}>
              Privacy Policy
            </NavLink>
          </span>
          <span>
            <NavLink to={"/"} onClick={onClose}>
              Terms of Service
            </NavLink>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavMenu;
