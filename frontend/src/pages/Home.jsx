const Home = () => {
  const games = [
    ["Spelling", "/spelling_game", "bg-bananayellow"],
    ["Reading", "/reading_game", "bg-raphaelred"],
    ["Spelling", "/spelling_game", "bg-lgreen"],
  ];
  return (
    <div className="w-screen">
      <div className="flex flex-col md:flex-row">
        <div className="bg-lgreen flex-1 h-50 md:h-100">Reading</div>
        <div className="bg-bananayellow flex-1 h-50 md:h-100">Spelling</div>
      </div>
      <div className="max-w-5xl mx-auto flex flex-row justify-between m-6">
        {/* game grid */}
        {games &&
          games.map((game) => (
            <div
              className={`w-50 h-50 rounded-xl text-center ${game[2]}`}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Home;
