import React from "react";
import Web3 from "web3";
import { Link } from "react-router-dom";
import ApprovalRequestPage from "../Routes/ApprovalRequestPage";
import config from "../config.json";
import WoolToken from "../abis/WoolToken.json";
import '../scss/navbar.scss'

function Layout({ wallet, setWallet, balance, setBalance})
{
    return (
        <div className="navbar">
            <div className="container nav">
                <div className="nav-brand">
                    <img src="../../public/img/sheepnap-isotype.png" alt="" />
                    <a href="">Sheepnap</a>
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link> 
                    <Link to="/approvalrequests" element={<ApprovalRequestPage wallet={wallet}/>}>Approval requests</Link>
                    <Link to="/badges">Badges</Link>
                    <Link to="/search">Search</Link>
                    <Link to="/mybookens">My Bookens</Link> 
                    <Link to="/createproperty">Create property</Link>
                    <Link to="/emitbooken">Emit Booken</Link>
                </div>
                <div className="wallet-connection">
                    <div>{wallet}</div>
                    <div>{balance}</div>
                    <button onClick={connect}>Connect metamask wallet</button>
                </div>
            </div>
        </div>)

    async function connect() 
    {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setWallet(account[0]);
            
            const woolToken = new window.web3.eth.Contract(WoolToken.abi, config.wooltoken);
            let balanceData = await woolToken.methods.balanceOf(account[0]).call();
            console.log(balanceData);
            setBalance(balanceData);

        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            
            window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
        }
    }
}

export default Layout;