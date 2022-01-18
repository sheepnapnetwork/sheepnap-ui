import React, { useState } from "react";
import Web3 from "web3";
import { Link } from "react-router-dom";
import RequestPage from "../Routes/RequestPage";

function Header()
{
    const [wallet, setWallet] = useState("...");

    return (<div>
        <h1>Sheepnap Menu</h1>
            <div className="wallet-connection">
                <button onClick={connect}>Connect metamask wallet</button>
                <p>{wallet}</p>
            </div>
            <Link to="/request" element={<RequestPage/>}>Approval requests</Link> | {" "}
            <Link to="/badges">Badges</Link> | {" "}
            <Link to="/search">Search</Link> | {" "}
            <Link to="/mybookens">Bookens</Link> 
        </div>)

    async function connect() 
    {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setWallet(account);
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
        }
    }
}

export default Header;