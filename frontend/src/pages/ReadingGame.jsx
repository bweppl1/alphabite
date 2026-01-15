import { useState } from "react";
import SettingsBar from "../components/SettingsBar";
import ReadingCard from "../components/ReadingCard";

const ReadingGame = () => {
  return (
    <div className="flex flex-col bg-vanilla p-2">
      <SettingsBar gameType="Reading" />
      <ReadingCard />
    </div>
  );
};

export default ReadingGame;
