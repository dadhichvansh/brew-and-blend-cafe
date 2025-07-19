import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to={"/"} className="flex items-center group">
      <span className="font-playfair text-2xl font-medium tracking-tight transition-all duration-300 group-hover:text-coffee-dark">
        Brew
        <span className="text-coffee-dark transition-all duration-300 group-hover:text-coffee-darkest">
          &
        </span>
        Blend
      </span>
    </NavLink>
  );
};

export { Logo };
