import React, { useState } from "react";
import WoolToken from "../abis/WoolToken.json";
import config from "../config.json";
import SheepnapDAO from "../abis/SheepnapDAO.json";

function ApprovalRequestCreatePage({ wallet })
{
    const [description, setDescription] = useState("");

    const approveDAOTransfer = async (propertyAddress) => 
    {
        //approve transfer
        const woolToken = new window.web3.eth.Contract(WoolToken.abi, config.wooltoken);

        woolToken.methods.approve(config.daocontract, window.web3.utils.toWei('100'))
            .send({ from: wallet })
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
            from: wallet,
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
                saveApprovalRequest(propertyAddress);
                //TODO : upload it in database
            });
    }

    const saveApprovalRequest = async(propertyAddress) =>
    {
        fetch(config.endpoint + "/approvalrequest/addapprovalrequest", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'propertyaddress': propertyAddress,
                'description': description,
            })
            .then(() => 
            {
                alert('approval request has been created');
            })
        })
    }

    return (
    <div>
        <h1>Create approval request</h1>
        
        <div>
        Description
            <textarea onChange={(evt) => setDescription(evt.target.value)}
                name=""
                id=""
                placeholder="Provide information about your accommodation">
                {description}
            </textarea><br />
        </div>

    </div>)
}

export default ApprovalRequestCreatePage;