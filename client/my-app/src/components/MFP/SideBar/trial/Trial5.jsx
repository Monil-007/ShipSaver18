import React, { useState, useEffect } from 'react'
import SideBar from '../Sidebar';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { setFormData } from '../../../../Actions/formAction';
import { useDispatch, useSelector } from 'react-redux';



const Trial5 = ({ user }) => {
    const [isLoading, SetIsLoading] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();
    const formData18 = useSelector(state => state.formData);

    useEffect(() => {
        if (formData18.user && formData18.user.id) {
            console.log(typeof (formData18.user.id));
            const userData = {
                userID: `${formData18.user.id}`
            } // Log the updated formData
            fetch('http://localhost:3000/DeliverySaverApi/rkGetYourOrders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
                .then(resp => resp.json())
                .then((dt1) => { console.log(dt1); SetIsLoading(false) })
                .catch(err => console.log(err));
        }

    }, [formData18]);

    const caller = async () => {
        console.log(uuidv4());
        const dt = {
            userID: `${formData18.user.id}`,
            id18: uuidv4(),
            firstName: `${firstName}`,
            lastName: `${lastName}`,
            email: `${email}`,
            price: `${price}`,
        }
        dispatch(setFormData(dt));
        //setFormData(dt);

        await fetch(`http://localhost:3000/DeliverySaverApi/rkRegister`, {
            method: "POST",
            body: JSON.stringify(dt),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(resp => resp.json()).then((dt) => { console.log(dt); SetIsLoading(false); }).catch((err) => { console.log(err); })
    }

    // Console logging the updated formData from redux:


    const getCust = async () => {
        console.log(uuidv4());
        const dt = {
            id18: uuidv4(),
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

    return (
        <div style={{ "display": "flex" }}>
            <SideBar />
            <div>
                <h1 style={{ "color": "black" }}> radhe krishna</h1>
                <label>Full Name: </label><input value={firstName} onChange={(e) => { setFirstName(e.target.value); console.log(e.target.value); }}></input>
                <br></br>
                <label>Product Name: </label><input value={lastName} onChange={(e) => { setLastName(e.target.value); console.log(e.target.value); }}></input>
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

// const mapStateToProps = (state) => {
//     return {
//         formData: state.formData,
//         user: state.user,
//     };
// };

export default Trial5;
