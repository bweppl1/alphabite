import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="w-screen border-b text-charcoal bg-vanilla border-darkvanilla">
      <div className="md:max-w-5xl w-full flex flex-row mx-auto p-5 justify-between">
        <Link to="/" className="text-3xl bold">
          Alpha<span className="font-black">Bite</span>
        </Link>
        <div className="flex flex-row gap-5 text-lg justify-center">
          <Link to="/" className="hover:-translate-y-1">
            Home
          </Link>
          <Link to="/game">Play</Link>
          <Link to="/stats">Stats</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
