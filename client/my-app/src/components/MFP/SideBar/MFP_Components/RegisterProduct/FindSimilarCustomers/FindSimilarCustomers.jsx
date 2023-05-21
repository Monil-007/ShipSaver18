import React, { useEffect, useState } from 'react'
import SideBar from '../../../Sidebar';
import '../FindSimilarCustomers/FindSimilarCustomers.css';
import { Button } from 'reactstrap';
import { connect } from "react-redux";

const cardsData = [
    { id: 1, title: 'Card 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Card 2', content: 'Nullam nec neque ac ipsum pharetra commodo.' },
    { id: 3, title: 'Card 3', content: 'Suspendisse euismod mauris eget justo lacinia, id ultrices lacus dignissim.' },
    // Add more card data as needed
];

const Card = ({ title, content }) => {
    return (
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <p className="card-content">{content}</p>
        </div>
    );
};



const FindSimilarCustomers = ({ formData }) => {
    const [isClicked, setIsClicked] = useState(false);

    const [custData, setCustData] = useState({});
    const getCust = async () => {
        try {
            // const dt = {
            //     firstName: `${firstName}`,
            //     lastName: `${lastName}`,
            //     email: `${email}`,
            //     price: `${price}`,
            // }
            const dt = JSON.stringify(formData);
            // console.log("here is form data radhe govind: " + dt);
            // await fetch(`http://localhost:3000/api/rkGet`, {
            //     method: "POST",
            //     body: dt,
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            // })
            //     .then(resp => { console.log(resp); }).then((dt1) => { setCustData(dt1); console.log("hare hare: " + dt1); }).catch((err) => { console.log(err) });
            const response = await fetch("http://localhost:3000/api/rkGet", {
                method: "POST",
                body: dt,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Request failed with status " + response.status);
            }

            const data = await response.json();
            setCustData(data);
            console.log("hare hare:", data);
        } catch (error) {
            console.error(error);
        }
        // }).then(resp => resp.json()).then((dt) => { CustData = dt; }).catch((err) => { console.log(err); })
    }

    useEffect(() => {
        setIsClicked(false);
    }, []);

    const FindButtonClicked = () => {
        setIsClicked(!isClicked);
        getCust();
    }

    return (
        <div className="GSC">
            <SideBar />
            <div className="GSC-main">
                <div className="GSC-heading">
                    <h1>Find Similar Customers near you</h1>
                    <h4>Find Similar Customers like you to order together to save delivery charges</h4>
                </div>
                <button className='findButton' onClick={FindButtonClicked}>Find it!!</button>
                {isClicked && <div className="card-grid">
                    {cardsData.map((card) => (
                        <Card key={card.id} title={card.title} content={card.content} />
                    ))}
                </div>}
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        formData: state.formData.formData,
    };
};

export default connect(mapStateToProps)(FindSimilarCustomers);
// export default FindSimilarCustomers;
