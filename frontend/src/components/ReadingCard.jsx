import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SettingsBar from "../components/SettingsBar";
import EmojiDisplay from "../components/EmojiDisplay.jsx";
import { get_reading_words } from "../services/word";

const ReadingCard = () => {
  const [gameActive, setGameActive] = useState(true);
  const [currentRoundData, setCurrentRoundData] = useState(1);
  const [currentWord, setCurrentWord] = useState("");
  const [decoyWord1, setDecoyWord1] = useState("");
  const [decoyWord2, setDecoyWord2] = useState("");
  const [currentEmoji, setCurrentEmoji] = useState("");
  const [roundWords, setRoundWords] = useState([]);
  const [currentRound, setCurrentRound] = useState(1);
  const [roundDisplay, setRoundDisplay] = useState("Round 1/10");
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    const fetchRoundWords = async () => {
      const newRoundWordsData = await get_reading_words();
      console.log(
        `real word: ${newRoundWordsData.word}; decoy1: ${newRoundWordsData.decoy_word_1}; decoy2: ${newRoundWordsData.decoy_word_2}`,
      );
      setCurrentRoundData(newRoundWordsData);
      setCurrentEmoji(currentRoundData.emoji);
      // gotta figure out a way to have a unique key for the map, maybe nanoid

      setRoundWords([]);
    };
    fetchRoundWords();
    console.log(`All Words this Round: ${roundWords}`);
  }, []);

  // update round display and check for game end after each round
  useEffect(() => {
    if (currentRound > 10) {
      setGameActive(false);
    }
    setRoundDisplay(`Round ${currentRound}/10`);
  }, [currentRound]);

  // checking answer
  const checkAnswer = (guess) => {
    if (guess === currentWord) {
      // correct answer tasks
      setIsCorrect(true);
      setCorrectCount(correctCount + 1);
    } else {
      //wrong answer tasks
      setIsCorrect(false);
    }
    //reset question tasks
    setTimeout(() => {
      setIsCorrect(null);
      setCurrentRound(currentRound + 1);
      fetchRoundWords();
    }, 1000); //delay
  };

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
            {roundWords &&
              roundWords.map((word) => (
                <div
                  key={word.id}
                  className="py-2 px-6 rounded-xl text-2xl text-charcoal cursor-pointer hover:bg-michelangeloorange bg-bananayellow"
                  onClick={() => checkAnswer(word)}
                >
                  {word}
                </div>
              ))}
            {console.log(`test: ${roundWords}`)}
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
          to="/reading_game"
          className="px-6 py-2 bg-lgreen rounded-xl"
          onClick={() => playAgain()}
        >
          Play Again
        </Link>
        <Link
          to="/spelling_game"
          className="px-6 py-2 bg-bananayellow rounded-xl"
        >
          Try Spelling
        </Link>
      </div>
    </div>
  );
};

export default ReadingCard;
