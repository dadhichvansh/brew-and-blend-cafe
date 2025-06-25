import { NavLink } from "react-router-dom";

const Header = () => {
  const navItems = ["Home", "Menu", "About", "Location", "Contact"];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out bg-white/90 backdrop-blur-sm py-6 translate-y-0"
      data-testid="header"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <NavLink to="/" class="flex items-center group">
          <span className="font-serif text-2xl font-medium tracking-tight transition-all duration-300 group-hover:text-coffee-dark">
            Brew
            <span className="text-coffee-dark transition-all duration-300 group-hover:text-[#5e462a] hover:text-coffee-dark">
              &
            </span>
            Blend
          </span>
        </NavLink>

        <nav class="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-coffee-dark text-[#302b27] font-outfit transition-colors duration-300 ${
                  isActive
                    ? "text-coffee-darkest border-b-2 border-coffee-dark"
                    : "hover:text-coffee-darkest"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
          <NavLink
            to={"/contact"}
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 rounded-md px-3 ml-4 bg-coffee-dark hover:bg-coffee-darkest text-white transition-all duration-300 transform hover:scale-105 bg-[#8c6e54]"
          >
            Pre-Order
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
