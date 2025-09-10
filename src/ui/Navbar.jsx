import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="space-x-4">
      <NavLink
        to="/welcome"
        className={({ isActive }) =>
          isActive
            ? "font-bold text-purple-700 underline"
            : "text-purple-500 hover:underline"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          isActive
            ? "font-bold text-purple-700 underline"
            : "text-purple-500 hover:underline"
        }
      >
        Favorites
      </NavLink>
    </nav>
  );
}

export default Navbar;
