import React from "react";
import Logo from "../../assets/images/logo.svg";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div>
            <a href="/">
              <img className="footer-logo" src={Logo} alt="Eino Pitkälä logo" />
            </a>
            <h2>Eino Pitkälä</h2>
            <ul>
              <li>
                <a className="link" href="mailto:eino@pitkala.net">
                  eino@pitkala.net
                </a>
              </li>
              <li>
                <a href="link" className="link">
                    Eino#6866
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://mastodon.testausserveri.fi/@eino"
                >
                  @eino@testausserveri.fi
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="footer-right-links">
              <li>
                <a className="link" href="https://eino-it.fi">
                  Eino IT
                </a>
              </li>
              <li>
                <a className="link" href="https://github.com/seoneizz">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            <p>
              &copy; Eino Pitkälä 2023, Page source code can be found{" "}
              <a className="link"href="https://github.com/seoneizz/eino-portfolio-react">
                here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
