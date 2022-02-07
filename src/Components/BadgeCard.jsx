import React from "react";

function BadgeCard({ badge }) {

    async function transferToken(amount, _contractAbi, _addressContract) {
        const user = await window.web3.eth.getAccounts();
          window.web3.eth.getBlock("latest").then(async function (response) {
            console.log(response.gasLimit);
            window.web3.eth.getGasPrice().then(function (gas) {
              console.log(gas);
              var item = {
                from: user[0],
                gasprice: gas,
                gaslimit: response.gasLimit,
              };
              console.log(item);
              amount = window.web3.utils.toWei(amount, "Ether");
              const contract = new window.web3.eth.Contract(
                _contractAbi,
                _addressContract
              );
              contract.methods
                .transfer("0x02a10A6182B60Ee989fd611cab17bd0512885205", amount)
                .send(item)
                .on("transactionHash", (hash) => {
                  alert("Successful payment");
                });
            });
          });
      }
    
    const handleVote = () =>
    {

    }

    const leaveComment =() => {

    }

    return (<div>
        <div>
            <b>{ badge.name }</b>
        </div>
        <img src={badge.src} />
        <div>
            { badge.description }
        </div>

        <button onClick=
            {handleVote}

        >Buy</button>
        <hr/>
    </div>)
}

export default BadgeCard;