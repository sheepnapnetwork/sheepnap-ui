import React from "react";
import { useNavigate } from "react-router-dom";

function MyPropertyCard({ property }) 
{    

    async function goToDashBoard(propertyaddress)
    {
        navigate(`/property/${propertyaddress}`);
    }

    return (
        <table style={{border : "1px solid"}}>
            <tr>
                <td>
                    Name :
                </td>
                <td>
                    {property.name}
                </td>
            </tr>
            <tr>
                <td>
                    <button onClick={goToDashBoard(property.address)}></button>
                </td>
            </tr>
        </table>
    )
}

export default MyPropertyCard;