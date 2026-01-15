import { useState, useEffect } from "react";
import ExperienceBar from "./ExperienceBar";

const SpellingCard = () => {
  const [gameActive, setGameActive] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [currentWordData, setCurrentWordData] = useState("");
  const [currentRound, setCurrentRound] = useState(1);
  const [roundDisplay, setRoundDisplay] = useState("Round 1/10");
  const [isCorrect, setIsCorrect] = useState(null);

  // load first word on initial render
  useEffect(() => {
    fetchWord();
  }, []);

  // temp data
  const words = [
    "tree",
    "dad",
    "mom",
    "happy",
    "run",
    "ball",
    "sun",
    "moon",
    "car",
    "dog",
  ];

  // temp word fetch
  const fetchWord = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWordData(randomWord);
  };

  // update round display and check for game end after each round
  useEffect(() => {
    if (currentRound > 10) {
      setGameActive(false);
    }
    setRoundDisplay(`Round ${currentRound}/10`);
  }, [currentRound]);

  // checking answer
  const checkAnswer = () => {
    console.log(userInput);
    console.log(currentWordData);
    if (currentWordData === userInput) {
      // correct answer tasks
      console.log("Correct");
    }
    setUserInput("");
    setTimeout(() => {
      setCurrentRound(currentRound + 1);
      fetchWord();
    }, 1000);
  };

  // passing word
  const passWord = () => {
    setCurrentRound(currentRound + 1);
    fetchWord();
  };
  if (gameActive) {
    return (
      <div className="w-full md:max-w-5xl flex flex-col text-center mx-auto p-2">
        <h2 className="text-xl md:text-xl text-vanilla bg-dgreen px-6 py-2 rounded-xl">
          {roundDisplay}
        </h2>
        <ExperienceBar round={currentRound} />
        <div className="max-w-3xl mx-auto w-full bg-darkvanilla rounded-xl p-2 md:p-5 flex flex-col">
          {/* word image */}
          <div className="w-50 h-50 bg-michelangeloorange mx-auto my-2 md:my-4 p-2 md:p-4 rounded-xl">
            {currentWordData}
          </div>

          {/* user input */}
          <input
            placeholder="type here"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="focus:outline-0 caret-lightcharcoal p-2 md:p-4 mx-auto rounded-xl text-4xl text-charcoal md:text-6xl w-full bg-vanilla"
          />

          {/* action buttons */}
          <div className="flex flex-row w-full gap-5 py-2 md:py-4 justify-center">
            <h2
              onClick={() => checkAnswer()}
              className="py-2 px-6 bg-lgreen rounded-xl font-charcoal cursor-pointer"
            >
              Submit
            </h2>
            <h2
              onClick={() => passWord()}
              className="py-2 px-6 bg-raphaelred rounded-xl font-lightcharcoal cursor-pointer"
            >
              Pass
            </h2>
          </div>
        </div>
      </div>
    );
  }

  return <div>Game Over</div>;
};

export default SpellingCard;
