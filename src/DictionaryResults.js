import React from "react";
import DictionaryMeanings from "./DictionaryMeanings";
import DictionaryPhonetics from "./DictionaryPhonetics";
import "./DictionaryResults.css";

export default function DictionaryResults(props) {
  if (props.results) {
    return (
      <div className="dictionary-results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetics, index) {
            return (
              <div key={index}>
                <DictionaryPhonetics phonetics={phonetics} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <DictionaryMeanings meanings={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
