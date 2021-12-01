import React, { useState } from "react";
import axios from "axios";
import DictionaryResults from "./DictionaryResults";
import "./DictionarySearch.css";

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
    <div className="dictionary-search">
      <section>
        <form onSubmit={handleSearch}>
          <input type="search" onChange={searchWord} />
        </form>
      </section>
      <DictionaryResults results={results} />
    </div>
  );
}
