import React, { useEffect, useState } from "react";

/* ------------------------------ TIMER METHODS ----------------------------- */
// const futureDate = new Date(2022, 6, 6, 9, 30, 0);
const gmtValue = new Date().toString().slice(25, 33).trim();
console.log("currentTime", new Date().toString());
console.log("gmtValue:", gmtValue);
// const gmtValue = "GMT-0400";
const futureDate = new Date(1654704000000);
// const futureDate = new Date(`Web Jun 08 2022 21:30:00 ${gmtValue}`);
// const whiteListMintDate = new Date(`Web Jun 08 2022 21:00:00 ${gmtValue}`);
const whiteListMintDate = new Date(1654702200000);
// const futureDate = new Date(`Tue Jun 07 2022 13:40:00 ${gmtValue}`);
// const whiteListMintDate = new Date(`Tue Jun 07 2022 13:10:00 ${gmtValue}`);

console.log("futureDate: ", futureDate);

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

export default function TimeCountDown(props) {
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
      if (new Date() > futureDate) {
        console.log("time is up");
        props.trigger2(true);
      }
      // console.log("future date", futureDate.valueOf());
      // console.log("min date", whiteListMintDate.valueOf());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="count-down">
      <h2 className="red-color-text">
        {new Date() > whiteListMintDate
          ? "WhiteList Mint is live now! click on mint below to mint"
          : "Hold your piss for some more time."}
      </h2>
      <span className="span-row">
        <span
          className="mint-parent"
          onClick={() => {
            if (new Date() > whiteListMintDate) {
              props.trigger(true);
            } else {
              alert("mint not yet started");
            }

            // // if (new Date() > whiteListMintDate) {
            // //   props.trigger2(true);
            // //   return;
            // // } else
            // if (props.wallet === "") {
            //   // if user not connect to wallet
            //   // alert("Please connect your wallet");
            //   if (props.requestAccount != null) props?.requestAccount();
            // } else if (props.wallet !== "") {
            //   //if your wallet is connected
            //   if (new Date() < whiteListMintDate) {
            //     alert("mint not yet started");
            //     // if (checkIsUserInWhiteList()) {
            //     //   //show mint button
            //     //   props.trigger2(true);
            //     // }
            //   }
            // }
            // // alert(
            // //   `If you're whitelist person wait untill ${whiteListMintDate}, otherwise you have to wait for ${futureDate} to mint.`
            // // );
          }}
        >
          <h2 className="mint-name blue-color-text">Mint date</h2>
          <hr className="mint-line" />
        </span>
        &nbsp;&nbsp;&nbsp;
        {/* <p className="mint-date">Mint date</p> */}
        <span className="mint-parent">
          <h2 className="mint-name blue-color-text">
            {diff?.day}D:{diff?.hour}H:{diff?.minute}M:{diff?.second}S
            {/* TBA */}
          </h2>
          {/* <hr className="mint-line" /> */}
        </span>
      </span>
      {/* <p className="red-color-text"></p> */}
    </div>
  );
}
