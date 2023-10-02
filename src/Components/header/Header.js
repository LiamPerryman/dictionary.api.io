import React, { useState } from "react";
import "./header.css";
import magnify from "../../assets/icon-search.svg";
import play from "../../assets/icon-play.svg";

function Header({
  clicked,
  setWordObject,
  newWordObject,
  word,
  setWord,
  notAWord,
  handleBlank,
  blank,
  font,
}) {
  // Extracting audio and text from newWordObject
  const textAudio = newWordObject ? newWordObject.phonetics : "";
  const [text] = textAudio ? textAudio?.filter((p) => p?.text?.includes("")) : "";
  const [audio] = textAudio ? textAudio?.filter((p) => p?.audio?.includes("h")) : "";

  // Create an audio player
  let audioPlay = new Audio(audio?.audio);

  return (
    <header>
      <div className="header-container">
        <div className="search-bar-container">
          <form>
            <div role="search">
              <input
                className="submit-enter"
                spellCheck="true"
                type="text"
                placeholder="Search for any word...  "
                onChange={(e) => setWord(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && e.target.value !== ""
                    ? setWordObject(word, e)
                    : handleBlank(e)
                }
                style={clicked ? { background: "#1F1F1F", color: "#FFF" } : {}}
              />
              <p
                style={blank ? { display: "inline-block", color: "#FF5252" } : {}}
                className="if-empty"
              >
                Whoops, can’t be empty…{" "}
              </p>
            </div>

            <img
              className="btn"
              src={magnify}
              alt=""
              onClick={(e) => (word !== "" ? setWordObject(word, e) : handleBlank(e))}
            />
          </form>
        </div>

        {notAWord ? (
          <div style={clicked ? { fontFamily: font } : null} className="blank">
            <p>😕</p>
            <h2 style={clicked ? { color: "#FFF", fontFamily: font } : null}>
              No Definitions Found
            </h2>
            <p>
              Sorry pal, we couldn't find definitions for the word you were looking for. You can try
              the search again at a later time or head to the web instead.
            </p>
          </div>
        ) : (
          <div className="word-phonetics-audio_container">
            <div className="word-phonetics">
              <h1 style={clicked ? { color: "#FFFFFF" } : {}}>
                {newWordObject.word ? newWordObject.word : ""}
              </h1>
              <h2 style={{ color: "#A445ED" }}>
                {newWordObject.phonetic ? newWordObject.phonetic : text?.text}
              </h2>
            </div>

            {newWordObject.word ? (
              <div onClick={() => audioPlay.play()} className="audio">
                {audio ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="75"
                    height="75"
                    viewBox="0 0 75 75"
                    fill="none"
                  >
                    <circle opacity="0.25" cx="37.5" cy="37.5" r="37.5" fill="#A445ED" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29 27V48L50 37.5L29 27Z"
                      fill="#A445ED"
                    />
                  </svg>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        )}

        {!newWordObject.word && !notAWord ? (
          <div className="welcome">
            <p> Search for a word above to get its definition </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default Header;
