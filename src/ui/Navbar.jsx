import { NavLink } from "react-router";

const HomeActive =
  "text-center w-28 font-bold text-purple-700 px-5 py-2 bg-gray-100 rounded-lg hover:ring-1 hover:ring-purple-500 transition-all ring-1 ring-purple-500";
const HomeInactive =
  "text-center w-28 text-purple-500 px-5 py-2 bg-gray-100 rounded-lg hover:ring-1 hover:ring-purple-500 transition-all";
const FavoritesActive =
  "text-center w-28 font-bold text-pink-700 px-5 py-2 bg-gray-100 rounded-lg hover:ring-1 hover:ring-pink-500 transition-all ring-1 ring-pink-500";
const FavoritesInactive =
  "text-center w-28 text-pink-500 px-5 py-2 bg-gray-100 rounded-lg hover:ring-1 hover:ring-pink-500 transition-all";

function Navbar() {
  return (
    <nav className="flex items-center gap-5">
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
