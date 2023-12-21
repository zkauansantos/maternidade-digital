'use client';

import { useEffect, useState } from 'react';

export default function useTime() {
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 14,
    seconds: 60,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        const { hours, minutes, seconds } = prevCountdown;

        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        let newHours = hours;

        if (newSeconds === -1) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes === -1) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours === 0 && newMinutes === 0 && newSeconds === 0) {
          clearInterval(timer);
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return {
    countdown,
  };
}
