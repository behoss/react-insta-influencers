import React from "react";

import "./search-box.scss";

export const SearchBox = ({ onSearchChange }) => (
  <input
    className="search-box"
    type="search"
    placeholder="search users"
    onChange={onSearchChange}
  />
);
