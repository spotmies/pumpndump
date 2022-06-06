import React, { useState } from "react";
import "./home.scss";
import image from "./images/graph.svg";
import NumberInput from "./numberInput";
import contractabi from "../abi.json";
// import {useState} from "react";
import { ethers } from "ethers";
import tick from "./images/tick.png";
import loader from "./images/loader.png";
import closeButton from "./images/close_button.png";
import arrow from "./images/bullet_arrow.png";
import TimeCountDown from "./time_count_down";
// import { Button, Header, Image, Modal } from 'semantic-ui-react'

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [mintStart, setMintStart] = useState(true);
  const handleMintStart = () => setMintStart(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      ans: "Stop undercuttin Eachother A*SH*LEs, we have plan.. List at 0.2 or higher",
    },
    {
      q: "Day 4",
      ans: "Alright it feels good to stay in top 20 for 4 days Straight..list at 0.5 now!!",
    },
    {
      q: "Day 5",
      ans: "Don't Panick… we're almost There…List at 1 eth or higher!!",
    },
    {
      q: "Day 6",
      ans: "If everything is going according to plan we'll be at 1.5 Eth by now… if not, list it at 1.5 eth or more",
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

  async function requestAccount() {
    if (window.ethereum) {
      console.log("Metamask Detected");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // setWallets(accounts[0]);
      } catch (error) {
        console.log("Error connecting....");
      }
    } else {
      console.log("Metamask not detected");
    }
  }

  const contractAddress = "0x928bDD7340c172B40c86036920E25E592EeEA9c6";
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractabi, signer);

  const mintToken = async () => {
    // const connection = contract.connect(signer);
    // const addr = connection.address;
    // const supply = await contract.suppliedNFTs();
    // setSupply(supply);
    const result = await contract.mint("3", {
      value: ethers.utils.parseEther("0"),
    });

    console.log(result);
  };

  const clickedMint = () => {
    requestAccount();
    mintToken();
  };

  return (
    <div className="home-page">
      <div className="heading">
        <p className="head1 green-color-text">PUM</p>
        <p className="head2 black-color-text">pend</p>
        <p className="head3 red-color-text">UMP</p>
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
            {/* <div className="candle"></div> */}
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
                  <span className="star-font">***</span> Enough with that{" "}
                  <span className="green-color-text">
                    <strike className="strike1">
                      <strike className="strike2">Goblin</strike>
                    </strike>
                  </span>{" "}
                  sheit
                  <br></br>
                  {/* <u className="blue-color-text pointer">mint</u> */}
                  <span className="span-row">
                    <span className="mint-parent" onClick={handleOpen}>
                      <span className="mint-name blue-color-text">mint</span>
                      <hr className="mint-line" />
                    </span>
                    <p>
                      the Real Pump <span className="star-font">***</span>
                    </p>
                  </span>
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

      {open ? (
        <div className="popup">
          <div className="popup-content">
            {/* <p className="close-btn" onClick={handleClose}>
              X
            </p> */}
            <div className="close-btn-parent">
              <img
                className="close-btn"
                src={closeButton}
                alt="close"
                onClick={handleClose}
              />
            </div>

            {!mintStart ? (
              <TimeCountDown />
            ) : (
              // <div className="count-down">
              //   <h2 className="red-color-text">Your Minting will start in</h2>
              //   <span className="span-row">
              //     <span className="mint-parent">
              //       <h2 className="mint-name blue-color-text">
              //         {diff?.day}D:{diff?.hour}H:{diff?.minute}M:{diff?.second}S
              //       </h2>
              //       <hr className="mint-line" />
              //     </span>
              //   </span>
              //   <p className="red-color-text">
              //     Hold your piss for some more time.
              //   </p>
              // </div>
              <div className="mint-text">
                <div className="modal-part-1">
                  <div className="arrow-text">
                    <img src={arrow} alt="" />
                    <p className="red-color-text">Set your max mints upto 3.</p>
                  </div>
                  <div className="number-input">
                    <NumberInput />
                  </div>
                </div>
                <div className="arrow-text">
                  <img src={arrow} alt="" />
                  <span className="span-row">
                    <p className="red-color-text">To get pump click</p>
                    <span className="mint-parent">
                      <span
                        className="mint-name blue-color-text"
                        onClick={clickedMint}
                      >
                        Mint
                      </span>
                      <hr className="mint-line" />
                    </span>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}

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
            <div key={key} className="tick-div">
              {" "}
              {faqCard(item.q, item.ans)}
              <img src={tick} className="tick" />
            </div>
          ))}
          <div className="center-div">
            <div className="creator">
              <p>Hope you made some money!! Over and out!</p>
              <p className="creator-name">-Natoshi sakamabals</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center contact-us-text">
        Although its not related to the project you can still follow me
        @sakamabals.bye.{" "}
      </p>
      {/* <CountDown /> */}
    </div>
  );
}
