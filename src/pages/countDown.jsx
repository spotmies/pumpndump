import React, { useEffect, useState } from "react";

const futureDate = new Date(2022, 6, 6, 9, 30, 0);
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

const formatDate = (date) => {
  let d = new Date(date),
    month = (d.getMonth() + 1).toString(),
    day = d.getDate().toString(),
    year = d.getFullYear().toString();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export default function CountDown() {
  const [diff, setDiff] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setDiff(getDateDiff(new Date(), futureDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <p>
        {diff.day} days,
        {diff.hour} hours, {diff.minute} minute, {diff.second} seconds until{" "}
        {formatDate(futureDate)}
      </p>
    </div>
  );
}
