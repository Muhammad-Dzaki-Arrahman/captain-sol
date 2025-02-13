import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WhoWeAre = (props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const contactAddress = "YOUR_CONTACT_ADDRESS_HERE"; // Ganti dengan alamat yang ingin disalin
    navigator.clipboard
      .writeText(contactAddress)
      .then(() => {
        setCopied(true);
        toast.success("🚀 Contact Address Copied!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
        toast.error("❌ Failed to copy. Try again!");
      });
  };
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img
                src="/img/whoarewe/img_1.png"
                alt="csn"
                className="img-one"
              />
              {/* <img
                src="/img/whoarewe/img_1.svg"
                alt="csn"
                className="img-two"
              /> */}
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
              <button onClick={handleCopy} className="btn">
                {copied ? "✅ Copied!" : "Copy Contact Address"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
