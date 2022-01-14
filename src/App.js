import React, { Component, useEffect } from "react";
import Web3 from "web3";
import { initializeApp } from "firebase/app";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  addDoc,
  doc,
  getFirestore,
} from "firebase/firestore";
import "./App.css";
import property from './abis/property.json'

const firebaseConfig = {
  apiKey: "AIzaSyC0ao_HE1NFMvCJHqOZAm97jJOWmE4qfDw",
  authDomain: "sheepnap.firebaseapp.com",
  projectId: "sheepnap",
  storageBucket: "sheepnap.appspot.com",
  messagingSenderId: "406762822225",
  appId: "1:406762822225:web:0b39bd07598026af28f670",
  measurementId: "${config.measurementId}",
};

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    const app = initializeApp(firebaseConfig);

    this.setState({ firestoreDB: getFirestore() });

    const propertiesQuery = query(
      collection(this.state.firestoreDB, "properties"),
      where("owner", "==", this.state.account)
    );
    var propertiesDetails = await getDocs(propertiesQuery);

    if (propertiesDetails.size > 0) {
      const propertiesDocument = propertiesDetails.docs[0];
      const propertiesObject = propertiesDocument.data();
      this.setState({ contractaddress: propertiesObject.address });
      this.setState({ propertiesName: propertiesObject.name });
    }
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
    const accounts = await window.web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
  }

  constructor(properties) {
    super(properties);
    this.state = {
      propertyName: "",
      contractaddress: "" 
    };
    this.onInputchange = this.onInputchange.bind(this);
  }
  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    let content;

    return (
      <div className="App">
        <div className="col-lg-10 mx-auto p-3 py-md-5">

          <main>
            <div className="row justify-content-center | page-section">
              <h1>Properties {this.state.propertiesName}</h1>
              <p className="fs-5 col-md-12"></p>

              <div className="col-md-6 col-lg-4">
                <label for="propertiesName" class="form-label">
                  {" "}
                  <h6>Properties Name:</h6>
                </label>
                <input
                  type="text"
                  name="propertiesname"
                  id="propertiesName"
                  className="properties-name-input form-control"
                  value={this.state.propertiesname}
                  onChange={this.onInputchange}
                ></input>
                <div>
                  <button
                    className="btn btn-primary px-4 mb-3 mt-3"
                    onClick={async (event) => {
                      var contract = new window.web3.eth.Contract(
                        property.abi
                      );
                      var gasPrice = await window.web3.eth.getGasPrice();
                      var latestBlock = await window.web3.eth.getBlock(
                        "latest"
                      );
                      var gasLimit = latestBlock.gasLimit;

                      var contractproperties = await contract
                        .deploy({
                          data: property.bytecode,
                          arguments: [],
                        })
                        .send({
                          from: this.state.account,
                          gasprice: gasPrice,
                          gas: gasLimit,
                        });

                      this.setState({
                        contractaddress: contractproperties._address,
                      });

                      var idNewDoc = await addDoc(
                        collection(this.state.firestoreDB, "properties"),
                        {
                          name: this.state.propertiesname,
                          address: contractproperties._address,
                          owner: this.state.account,
                        }
                      );
                    }}
                  >
                    Register Property
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
