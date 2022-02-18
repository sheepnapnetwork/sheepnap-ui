import React from "react";
import Badge from '../abis/Badge.json'
import sheepnap from '../abis/SheepnapDAO.json'
import wool from '../abis/WoolToken.json';
import config from '../config.json';

function BadgeCard({ badge }) {
// buy 1 minteando a la persona
var badgecode = 1234;
var price =500;
var percentage = price *0.10;
var amount = price + percentage;
 
const badges = [{
  
    "code" : "2022",
    "name" : "isignia por servicio",
    "description" : "califico",
    "owner" : "sheepnap",
    "quantity" : "1",
    "src" : "https://okdiario.com/img/2020/01/22/ovejas.jpg"

}]

 async  function transferBadge (){
    const user = await window.web3.eth.getAccounts();
    var gasPrice = await window.web3.eth.getGasPrice();
    var latestBlock = await window.web3.eth.getBlock("latest");
    var gasLimit = latestBlock.gasLimit;

    var item = {
      from : user[0],
      gasPrice,
      gasLimit
    }
    
    amount = window.web3.utils.toWei(amount.toString(), "Ether");
    const woolcontract =new window.web3.eth.Contract(wool.abi, config.wool)
    woolcontract.methods
    .approve(config.sheepnapDAO,'100' )
    .send(item)
    .then(()=>{
      alert('permission for the right contract')
      const sheepnapcontract =new window.web3.eth.Contract(sheepnap.abi,config.sheepnapDAO)
      sheepnapcontract.methods
     .mintForBuy(badge.code)
     .send(item)
    })
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

        <button onClick={()=>{
          transferBadge()
        }}
            

        >Buy</button>
        <hr/>
    </div>)
}

export default BadgeCard;