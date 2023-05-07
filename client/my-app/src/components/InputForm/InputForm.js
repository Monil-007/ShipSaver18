import React, { useState } from "react";
import "../InputForm/IF.css";
import { useNavigate } from "react-router-dom"

const InputForm1 = () => {
    const handleEntry = async () => {
        const data = { Naam: "radhe krishna", Price: "84" };
        await fetch(`http://localhost:3000/api/rk`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(resp => resp.json()).then((dt) => { console.log(dt); }).catch((err) => { console.log(err); })

    }
    return (
        <div>
            <form onSubmit={handleEntry}>
                <label>Name: </label>
                <input type="text"></input>
                <lable>price: </lable>
                <input type="number"></input>
                <button>Submit</button>
            </form>

        </div>
    )
}


function Card({ title, content }) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div
            className={`card ${isHovering ? "hover" : ""}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}

function InputForm() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/sp');
    }

    return (
        <div className="Cards">
            <Card
                title="Register your Product"
                content="Enter your product details and wait for few moments untill we get you your partner for ordering combinely"

            />
            <Card
                title="Find Nearby customers"
                content="Want to check customers count nearby you with different product price range so as to save the delivery fees? "
            />
            <button onClick={handleClick}>Go</button>
        </div>
    );
}

export default InputForm;
