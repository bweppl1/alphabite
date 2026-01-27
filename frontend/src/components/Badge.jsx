import { useEffect, useState } from "react";

const Badge = ({ badgeLabel, badgeBorder, badgeBg }) => {
  const [label, setLabel] = useState("");
  const [borderColour, setBorderColour] = useState("");
  const [bgColour, setBgColour] = useState("");

  useEffect(() => {
    setLabel(badgeLabel);
    setBorderColour(badgeBorder);
    setBgColour(badgeBg);
  }, []);

  return (
    <div className="flex h-35 w-35 rounded-full bg-raphaelred border-10 border-bananayellow text-shadow-sm shadow-lg/40 shadow-amber-900">
      <h1 className="text-6xl text-darkvanilla m-auto font-black">{label}</h1>
    </div>
  );
};

export default Badge;
