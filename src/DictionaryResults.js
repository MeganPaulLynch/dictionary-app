import React from "react";
import DictionaryMeanings from "./DictionaryMeanings";

export default function DictionaryResults(props) {
  if (props.results) {
    return (
      <div className="DictionaryResults">
        <h2>{props.results.word}</h2>
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
