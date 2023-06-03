import React, { useEffect, useState } from 'react'
import SideBar from '../../../Sidebar';
import './FindSimilarCustomers.css';
import { Button } from 'reactstrap';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import DeliveryBoyAnimation from '../../../../../../../src/assets/icons/DeliveryBoyAnimation.gif'
import SearchingImageAnimation from '../../../../../../../src/assets/icons/SearchingImageAnimation.png'

const useStyles = makeStyles({
    card: {
        position: 'relative',
        borderRadius: '4px',
        height: '130px',
        backgroundColor: '#f0f0f0',
        boxShadow: '0 6px 9px rgba(0, 0, 0, 0.9)',
        padding: '16px',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
        '&:hover': {
            transform: 'translateY(-7px)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        },
    },
    overlay: {
        position: 'absolute',
        inset: 0,
        borderRadius: '4px',
        opacity: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        transition: 'opacity 0.3s',
        '&:hover': {
            opacity: 1,
        },
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '8px',
        color: '#333',
    },
    description: {
        fontSize: '14px',
        color: '#666',
    },
    loadingGif: {
        width: '100px',
        height: '100px',
        margin: '20px',
    },
});

const cardData = [
    { title: 'Card 1', description: 'Description 1' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 3', description: 'Description 3' },
    { title: 'Card 4', description: 'Description 4' },
    { title: 'Card 5', description: 'Description 5' },
    { title: 'Card 6', description: 'Description 6' },
    { title: 'Card 7', description: 'Description 7' },
    { title: 'Card 8', description: 'Description 8' },
    { title: 'Card 9', description: 'Description 9' },
    { title: 'Card 10', description: 'Description 10' },
    { title: 'Card 11', description: 'Description 11' },
    { title: 'Card 12', description: 'Description 12' },
    // Add more card data objects as needed
];






const FindSimilarCustomers = ({ formData }) => {
    const classes = useStyles();
    const Card = ({ title, description }) => {

        return (
            <div className={classes.card}>
                <div className={classes.overlay}></div>
                <div>
                    <h3 className={classes.title}>{title}</h3>
                    <p className={classes.description}>{description}</p>
                </div>
            </div>
        );
    };
    const [isClicked, setIsClicked] = useState(false);

    const [custData, setCustData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getCust = () => {
        try {
            const dt = JSON.stringify(formData);
            fetch("http://localhost:3000/api/rkGet", {
                method: "POST",
                body: dt,
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Request failed with status " + response.status);
                    }
                    return response.json();
                })
                .then(rs => {
                    setCustData(rs);
                    console.log(custData);
                    console.log("hare hare:", rs);
                })
                .catch(error => {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        console.log(custData);
    }, [custData, loading]);

    const FindButtonClicked = () => {
        setIsClicked(!isClicked);
        setLoading(true);
        setTimeout(() => {
            getCust();
            setLoading(false);
        }, 2000);


        //getCust();
    }
    return (
        <div className="FSC">
            <div className="GSC">
                <SideBar />
                <div className="GSC-main" style={isClicked ? { "marginTop": "-32vh" } : { "marginTop": "-32vh" }}>
                    <div className="GSC-heading">
                        <h1>Find Similar Customers near you</h1>
                        <h4>Find Similar Customers like you to order together to save delivery charges</h4>
                    </div>
                    <div className="findbtn">
                        <button className='findButton' onClick={FindButtonClicked}>Find it!!</button>
                    </div>
                    <div className="imageContainer">
                        {isClicked ? !loading ?
                            <div
                                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '36px' }} >
                                {custData.map((card, index) => (
                                    <Card key={index} title={card.firstName} description={card.email} />
                                ))}

                            </div> : <img src={SearchingImageAnimation} alt="Searching" /> :
                            <img src={DeliveryBoyAnimation} alt="Loading" />}
                    </div>
                </div>
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
