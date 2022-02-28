import React from "react";

function MyPropertyDashboard({ property }) {

    return (<div><table style={{border: "1px solid"}}>
        <tr>
            <td>
                Address :
            </td>
            <td>
                {property.address}
            </td>
        </tr>
        <tr>
            <td>
                Name :
            </td>
            <td>
                {property.name}
            </td>
        </tr>
        <tr>
            <td>Description :</td>
            <td>
                {property.description}
            </td>
        </tr>
        <tr>
            <td>
                Metadata reference :
            </td>
            <td>
                {property.metadatareference}
            </td>
        </tr>
        <tr>
            <td>
                Trust level :
            </td>
            <td>
                {property.trustlevel}
            </td>
        </tr>
        <tr>
            <td>
                Images :
            </td>
            <td>
                {property.Images.map(i => <img src={i} />)}
            </td>
        </tr>
    </table>
    </div>)
}

export default MyPropertyDashboard;