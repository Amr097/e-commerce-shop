import React from "react";
import { TfiClose } from "react-icons/tfi";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.scss";
const SearchBar = () => {
  return (
    <form className="search">
      <input className="search__input" type="text" placeholder="Search"></input>
      <button className="search__button">
        {" "}
        <BsSearch className="search__icon" />
      </button>
      <button className="search__exit">
        {" "}
        <TfiClose />
      </button>
    </form>
  );
};

export default SearchBar;
