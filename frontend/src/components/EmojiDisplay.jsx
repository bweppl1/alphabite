import { useEffect, useState } from "react";

const EmojiDisplay = ({ emoji, title }) => {
  const [currentEmoji, setCurrentEmoji] = useState("");

  useEffect(() => {
    setCurrentEmoji(emoji);
  }, [emoji]);

  return (
    <div
      className="w-50 h-50 flex items-center justify-center bg-white shadow-lg text-9xl mx-auto my-2 md:my-4 p-2 md:p-4 rounded-xl"
      title={title}
    >
      {currentEmoji}
    </div>
  );
};

export default EmojiDisplay;
