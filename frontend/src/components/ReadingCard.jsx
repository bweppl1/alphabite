import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExperienceBar from "./ExperienceBar";
import SettingsBar from "../components/SettingsBar";

const ReadingCard = () => {
  const [gameActive, setGameActive] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [currentWord, setCurrentWord] = useState("");
  const [roundWords, setRoundWords] = useState([]);
  const [currentRound, setCurrentRound] = useState(1);
  const [roundDisplay, setRoundDisplay] = useState("Round 1/10");
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);

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

  useEffect(() => {
    fetchOptionWords();
  }, []);

  // temp word fetch
  const fetchWord = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;
  };

  // fetching 2 wrong options
  const fetchOptionWords = () => {
    const usedWords = [currentWord];
    const availableWords = words.filter((word) => !usedWords.includes(word));

    //random options
    const firstOption =
      availableWords[Math.floor(Math.random() * avilableWords.length)];
    usedWords.push(firstOption);
    const secondOption =
      availableWords[Math.floor(Math.random() * avilableWords.length)];

    const thirdOption = fetchWord();
    setRoundWords(firstOption, secondOption, thirdOption);
    setCurrentWord(thirdOption);
  };

  // update round display and check for game end after each round
  useEffect(() => {
    if (currentRound > 10) {
      setGameActive(false);
    }
    setRoundDisplay(`Round ${currentRound}/10`);
  }, [currentRound]);

  // checking answer
  const checkAnswer = () => {};

  if (gameActive) {
    return (
      <div className="w-full md:max-w-5xl flex flex-col text-center mx-auto p-2">
        <h2 className="text-xl md:text-xl text-vanilla bg-dgreen px-6 py-2 rounded-xl">
          {roundDisplay}
        </h2>
        <SettingsBar gameType="Spelling" correctCount={correctCount} />
        <div className="max-w-3xl mx-auto w-full bg-darkvanilla rounded-xl gap-5 p-2 md:p-5 flex flex-col">
          {/* word image */}
          <div className="w-50 h-50 bg-michelangeloorange mx-auto my-2 md:my-4 p-2 md:p-4 rounded-xl">
            {currentWord}
          </div>

          {/* user guess buttons */}
          <div className="flex flex-row gap-5 justify-center">
            {roundWords &&
              roundWords.map((word) => <div key={word.indexOf()}>{word}</div>)}
            <h3 className="bg-raphaelred py-2 px-6 rounded-xl text-2xl text-charcoal">
              Guess 1
            </h3>
            <h3 className="bg-bananayellow py-2 px-6 rounded-xl text-2xl text-charcoal">
              Guess 2
            </h3>
            <h3 className="bg-lgreen py-2 px-6 rounded-xl text-2xl text-charcoal">
              Guess 3
            </h3>
          </div>
        </div>
      </div>
    );
  }
  // post game card
  return (
    <div className="max-w-3xl mx-auto w-full bg-darkvanilla rounded-xl items-center my-2 md:my-5 py-10 md:py-15 flex flex-col gap-5">
      <h1 className="text-4xl font-bold text-lgreen">Round Over</h1>
      <h3 className="text-2xl text-michelangeloorange">
        Points: {correctCount}
      </h3>
      <div className="flex flex-row gap-5">
        <Link
          to="/spelling_game"
          className="px-6 py-2 bg-lgreen rounded-xl"
          onClick={() => playAgain()}
        >
          Play Again
        </Link>
        <Link
          to="/reading_game"
          className="px-6 py-2 bg-bananayellow rounded-xl"
        >
          Try Spelling
        </Link>
      </div>
    </div>
  );
};

export default ReadingCard;
