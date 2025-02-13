import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../lib/helpers";

const FooterOne = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="container">
          <div className="footer-scroll-wrap">
            <button
              className="scroll-to-target"
              data-target="html"
              onClick={scrollToTop}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
          <div className="footer-top">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <a className="f-logo" href="#">
                    {/* <img src="/img/logo/img_6.png" alt="BigTech Logo" /> */}
                    <h4>CAPTAIN SOLANA</h4>
                  </a>
                  <div className="footer-content">
                    <p>
                      Fast, accurate, and 100% secure. Captain Solana ensures
                      transparency, reliability, and trust in every blockchain
                      mission with AI-driven auditing. Join the movement and
                      secure the future!
                    </p>
                    <ul className="footer-social">
                      <li>
                        <a href="https://web.telegram.org/">
                          <i className="fab fa-telegram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div
                  className="footer-widget  wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h4 className="fw-title">Useful Links</h4>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <a href="#header">Home</a>
                      </li>
                      <li>
                        <a href="#about">About Us</a>
                      </li>
                      <li>
                        <a href="#roadmap">Roadmaps</a>
                      </li>
                      <li>
                        <a href="#team">Teams</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h4 className="fw-title">Socials</h4>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link to="/">Telegram</Link>
                      </li>
                      <li>
                        <Link to="/">Twitter</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <h4 className="fw-title">Connect Wallet</h4>
                  <div className="footer-newsletter">
                    <p>Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>Copyright &copy; 2025. All Rights Reserved Bigtech</p>
                </div>
              </div>
              <div className="col-lg-6 d-none d-sm-block">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link to="#">Telegram</Link>
                    </li>
                    <li>
                      <Link to="#">Twitter</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
