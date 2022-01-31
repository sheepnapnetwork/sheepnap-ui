import React, { useState } from "react";
import PropertyAbi from "../abis/Property.json";
import SheepnapDAO from "../abis/SheepnapDAO.json";

function AccommodationCreate({ account }) {
    const [addresscontract, setAddressContract] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const createAccommodation = async () => 
    {
        var contract = new window.web3.eth.Contract(PropertyAbi.abi);
        var gasPrice = await window.web3.eth.getGasPrice();
        var latestBlock = await window.web3.eth.getBlock("latest");
        var gasLimit = latestBlock.gasLimit;

        //Contract deployment
        var propertycontract = await contract.deploy({
                data: PropertyAbi.bytecode,
                arguments: []
            })
            .on('transactionHash', function (hash) {
                alert("Transaction has been sent " + hash);
            })
            .send({
                from: account,
                gasprice: gasPrice,
                gas: gasLimit,
            })
            .on('confirmation', function (confirmationNumber, receipt) 
            {    
                setAddressContract(propertycontract);
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'address': addresscontract,
                        'name': name,
                        'description': description,
                    })
                })
                .then(function () {
                    alert("");
                })
                .catch(function () {
                    // handle the error
                });

                alert("transaction has been confirmed")
            });
    }

    const createApprovalRequest = () =>
    {
        var item = {
            from: user[0],
            gasprice: gas,
            gaslimit: response.gasLimit,
          };

        //TODO : _addressContract from config
        const contract = new window.web3.eth.Contract(
            SheepnapDAO.abi,
            _addressContract
          );

          contract.methods
            .approvalRequest()
            .send(item)
            .on("transactionHash", (hash) => {
              alert("Successful payment");
            })
            .on('confirmation', function (confirmationNumber, receipt) 
            {
                alert("Your approval request has been uploaded");
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
            Accommodation name : <input type="text" value={ name } /><br />

            <textarea
                name=""
                id=""
                cols="100"
                rows="10"
                placeholder="Provide information about your accommodation">

            </textarea><br />
            <button onClick={createAccommodation}>
                Initialize voting process
            </button>
        </div>)
}

export default AccommodationCreate;