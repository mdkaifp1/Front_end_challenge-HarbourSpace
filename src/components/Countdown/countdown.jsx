import react from "react";
import "./countdown.css";
// import { useState, useEffect } from "react";

const countdown = () => {
  const [date, setdate] = react.useState();
  const [hour, sethour] = react.useState();
  const [minute, setminute] = react.useState();
  const [second, setsecond] = react.useState();
  let interval;

  const startTimer = () => {
    const countdowndate = new Date("December 23,2023").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countdowndate - now;

      const day = Math.floor(distance / (24 * 60 * 60 * 1000));

      const hour = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );

      const minute = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));

      const second = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setdate(day);
        setminute(minute);
        sethour(hour);
        setsecond(second);
      }
    });
  };

  react.useEffect(() => {
    startTimer();
  });
  return (
    <div className="app__timer-component">
      <div className="app__timer">
        <p className="timer__p">{date}</p>
        <p className="timer__p"> Day </p>
        <p className="timer__p"> : </p>
      </div>
      <div className="app__timer">
        <p className="timer__p">{hour}</p>
        <p className="timer__p">Hrs </p>
        <p className="timer__p"> : </p>
      </div>
      <div className="app__timer">
        <p className="timer__p">{minute}</p>
        <p className="timer__p"> Min </p>
        <p className="timer__p"> : </p>
      </div>
      <div className="app__timer">
        <p className="timer__p">{second}</p>
        <p className="timer__p"> Sec</p>
      </div>
    </div>
  );
};

export default countdown;
