import { useEffect, useRef, useState } from "react";
import Search from "../features/query/Search";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  const headerRef = useRef();
  const [isTop, setIsTop] = useState(true);

  useEffect(function () {
    const headerEl = headerRef.current;
    if (!headerEl) return;

    const observer = new IntersectionObserver(
      ([e]) => {
        setIsTop(e.isIntersecting);
      },
      { threshold: 1.0 },
    );
    observer.observe(headerEl);

    return () => {
      observer.unobserve(headerEl);
    };
  });

  return (
    <>
      <div ref={headerRef} className="h-0"></div>
      <div
        className={`${isTop ? "bg-transparent" : "bg-slate-100/80 backdrop-blur-sm"} sticky top-2 flex flex-col items-center justify-between gap-2 rounded-full p-2 px-3 transition-all duration-200 sm:flex-row`}
      >
        <Logo />
        <Navbar />
      </div>
      <Search />
    </>
  );
}

export default Header;
