import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/Hero";
import MenuHighlights from "./components/MenuHighlights";
import About from "./components/About";
import LocationHours from "./components/LocationHours";
import Contact from "./components/Contact";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Hero /> },
        { path: "/menu", element: <MenuHighlights /> },
        { path: "/about", element: <About /> },
        { path: "/location", element: <LocationHours /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
