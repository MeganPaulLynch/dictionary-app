import React, { useState } from "react";
import axios from "axios";
import DictionaryResults from "./DictionaryResults";

export default function DictionarySearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(null);
  function handleResponse(response) {
    setResults(response.data[0]);
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
      <DictionaryResults results={results} />
    </div>
  );
}
