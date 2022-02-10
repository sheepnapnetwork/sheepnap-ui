import React, { useState } from "react";
import PropertyAbi from "../abis/Property.json";
import config from "../config.json";

function PropertyCreate({ account }) {

    const [addresscontract, setAddressContract] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [website, setWebsite] = useState("");
    const [instagram, setInstagram] = useState("");
    const [facebook, setFacebook] = useState("");
    const [images, setImages] = useState([]);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [ipfs, setIPFS] = useState("");
    const [address, setAddress] = useState("");
    const [jsonData, setJsonData] = useState({});

    const createProperty = async () => {

        if (!account) {
            alert("please connect your wallet");
            return;
        }

        var contract = new window.web3.eth.Contract(PropertyAbi.abi);
        var gasPrice = await window.web3.eth.getGasPrice();
        var latestBlock = await window.web3.eth.getBlock("latest");
        var gasLimit = latestBlock.gasLimit;

        //Contract deployment
        contract.deploy(
            {
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
                        'owner': account
                    })
                }).then(() => {
                    alert("Property saved in database");
                });
            })
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
            Property name : <input type="text" value={name} onChange={(evt) => setName(evt.target.value)} /><br />

            <textarea onChange={(evt) => setDescription(evt.target.value)}
                name=""
                id=""
                cols="100"
                rows="10"
                placeholder="Provide information about your property">
                {description}
            </textarea><br />

            Website : <input type="text" value={website} onChange={(evt) => setWebsite(evt.target.value)} /><br />
            Facebook : <input type="text" value={facebook} onChange={(evt) => setFacebook(evt.target.value)} /><br />
            Instagram : <input type="text" value={instagram} onChange={(evt) => setInstagram(evt.target.value)} /><br />
            Images : <input type="text" value={images} onChange={(evt) => setImages(evt.target.value)} /><br />
            Address : <input type="text" value={address} onChange={(evt) => setAddress(evt.target.value)} /><br />
            Latitude : <input type="text" value={latitude} onChange={(evt) => setLatitude(evt.target.value)} /><br />
            Longitude : <input type="text" value={longitude} onChange={(evt) => setLongitude(evt.target.value)} /><br />

            <br />
            <b>
                Sheepnap do not storage images directly
                use a service like Fleek, Pinata
            </b><br /><br />

            Metadata endpoint : <input type="text" value={ipfs} onChange={(evt) => setIPFS(evt.target.value)} /><br />

            <br />

            <button onClick={createProperty}>
                Create property
            </button>
        </div>)
}

export default PropertyCreate;