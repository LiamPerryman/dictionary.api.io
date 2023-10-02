import React from "react";
import { useState } from "react";
import "./main.css";

function Main({ wordObject }) {
  if (Object.keys(wordObject).length === 0) return null;

  const first = handleDef(wordObject?.meanings[0]?.definitions);
  const second = handleDef(wordObject?.meanings[1]?.definitions);
  const antonyms = wordObject?.meanings?.[0]?.antonyms.join(", ");
  const synonyms = wordObject?.meanings?.[0]?.synonyms.join(", ");

  function handleDef(object) {
    const arr = new Array();
    for (let i = 0; i < 3 && object?.length > i; i++) {
      arr.push(object[i]);
    }
    return arr;
  }

  return (
    <main>
      <Definition
        wordObject={wordObject}
        synonyms={synonyms}
        antonyms={antonyms}
        position={0}
        result={first}
      >
        {wordObject?.meanings?.[0]?.synonyms[0] ? (
          <div className="synonyms">
            <h3>Synonyms</h3>
            <p>{synonyms}</p>
          </div>
        ) : null}
        {wordObject?.meanings?.[0]?.antonyms[0] ? (
          <div className="antonyms">
            <h3>Antonym</h3>
            <p>{antonyms}</p>
          </div>
        ) : null}
      </Definition>
      <Definition wordObject={wordObject} position={1} result={second} />
    </main>
  );
}

export default Main;

function Definition({ wordObject, result, position, synonyms, antonyms, children }) {
  return (
    <>
      <div className="definition">
        <h2>{wordObject?.meanings[position]?.partOfSpeech}</h2>
        {wordObject?.meanings[position] ? <div className="dash"></div> : null}
      </div>
      <div className="meaning">
        <h2>{wordObject?.meanings.length > 1 ? "Meaning" : ""}</h2>

        {result[0]?.definition ? (
          <li>
            {result[0].definition}
            <span className="example">{result[0]?.example ? result[0].example : ""}</span>
          </li>
        ) : null}
        {result[1]?.definition ? (
          <li>
            {result[1].definition}
            <span className="example">{result[1]?.example ? result[1].example : ""}</span>
          </li>
        ) : null}
        {result[2]?.definition ? (
          <li>
            {result[2].definition}
            <span className="example">{result[2]?.example ? result[2].example : ""}</span>
          </li>
        ) : null}

        {children}
      </div>
    </>
  );
}
