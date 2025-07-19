import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import signature_blend from "/menu-highlights/signature-blend.avif";
import vanilla_bean_latte from "/menu-highlights/vanilla-bean-latte.avif";
import almond_croissant from "/menu-highlights/almond-croissant.avif";
import cold_brew from "/menu-highlights/cold-brew.avif";
import chocolate_tart from "/menu-highlights/chocolate-tart.avif";
import cinnamon_roll from "/menu-highlights/cinnamon-roll.avif";
import { MenuCard } from "./MenuCard";

const MENU_HIGHLIGHTS = [
  {
    id: 1,
    title: "Signature Blend",
    description:
      "Our house blend with notes of chocolate, caramel and hazelnut",
    price: "$4.50",
    image: signature_blend,
    category: "coffee",
  },
  {
    id: 2,
    title: "Vanilla Bean Latte",
    description: "Espresso with steamed milk and real vanilla bean",
    price: "$5.25",
    image: vanilla_bean_latte,
    category: "coffee",
  },
  {
    id: 3,
    title: "Almond Croissant",
    description:
      "Buttery croissant filled with almond cream and topped with sliced almonds",
    price: "$4.75",
    image: almond_croissant,
    category: "pastry",
  },
  {
    id: 4,
    title: "Cold Brew",
    description: "Slow-steeped for 24 hours for a smooth, bold flavor",
    price: "$4.95",
    image: cold_brew,
    category: "coffee",
  },
  {
    id: 5,
    title: "Chocolate Tart",
    description: "Dark chocolate ganache in a buttery crust with sea salt",
    price: "$5.50",
    image: chocolate_tart,
    category: "pastry",
  },
  {
    id: 6,
    title: "Cinnamon Roll",
    description: "Freshly baked with cream cheese frosting",
    price: "$4.25",
    image: cinnamon_roll,
    category: "pastry",
  },
];

const MenuHighlights = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const filtered =
      activeCategory === "all"
        ? MENU_HIGHLIGHTS
        : MENU_HIGHLIGHTS.filter((item) => item.category === activeCategory);

    setVisibleItems(filtered);
  }, [activeCategory]);

  return (
    <section
      id="menu"
      className="section-container font-outfit py-16 bg-[#fcfaf8]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 mt-16 transition-all duration-700 animate-fade-up">
          <h2 className="section-title font-playfair mb-10 font-medium text-4xl">
            Menu Highlights
          </h2>
          <p className="section-subtitle mx-auto text-xl text-coffee-dark">
            Explore our most popular offerings, made with care and premium
            ingredients
          </p>

          <div className="flex justify-center gap-4 mt-6 mb-10 text-white">
            {["all", "coffee", "pastry"].map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className={`${
                  activeCategory === cat
                    ? "bg-coffee-dark hover:bg-coffee-darkest"
                    : "border-coffee-dark text-coffee-dark hover:bg-coffee-dark/10"
                } cursor-pointer`}
              >
                {cat === "all"
                  ? "All"
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <MenuCard visibleItems={visibleItems} />
        </div>

        <div
          className="text-center mt-12 animate-fade-up opacity-0"
          style={{ animationDelay: "700ms", animationFillMode: "forwards" }}
        >
          <Button className="bg-coffee-dark hover:bg-coffee-darkest active:bg-coffee-medium cursor-pointer group">
            <NavLink
              to="/menu"
              className={`flex items-center gap-2 text-white`}
            >
              View Full Menu
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
