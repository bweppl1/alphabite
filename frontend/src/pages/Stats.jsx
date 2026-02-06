import Badge from "../components/Badge";
import { useAuth } from "../context/AuthContext";

const badges = [
  [10, { label: "10", bg: "bananayellow", borderColour: "border-raphaelred" }],
  [25, { label: "25", bg: "lgreen", borderColour: "border-dgreen" }],
];

const Stats = () => {
  const auth = useAuth();

  return (
    <div className="flex flex-col bg-vanilla p-2 text-center min-h-screen gap-5 pt-16">
      <h1 className="text-3xl md:text-5xl text-charcoal font-black">STATS</h1>
      <div className="w-full max-w-5xl mx-auto rounded-xl bg-darkvanilla p-6 flex justify-between items-center">
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
        <div className="flex flex-col gap-5 flex-1 bg-raphaelred rounded-xl p-5">
          <h1 className="font-bold">Reading Level</h1>
          <span className="bg-vanilla rounded-xl">
            {auth.user.reading_level}
          </span>
        </div>

        {/* spelling stats */}
        <div className="flex flex-col gap-5 flex-1 bg-michelangeloorange rounded-xl p-5">
          <h1 className="font-bold">Spelling Level</h1>
          <span className="bg-vanilla rounded-xl">
            {auth.user.spelling_level}
          </span>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto rounded-xl bg-darkvanilla p-6 flex flex-col gap-5 justify-between items-center text-2xl">
        {/* badges */}
        <h1 className="w-full">Badges</h1>
        <div className="flex justify-evenly gap-5">
          {badges &&
            badges.map((badge) => (
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
