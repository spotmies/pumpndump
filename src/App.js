import logo from "./logo.svg";
import {useState} from "react";
import contractabi from "./abi.json";
import { ethers } from "ethers";
import "./App.css";

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

  const contractAddress = '0x5657d201c68F5259054E62595748b014FE46cb65';
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
        <button class="button button4"  onClick={requestAccount}>Connect</button>
        <button class="button button4"  onClick={mintToken}>Mint</button>
      </header>
    </div>
  );
}

export default App;
