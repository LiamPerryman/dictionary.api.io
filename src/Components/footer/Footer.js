import React from "react";
import "./footer.css";
import newWindow from "../../assets/icon-new-window.svg";

function Footer({ wordObject, clicked }) {
  const source = wordObject?.sourceUrls?.[0];

  return (
    <footer>
      {source ? (
        <div className="footer">
          <h4>
            <a href={source}>Source</a>
          </h4>
          <p>
            <a style={clicked ? { color: "#FFF" } : {}} href={source}>
              {source} <img src={newWindow} alt="new window" />
            </a>
          </p>
        </div>
      ) : null}
    </footer>
  );
}

export default Footer;
