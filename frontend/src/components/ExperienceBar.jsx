import { useState, useEffect } from "react";

const ExperienceBar = ({ correctCount }) => {
  const [expPips, setExpPips] = useState(correctCount);

  useEffect(() => {
    const pips = [];
    const emptyPips = 10 - correctCount;
    // filled pips
    for (let i = 0; i < correctCount; i++) {
      pips.push(
        <div className="w-10 h-10 border-3 bg-lgreen border-lgreen rounded-xl"></div>,
      );
    }

    // empty pips
    for (let i = 0; i < emptyPips; i++) {
      pips.push(
        <div className="w-10 h-10 border-3 border-lightcharcoal rounded-xl"></div>,
      );
    }

    setExpPips(pips);
  }, [correctCount]);

  return <div className="flex flex-row gap-2 mx-auto">{expPips}</div>;
};

export default ExperienceBar;
