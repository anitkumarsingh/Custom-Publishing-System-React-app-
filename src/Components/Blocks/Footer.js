import React from 'react';
import '../../Static/css/Footer.css';

const Footer = () => {
  return (
    <footer className="colophon">
      <ul>
        <li>
          <iframe
            title="github"
            className="github-btn"
            src="https://ghbtns.com/github-btn.html?user=anitkumarsingh&amp;repo=repositories&amp;type=watch&amp;count=true"
            width="112"
            height="20"
          ></iframe>
        </li>
        <li>
          <iframe
            className="github-btn"
            title="github-fork"
            src="https://ghbtns.com/github-btn.html?user=anitkumarsingh&amp;repo=repositories&amp;type=fork&amp;count=true"
            width="105"
            height="20"
          ></iframe>
        </li>
      </ul>
      <p style={{ fontSize: '20px' }}>© 2018. Anit Kumar.</p>
    </footer>
  );
};
export default Footer;
