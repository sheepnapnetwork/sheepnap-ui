import React from "react";
import Web3 from "web3";
import { Link } from "react-router-dom";
import ApprovalRequestPage from "../Routes/ApprovalRequestPage";
import config from "../config.json";
import WoolToken from "../abis/WoolToken.json";
import '../scss/navbar.scss';
import brand from '../img/sheepnap-isotype.png';

function Layout({ wallet, setWallet, balance, setBalance }) {
    return (
        <div className="navbar">
            <div className="container nav">
                <div className="nav-brand">
                    <img src={brand} alt="" />
                    <a href="">Sheepnap</a>
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/badges">Badges</Link>
                    <Link to="/search">Search</Link>
                    <Link to="/mybookens">My Bookens</Link>
                    <div className="nav-section">
                        <div className="nav-section-name">
                            Host
                            <span></span>
                        </div>
                        <ul className="nav-section-list">
                            <li>
                                <Link to="/approvalrequests" element={<ApprovalRequestPage wallet={wallet} />}>Approval requests</Link>
                            </li>
                            <li>
                                <Link to="/property/create">Create property</Link>
                            </li>
                            <li>
                                <Link to="/emitbooken">Emit Booken</Link>
                            </li>
                            <li>
                                <Link to="property/myproperties">My properties</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button onClick={ addtoken }>Add token</button>
                </div>
                <div className="wallet-connection">
                    <div>{wallet}</div>
                    <div>{balance}</div>
                    <button onClick={connect}>Connect metamask wallet</button>
                </div>
            </div>
        </div>)

    async function addtoken() {
        const tokenAddress = '0xd00981105e61274c8a5cd5a88fe7e037d935b513';
        const tokenSymbol = 'WOL';
        const tokenDecimals = 18;
        const tokenImage = 'http://placekitten.com/200/300';

        try {
            // wasAdded is a boolean. Like any RPC method, an error may be thrown.
            const wasAdded = await window.ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20', // Initially only supports ERC20, but eventually more!
                    options: {
                        address: tokenAddress, // The address that the token is at.
                        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                        decimals: tokenDecimals, // The number of decimals in the token
                        image: tokenImage, // A string url of the token logo
                    },
                },
            });

            if (wasAdded) {
                console.log('Thanks for your interest!');
            } else {
                console.log('Your loss!');
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function connect() {
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