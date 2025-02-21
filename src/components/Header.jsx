import React from "react";
import "./Header.css";
import searchIcon from "../assets/search.png";
import moonIcon from "../assets/moonb.png";

const Header = () => {
  return (
    <div className="header">
      <div className="searchBox">
        <img src={searchIcon} alt="searchIcon" />

        <input type="text" placeholder="Enter Location, Postcode" />
      </div>

      <div className="darkModeBox">
        <img src={moonIcon} alt="" />
      </div>
    </div>
  );
};

export default Header;
