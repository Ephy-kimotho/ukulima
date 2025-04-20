import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, X, Box, ScrollText } from "lucide-react";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { MdDashboard, MdOutlineCategory } from "react-icons/md";
import angelina from "/images/angelina.png";

const links = [
  {
    to: "/admin",
    icon: MdDashboard,
  },
  {
    to: "orders",
    icon: FaShoppingBag,
  },
  {
    to: "categories",
    icon: MdOutlineCategory,
  },
  {
    to: "products",
    icon: Box,
  },
  {
    to: "reports",
    icon: ScrollText,
  },
];

function Header() {
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to toggle the drop down menu visibility
  const toggleDropDownMenuVisibility = () =>
    setShowDropDownMenu(!showDropDownMenu);

  // Function to toggle the side menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //TODO: Write function to log out admin
  const logout = async () => {
    await new Promise((resolve) => setTimeout(resolve(), 1500));
    navigate("/login");
  };

  const styles =
    "flex gap-3 items-center py-3 px-2 bg-[#11633A] bg-opacity-0 font-quciksand text-xl text-[#11633A]";
  const activeStyles = `bg-opacity-20 font-semibold rounded-md ${styles}`;

  return (
    <header className="bg-white fixed md:relative z-40 left-0 right-0 shadow-md py-3 px-2 md:px-5 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Mobile Menu controller */}
        <button className="block md:hidden" onClick={toggleMenu}>
          <FiMenu size={30} color="#1E1E42" />
        </button>

        <h1 className="font-poppins font-bold md:text-3xl capitalize text-[#1E1E42]">
          Ukulima
        </h1>
      </div>

      <article className="flex items-center gap-2">
        <img
          src={angelina}
          alt="A photot of angelina"
          className="rounded-full object-cover object-center w-14"
        />
        <p className={`font-poppins hidden md:block text-[#1E1E1E] opacity-75`}>
          Angelina
        </p>
        <button onClick={toggleDropDownMenuVisibility}>
          {showDropDownMenu ? (
            <ChevronUp color="#1E1E42" />
          ) : (
            <ChevronDown color="#1E1E42" />
          )}
        </button>
      </article>

      {/* Pop up menu */}
      <div
        className={`bg-[#F9F9F9]  absolute z-40 right-2 top-16 p-4 space-y-2 shadow w-64 rounded-md ${
          showDropDownMenu ? "block" : "hidden"
        }`}
      >
        <Link
          to="new"
          className="font-quciksand block py-2 pl-3 rounded-md font-semibold hover:bg-[#dedede] text-lg"
        >
          Add new admin
        </Link>
        <button
          onClick={logout}
          className="font-quciksand w-full p-2 rounded-md bg-avocado hover:bg-emerald text-white font-semibold text-lg active:scale-95"
        >
          Sign out
        </button>
      </div>

      {/* Mobile Navigation bar  */}
      <aside
        className={`fixed md:hidden inset-0 z-50 transition-transform duration-200 px-8 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          background: "rgba(210,210,180, 0.5)",
          backdropFilter: "blur(15px)",
        }}
      >
        <button onClick={toggleMenu} className="block ml-auto p-6">
          <X color="#ED2939" size={45} />
        </button>

        <nav className="grid gap-y-4 mt-8">
          {links.map(({ to, icon: Icon }, idx) => (
            <NavLink
              key={idx}
              to={to}
              end={true}
              className={({ isActive }) => (isActive ? activeStyles : styles)}
              onClick={toggleMenu}
            >
              <Icon color="#11633A" size={28} />
              <span className="apitalize tracking-wide">
                {to === "/admin" ? "Dashboard" : to}
              </span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </header>
  );
}

export default Header;
