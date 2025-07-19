import { useNavigation } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../components/ui/Loader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import MenuHighlights from "../components/MenuHighlights";
import LocationHours from "../components/LocationHours";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Layout = () => {
  useEffect(() => {
    document.title = "Brew & Blend Café | Artisanal Coffee & Cozy Vibes";
  }, []);

  const navigation = useNavigation();

  if (navigation.state === "loading") return <Loader />;
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MenuHighlights />
        <About />
        <LocationHours />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
