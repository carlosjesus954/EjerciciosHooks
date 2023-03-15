import { Link, NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <>
      <>
        
        <NavLink
          className={({ isActive }) => `nav ${isActive ? "nav--active" : ""}`}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav ${isActive ? "nav--active" : ""}`}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav ${isActive ? "nav--active" : ""}`}
          to="/login"
        >
          Login
        </NavLink>
      </>
    </>
  );
};
