import { FiMenu } from "react-icons/fi";
import { FaShoppingBag } from "react-icons/fa";
import { MdDashboard, MdOutlineCategory } from "react-icons/md";
import { Box } from "lucide-react";
import { PropTypes } from "prop-types";
import SideBarLink from "../components/common/SideBarLink";

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
];

function Sidebar({ className, hideLinkName, toggleLinkNameVisibility }) {
  return (
    <aside
      className={`${className} hidden md:block px-3 transition-all duration-300 min-h-screen pt-5 bg-[#11633A]`}
    >
      <div className="flex justify-between mb-12">
        <p
          className={`${
            hideLinkName ? "text-lg self-center" : "text-3xl"
          } font-quciksand font-bold  text-white transition-all duration-300`}
        >
          Admin
        </p>
        <button onClick={toggleLinkNameVisibility}>
          <FiMenu size={hideLinkName ? 24 : 30} color="#FFFFFF" />
        </button>
      </div>

      <nav className="grid gap-y-4">
        {links.map(({ to, icon }, idx) => (
          <SideBarLink
            key={idx}
            to={to}
            icon={icon}
            hideLinkName={hideLinkName}
          />
        ))}
      </nav>
    </aside>
  );
}

Sidebar.propTypes = {
  className: PropTypes.string,
  hideLinkName: PropTypes.bool,
  toggleLinkNameVisibility: PropTypes.func,
};

export default Sidebar;
