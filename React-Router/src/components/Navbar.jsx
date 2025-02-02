import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
      <ul>
        <li><NavLink className={(e)=>{return e.isActive?"red":""}} to="/">Home</NavLink></li>
        <li><NavLink className={(e)=>{return e.isActive?"red":""}} to="/about">About</NavLink></li>
        <li><NavLink className={(e)=>{return e.isActive?"red":""}} to="/login">Login</NavLink></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
