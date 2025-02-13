import React from "react";
import img01 from "../../assets/img/images/about_img01.png";
import img02 from "../../assets/img/images/about_img02.png";
import { Link } from "react-router-dom";

const WhoWeAre = (props) => {
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src="/img/whoarewe/img_2.png" alt="" className="img-one" />
              <img src="/img/whoarewe/img_1.svg" alt="" className="img-two" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <span className="sub-title">Who we are</span>
                <h2 className="title">
                  Captain SOL was born to lead the charge on Solana.
                </h2>
              </div>
              <p>
                Meme coins are the gateway for new users, and Captain SOL is
                here to unite the strongest holders in the game.
              </p>
              <Link to="/" className="btn">
                Copy Contact Adress
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
