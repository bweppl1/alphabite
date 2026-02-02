import { Link } from "react-router-dom";

const Home = () => {
  const games = [
    ["Spelling", "/spelling_game", "bg-bananayellow"],
    ["Reading", "/reading_game", "bg-raphaelred"],
  ];
  return (
    <div className="w-screen min-h-screen bg-vanilla">
      <div className="flex flex-col md:flex-row shadow-lg">
        <div className="bg-lgreen flex flex-col flex-1 text-center items-center justify-center gap-5 p-5">
          <h1 className="text-5xl text-charcoal font-bold">READING</h1>
          <p className="text-lightcharcoal">
            An image will appear, let your toddler read each word and choose the
            word that matches the image
          </p>
          <Link
            to="/reading_game"
            className="px-6 py-2 rounded-xl border-2 mx-auto border-charcoal bg-lgreen text-charcoal hover:font-bold"
          >
            Try Reading
          </Link>
        </div>
        <div className="bg-bananayellow flex flex-col flex-1 text-center items-center justify-center gap-5 p-5">
          <h1 className="text-5xl text-charcoal font-bold">SPELLING</h1>
          <p className="text-lightcharcoal">
            An image will appear, let your toddler spell the image. Parents can
            hover over the image to have the word displayed briefly if it is not
            clear.
          </p>
          <Link
            to="/spelling_game"
            className="px-6 py-2 rounded-xl border-2 mx-auto border-charcoal bg-bananayellow text-charcoal hover:font-bold"
          >
            Try Spelling
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
