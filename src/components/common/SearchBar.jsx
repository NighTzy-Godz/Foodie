import React from "react";

import "../../static/css/searchbar.css";

const SearchBar = (props) => {
  const { value, onSearch } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchBox">Search Foods</label>
        <input
          type="text"
          id="searchBox"
          placeholder="Start Typing Here...."
          onChange={(e) => onSearch(e.currentTarget.value)}
          value={value}
        />
      </form>
    </div>
  );
};

export default SearchBar;
