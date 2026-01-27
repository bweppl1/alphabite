import { useState, useEffect } from "react";
import Badge from "../components/Badge";

const Stats = () => {
  const [user, setUser] = useState("");

  return (
    <div className="flex flex-col bg-vanilla p-2 text-center min-h-screen">
      <h1 className="text-3xl text-charcoal font-black">STATS</h1>
      <div className="w-full max-w-5xl mx-auto rounded-xl bg-darkvanilla p-6 flex flex-col">
        <h1>User</h1>
        <span>email</span>
        <span>coins</span>

        {/* reading stats */}
        <div>Reading</div>

        {/* spelling stats */}
        <div>Spelling</div>

        {/* badges */}
        <div>
          Badges
          <div className="flex justify-evenly gap-5">
            <Badge
              badgeLabel="10"
              badgeBorder="bananayellow"
              badgeBg="raphaelred"
            />
            <Badge badgeLabel="25" badgeBorder="lgreen" badgeBg="dgreen" />
            <Badge
              badgeLabel="50"
              badgeBorder="michaelangeloorange"
              badgeBg="vanilla"
            />
            <Badge
              badgeLabel="100"
              badgeBorder="lightcharcoal"
              badgeBg="bananayellow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
