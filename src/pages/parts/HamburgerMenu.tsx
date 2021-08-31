import React from "react";

const HamburgerMenu = () => {
  return (
    <div className=" relative h-9 w-9 inline-block box-border border-2 border-gray-500">
      <div className=" absolute left-0.5 h-0.5 w-7 bg-gray-500 rounded-sm inline-block box-border bottom-2"></div>
      <div className="absolute left-0.5 h-0.5 w-7 bg-gray-500 rounded-sm inline-block box-border bottom-4"></div>
      <div className="absolute left-0.5 h-0.5 w-7 bg-gray-500 rounded-sm inline-block box-border bottom-6"></div>
    </div>
  );
};

export default HamburgerMenu;
