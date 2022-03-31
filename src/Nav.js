import React from "react";
import logo from "./netflix.png";
import avatar from "./avatar.png";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav" >
      <img className="nav_logo" src={logo} alt="Netflix logo" />
      <img className="nav_avatar" src={avatar} alt="Avatar" />
    </div>
  );
}

export default Nav;
