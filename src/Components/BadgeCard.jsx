import React from "react";
import Badge from '../abis/Badge.json'
import sheepnap from '../abis/SheepnapDAO.json'
import wool from '../abis/WoolToken.json';
import config from '../config.json';

function BadgeCard({ badge }) {
  
  var percentage = badge.price * 0.10;
  var amount = badge.price + percentage;

  async function transferBadge() {
    const user = await window.web3.eth.getAccounts();
    var gasPrice = await window.web3.eth.getGasPrice();
    var latestBlock = await window.web3.eth.getBlock("latest");
    var gasLimit = latestBlock.gasLimit;

    var item = {
      from: user[0],
      gasPrice,
      gasLimit
    }

    amount = window.web3.utils.toWei(amount.toString(), "Ether");
    const woolcontract = new window.web3.eth.Contract(wool.abi, config.wool)
    woolcontract.methods
      .approve(config.sheepnapDAO, '100')
      .send(item)
      .then(() => {
        alert('permission for the right contract')
        const sheepnapcontract = new window.web3.eth.Contract(sheepnap.abi, config.sheepnapDAO)
        sheepnapcontract.methods
          .mintForBuy(badge.code)
          .send(item)
      })
  }

  return (
    <div className="badge-card">
      <div className="badge-card-image"><img src="https://okdiario.com/img/2020/01/22/ovejas.jpg" alt="" /></div>
      <div className="badge-card-info">
        <div>
          <div className="badge-card-name">{ badge.name }</div>
          <div className="badge-card-code">{ badge.code }</div>
        </div>
        <div>
          <div className="badge-card-price">$96.00</div>
          <div className="badge-card-desc">Califico</div>
        </div>
      </div>
      <button onClick={()=>{ transferBadge() }} >Buy</button>
    </div>
  )
}

export default BadgeCard;