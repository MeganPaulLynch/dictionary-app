import React, { useState } from "react";
import axios from "axios";
import DictionaryResults from "./DictionaryResults";
import DictionaryPhotos from "./DictionaryPhotos";
import "./DictionarySearch.css";

export default function DictionarySearch(props) {
  const [searchTerm, setSearchTerm] = useState(props.defaultSearchTerm);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePhotosResponse(response) {
    setPhotos(response.data.photos);
  }
  function handleSubmit(event) {
    event.preventDefault();
    handleSearch();
  }
  function handleSearch() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchTerm}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey =
      "563492ad6f91700001000001ab5666fdc4b74809a8367081a40bdb81";
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    let pexelsApi = `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=9`;
    axios.get(pexelsApi, { headers: headers }).then(handlePhotosResponse);
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
        <DictionaryPhotos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
