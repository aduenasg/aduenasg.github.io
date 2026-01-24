import React, { useState, useEffect } from "react";
// import LoopCSS from "../static/css/loopCounter.css"; 

const LoopCounter = ({ start = 0, end = 5, step = 1, interval = 500, label }) => {
  const [count, setCount] = useState(start);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(true);
      setCount(prev => {
        const next = prev + step;
        return next > end ? start : next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [start, end, step, interval]);

  return (
    <div className="counter-container">
      <h2
  className={`counter ${animate ? "pulse" : ""}`}
  onAnimationEnd={() => setAnimate(false)}
>
  {count}
</h2>
      <p className="label">{label}</p>
    </div>
  );
};

export default LoopCounter;