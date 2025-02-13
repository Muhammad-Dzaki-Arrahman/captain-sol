import React from "react";
import Countdown from "react-countdown";

const CountDownOne = () => {
  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <>
          <div className="time-count day">
            <span>{"00"}</span>Days
          </div>
          <div className="time-count hour">
            <span>{"00"}</span>hour
          </div>
          <div className="time-count min">
            <span>{"00"}</span>minute
          </div>
          <div className="time-count sec">
            <span>{"00"}</span>second
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="time-count day">
            <a href="https://dexscreener.com/" target="_blank">
              <img
                src="/img/partnership/dex.png"
                alt=""
                width={40}
                height={40}
              />
            </a>
          </div>
          <div className="time-count hour">
            <a href="https://x.com/" target="_blank">
              <img src="/img/partnership/x.png" alt="" width={40} height={40} />
            </a>
          </div>
          <div className="time-count min">
            <a href="https://web.telegram.org/" target="_blank">
              <img
                src="/img/partnership/telegram.png"
                alt=""
                width={40}
                height={40}
              />
            </a>
          </div>
        </>
      );
    }
  };

  return (
    <div className="coming-time">
      <Countdown date={Date.now() + 5000000} renderer={renderer} />
    </div>
  );
};

export default CountDownOne;
