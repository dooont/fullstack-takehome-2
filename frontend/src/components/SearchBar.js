import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-input-wrapper">
      <span className="icon">🔍</span>
        <input
          type="text"
          placeholder="SEARCH"
          className="search-input"
        />
      </div>
      <div className="user-menu">
        <span className="user-icon">0XFC...E63D1</span>
        <span className="dropdown-icon">⬇️</span>
      </div>
    </div>
  );
};

export default SearchBar;
