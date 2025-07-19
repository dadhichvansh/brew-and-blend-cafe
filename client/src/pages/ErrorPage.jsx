import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ErrorPage = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Brew & Blend Café | Artisanal Coffee & Cozy Vibes";
  }, []);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4 font-outfit">
            Oops! Page not found
          </p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
