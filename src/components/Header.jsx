import { useEffect, useState } from "react";
import Logo from "./ui/Logo";
import NavMenu from "./ui/NavMenu";
import MobileNavMenu from "./ui/MobileNavMenu";
import { AlignRight } from "lucide-react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close menu on route change
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };
  // This function can be used to toggle the mobile menu visibility
  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <div className={`w-full py-6 px-3 flex items-center justify-between`}>
        <Logo />

        {/* Desktop navigation */}
        <NavMenu isActive={isActive} />

        {/* Mobile navigation */}
        <div className="flex justify-center items-center md:hidden">
          <button onClick={handleMenuClick}>
            <AlignRight />
          </button>
        </div>
        {isMenuOpen && <MobileNavMenu onClose={() => setIsMenuOpen(false)} />}
      </div>
    </header>
  );
};

export default Header;
