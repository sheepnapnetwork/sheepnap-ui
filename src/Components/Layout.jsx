import React from "react";
import Web3 from "web3";
import { Link } from "react-router-dom";
import RequestPage from "../Routes/RequestPage";
import config from "../config.json";
import WoolToken from "../abis/WoolToken.json";

function Layout({ wallet, setWallet, balance, setBalance})
{
    return (<div>
        <h1>Sheepnap Menu</h1>
            <div className="wallet-connection">
                <button onClick={connect}>Connect metamask wallet</button>
                <p>{wallet}</p>
                <p>{balance}</p>
            </div>
            <Link to="/">Home</Link> | {" "}
            <Link to="/request" element={<RequestPage wallet={wallet}/>}>Approval requests</Link> | {" "}
            <Link to="/badges">Badges</Link> | {" "}
            <Link to="/search">Search</Link> | {" "}
            <Link to="/mybookens">My Bookens</Link> | {" "}
            <Link to="/createaccommodation">Create Accommodation</Link> | {" "}
            <Link to="/emitbooken">Emit Booken</Link> | {" "}
            <hr/>
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