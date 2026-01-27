import { useState, useEffect } from "react";
import Badge from "../components/Badge";

const Stats = () => {
  const [user, setUser] = useState("");

  return (
    <div className="w-full bg-vanilla min-h-screen">
      <div className="max-w-5xl mx-auto rounded-xl bg-darkvanilla p-6 flex flex-col">
        <h1>User</h1>
        <span>email</span>

        {/* reading stats */}
        <div>Reading</div>

        {/* spelling stats */}
        <div>Spelling</div>

        {/* badges */}
        <div>
          Badges
          <div className="flex justify-evenly gap-5">
            <Badge badgeLabel="10" badgeBorder="" badgeBg="" />
            <Badge badgeLabel="25" badgeBorder="" badgeBg="" />
            <Badge badgeLabel="50" badgeBorder="" badgeBg="" />
            <Badge badgeLabel="100" badgeBorder="" badgeBg="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
