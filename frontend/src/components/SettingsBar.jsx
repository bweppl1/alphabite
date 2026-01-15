import { useState } from "react";
const SettingsBar = ({ gameType }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const toggleSettingsWindow = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <div>
      <div className="max-w-5xl mx-auto flex flex-row">
        <div
          className={`bg-dgreen text-vanilla cursor-pointer rounded-t-xl p-2 ${settingsOpen ? "" : "rounded-bl-xl"}`}
          onClick={toggleSettingsWindow}
        >
          <h1 className="mx-6">Settings</h1>
        </div>
        <div className="bg-vanilla p-2 flex-1 border-b-3 border-dgreen">
          <h1 className="text-4xl font-black text-dgreen tracking-wide">
            {gameType}
          </h1>
        </div>
      </div>
      {/* settings window */}
      <div
        className={`border mx-auto border-dgreen bg-dgreen p-2 rounded-b-xl max-w-5xl ${settingsOpen ? "" : "hidden"}`}
      >
        <div className="rounded-b-xl rounded-tl-xl bg-vanilla text-charcoal h-50 p-4">
          Settings Window
        </div>
      </div>
    </div>
  );
};

export default SettingsBar;
