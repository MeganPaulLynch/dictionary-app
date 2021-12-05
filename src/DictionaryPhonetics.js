import React from "react";
import "./DictionaryPhonetics.css";

export default function DictionaryPhonetics(props) {
  return (
    <div className="dictionary-phonetics">
      <span className="phonetics-text">{props.phonetics.text}</span>
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
    </div>
  );
}
