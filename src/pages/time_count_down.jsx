import React, { useEffect, useState } from "react";

/* ------------------------------ TIMER METHODS ----------------------------- */
// const futureDate = new Date(2022, 6, 6, 9, 30, 0);
const gmtValue = new Date().toString().slice(25, 33);
const futureDate = new Date(`Sat Jun 06 2022 09:30:00 ${gmtValue}`);
const getDateDiff = (date1, date2) => {
  const diff = new Date(date2.getTime() - date1.getTime());
  return {
    year: diff.getUTCFullYear() - 1970,
    month: diff.getUTCMonth(),
    day: diff.getUTCDate() - 1,
    hour: diff.getUTCHours(),
    minute: diff.getUTCMinutes(),
    second: diff.getUTCSeconds(),
  };
};

export default function TimeCountDown() {
  const [diff, setDiff] = useState({
    day: 0,
    hour: 0,
    minute: 0.0,
    month: 0,
    second: 0.0,
    year: 0,
  });
  useEffect(() => {
    const timer = setInterval(() => {
      // console.log(getDateDiff(new Date(), futureDate));
      setDiff(getDateDiff(new Date(), futureDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="count-down">
      <h2 className="red-color-text">Your Minting will start in</h2>
      <span className="span-row">
        <span className="mint-parent">
          <h2 className="mint-name blue-color-text">
            {/* {diff?.day}D:{diff?.hour}H:{diff?.minute}M:{diff?.second}S */}
            TBA
          </h2>
          <hr className="mint-line" />
        </span>
      </span>
      <p className="red-color-text">Hold your piss for some more time.</p>
    </div>
  );
}
