import { NavLink } from "react-router-dom";
import { Button } from "./Button";

const NavMenu = ({ isActive }) => {
  return (
    <nav className="hidden md:flex space-x-8 items-center">
      <NavLink
        to="/"
        className={`relative nav-link ${
          isActive("/")
            ? "border-b-coffee-dark border-b-2"
            : "before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-coffee-dark before:transition-all before:duration-300 hover:before:w-full transition-colors duration-300"
        } hover:text-coffee-dark`}
      >
        Home
      </NavLink>
      <NavLink
        to="/menu"
        className={`relative nav-link ${
          isActive("/menu")
            ? "border-b-coffee-dark border-b-2"
            : "before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-coffee-dark before:transition-all before:duration-300 hover:before:w-full transition-colors duration-300"
        } hover:text-coffee-dark transition-colors duration-300`}
      >
        Menu
      </NavLink>
      <NavLink
        to="/about"
        className={`relative nav-link ${
          isActive("/about")
            ? "border-b-coffee-dark border-b-2"
            : "before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-coffee-dark before:transition-all before:duration-300 hover:before:w-full transition-colors duration-300"
        } hover:text-coffee-dark transition-colors duration-300`}
      >
        About
      </NavLink>
      <NavLink
        to="/location"
        className={`relative nav-link ${
          isActive("/location")
            ? "border-b-coffee-dark border-b-2"
            : "before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-coffee-dark before:transition-all before:duration-300 hover:before:w-full transition-colors duration-300"
        } hover:text-coffee-dark transition-colors duration-300`}
      >
        Location
      </NavLink>
      <NavLink
        to="/contact"
        className={`relative nav-link ${
          isActive("/contact")
            ? "border-b-coffee-dark border-b-2"
            : "before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-coffee-dark before:transition-all before:duration-300 hover:before:w-full transition-colors duration-300"
        } hover:text-coffee-dark transition-colors duration-300`}
      >
        Contact
      </NavLink>
      <Button className="ml-4 bg-coffee-dark hover:bg-coffee-darkest text-white transition-all duration-300 transform hover:scale-105">
        <NavLink to="/contact">Pre-Order</NavLink>
      </Button>
    </nav>
  );
};

export default NavMenu;
