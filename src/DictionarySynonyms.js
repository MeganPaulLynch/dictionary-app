import React from "react";

export default function DictionarySynonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Dictionary-Synonyms">
        {props.synonyms.map(function (synonyms, index) {
          return (
            <div key={index} className="d-flex">
              {synonyms}
            </div>
          );
        })}
      </div>
    );
  }
}
