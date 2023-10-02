import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar, Header, Main, Footer } from "./Components";

function App() {
  // State variables
  const [clicked, setClicked] = useState(false);
  const [wordObject, setWordObject] = useState([]);
  const [word, setWord] = useState("");
  const [notAWord, setNotAWord] = useState(false);
  const [blank, setBlank] = useState(false);
  const [font, setFont] = useState("Inter");
  const newWordObject = { ...wordObject[0], ...wordObject[1] };

  // Event handler for detecting blank input
  function handleBlank(e) {
    if (
      (e.target.value === "" && e.key === "Enter") ||
      (e.target.value === undefined && e.type === "click")
    ) {
      e.preventDefault();
      setNotAWord(false);
      return setBlank(true);
    } else {
      setBlank(false);
    }
  }

  // Event handler for handling non-word input
  function handleNotAWord(data) {
    if (data.title) {
      setBlank(false);
      return setNotAWord(true);
    } else {
      setNotAWord(false);
    }
  }

  // Fetch definition for a word
  async function getDefinition(word, e) {
    e.preventDefault();
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await res.json();
    handleNotAWord(data);

    setWordObject(data);
  }

  return (
    <div
      className="App"
      onClick={(e) => e.onClick}
      style={
        clicked
          ? { background: "black", color: "#ffff", fontFamily: font }
          : { color: "#2d2d2d", fontFamily: font }
      }
    >
      {/* Navbar */}
      <Navbar setFont={setFont} clicked={clicked} setClicked={setClicked} />

      {/* Header */}
      <Header
        clicked={clicked}
        newWordObject={newWordObject}
        setWordObject={getDefinition}
        word={word}
        setWord={setWord}
        notAWord={notAWord}
        blank={blank}
        handleBlank={handleBlank}
        font={font}
      />

      {/* Main */}
      <Main wordObject={newWordObject} />

      {/* Footer */}
      <Footer wordObject={newWordObject} clicked={clicked} />
    </div>
  );
}

export default App;
