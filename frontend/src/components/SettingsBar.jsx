import { useState } from "react";
const SettingsBar = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const toggleSettingsWindow = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <div>
      <div className="max-w-5xl mx-auto flex flex-row">
        <div
          className={`bg-charcoal text-vanilla cursor-pointer rounded-t-xl p-2 ${settingsOpen ? "" : "rounded-bl-xl"}`}
          onClick={toggleSettingsWindow}
        >
          <h1>Settings v</h1>
        </div>
        <div className="bg-vanilla text-charcoal p-2 text-center flex-1 border-b-3 border-charcoal">
          Round 1/10
        </div>
      </div>
      {/* settings window */}
      <div
        className={`border mx-auto border-charcoal bg-charcoal p-2 rounded-b-xl max-w-5xl ${settingsOpen ? "" : "hidden"}`}
      >
        <div className="rounded-b-xl rounded-tl-xl bg-vanilla text-charcoal h-50 p-4">
          Settings Window
        </div>
      </div>
    </div>
  );
};

export default SettingsBar;
