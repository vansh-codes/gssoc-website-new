import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="transition-colors dark:bg-gray-700 dark:transition-colors">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
