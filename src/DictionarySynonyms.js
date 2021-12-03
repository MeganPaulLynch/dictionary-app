import React from "react";
import "./DictionarySynonyms.css";

export default function DictionarySynonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="dictionary-synonyms">
        {props.synonyms.map(function (synonyms, index) {
          return <li key={index}>{synonyms}</li>;
        })}
      </ul>
    );
  }
}
