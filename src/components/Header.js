import React from "react";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black from-10% via-[#000000c5] via-30% px-8 py-2 w-full z-10">
      <img
        className="w-32 md:w-48"
        src="/logo.png"
        alt="logo"
      />
    </div>
  );
};

export default Header;
