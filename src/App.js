import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { ethers } from "ethers";
function App() {
  const [wallets, setWallets] = useState();

  async function requestAccount() {
    console.log("Button working");

    if (window.ethereum) {
      console.log("Metamask Detected");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWallets(accounts[0]);
      } catch (error) {
        console.log("Error connecting....");
      }
    } else {
      console.log("Metamask not detected");
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button class="button button4" onClick={requestAccount}>
          Button
        </button>
      </header>
    </div>
  );
}

export default App;
