import "./App.css";
import { useState, useEffect } from "react";
import Web3 from "web3";

function App() {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState('');

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web = new Web3(window.ethereum);
        setWeb3(web);
      } catch (err) {
            console.log(err);
      }
    }
  }, []);

  const connectWallet = async () => {
  let accounts = await window.ethereum.request({
     method: "eth_requestAccounts",
  });
     setAccount(accounts[0]);
  };

  return (
    <div className="App">
      <button className="metaConnect" onClick={() => { connectWallet() }}>
        Connect to MetaMask
      </button>

      <div className="userInfo">주소: {account}</div>
    </div>
  );
}

export default App;
