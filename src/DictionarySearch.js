import React, { useState } from "react";
import axios from "axios";

export default function DictionarySearch() {
  const [searchTerm, setSearchTerm] = useState("");
  function handleResponse(response) {
    console.log(response.data[0]);
  }
  function handleSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchTerm}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function searchWord(event) {
    setSearchTerm(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="search" onChange={searchWord} />
      </form>
    </div>
  );
}
