import { useState } from "react";
import ExperienceBar from "./ExperienceBar";

const SettingsBar = ({ gameType, correctCount }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const toggleSettingsWindow = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <div className="py-2 md:py-4">
      <div className="max-w-5xl mx-auto flex flex-row bg-darkvanilla rounded-xl">
        <div
          className={`flex bg-charcoal text-vanilla items-center cursor-pointer rounded-tl-xl p-2 ${settingsOpen ? "" : "rounded-bl-xl"}`}
          onClick={toggleSettingsWindow}
        >
          Settings
        </div>
        <div
          className={`bg-darkvanilla p-2 flex-1 rounded-tr-xl ${settingsOpen ? "" : "rounded-br-xl"}`}
        >
          <ExperienceBar correctCount={correctCount} />
        </div>
      </div>
      {/* settings window */}
      <div
        className={`border mx-auto border-charcoal bg-charcoal p-2 rounded-b-xl max-w-5xl ${settingsOpen ? "" : "hidden"}`}
      >
        <div className="rounded-b-xl rounded-tl-xl bg-vanilla text-charcoal p-4">
          Settings Window
        </div>
      </div>
    </div>
  );
};

export default SettingsBar;
