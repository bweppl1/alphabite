import { useEffect, useState } from "react";

const Badge = ({ badgeLabel, badgeBorder, badgeBg }) => {
  let badgeStyle = `flex h-35 w-35 rounded-full bg-${badgeBg} border-10 ${badgeBorder} text-shadow-sm shadow-lg/40 shadow-amber-900`;

  return (
    <div className={badgeStyle}>
      <h1 className="text-6xl text-darkvanilla m-auto font-black">
        {badgeLabel}
      </h1>
    </div>
  );
};

export default Badge;
