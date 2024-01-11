import React from "react";
import { useEffect, useState } from "react";

const Timer = ({ setShowReport }) => {
  const [seconds, setSeconds] = useState(30*60); // 30 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timer);
        // You can add code here to handle when the timer reaches 0.
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds]);

  // Helper function to format seconds into minutes and seconds
  const formatTime = (timeInSeconds) => {
    if (timeInSeconds === 0) {
      setShowReport(true);
    }
    const minutes = Math.floor(timeInSeconds / 60);
    const remainingSeconds = timeInSeconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  return (
    <p className="border border-[#279EFF] bg-[#279EFF] px-2 py-1 rounded text-white">
      Time Left{" "}
      <span className="p-1 rounded text-white">{formatTime(seconds)}</span>
    </p>
  );
};

export default Timer;
