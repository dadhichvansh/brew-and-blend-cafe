import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../components/ui/Loader";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") return <Loader />;
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
