import React from "react";
import { memo } from "react";
const Navbar = ({ adjective, getAdjective }) => {
  console.log("Navbar is render");
  return (
    <>
      <div>
        I am a {adjective} Navbar.
        <button onClick={() => getAdjective(getAdjective())}>
          {getAdjective()}
        </button>
      </div>
    </>
  );
};

export default memo(Navbar);
