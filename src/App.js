import logo from "./logo.svg";
import { useState } from "react";
import contractabi from "./abi.json";
import { ethers } from "ethers";
import "./App.css";
// import { useState } from "react";
// import { ethers } from "ethers";
import contractAbi from "./abi.json";
// import Button from "@mui/material/Button";

function App() {
  // const [wallets, setWallets] = useState();
  const contractAddress = "0x928bDD7340c172B40c86036920E25E592EeEA9c6";
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractabi, signer);
  const [supply, setSupply] = useState();

  const updateBaseURI = async () => {
    console.log("baseuri updated");
    const updated = await contract.setBaseURI(
      "ipfs://QmcUhb1cUuik5nwHArp6RwoiG47xY2ewyUSqzh2DmdZuWY/"
    );
    console.log(updated);
  };

  // async function connectWallet() {
  //  if(typeof window.ethereum !== 'undefined') {
  //    await requestAccount();
  //    const provider = new ethers.providers.Web3Provider(window.ethereum);
  //  }
  // }

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

  const [balance, setBalance] = useState();

  const getBalance = async () => {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(account);
    setBalance(ethers.utils.formatEther(balance));
  };
  const updateWLTime = async (e) => {
    e.preventDefault();
    const newTime = document.getElementById("newWLTime").value;
    console.log(newTime);
    const updatedWlTime = await contract.setWLTimer(newTime);
    console.log(updatedWlTime);
    // contract.updateWLTime(newTime);
  };

  const updateTime = async (e) => {
    e.preventDefault();
    const newTime = document.getElementById("newPubTime").value;
    console.log(newTime);
    const updatedTime = await contract.setTimer(newTime);
    console.log(updatedTime);
    // contract.updateWLTime(newTime);
  };

  const onSub = (e) => {
    e.preventDefault();
    updateWLTime(e);
    updateTime(e);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h5>Your Balance: {balance}</h5>
        <h5>Total Supply: {supply}</h5>
        <form onSubmit={onSub}>
          <input type="text" aria-label="Update wl timestamp" id="newWLTime" />
          <input
            type="text"
            aria-label="Update public timestamp"
            id="newPubTime"
          />
          <button type="submit">Update WL Time</button>
        </form>
        <button onClick={() => getBalance()}>Show My Balance</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button color="default" onClick={requestAccount}>
          Connect
        </button>
        <form onSubmit={updateBaseURI}>
          <input type="text" placeholder="Enter new baseURI"></input>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
