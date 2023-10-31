"use client";

import { useState } from "react";

import { FiSearch } from "react-icons/fi";

import SearchBar from "@components/SearchBar";

const Search = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(true);
    console.log(showPopup);
  };
  const test = () => {
    console.log("성공");
  };

  return (
    <>
      <FiSearch
        size={20}
        onClick={togglePopup}
        style={{ stroke: " #3182f6;" }}
      />
      {showPopup ? <SearchBar SearchProduct={test} /> : undefined}
    </>
  );
};

export default Search;
