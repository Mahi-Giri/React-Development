import React from "react";
import ReactDOM from "react-dom";
import logo from "./Img/logo.png";
import userlogo from "./Img/user-icon.png";

const root = ReactDOM.createRoot(document.querySelector(".container"));

const Header = () => {
  return (
    <div id="header">
      <div className="logo_div">
        <img src={logo} />
      </div>
      <div className="search_bar_div">
        <input type="text" placeholder="Search" />
      </div>
      <div className="user_div">
        <img src={userlogo} />
      </div>
    </div>
  );
};

root.render(<Header />);
