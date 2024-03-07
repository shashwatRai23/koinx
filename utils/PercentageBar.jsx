import React from "react";

export const PercentageBar = ({ percent, color }) => {
  return (
    <div className="flex gap-2 items-center">
      <div>Hold</div>
      <div className={`h-[14px] w-1/5 bg-black rounded-md`}></div>
    </div>
  );
};
