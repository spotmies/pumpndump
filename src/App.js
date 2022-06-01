import logo from "./logo.svg";
import {useState} from "react";
import contractabi from "./abi.json";
import { ethers } from "ethers";
import "./App.css";
import { useState } from "react";
import { ethers } from "ethers";
import contractAbi from "./abi.json";

function App() {
  // const [wallets, setWallets] = useState();

  async function requestAccount() {
    if(window.ethereum) {
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

  const contractAddress = '0x928bDD7340c172B40c86036920E25E592EeEA9c6';
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractabi, signer);
  const [supply, setSupply] = useState();

  const mintToken = async () => {
    const connection = contract.connect(signer);
    // const addr = connection.address;
    // const supply = await contract.suppliedNFTs();
    // setSupply(supply);
    const result = await contract.mint("3", {
      value: ethers.utils.parseEther('0'),
    });
    
    console.log(result);
  }

  const updateBaseURI = async() => {
    console.log("baseuri updated");
    const updated = await contract.setBaseURI("ipfs://QmcUhb1cUuik5nwHArp6RwoiG47xY2ewyUSqzh2DmdZuWY/");
    console.log(updated);
  }
 
  // async function connectWallet() {
  //  if(typeof window.ethereum !== 'undefined') {
  //    await requestAccount();
  //    const provider = new ethers.providers.Web3Provider(window.ethereum);
  //  }
  // }

  const [balance, setBalance] = useState();
    
    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance));
    };
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h5>Your Balance: {balance}</h5>
        <h5>Total Supply: {supply}</h5>
          <button onClick={() => getBalance()}>Show My Balance</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="button button4"  onClick={requestAccount}>Connect</button>
        <button className="button button4"  onClick={mintToken}>Mint</button>
        <form onSubmit={updateBaseURI}>
          <input type="text" placeholder="Enter new baseURI"></input>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
