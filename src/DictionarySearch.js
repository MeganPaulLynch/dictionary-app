import React, { useState } from "react";

export default function DictionarySearch() {
  const [searchTerm, setSearchTerm] = useState("");
  function handleSearch(event) {
    event.preventDefault();
  }
  function searchWord(event) {
    setSearchTerm(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="search" onChange={searchWord} />
      </form>
      {searchTerm}
    </div>
  );
}
