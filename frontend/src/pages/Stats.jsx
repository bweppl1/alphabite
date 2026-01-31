import { useState, useEffect } from "react";
import Badge from "../components/Badge";
import { useAuth } from "../context/AuthContext";

// TOOD
// Implement coin system
// Badge shop
// Earned Badge display
// protect page when not authenticated

const Stats = () => {
  const [user, setUser] = useState("");

  const auth = useAuth();

  return (
    <div className="flex flex-col bg-vanilla p-2 text-center min-h-screen">
      <h1 className="text-3xl text-charcoal font-black">STATS</h1>
      <div className="w-full max-w-5xl mx-auto rounded-xl bg-darkvanilla p-6 flex flex-col">
        <h1>{auth.user.email}</h1>
        {/* <span>{auth.user.coins}</span> */}

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
            <Badge badgeLabel="55" badgeBorder="dgreen" badgeBg="dgreen" />
            <Badge
              badgeLabel="100"
              badgeBorder="raphaelred"
              badgeBg="bananayellow"
            />
            <Badge
              badgeLabel="10"
              badgeBorder="bananayellow"
              badgeBg="dgreen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
