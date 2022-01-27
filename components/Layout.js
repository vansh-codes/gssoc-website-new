import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="dark:bg-gray-700 dark:ease-in-out">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
