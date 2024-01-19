import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.querySelector(".container"));

const Header = () => {
  return (
    <div id="header">
      <div className="logo_div">
        <img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-logo-icons-31.png" />
      </div>
      <div className="search_bar_div">
        <input type="text" placeholder="Search" />
      </div>
      <div className="user_div">
        <img src="https://www.freepnglogos.com/uploads/hacker-png/hacker-user-icons-18.png" />
      </div>
    </div>
  );
};

root.render(<Header />);
