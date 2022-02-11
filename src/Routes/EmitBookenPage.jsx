import React, { useState} from "react";
import BookenCard from "../Components/BookenCard";
import '../scss/form.scss'

function EmitBookenPage()
{
    const roomTypes = [
        {
            name : "Room Double",
        }
        ,{
            name : "Room Single",
        },
        {
            name : "Room Triple"
        }
    ]
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [roomType, setRoomType] = useState("Room Triple");
    const [minAdults, setMinAdults] = useState("");
    const [maxAdults, setMaxAdults] = useState("");
    const [returnPolicy, setReturnPolicy] = useState("");
    const [price, setPrice] = useState("");

    const emitBooken = () => {
        //web3
        alert('Emitted Booken');

        //if transaction confirmed.
        //Api call
    }

    return (
    <div className="container">
        <h1>Emit Booken for accommodation : {} </h1>
        <div className="form-container">
            <div className="form-section">
                <div className="form">
                    <label htmlFor="">Room type</label>
                    <select value={roomType} onChange={(e) => { setRoomType(e.name) }}>
                        { roomTypes.map(rt => <option value={rt.name}>{rt.name}</option>) }
                    </select>
                </div>
            </div>
            <div className="form-section">
                <div className="form">
                <label htmlFor="">Min Adults</label>
                    <input type="text" value={minAdults} onChange={setMinAdults} />
                </div>
                <div className="form">
                    <label htmlFor="">Max Adults</label>
                    <input type="text" value={maxAdults} onChange={setMaxAdults} />
                </div>
            </div>
            <div className="form-section">
                <div className="form">
                    <label htmlFor="">Price</label>
                    <input type="text" value={price} onChange={setPrice} />
                </div>
                <div className="form">
                    <label htmlFor="">Return policy</label>
                    <input type="text" value={returnPolicy} onChange={returnPolicy} /><br/>
                </div>
            </div>

            <h3>Booken range of dates</h3>
            <p>This will create a Booken for each day of the selected range</p>
            <div className="form-section">
                <div className="form">
                    <label htmlFor="">Date from</label>
                    <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.value)} />
                </div>
                <div className="form">
                    <label htmlFor="">Date to</label>
                    <input type="date" value={dateTo} onChange={(e) => setDateTo(e.value)}/>
                </div>
            </div>
            <button className="btn-primary" onClick={emitBooken}>
                Emit Bookens
            </button>
        </div>
    </div>)
}

export default EmitBookenPage;