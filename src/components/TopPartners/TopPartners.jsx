import React from "react";

const TopPartners = () => {
  const partners_list = [
    { src: "/img/partnership/solana.png", title: "Solana" },
    { src: "/img/partnership/dexpartner.png", title: "DEX Screener" },
    { src: "/img/partnership/polygon.png", title: "Polygon" },
    {
      src: "/img/partnership/binance.png",
      title: "Binance Smart Chain (BSC)",
    },
  ];

  return (
    <div className="partner-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              <span className="sub-title">Our Partners</span>
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
