import React, { useState, useEffect } from "react";
import s from "./HomePage.module.css";

const Home = () => {
  const [timer, setTimer] = useState({
    hours: 24,
    minutes: 59,
    seconds: 60,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        const { hours, minutes, seconds } = prevTimer;

        if (seconds > 0) {
          return { ...prevTimer, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevTimer, seconds: 59, minutes: minutes - 1 };
        } else if (hours > 0) {
          return { ...prevTimer, seconds: 59, minutes: 59, hours: hours - 1 };
        }

        return prevTimer;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <section className={s.firstSection}>
        <aside>
          <nav>
            <ul>
              <li>Men's fashion</li>
              <li>Woman's fashion</li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby's & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </nav>
        </aside>
        <div className={s.firstSection__lastBlock}>
          <span>iPhone 14 Series</span>
          <h2>Up to 10% off Voucher</h2>
        </div>
      </section>
      <section className={s.secondSection}>
        <h4>Today's</h4>
        <h3>Flash Sales</h3>
        <div className={s.secondSection__timer}>
          <span>{timer.hours}h </span>
          <span>:</span>
          <span> {timer.minutes}min</span>
          <span>:</span>
          <span>{timer.seconds}s</span>
        </div>
      </section>
    </>
  );
};

export default Home;
