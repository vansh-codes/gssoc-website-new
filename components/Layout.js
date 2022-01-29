import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./BackToTopButton";

const Layout = ({ children }) => {
  return (
    <div className="transition-colors dark:bg-gray-700 dark:transition-colors">
      <Navbar />
      {children}
      <div className="hidden lg:block">
        <ScrollToTop />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
