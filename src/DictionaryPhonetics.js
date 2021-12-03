import React from "react";
import "./DictionaryPhonetics.css";

export default function DictionaryPhonetics(props) {
  return (
    <div className="dictionary-phonetics">
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        {" "}
        Listen{" "}
      </a>
      <br />
      <div className="phonetics-text">{props.phonetics.text}</div>
    </div>
  );
}
