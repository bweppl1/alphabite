import Badge from "../components/Badge";
import { useAuth } from "../context/AuthContext";

// TOOD
// Implement coin system
// Badge shop
// Earned Badge display
// protect page when not authenticated
// fix authentication
// add more words

const Stats = () => {
  const auth = useAuth();

  return (
    <div className="flex flex-col bg-vanilla p-2 text-center min-h-screen gap-5 pt-16">
      <h1 className="text-3xl md:text-5xl text-charcoal font-black">STATS</h1>
      <div className="w-full max-w-5xl mx-auto rounded-xl bg-darkvanilla p-6 flex justify-between items-center text-2xl">
        <h1>User: {auth.user.email}</h1>
        <span className="px-6 py-2 bg-bananayellow rounded-xl">
          🪙 Coins: {auth.user.coins}
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

      <div className="w-full max-w-5xl mx-auto rounded-xl bg-darkvanilla p-6 flex justify-between items-center text-2xl">
        {/* badges */}
        <h1 className="w-full">Badges</h1> {auth.user.badges}
        <div className="flex justify-evenly gap-5">
          <Badge
            badgeLabel="10"
            badgeBorder="bananayellow"
            badgeBg="raphaelred"
          />
          <Badge badgeLabel="25" badgeBorder="lgreen" badgeBg="dgreen" />
          <Badge badgeLabel="55" badgeBorder="dgreen" badgeBg="dgreen" />
          <Badge
            badgeLabel="100"
            badgeBorder="raphaelred"
            badgeBg="bananayellow"
          />
          <Badge badgeLabel="10" badgeBorder="bananayellow" badgeBg="dgreen" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
