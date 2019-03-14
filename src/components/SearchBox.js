import React from "react";

const SearchBox = ({ query, onInputChange, placeholder }) => (
  <input
    className="form-control m-3"
    placeholder={placeholder}
    value={query}
    onChange={e => onInputChange(e)}
  />
);

export default SearchBox;
