import React, { useState } from "react";
import PropertyAbi from "../abis/Property.json";
import config from "../config.json";
import { v4 as uuidv4 } from 'uuid';

function PropertyCreate({ account }) {

    const [addresscontract, setAddressContract] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [website, setWebsite] = useState("");
    const [instagram, setInstagram] = useState("");
    const [facebook, setFacebook] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [ipfs, setIPFS] = useState("");
    const [address, setAddress] = useState("");
    const [jsonData, setJsonData] = useState({});

    const [images, setImages] = useState([
        { id: uuidv4(), imageurl: '', title: '', priority: 0 }
    ]);

    const handleChangeInput = (id, event) => {
        const newImages = images.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value
            }
            return i;
        });

        setImages(newImages);
    }

    const handleAddFields = () => 
    {
        console.log(images);
        setImages([...images, { id: uuidv4(), imageurl: '', title: '', priority: 0 }])
    }

    const handleRemoveFields = (id) => {
        const values = [...images];
        values.splice(values.findIndex(value => value.id === id), 1);
        setImages(values);
    }

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

                setAddressContract(propertyContract._address);
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
    const styles = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill , minmax(500px, 1fr))",
    }
    return (
        <div className="container">
            <h1>Create property</h1>
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
            <div style={styles}>

            <div className="form-container">
            <div className="form-section">
                <div className="form">
                    <label htmlFor="">Property name :</label>
                    <input type="text" value={name} onChange={(evt) => setName(evt.target.value)} />
                </div>
            </div>
            <div className="form-section">
                <div className="form">
                    <textarea onChange={(evt) => setDescription(evt.target.value)}
                        name=""
                        id=""
                        placeholder="Provide information about your property">
                        {description}
                    </textarea>
                </div>
            </div>
            <div className="form-section">
            <div className="form">
                    <label htmlFor="">Website</label>
                    <input type="text" value={website} onChange={(evt) => setWebsite(evt.target.value)} />
                </div>
            </div>
            <div className="form-section">
                <div className="form">
                    <label htmlFor="">Facebook</label>
                    <input type="text" value={facebook} onChange={(evt) => setFacebook(evt.target.value)} />
                </div>
                <div className="form">
                    <label htmlFor="">Instagram</label>
                    <input type="text" value={instagram} onChange={(evt) => setInstagram(evt.target.value)} />
                </div>
            </div>
            
            Sheepnap do not store images directly please use a service Pinata ..
            
            {images.map(inputField => (
                <div key={inputField.id}>
                    <div className="form-section">
                        <div className="form">
                            <label htmlFor="">Image url</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="form-section">
                        <div className="form">
                        <label htmlFor="">Image title</label>
                            <input type="text" />
                        </div>
                        <div className="form">
                            <label htmlFor="">Image priority</label>
                            <input type="text" />
                        </div>
                    </div>

                    <button className="btn-primary" onClick={(evt) => handleRemoveFields(inputField.id)}>
                        remove
                    </button>
                </div>
            ))}
            <button className="btn-primary" onClick={handleAddFields}>
                Add new image
            </button>
            </div>
            <div className="form-container">
            <div className="form-section">
                <div className="form">
                    <label htmlFor="">Adress:</label>
                    <input type="text" value={address} onChange={(evt) => setAddress(evt.target.value)} />
                </div>
            </div>
            <div className="form-section">
                <div className="form">
                    <label htmlFor="">Latitude:</label>
                    <input type="text" value={latitude} onChange={(evt) => setLatitude(evt.target.value)} />
                </div>
                <div className="form">
                    <label htmlFor="">Longitude:</label>
                    <input type="text" value={longitude} onChange={(evt) => setLongitude(evt.target.value)} />
                </div>
            </div>
            
            <b>
                Sheepnap do not storage images directly
                use a service like Fleek, Pinata
            </b>
            <div className="form">
                <label htmlFor="">Metadata endpoint:</label>
                <input type="text" value={ipfs} onChange={(evt) => setIPFS(evt.target.value)} />
            </div>

            <button className="btn-primary" onClick={(evt) => createProperty }>
                Create property
            </button>
            </div>
            </div>

        </div>)
}

export default PropertyCreate;