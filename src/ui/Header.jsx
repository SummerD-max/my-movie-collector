import Search from "../features/query/Search";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <Logo />
        <Navbar />
      </div>
      <Search />
    </>
  );
}

export default Header;
