import React from "react";
import shape01 from "../../assets/img/banner/banner_shape01.png";
import shape02 from "../../assets/img/banner/banner_shape02.png";
import shape03 from "../../assets/img/banner/banner_shape03.png";
import fireIcon from "../../assets/img/icon/fire.png";
import CountDownOne from "../CountDown/CountDownOne";

const Banner = (props) => {
  return (
    <section className="banner-area banner-bg">
      <div className="banner-shape-wrap">
        <img src="/img/banner/img_4.svg" alt="" className="img-one" />
        <img src="/img/banner/img_2.svg" alt="" className="img-two" />
        <img src="/img/banner/img_3.svg" alt="" className="img-three" />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <img src="/img/bg_1.jpg" alt="" />
              <h2 className="title">
                Join the Future of AI-Powered Smart Contract Auditing for{" "}
                <span>Secure and Transparent</span> Blockchain Projects
              </h2>
            </div>
            <div className="banner-progress-wrap">
              <ul>
                <li>Pre Sell</li>
                <li>Soft Cap</li>
                <li>Bonus</li>
              </ul>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <h4 className="title">
                65% target raised <span>1 ETH = $1000 = 2877.84 AUD</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              <h2 className="title">AUD Will Start In..</h2>

              <CountDownOne />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
