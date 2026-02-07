import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SettingsBar from "../components/SettingsBar";
import EmojiDisplay from "../components/EmojiDisplay";
import { get_random_word } from "../services/word.js";
// sounds
import correctSound from "../../public/assets/sounds/correct.mp3";
import incorrectSound from "../../public/assets/sounds/incorrect.wav";
import roundEndSound from "../../public/assets/sounds/round_complete.wav";
import { useAuth } from "../context/AuthContext";
import { update_coins, update_spelling_level } from "../services/user";

const SpellingCard = () => {
  const [gameActive, setGameActive] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [currentWord, setCurrentWord] = useState("");
  const [currentEmoji, setCurrentEmoji] = useState("");
  const [currentRound, setCurrentRound] = useState(1);
  const [roundDisplay, setRoundDisplay] = useState("Round 1/10");
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [audio] = useState({
    correct: new Audio(correctSound),
    incorrect: new Audio(incorrectSound),
    roundEnd: new Audio(roundEndSound),
  });

  const auth = useAuth();
  const user = auth.user;

  // load first word on initial render
  useEffect(() => {
    fetchWord();
  }, []);

  // load and remove all sounds
  useEffect(() => {
    audio.correct.load();
    audio.incorrect.load();
    audio.roundEnd.load();
    return () => {
      (audio.correct.remove(),
        audio.incorrect.remove(),
        audio.roundEnd.remove());
    };
  }, [audio]);

  // fetching a random word from database
  const fetchWord = async () => {
    const randomWordData = await get_random_word();

    setCurrentWord(randomWordData.word);
    setCurrentEmoji(randomWordData.emoji);
  };

  // update round display and check for game end after each round
  useEffect(() => {
    if (currentRound > 10) {
      // round end tasks
      update_spelling_level(user.email, 1);
      update_coins(user.email, correctCount);
      audio.roundEnd.currentTime = 0;
      audio.roundEnd.play();
      setGameActive(false);
    }
    setRoundDisplay(`Round ${currentRound}/10`);
  }, [currentRound]);

  // checking answer
  const checkAnswer = () => {
    console.log(userInput); // debug
    console.log(currentWord); // debug

    // compare input to answer, strip white space and force lowercase
    if (currentWord === userInput.toLowerCase().trim()) {
      // correct answer tasks
      console.log("Correct");
      audio.correct.play();
      setIsCorrect(true);
      setCorrectCount(correctCount + 1);
    } else {
      // incorrect answer tasks
      audio.incorrect.play();
      console.log("False");
      setIsCorrect(false);
    }
    // next question tasks
    setTimeout(() => {
      setUserInput("");
      setCurrentRound(currentRound + 1);
      fetchWord();
      setIsCorrect(null);
    }, 1000); // delay
  };

  // passing word
  const passWord = () => {
    setCurrentRound(currentRound + 1);
    fetchWord();
  };
  if (gameActive) {
    return (
      <div className="w-full md:max-w-5xl flex flex-col text-center mx-auto p-2">
        <h2 className="text-xl md:text-xl text-vanilla bg-lgreen py-2 rounded-xl">
          {roundDisplay}
        </h2>
        <SettingsBar gameType="Spelling" correctCount={correctCount} />
        <div className="max-w-3xl mx-auto w-full bg-darkvanilla shadow-lg rounded-xl gap-5 p-2 md:p-5 flex flex-col">
          {/* word image */}
          <EmojiDisplay emoji={currentEmoji} />

          {/* user input */}
          <input
            placeholder="type here"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className={`focus:outline-0 caret-lightcharcoal p-2 md:p-4 mx-auto rounded-xl text-4xl text-charcoal md:text-6xl w-full bg-vanilla ${isCorrect ? "border-lgreen" : ""}`}
          />

          {/* action buttons */}
          <div className="flex flex-row w-full gap-5 py-2 md:py-4 justify-center">
            <h2
              onClick={() => checkAnswer()}
              className="py-2 px-6 bg-lgreen text-vanilla font-bold hover:-translate-y-1 rounded-xl cursor-pointer"
            >
              SUBMIT
            </h2>
            <h2
              onClick={() => passWord()}
              className="py-2 px-6 bg-raphaelred text-vanilla font-bold hover:-translate-y-1 rounded-xl cursor-pointer"
            >
              PASS
            </h2>
          </div>
        </div>
      </div>
    );
  }
  // post game card
  return (
    <div className="max-w-3xl mx-auto w-full bg-darkvanilla rounded-xl items-center my-2 md:my-5 py-10 md:py-15 flex flex-col gap-5">
      <h1 className="text-4xl font-bold text-lgreen">Round Over</h1>
      <h3 className="text-2xl text-charcoal">
        You Earned{" "}
        <span className="p-2 bg-raphaelred text-vanilla rounded-xl">
          {correctCount}
        </span>{" "}
        Coins!
      </h3>
      {user && (
        <h4 className="text-2xl px-6 py-2 bg-bananayellow rounded-xl">
          Total Coins: {user.coins + correctCount}
        </h4>
      )}
      <div className="flex flex-row gap-5">
        <Link
          to="/spelling_game"
          className="py-2 px-6 bg-lgreen text-vanilla font-bold hover:-translate-y-1 rounded-xl cursor-pointer"
          onClick={() => playAgain()}
        >
          Play Again
        </Link>
        <Link
          to="/reading_game"
          className="py-2 px-6 bg-lgreen text-vanilla font-bold hover:-translate-y-1 rounded-xl cursor-pointer"
        >
          Try Reading
        </Link>
      </div>
    </div>
  );
};

export default SpellingCard;
