import React from "react";

const SearchNote = ({ value, hint, onChange, onSubmit }) => (
  <div>
    <input type="search" value={value} placeholder={hint} onChange={onChange} />
    <button type="button" onClick={onSubmit}>
      Cari
    </button>
  </div>
);

export default SearchNote;
