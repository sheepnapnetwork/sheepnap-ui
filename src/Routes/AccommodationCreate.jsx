import React, { useState } from "react";
import PropertyAbi from "../abis/Property.json";
import WoolToken from "../abis/WoolToken.json";
import SheepnapDAO from "../abis/SheepnapDAO.json";
import config from "../config.json";

function AccommodationCreate({ account }) {
    const [addresscontract, setAddressContract] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const createAccommodation = async () => {

        if (!account) {
            alert("please connect your wallet");
            return;
        }

        var contract = new window.web3.eth.Contract(PropertyAbi.abi);
        var gasPrice = await window.web3.eth.getGasPrice();
        var latestBlock = await window.web3.eth.getBlock("latest");
        var gasLimit = latestBlock.gasLimit;

        //Contract deployment
        contract.deploy({
            data: PropertyAbi.bytecode,
            arguments: []
        }).send({
            from: account,
            gasprice: gasPrice,
            gas: gasLimit,
        })
            .then((propertyContract) => {
                alert("transaction has been confirmed");
                setAddressContract(propertyContract._address);
                console.log(propertyContract._address);
                fetch(config.endpoint + "/property/addproperty", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'address': propertyContract._address,
                        'name': name,
                        'description': description,
                    })
                }).then(() => {
                    alert("Property saved in database");
                    approveDAOTransfer(propertyContract._address);
                });
            })
    }

    const approveDAOTransfer = async (propertyAddress) => {

        //approve transfer
        const woolToken = new window.web3.eth.Contract(WoolToken.abi, config.wooltoken);

        woolToken.methods.approve(propertyAddress, 100)
            .send({ from: account })
            .on('transactionHash', (hash) => {
                console.log(hash);
            }).then(() => {
                alert("approved");
                emitApprovalRequest(propertyAddress);
            });
    }

    const emitApprovalRequest = async (propertyAddress) => {
        //TODO : repeated code.
        var gasPrice = await window.web3.eth.getGasPrice();
        var latestBlock = await window.web3.eth.getBlock("latest");
        var gasLimit = latestBlock.gasLimit;

        var item = {
            from: account,
            gasprice: gasPrice,
            gaslimit: gasLimit,
        };

        const contract = new window.web3.eth.Contract(
            SheepnapDAO.abi,
            config.daocontract
        );

        contract.methods
            .approvalRequest(propertyAddress)
            .send(item)
            .on("transactionHash", (hash) => {
                alert("Transaction sent");
            })
            .on('error', function (error) {
                alert(error);
                console.log(error);
            })
            .on('confirmation', function (confirmationNumber, receipt) {
                alert("Your approval request has been uploaded");
                //TODO : upload it in database
            });
    }

    return (
        <div>
            <h1>Create property  </h1>
            <p>
                Wanna be a host?
                after you create the stay contract your information will go through
                a revision process where the community will vote if your stay
                has the necessary information to be part of Sheepnap.

                This process has a fee to be paid.
                yo will find the token here.
                <link rel="stylesheet" href="www.google.com" />

                <p>
                    Information nedded :

                    - Photos
                    - WebPage
                    - Room pictures
                    - Location Pictures
                    - Contact number
                </p>
            </p>
            Accommodation name : <input type="text" value={name} onChange={(evt) => setName(evt.target.value)} /><br />

            <textarea onChange={(evt) => setDescription(evt.target.value)}
                name=""
                id=""
                cols="100"
                rows="10"
                placeholder="Provide information about your accommodation">
                {description}
            </textarea><br />
            <button onClick={createAccommodation}>
                Create property and Initialize voting process
            </button>
        </div>)
}

export default AccommodationCreate;