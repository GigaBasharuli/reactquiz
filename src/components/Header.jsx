import headerLogo from "../assets/quiz-logo.png";
import React from "react";

const Header = () => {
  return (
    <header>
      <img src={headerLogo} />
      <h1>REACTQUIZ</h1>
    </header>
  );
};

export default Header;
