import React from "react";
import DictionarySynonyms from "./DictionarySynonyms";
import "./DictionaryMeanings.css";

export default function DictionaryMeanings(props) {
  return (
    <div className="dictionary-meanings">
      <section>
        <h3>{props.meanings.partOfSpeech}</h3>
        {props.meanings.definitions.map(function (definitions, index) {
          return (
            <div key={index}>
              <div>
                {definitions.definition}
                <br />
                <p className="example">{definitions.example}</p>
                <br />
                <DictionarySynonyms synonyms={definitions.synonyms} />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
