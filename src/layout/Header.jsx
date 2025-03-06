import { useState } from "react";
import logo from "/icons/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AlignRight, X } from "lucide-react";
import Button from "../components/common/Button";

function Header() {
  /* State to keep track of Mobile menu status */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* Function to toggle mobile menu visibility */
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const baseStyles =
    "text-night font-semibold font-mulish text-lg hover:text-tangerine capitalize tracking-widest";
  const activeStlyes = `${baseStyles} text-tangerine transition-colors duration-300`;

  return (
    <header>
      {/* TABLET AND DESKTOP NAVIGATION BAR */}
      <section className="py-3 px-4 sm:px-2 lg:px-8 bg-white shadow-md flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="ukulima logo"
            className="w-9 h-9 sm:w-10 sm:h-10"
          />
        </Link>

        {/*Tablet and Desktop Navigation bar */}
        <nav className="hidden md:flex gap-8 lg:gap-14">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStlyes : baseStyles)}
          >
            Home
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) => (isActive ? activeStlyes : baseStyles)}
          >
            Products
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) => (isActive ? activeStlyes : baseStyles)}
          >
            About us
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) => (isActive ? activeStlyes : baseStyles)}
          >
            Contact us
          </NavLink>
        </nav>

        {/* Authentication buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="login"
            className="py-2 px-8 bg-avocado text-white font-bold font-mulish tracking-wider rounded-xl text-base border-2 border-transparent hover:border-avocado hover:text-avocado hover:bg-white"
          >
            Login
          </Link>
          <Link
            to="signup"
            className="py-2 px-4 border-2 border-avocado text-avocado font-bold font-mulish tracking-wider rounded-xl text-base hover:border-transparent hover:bg-avocado hover:text-white"
          >
            Sign Up
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <Button action={toggleMenu}>
            {isMenuOpen ? (
              <X className="text-red-500" />
            ) : (
              <AlignRight className="text-night" />
            )}
          </Button>
        </div>
      </section>

      {/* MOBILE NAVIGATION BAR SECTION */}
      <section
        className={`bg-zinc-200 absolute w-full min-h-screen flex flex-col justify-between md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col gap-6 items-center mt-10">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStlyes : baseStyles)}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) => (isActive ? activeStlyes : baseStyles)}
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) => (isActive ? activeStlyes : baseStyles)}
            onClick={() => setIsMenuOpen(false)}
          >
            About us
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) => (isActive ? activeStlyes : baseStyles)}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact us
          </NavLink>
        </nav>
        <div className="flex flex-col pb-32 gap-4">
          <Link
            to="login"
            className="py-2 px-8 bg-avocado text-white font-bold font-mulish tracking-wider rounded-xl text-base border-2 border-transparent hover:border-avocado hover:text-avocado hover:bg-white w-2/5 mx-auto text-center"
          >
            Login
          </Link>
          <Link
            to="signup"
            className="py-2 px-4 border-2 border-avocado text-avocado font-bold font-mulish tracking-wider rounded-xl text-base hover:border-transparent hover:bg-avocado hover:text-white w-2/5 mx-auto text-center"
          >
            Sign Up
          </Link>
        </div>
      </section>
    </header>
  );
}

export default Header;
