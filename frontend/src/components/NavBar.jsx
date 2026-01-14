import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  // displaying/hiding mobile nav
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  // hamburger lines
  const hamburgerLine = "rounded h-1 w-7 bg-black";

  return (
    <div className="w-screen border-b text-charcoal bg-vanilla border-darkvanilla">
      <div className="md:max-w-5xl w-full flex flex-row mx-auto p-5 justify-between">
        <Link to="/" className="text-3xl bold">
          Alpha<span className="font-black">Bite</span>
        </Link>
        {/* desktop nav */}
        <div className="hidden md:flex flex-row gap-5 text-lg justify-center">
          <Link to="/" className="hover:-translate-y-1">
            Home
          </Link>
          <Link to="/game">Play</Link>
          <Link to="/stats">Stats</Link>
        </div>

        {/* mobile nav */}
        <div className="md:hidden">
          {/* hamburger */}
          <button className="flex flex-col w-10 h-10 gap-1 cursor-pointer">
            <div className={hamburgerLine}></div>
            <div className={hamburgerLine}></div>
            <div className={hamburgerLine}></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
