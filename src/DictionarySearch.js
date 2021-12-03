import React, { useState } from "react";
import axios from "axios";
import DictionaryResults from "./DictionaryResults";
import "./DictionarySearch.css";

export default function DictionarySearch(props) {
  const [searchTerm, setSearchTerm] = useState(props.defaultSearchTerm);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handleSubmit(event) {
    event.preventDefault();
    handleSearch();
  }
  function handleSearch() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchTerm}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function searchWord(event) {
    setSearchTerm(event.target.value);
  }
  function load() {
    setLoaded(true);
    handleSearch();
  }
  if (loaded) {
    return (
      <div className="dictionary-search">
        <section>
          <p className="hint-text">Search a word to find its meaning...</p>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={searchWord} />
          </form>
        </section>
        <DictionaryResults results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
