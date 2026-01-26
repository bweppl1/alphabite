import ReadingCard from "../components/ReadingCard";

const ReadingGame = () => {
  return (
    <div className="flex flex-col bg-vanilla p-2 text-center min-h-screen">
      <h1 className="text-3xl text-charcoal font-black">READING</h1>
      <ReadingCard />
    </div>
  );
};

export default ReadingGame;
