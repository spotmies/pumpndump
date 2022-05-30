import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { ethers } from "ethers";
import contractAbi from "./abi.json";

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

  const contractAddress = "0x5657d201c68F5259054E62595748b014FE46cb65";
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractAbi, signer);

  const mintToken = async () => {
    const connection = contract.connect(signer);
    const addr = connection.address;
    console.log("Mint button working");
    const result = await contract.mint("1");
    console.log(result);
  };

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
        <button class="button button4" onClick={mintToken}>
          Mint
        </button>
      </header>
    </div>
  );
}

export default App;
