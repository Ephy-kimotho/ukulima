import { Link } from "react-router-dom";
import Button from "./Button";

function FooterNav() {
  const linkStyles =
    "hover:text-tangerine text-lg hover:translate-x-3.5 transition-transform duration-700 ml-2";

  const navigateToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="flex flex-col md:justify-center gap-6 font-nunito font-semibold text-gray-100">
      <Link to="products" className={linkStyles} onClick={navigateToTop}>
        Explore Products
      </Link>
      <Link to="about" onClick={navigateToTop} className={linkStyles}>
        About Us
      </Link>
      <Link to="contact" onClick={navigateToTop} className={linkStyles}>
        Contact Us
      </Link>
      <Button action={navigateToTop} moreStyles={`text-left  ${linkStyles}`}>
        Back to top
      </Button>
    </nav>
  );
}

export default FooterNav;
