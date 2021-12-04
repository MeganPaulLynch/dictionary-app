import React from "react";
import "./DictionaryPhotos.css";

export default function DictionaryPhotos(props) {
  if (props.photos) {
    return (
      <section className="dictionary-photos">
        <div className="row">
          {props.photos.map(function (photos, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photos.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photos.src.landscape}
                    className="img-fluid"
                    alt="search word images"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
