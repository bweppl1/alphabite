import SettingsBar from "../components/SettingsBar";
import ReadingCard from "../components/ReadingCard";

const Game = () => {
  return (
    <div className="flex flex-col bg-vanilla p-2">
      <SettingsBar />
      <ReadingCard />
    </div>
  );
};

export default Game;
