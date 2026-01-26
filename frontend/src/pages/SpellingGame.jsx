import SpellingCard from "../components/SpellingCard";

const ReadingGame = () => {
  return (
    <div className="flex flex-col bg-vanilla p-2 text-center min-h-screen">
      <h1 className="text-3xl text-charcoal font-black">SPELLING</h1>
      <SpellingCard />
    </div>
  );
};

export default ReadingGame;
