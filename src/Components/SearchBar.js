import React from "react";
import "./SearchBar.css";

function SearchBar({ setSearch, search, tag, setTag }) {
  return (
    <form className="input-container">
      <input
        className="name"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search By Name"
      ></input>
      <input
        className="tag"
        type="text"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        placeholder="Search By Tag"
      ></input>
    </form>
  );
}

export default SearchBar;
