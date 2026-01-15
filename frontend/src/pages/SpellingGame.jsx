import { useState } from "react";
import SettingsBar from "../components/SettingsBar";
import SpellingCard from "../components/SpellingCard";

const ReadingGame = () => {
  return (
    <div className="flex flex-col bg-vanilla p-2">
      <SettingsBar gameType="Spelling" />
      <SpellingCard />
    </div>
  );
};

export default ReadingGame;
