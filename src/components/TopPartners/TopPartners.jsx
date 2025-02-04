import React from "react";

const TopPartners = () => {
  const partners_list = [
    { src: "/img/partnership/certik.png", title: "CertiK" },
    { src: "/img/partnership/slowmist.png", title: "SlowMist" },
    { src: "/img/partnership/ethereum-foundation.png", title: "Ethereum Foundation" },
    {
      src: "/img/partnership/binance.png",
      title: "Binance Smart Chain (BSC)",
    },
    { src: "/img/partnership/solana.png", title: "Solana" },
    { src: "/img/partnership/github.png", title: "Github" },
    {
      src: "/img/partnership/gcb.png",
      title: "Google Cloud Blockchain",
    },
    { src: "/img/partnership/trustpilot.png", title: "Trustpilot" },
    { src: "/img/partnership/aave.png", title: "Aave" },
    { src: "/img/partnership/polygon.png", title: "Polygon" },
    { src: "/img/partnership/hyperledger.png", title: "Hyperledger" },
    { src: "/img/partnership/quantstamp.png", title: "Quantstamp" },
    { src: "/img/partnership/openzeppelin.png", title: "OpenZeppelin" },
  ];

  return (
    <div className="partner-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              <span className="sub-title">Our top partner</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap">
              <ul>
                {partners_list.map((item, index) => (
                  <li key={index} className="color-li">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="partner-img"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPartners;
