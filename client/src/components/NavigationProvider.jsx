import { createContext } from "react";

const NavigationContext = createContext(null);

const NavigationProvider = ({ children }) => {
  const navItems = [
    { name: "Home", to: "/", sectionId: "home" },
    { name: "Menu", to: "/menu", sectionId: "menu" },
    { name: "About", to: "/about", sectionId: "about" },
    { name: "Location", to: "/location", sectionId: "location" },
    { name: "Contact", to: "/contact", sectionId: "contact" },
  ];

  const scrollToSection = (path) => {
    const matchedItem = navItems.find((item) => item.to === path);
    if (!matchedItem) return;

    const el = document.getElementById(matchedItem.sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavigationContext.Provider value={{ navItems, scrollToSection }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavigationProvider };
