import Badge from "../components/Badge";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

// temporary badge array; will move to database
const badges = [
  [1, { label: "10", bg: "bananayellow", borderColour: "border-raphaelred" }],
  [5, { label: "25", bg: "lgreen", borderColour: "border-dgreen" }],
];

const Stats = () => {
  const [badgeScore, setBadgeScore] = useState("");
  const [earnedBadges, setEarnedBadges] = useState([]);

  const auth = useAuth();

  // get latest user stats
  useEffect(() => {
    const storedToken = localStorage.getItem("site");
    if (storedToken) {
      auth.fetchUserWithToken(storedToken);
    }
  }, []);

  // calculate badgeScore
  useEffect(() => {
    const levelSum = auth.user.reading_level + auth.user.spelling_level;
    console.log(`reading_level: ${auth.user.reading_level}`);
    setBadgeScore(levelSum);

    const earnedBadgesList = [];
    const badgeCount = badges.length;
    console.log(`earned badges: ${earnedBadgesList}; levelSum: ${levelSum}`);

    for (let i = 0; i < badgeCount; i++) {
      if (badges[i][0] < badgeScore) {
        earnedBadgesList.push(badges[i]);
      }
      setEarnedBadges(earnedBadgesList);
      console.log(
        `2.earned badges: ${earnedBadgesList}; levelSum: ${levelSum}`,
      );
    }
  }, [auth.user]);

  return (
    <div className="flex flex-col bg-vanilla p-2 text-center min-h-screen gap-5 pt-16">
      <h1 className="text-3xl md:text-5xl text-charcoal font-black">STATS</h1>
      <div className="w-full max-w-5xl mx-auto rounded-xl shadow-xl bg-darkvanilla p-6 flex justify-between items-center">
        <h1 className="text-lg md:text-2xl">User: {auth.user.email}</h1>
        <span className="px-6 py-2 bg-bananayellow rounded-xl flex items-center gap-2">
          <span className="text-md md:text-lg">Coins </span>
          <span className="text-2xl md:text-3xl font-bold">
            {auth.user.coins}
          </span>
        </span>
      </div>
      <div className="w-full max-w-5xl mx-auto rounded-xl flex gap-5 items-center text-2xl">
        {/* reading stats */}
        <div className="flex flex-col gap-2 flex-1 bg-raphaelred rounded-xl shadow-xl p-5">
          <h1 className="font-bold text-lg md:text-2xl">READING</h1>
          <h2 className="text-sm md:text-lg text-charcoal">Current Level</h2>
          <div className="bg-linear-to-r from-lgreen from-10% to-white to-10% rounded-xl shadow-xl font-black">
            {auth.user.reading_level}
          </div>
        </div>

        {/* spelling stats */}
        <div className="flex flex-col gap-2 flex-1 bg-michelangeloorange rounded-xl shadow-xl p-5">
          <h1 className="font-bold text-lg md:text-2xl">SPELLING</h1>
          <h2 className="text-sm md:text-lg text-charcoal">Current Level</h2>
          <div className="bg-linear-to-r from-lgreen from-10% to-white to-10% rounded-xl shadow-xl font-black">
            {auth.user.spelling_level}
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto rounded-xl shadow-xl bg-darkvanilla p-6 flex flex-col gap-5 justify-between items-center text-2xl">
        {/* badges */}
        <h1 className="w-full">Badges</h1>
        <div className="flex justify-evenly gap-5">
          {earnedBadges &&
            earnedBadges.map((badge) => (
              <Badge
                key={badge[1].label}
                badgeLabel={badge[1].label}
                badgeBorder={badge[1].borderColour}
                badgeBg={badge[1].bg}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
