import React from "react";
import DictionarySynonyms from "./DictionarySynonyms";

export default function DictionaryMeanings(props) {
  return (
    <div className="DictionaryMeanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <p>
              {definitions.definition}
              <br />
              <em>{definitions.example}</em>
              <br />
              <DictionarySynonyms synonyms={definitions.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
