import React from "react";
import Radio from "./Radio";

const Footer = ({ url, author }) => (
  <div className="footer">
    <div className="container">
      <h5 className="footer__text">
        Created by{" "}
        <a
          className="footer__link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {author}
        </a>
      </h5>
      <div className="boxes-container">
        <Radio />
      </div>
    </div>
  </div>
);

export default Footer;
