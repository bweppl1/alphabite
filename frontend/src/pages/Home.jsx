import { Link } from "react-router-dom";

const Home = () => {
  const games = [
    ["Spelling", "/spelling_game", "bg-bananayellow"],
    ["Reading", "/reading_game", "bg-raphaelred"],
    ["Spelling", "/spelling_game", "bg-lgreen"],
  ];
  return (
    <div className="w-screen min-h-screen">
      <div className="flex flex-col md:flex-row shadow-lg">
        <div className="bg-lgreen flex-1 h-50 md:h-100 text-center">
          <h1 className="text-5xl text-charcoal font-bold">READING</h1>
          <p className="text-lightcharcoal">
            An image will appear, let your toddler read each word and choose the
            word that matches the image
          </p>
        </div>
        <div className="bg-bananayellow flex-1 h-50 md:h-100 text-center">
          <h1 className="text-5xl text-charcoal font-bold">Spelling</h1>
          <p className="text-lightcharcoal">
            An image will appear, let your toddler spell the image. Parents can
            hover over the image to have the word displayed briefly if it is not
            clear.
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto flex flex-row justify-evenly m-6">
        {/* game grid */}
        {games &&
          games.map((game) => (
            <Link to={game[1]}>
              <div
                key={game}
                className={`w-35 h-35 md:w-50 md:h-50 rounded-xl flex ${game[2]} hover:shadow-xl hover:font-bold`}
              >
                <span className="m-auto text-vanilla md:text-xl">
                  {game[0]}
                </span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Home;
