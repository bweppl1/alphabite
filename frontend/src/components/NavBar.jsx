import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const auth = useAuth();

  const db_user = auth.user.email;

  // displaying/hiding mobile nav
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleLogout = () => {
    auth.logout();
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
        <div className="hidden md:flex flex-row gap-5 text-lg text-lightcharcoal justify-center">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <Link to="/spelling_game" className="hover:text-black">
            Spell
          </Link>
          <Link to="/reading_game" className="hover:text-black">
            Read
          </Link>
          {db_user && (
            <Link to="/stats" className="hover:text-black">
              Stats
            </Link>
          )}
          {db_user && (
            <span
              onClick={() => handleLogout()}
              className="hover:text-black cursor-pointer"
            >
              Logout
            </span>
          )}
          {!db_user && (
            <Link to="/login" className="hover:text-black">
              Login/Register
            </Link>
          )}
        </div>

        {/* mobile nav */}
        <div
          className={`md:hidden w-screen absolute top-20 left-0 text-center p-2 bg-charcoal opacity-98 flex flex-col gap-5 text-lg text-vanilla justify-center ${navOpen ? "" : "hidden"}`}
        >
          <Link
            to="/"
            className="hover:text-michelangeloorange"
            onClick={toggleNav}
          >
            Home
          </Link>
          <Link
            to="/spelling_game"
            className="hover:text-michelangeloorange"
            onClick={toggleNav}
          >
            Spell
          </Link>
          <Link
            to="/reading_game"
            className="hover:text-michelangeloorange"
            onClick={toggleNav}
          >
            Read
          </Link>
          {db_user && (
            <Link
              to="/stats"
              className="hover:text-michelangeloorange"
              onClick={toggleNav}
            >
              Stats
            </Link>
          )}
          {db_user && (
            <span
              onClick={() => handleLogout()}
              className="hover:text-michelangeloorange cursor-pointer"
            >
              Logout
            </span>
          )}
          {!db_user && (
            <Link
              to="/login"
              className="hover:text-michelangeloorange"
              onClick={toggleNav}
            >
              Login/Register
            </Link>
          )}
        </div>
        <div className="md:hidden flex items-center">
          {/* hamburger */}
          <button
            onClick={toggleNav}
            className="flex flex-col w-10 h-10 justify-center gap-1 cursor-pointer"
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
