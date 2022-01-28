import React, { useState} from "react";
import BookenCard from "../Components/BookenCard";

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
    <div>
        <h1>Emit Booken for accommodation : {} </h1>
        <div className="form-container">
            Room type :
            <select value={roomType} onChange={(e) => { setRoomType(e.name) }}>
                { roomTypes.map(rt => <option value={rt.name}>{rt.name}</option>) }
            </select><br/>

            Price <input type="text" value={price} onChange={setPrice} /><br/>
            Min Adults : <input type="text" value={minAdults} onChange={setMinAdults} /><br/>
            Max Aduslts : <input type="text" value={maxAdults} onChange={setMaxAdults} /><br/>
            Return policy : <input type="text" value={returnPolicy} onChange={returnPolicy} /><br/>


            <h3>Booken range of dates</h3>
            <p>This will create a Booken for each day of the selected range</p>
            dateFrom : <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.value)} />
            dateTo : <input type="date" value={dateTo} onChange={(e) => setDateTo(e.value)}/>
            <br/>
            <button onClick={emitBooken}>
                Emit Bookens
            </button>
        </div>
    </div>)
}

export default EmitBookenPage;