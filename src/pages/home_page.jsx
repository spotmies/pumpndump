import React from "react";
import "./home.scss";
import image from "./images/graph.png";
export default function HomePage() {
  const roadMapList = [
    {
      q: "Day 1",
      ans: "Everyone should only list at 0.03 or higher in secondary market after mint to bring some traction..",
    },
    {
      q: "Day 2",
      ans: "Everyone should only list at 0.09 or higher in secondary market to get that sweet sweet volume…",
    },
    {
      q: "Day 3",
      ans: "Stop undercuttin Eachother A*SH*LEs, we have plan.. List at .2 or higher",
    },
    {
      q: "Day 4",
      ans: "Alright it feels good to stay in top 20 for 4 days Straight..list at .5 now!!",
    },
    {
      q: "Day 5",
      ans: "Don't Panick… we're almost There…List at 1 eth or higher!!",
    },
    {
      q: "Day 6",
      ans: "If everything is going according to plan we'll be at 1.5 Eth by now… if not, list it at 1.5 eth ot more",
    },
    {
      q: "Day 7",
      ans: "@ 23:59",
    },
  ];
  const faq = [
    {
      q: "1. How do I mint?",
      ans: "You can connect your wallet on PC using the Metamask extension for the Chrome browser. If you are on mobile you can connect through the Metamask in-app browser or connect through the DApp browser in the Trustwallet app. You can connect your wallet with Walletconnect.",
    },
    {
      q: "2. How to buy/sell on secondary Market?",
      ans: "You can buy/sell items in our Collection on secondary market by clicking on our official OS link on top right corner..",
    },
    {
      q: "3. How many NFTs I can Mint?",
      ans: "3 Per each Wallet to give more people a chance to get in the project.",
    },
    {
      q: "4.How to get Rich?",
      ans: "Read Questions 1.and 2.",
    },
    {
      q: "5. Wen moon?",
      ans: "Day 7.",
    },
    {
      q: "*Not Financial Advice!",
      ans: "Terms and conditions are don't sue when you lose.! Click Agree to mint lol",
    },
  ];

  const faqCard = (question, answer) => {
    return (
      <div>
        <p className="blue-color-text">{question}</p>
        <p className="faq-ans">{answer} </p>
      </div>
    );
  };
  return (
    <div className="home-page">
      <div className="heading">
        <p className="head1">PUM</p>
        <p className="head2">pend</p>
        <p className="head3">UMP</p>
      </div>
      <div className="section-1">
        <div className="part-1">
          <div className="side-head">
            <p className="side-heading">Introduction :-</p>
            <hr className="green-line" />
            <hr className="red-line" />
          </div>
          <div className="img-section">
            <img src={image} alt="mad man" />
          </div>
        </div>
        <div className="part-2">
          <div className="paras">
            <p>
              We'll pump this collection in the following 7 days and then
              abandon the project on the 8th day ... if anyone wants quick eth
              ... join us in this journey!
            </p>
            <p>
              &#160; &#160;&#160;&#160;&#160;&#160;With a total Budget of 10eth
              to market this project post mint, and additional 50% of royalties
              goes back to marketing, we have to pump pump pump ...
            </p>
            <p>
              The roadmao willbe revealed day by day... for seven days ... just
              like annoucements on discord ... so don't forget to check for
              roadmap updates for seven days after mint.
            </p>
            <p>
              The roadmap will be revealed day by day…for seven days….just like
              announcements on discord…so don't forget to check for roadmap
              updates for seven days after mint.
            </p>
            <p>Mint is FREE with 10k Collection</p>
            <div className="div-row">
              <div className="collection-list">
                <ol>
                  <li className="green-color-text">
                    <p className="green-color-text">150 rares</p>
                  </li>
                  <li className="blue-color-text">
                    <p>100 ultra rares </p>
                  </li>
                  <li className="red-color-text">
                    <p>50 legendaries</p>
                  </li>
                </ol>
              </div>
              <div className="star-content">
                <p className="red-color-text">
                  ***Enough with that Goblin shit <br></br>
                  <u className="blue-color-text">mint</u> the Real Pump ***
                </p>
              </div>
            </div>
            <p>
              -Go to our Roadmap page to see the whole Idea behind the Project,
              all your Questions are asked in the FAQ column.
            </p>
            <p>-No Discord, No Twitter.</p>
            <p>
              So turn your Ultra Degen mode ON and sit back for the next 7 days!
            </p>
            <p>Goodluck Degens!</p>
            <p>-Natoshi sakamabals</p>
          </div>
        </div>
      </div>
      <div className="section-1">
        <div className="part-1">
          <div className="side-head">
            <p className="side-heading">FAQs :-</p>
            <hr className="green-line" />
            <hr className="red-line" />
          </div>
        </div>

        <div className="part-2 faq">
          {faq.map((item, key) => (
            <div key={key}> {faqCard(item.q, item.ans)}</div>
          ))}
        </div>
      </div>
      <div className="section-1">
        <div className="part-1">
          <div className="side-head">
            <p className="side-heading">Our Story... :-</p>
            <hr className="green-line" />
            <hr className="red-line" />
          </div>
        </div>

        <div className="part-2 our-story">
          <p>
            Not that important, just mint or buy/sell. Hurry you don't have
            enough time <span className="green-color-text">!</span>
          </p>
          <p>
            Not that important, just mint or buy/sell. Hurry you don't have
            enough time <span className="blue-color-text">!</span>
          </p>
          <p>
            Not that important, just mint or buy/sell. Hurry you don't have
            enough time <span className="red-color-text">!</span>
          </p>
        </div>
      </div>

      <div className="section-1">
        <div className="part-1">
          <div className="side-head">
            <p className="side-heading">Road Map :-</p>
            <hr className="green-line" />
            <hr className="red-line" />
          </div>
        </div>

        <div className="part-2 faq">
          <p className="blue-color-text"> (The Plan)</p>
          {roadMapList.map((item, key) => (
            <div key={key}> {faqCard(item.q, item.ans)}</div>
          ))}
          <div className="center-div">
            <div className="creator">
              <p>Hope you made some money!! Over and out!</p>
              <p className="creator-name">-Natoshi sakamabas</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center contact-us-text">
        Although its not related to the project you can still follow me
        @sakamabals.bye.{" "}
      </p>
    </div>
  );
}
