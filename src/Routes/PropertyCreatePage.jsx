import React, { useEffect, useState } from "react";
import PropertyAbi from "../abis/Property.json";
import config from "../config.json";
import { v4 as uuidv4 } from 'uuid';

function PropertyCreate({ wallet }) {

    const [addresscontract, setAddressContract] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [website, setWebsite] = useState("");
    const [instagram, setInstagram] = useState("");
    const [facebook, setFacebook] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [address, setAddress] = useState("");
    
    const [images, setImages] = useState([
        { id: uuidv4(), url: '', title: '', priority: 0 }
    ]);

    const [metadataEndpoint, setMetadataEndpoint] = useState("");
    const [jsonData, setJsonData] = useState();

    useEffect(() =>
    {   
        let data = { 
            name : name ,
            description : description,
            address : address,
            facebook : facebook,
            website : website,
            facebook : facebook,
            instagram : instagram,
            latitude : latitude,
            longitude : longitude,
            images : images
        }
        setJsonData(data);
    }, [name, 
        description, 
        address, 
        facebook, 
        website,
        instagram,
        images, 
        latitude, 
        longitude])

    const handleChangeInput = (id, event) => {
        const newImages = images.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value
            }
            return i;
        });

        setImages(newImages);
    }

    const handleAddFields = () => {
        console.log(images);
        setImages([...images, { id: uuidv4(), url: '', title: '', priority: 0 }])
    }

    const handleRemoveFields = (id) => {
        const values = [...images];
        values.splice(values.findIndex(value => value.id === id), 1);
        setImages(values);
    }

    const validateMetadata = async () => {
        return fetch(config.endpoint + "property/validate", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                metadataendpoint: metadataEndpoint
            })
        })
            .then(response => response.json())
    }

    const deployContractToBlockchain = async () => {
        var contract = new window.web3.eth.Contract(PropertyAbi.abi);
        var gasPrice = await window.web3.eth.getGasPrice();
        var latestBlock = await window.web3.eth.getBlock("latest");
        var gasLimit = latestBlock.gasLimit;

        //Contract deployment
        return contract.deploy(
            {
                data: PropertyAbi.bytecode,
                arguments: []
            }).send({
                from: wallet,
                gasprice: gasPrice,
                gas: gasLimit,
            })
            .on('error', function (error) { })
            .on('transactionHash', function (transactionHash) { })
            .on('receipt', function (receipt) { })
            .on('confirmation', function (confirmationNumber, receipt) { })
            .then(contractInstace => {
                alert("Contract deployed sucessfully");
                setAddressContract(contractInstace._address);
                return true;
            });
    }

    const addPropertyToDatabase = async () => {
        return fetch(config.endpoint + "property/addproperty", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'address': addresscontract,
                'owner': wallet,
                'metadataendpoint' : metadataEndpoint,
            })
        }).then(response => response.json())
    }

    const createProperty = async () => {

        if (!wallet) {
            alert("please connect your wallet");
            return;
        }

        var valid = await validateMetadata()

        if(!valid) { 
            alert('Metadata is not valid'); 
            return; 
        }

        var deployed = await deployContractToBlockchain();

        if(!deployed){
            alert('Contract couldnt be deployed');
            return;
        }

        var addedToDatabase = await addPropertyToDatabase();

        if(!addedToDatabase){
            alert('Property was not added to the database');
            return;
        }
    }

    const styles = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill , minmax(500px, 1fr))",
    }
    return (
        <div className="container">
            <div className="form-text">
            <h1>Create property</h1>
            <p>
                Wanna be a host?
                after you create the stay contract your information will go through
                a revision process where the community will vote if your stay
                has the necessary information to be part of Sheepnap.

                This process has a fee to be paid.
                yo will find the token here.
            </p>
            </div>

            
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
                        placeholder="Tell us about your property">
                        {description}
                    </textarea>
                </div>
            </div>
            <div className="form-section">
            <div className="form">
                    <label htmlFor="">Website</label>
                    <input type="text" value={website} placeholder="Paste the url of your web page" onChange={(evt) => setWebsite(evt.target.value)} />
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
                                    <label htmlFor="imageurl">Image url</label>
                                    <input type="text" name="url" value={inputField.url} onChange={event => handleChangeInput(inputField.id, event)}/>
                                </div>
                            </div>
                            <div className="form-section">
                                <div className="form">
                                    <label htmlFor="">Image title</label>
                                    <input type="text" name="title" value={inputField.title} onChange={event => handleChangeInput(inputField.id, event)} />
                                </div>
                                <div className="form">
                                    <label htmlFor="">Image priority</label>
                                    <input type="Number" name="priority" value={inputField.priority} onChange={event => handleChangeInput(inputField.id, event)}/>
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
            ))}
            <button className="btn-primary" onClick={handleAddFields}>
                Add new image
            </button>
            </div>
            <div className="form-container">
            <div className="form-section">
                <div className="form">
                    <label htmlFor="">Adress:</label>
                    <input type="text" value={address} placeholder="Where are the property?" onChange={(evt) => setAddress(evt.target.value)} />
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
                <input type="text" value={metadataEndpoint} onChange={(evt) => setMetadataEndpoint(evt.target.value)} />
            </div>

                    <b>
                        Sheepnap do not storage images directly
                        use a service like Fleek, Pinata
                    </b><br /><br />

                    <div>
                        {JSON.stringify(jsonData)}
                    </div>

                    <div className="form-section">
                        <div className="form">
                            <label htmlFor="">Metadata endpoint ::</label>
                            <input type="text" value={metadataEndpoint} onChange={(evt) => setMetadataEndpoint(evt.target.value)} /><br />
                        </div>
                    </div>
                    <br />

                    <button onClick={createProperty} className="btn-primary">
                        Create property
                    </button>
                </div>
            </div>

        </div>)
}

export default PropertyCreate;