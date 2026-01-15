import { useState, useEffect } from "react";

const ExperienceBar = ({ round, resultArray }) => {
  return (
    <div className="flex flex-row gap-2">
      <div className="w-10 h-10 border-red-500 rounded-xl"></div>
      <div className="w-10 h-10 border-lightcharcoal rounded-xl"></div>
      <div className="w-10 h-10 border-lightcharcoal rounded-xl"></div>
      <div className="w-10 h-10 border-lightcharcoal rounded-xl"></div>
      <div className="w-10 h-10 border-lightcharcoal rounded-xl"></div>
      <div className="w-10 h-10 border-lightcharcoal rounded-xl"></div>
      <div className="w-10 h-10 border-lightcharcoal rounded-xl"></div>
      <div className="w-10 h-10 border-lightcharcoal rounded-xl"></div>
      <div className="w-10 h-10 border-lightcharcoal rounded-xl"></div>
      <div className="w-10 h-10 border-lightcharcoal rounded-xl"></div>
    </div>
  );
};

export default ExperienceBar;
