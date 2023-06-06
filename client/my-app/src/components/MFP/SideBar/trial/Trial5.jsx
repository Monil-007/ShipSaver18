import React, { useState } from 'react'
import SideBar from '../Sidebar';

const Trial5 = () => {
    const [isLoading, SetIsLoading] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [price, setPrice] = useState(0);

    const caller = async () => {
        const dt = {
            firstName: `${firstName}`,
            lastName: `${lastName}`,
            email: `${email}`,
            price: `${price}`,
        }
        await fetch(`http://localhost:3000/DeliverySaverApi/rkRegister`, {
            method: "POST",
            body: JSON.stringify(dt),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(resp => resp.json()).then((dt) => { console.log(dt); SetIsLoading(false); }).catch((err) => { console.log(err); })
    }

    const getCust = async () => {
        const dt = {
            firstName: `${firstName}`,
            lastName: `${lastName}`,
            email: `${email}`,
            price: `${price}`,
        }
        await fetch(`http://localhost:3000/DeliverySaverApi/rkGetSavers`, {
            method: "POST",
            body: JSON.stringify(dt),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(resp => resp.json()).then((dt) => { console.log(dt); SetIsLoading(false); }).catch((err) => { console.log(err); })
    }
    return (
        <div style={{ "display": "flex" }}>
            <SideBar />
            <div>
                <h1 style={{ "color": "black" }}> radhe krishna</h1>
                <label>First Name: </label><input value={firstName} onChange={(e) => { setFirstName(e.target.value); console.log(e.target.value); }}></input>
                <br></br>
                <label>Last Name: </label><input value={lastName} onChange={(e) => { setLastName(e.target.value); console.log(e.target.value); }}></input>
                <br></br>
                <label>Email: </label><input value={email} onChange={(e) => { setEmail(e.target.value); console.log(e.target.value); }}></input>
                <br></br>
                <label>Product Price: </label><input value={price} onChange={(e) => { setPrice(e.target.value); console.log(e.target.value); }}></input>
                <br></br>
                <button onClick={caller}>Submit</button>
                <button onClick={getCust}>get Customers</button>
            </div>


        </div>
    )
}

export default Trial5;
