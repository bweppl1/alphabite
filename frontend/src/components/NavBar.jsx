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
          <Link to="/game" className="hover:-translate-y-1">
            Play
          </Link>
          <Link to="/stats" className="hover:-translate-y-1">
            Stats
          </Link>
        </div>

        {/* mobile nav */}
        <div
          className={`w-screen absolute top-20 left-0 text-center p-2 bg-charcoal opacity-98 flex flex-col gap-5 text-lg text-vanilla justify-center ${navOpen ? "" : "hidden"}`}
        >
          <Link to="/" className="hover:font-black">
            Home
          </Link>
          <Link to="/game" className="hover:font-black">
            Play
          </Link>
          <Link to="/stats" className="hover:font-black">
            Stats
          </Link>
        </div>
        <div className="md:hidden">
          {/* hamburger */}
          <button
            onClick={toggleNav}
            className="flex flex-col w-10 h-10 gap-1 cursor-pointer"
          >
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
