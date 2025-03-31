import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

function SideBarLink({ icon: Icon, to, hideLinkName }) {
  const styles =
    "flex gap-3 items-center py-3 px-2 bg-[#D9D9D9] bg-opacity-0 font-quciksand text-xl text-white rounded-md hover:bg-opacity-50";
  const activeStyles = `bg-opacity-50 font-semibold  ${styles}`;

  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) => (isActive ? activeStyles : styles)}
    >
      <Icon
        color="#ffffff"
        size={28}
        className={`${hideLinkName ? "mx-auto" : "m-0"}`}
      />
      <span
        className={`${
          hideLinkName ? "hidden" : "inline"
        } capitalize tracking-wide`}
      >
        {to === "/admin" ? "Dashboard" : to}
      </span>
    </NavLink>
  );
}

SideBarLink.propTypes = {
  icon: PropTypes.elementType.isRequired,
  to: PropTypes.string.isRequired,
  hideLinkName: PropTypes.bool.isRequired,
};

export default SideBarLink;
