import { NavLink } from "react-router";

const HomeActive = "font-bold text-purple-700 underline";
const HomeInactive = "text-purple-500 hover:underline";
const FavoritesActive = "font-bold text-pink-700 underline";
const FavoritesInactive = "text-pink-500 hover:underline";

function Navbar() {
  return (
    <nav className="space-x-4">
      <NavLink
        to="/welcome"
        className={({ isActive }) => (isActive ? HomeActive : HomeInactive)}
      >
        Home
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          isActive ? FavoritesActive : FavoritesInactive
        }
      >
        Favorites
      </NavLink>
    </nav>
  );
}

export default Navbar;
