import React, { useState, useEffect } from "react";
import "./home.scss";
// import image from "./images/graph.svg";
import image from "./images/zero_candle.png";
import NumberInput from "./numberInput";
import contractabi from "../abi.json";

import { ethers } from "ethers";
import loader from "./images/loader.png";
import closeButton from "./images/close_button.png";
import arrow from "./images/bullet_arrow.png";
import TimeCountDown from "./time_count_down";

import twitterIcon from "./images/twit.png";
import openIcon from "./images/open.png";
import etherScanIcon from "./images/e1.png";
import constants from "./constants";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [mintStart, setMintStart] = useState(false);
  const handleMintStart = () => setMintStart(true);
  const [wallets, setWallets] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleClose = () => setOpen(false);
  const gaWalletTracker = useAnalyticsEventTracker("wallet");
  const gaMintTracker = useAnalyticsEventTracker("mint");
  const gaOtherTracker = useAnalyticsEventTracker("others");
  const handleOpen = () => {
    setOpen(true);
    gaMintTracker("mint-popup");
  };
  const faqCard = (question, answer, hideAns, loading) => {
    return (
      <div>
        <p
          className={
            loading ? "loader-text blue-color-text" : "blue-color-text"
          }
        >
          {question}{" "}
          {loading && <img src={loader} alt="" className="loader-icon" />}
        </p>
        {hideAns ? null : <p className="faq-ans">{answer} </p>}
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      if (
        window?.ethereum &&
        window?.ethereum?.selectedAddress &&
        wallets === ""
      ) {
        setWallets(window.ethereum.selectedAddress.slice(-4));
      }
    }, 1000);
  }, []);

  async function requestAccount(showError) {
    const alertMessage = showError ?? true;
    if (window.ethereum) {
      if (wallets !== "") {
        if (alertMessage) alert("Wallet already connected");
        return;
      }
      gaWalletTracker("new-wallet");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // setWalletText(true);
        gaWalletTracker("wallet-connected");
        setWallets(accounts[0].slice(-4));
      } catch (error) {
        // console.log("Error connecting....");
        alert(error);
      }
    } else {
      //console.log("Metamask not detected");
      gaWalletTracker("no-metamask");
      alert("Metamask not detected");
    }
  }

  const getContract = () => {
    try {
      const contractAddress = "0x41187d5E6DA8BFF81ABD46cEDAcc3EE602aC5230";
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractabi,
        signer
      );
      // console.log("contract", contract);
      return contract;
    } catch (error) {
      console.log("error", error);
    }
  };

  const mintCount = async () => {
    // const TotalMinted = await getContract().suppliedNFTs();

    if (!window.ethereum) {
      alert("Metamask not detected");
      return;
    }
    try {
      const TotalMinted = await getContract().totalSupply();
      console.log("totalMinted", TotalMinted);
    } catch (err) {
      console.log("mintcount error", err);
    }
  };

  useEffect(() => {
    mintCount();
  }, []);

  const mintToken = async () => {
    // const connection = contract.connect(signer);
    // const addr = connection.address;
    // const supply = await contract.suppliedNFTs();
    // setSupply(supply);
    try {
      if (quantity < 1) {
        alert("Please enter valid quantity");
        return;
      }
      getContract()
        .mint(quantity, {
          value: ethers.utils.parseEther("0"),
        })
        .then((val) => {
          alert("Token minted successfully");
          // console.log("val", val);
          // console.log("error", error);
        })
        .catch((error) => {
          // console.log("error", error);
          // console.table(error);
          console.log(error.reason);
          alert(error.reason);
          // console.log("errortp", typeof error);
          // console.log("errorm", error.message);
        });
    } catch (error) {
      console.log("error91", error?.reason);
    }

    //console.log(result);
  };

  const clickedMint = () => {
    requestAccount(false);
    mintToken();
  };

  return (
    <div className="home-page">
      <div className="header-section">
        <div className="heading">
          <p className="head1 green-color-text">PUM</p>
          <p className="head2 black-color-text">pend</p>
          <p className="head3 red-color-text">UMP</p>
        </div>
        <div className="external-icons">
          <img src={openIcon} className="icon-1 pointer" alt="" />
          <img src={etherScanIcon} className="icon-2 pointer" alt="" />
          {/* <img
            src={connectWalleteIcon}
            className="icon-3 pointer"
            alt=""
            onClick={requestAccount}
          /> */}
          <span className="mint-parent icon-3" onClick={requestAccount}>
            {wallets != "" ? (
              <span className="mint-name blue-color-text connect-btn">
                0x...{wallets}
                <hr className="mint-line connect-line" />
              </span>
            ) : (
              <span className="mint-name blue-color-text connect-btn">
                Connect Wallet
                <hr className="mint-line connect-line" />
              </span>
            )}
          </span>
        </div>
      </div>
      <div className="section-1">
        <div className="part-1">
          <div className="side-head">
            <p className="side-heading">Introduction :-</p>
            <hr className="green-line" />
            <hr className="red-line" />
          </div>
          <div className="img-section">
            <img src={image} alt="mad man" className="candle-img" />
            {/* <div className="candle"></div> */}
          </div>
        </div>
        <div className="part-2">
          <div className="paras">
            <p>
              We'll pump this collection for 7 days after mint and then announce
              something big on the 8th day …join us in this journey to the bull
              market!
            </p>
            <p>
              &#160; &#160;&#160;&#160;&#160;&#160;50% of royalties goes back to
              marketing, Cuz we have to pump pump pump…
            </p>
            <p>
              The roadmap will be revealed day by day…for seven days….just like
              announcements on discord…so don't forget to check for roadmap
              updates for seven days after mint.
            </p>
            <p>Mint is FREE with 3769 Bags</p>
            <div className="div-row">
              <div className="collection-list">
                <ol>
                  <li className="green-color-text">
                    <p className="green-color-text list-item">100 rares</p>
                  </li>
                  <li className="blue-color-text">
                    <p className="list-item">50 ultra rares </p>
                  </li>
                  <li className="red-color-text">
                    <p className="list-item">25 legendaries</p>
                  </li>
                </ol>
              </div>
              <div className="star-content">
                <p className="red-color-text">
                  <span className="star-font">***</span> Enough with that{" "}
                  <span className="green-color-text goblin-text">
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
            <p className="mint-below">
              All your Questions are answered in the FAQ column.
            </p>
            {/* <p>
              -No Discord, No Twitter, We'll only Use twitter and Discord to
              market the project.
            </p> */}
            <p>
              Turn your Ultra Degen mode ON and sit back for the next 7 days!
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
              <TimeCountDown
                trigger1={() => {}}
                trigger2={(val) => {
                  setMintStart(val ?? false);
                }}
              />
            ) : (
              <div className="mint-text">
                <div className="modal-part-1">
                  <div className="arrow-text">
                    <img src={arrow} alt="" />
                    <p className="red-color-text">Set your max mints upto 2.</p>
                  </div>
                  <div className="number-input">
                    <NumberInput
                      onChange={(num) => {
                        setQuantity(num);
                      }}
                    />
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
          {constants.faq.map((item, key) => (
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
          <p className="blue-color-text the-plan"> (The Plan)</p>
          {constants.roadMapList.map((item, key) => (
            <div key={key}>
              {key == 0 ? (
                <div key={key} className="tick-div">
                  {" "}
                  {faqCard(item.q, item.ans, true, true)}
                  {/* <img src={tick} className="tick" /> */}
                </div>
              ) : null}
            </div>
          ))}
          {/* Uncomment this after revealing 7th day plan */}
          <div className="center-div">
            <div className="creator">
              {/* <p>Hope you made some money!! Over and out!</p> */}
              <p className="creator-name">-Natoshi sakamabals</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center contact-us-text">
        Although it's not tied to just this one project you can still follow me
        for announcements @sakamabals
        <img
          src={twitterIcon}
          alt=""
          className="twitter pointer"
          onClick={() => {
            constants.navigatToTwitter();
            gaOtherTracker("twitter-click");
          }}
        />{" "}
        .bye.{" "}
      </p>
      {/* <CountDown /> */}
    </div>
  );
}
