import React from "react";

export default function DictionaryPhonetics(props) {
  return (
    <div className="Dictionary-Phonetics">
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        {" "}
        Listen{" "}
      </a>
      <br />
      {props.phonetics.text}
    </div>
  );
}
