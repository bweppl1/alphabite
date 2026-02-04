import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SettingsBar from "../components/SettingsBar";
import EmojiDisplay from "../components/EmojiDisplay.jsx";
import { get_random_word } from "../services/word";
import { get_decoy_word } from "../services/word";
// sounds
import correctSound from "../assets/sounds/correct.mp3";
import incorrectSound from "../assets/sounds/incorrect.wav";
import roundEndSound from "../assets/sounds/round_complete.wav";
import { useAuth } from "../context/AuthContext";
import {
  update_coins,
  update_reading_level,
  update_spelling_level,
} from "../services/user";

const ReadingCard = () => {
  const [gameActive, setGameActive] = useState(true);
  const [roundActive, setRoundActive] = useState(true);
  const [currentRoundData, setCurrentRoundData] = useState([]);
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

  // fetch word data on initial render
  useEffect(() => {
    fetchRoundWords();
  }, []);

  // sound loading and removing
  useEffect(() => {
    (audio.correct.load(), audio.incorrect.load(), audio.roundEnd.load());
    return () => {
      (audio.correct.remove(),
        audio.incorrect.remove(),
        audio.roundEnd.remove());
    };
  }, [audio]);

  // fetch words for the game round
  const fetchRoundWords = async () => {
    const newRoundWord = await get_random_word();
    console.log(`random word id: ${newRoundWord.word_id}`);
    let usedWords = [newRoundWord.word_id];
    console.log(`used words1: ${usedWords}`);
    const newDecoyWord1 = await get_decoy_word(usedWords);
    usedWords.push(newDecoyWord1.word_id);
    console.log(`used words2: ${usedWords}`);
    const newDecoyWord2 = await get_decoy_word(usedWords);

    // randomize word display order
    const wordsToRandomize = [newRoundWord, newDecoyWord1, newDecoyWord2];
    let currentIndex = wordsToRandomize.length;

    // creating a random index to swap
    while (currentIndex > 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // swapping current index with the random index
      [wordsToRandomize[currentIndex], wordsToRandomize[randomIndex]] = [
        wordsToRandomize[randomIndex],
        wordsToRandomize[currentIndex],
      ];
    }

    // setting state for current round
    setCurrentRoundData(wordsToRandomize);
    setCurrentEmoji(newRoundWord.emoji);
    setCurrentWord(newRoundWord.word);
  };

  // update round display and check for game end after each round
  useEffect(() => {
    if (currentRound > 10) {
      // round end tasks
      // increase reading level if 7/10 correct or better
      if (correctCount > 6) {
        update_reading_level(user.email, 1);
      }
      update_coins(user.email, correctCount);
      setGameActive(false);
      audio.roundEnd.currentTime = 0; // ensure sound starts at beginning
      audio.roundEnd.play(); // play sound
    }
    setRoundDisplay(`Round ${currentRound}/10`);
  }, [currentRound]);

  // checking answer
  const checkAnswer = (guess) => {
    // avoid duplicate clicks
    if (!roundActive) {
      return;
    }
    setRoundActive(false);

    if (guess === currentWord) {
      // correct answer tasks
      audio.correct.currentTime = 0; // ensure start sound at beginning
      audio.correct.play(); // play sound
      setIsCorrect(true);
      setCorrectCount(correctCount + 1);
    } else {
      //wrong answer tasks
      audio.incorrect.currentTime = 0; // ensure start sound at beginning
      audio.incorrect.play(); // play sound
      setIsCorrect(false);
    }
    //reset question tasks
    setTimeout(() => {
      setIsCorrect(null);
      setRoundActive(true);
      setCurrentRound(currentRound + 1);
      fetchRoundWords();
    }, 1000); //delay
  };

  // display game components
  if (gameActive) {
    return (
      <div className="w-full md:max-w-5xl flex flex-col text-center mx-auto p-2">
        <h2 className="text-xl md:text-xl text-vanilla bg-dgreen px-6 py-2 rounded-xl">
          {roundDisplay}
        </h2>
        <SettingsBar gameType="Reading" correctCount={correctCount} />
        <div className="max-w-3xl mx-auto w-full bg-darkvanilla rounded-xl gap-5 p-2 md:p-5 flex flex-col">
          {/* word image */}
          <EmojiDisplay emoji={currentEmoji} />

          {/* user guess buttons */}
          <div className="flex flex-row gap-5 justify-center">
            {currentRoundData &&
              currentRoundData.map((word) => (
                <div
                  key={word.id}
                  className="py-2 px-6 rounded-xl text-2xl text-charcoal cursor-pointer hover:bg-michelangeloorange bg-bananayellow"
                  onClick={() => checkAnswer(word.word)}
                >
                  {word.word}
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }

  // display post game components
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
          to="/reading_game"
          className="px-6 py-2 bg-lgreen rounded-xl"
          onClick={() => playAgain()}
        >
          Play Again
        </Link>
        <Link
          to="/spelling_game"
          className="px-6 py-2 bg-michelangeloorange rounded-xl"
        >
          Try Spelling
        </Link>
      </div>
    </div>
  );
};

export default ReadingCard;
