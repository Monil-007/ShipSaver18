import React, { useEffect, useState } from 'react'
import SideBar from '../../../Sidebar';
import './FindSimilarCustomers.css';
import { Button } from 'reactstrap';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import DeliveryBoyAnimation from '../../../../../../../src/assets/icons/DeliveryBoyAnimation.gif'
import SearchingImageAnimation from '../../../../../../../src/assets/icons/SearchingImageAnimation.png'
import dummyImage from '../../../../../../assets/icons/dummyImage.png'


const useStyles = makeStyles({
    card: {
        position: 'relative',
        borderRadius: '4px',

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
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
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


const FindSimilarCustomers = ({ formData }) => {
    const classes = useStyles();
    const Card = ({ ind, Name, phone, email, price }) => {

        return (
            <div className={classes.card}>
                <div className={classes.overlay}></div>
                <div className="CardDetails">
                    <div className="cardTop">
                        <p>Found user no.{ind}</p>
                    </div>
                    <div className="cardMiddle">
                        <div className="contentLeft">
                            <p>Full Name: {Name}</p>
                            <p>Ordered Price: {price}</p>
                        </div>
                        <div className="contentRight">
                            <img src={dummyImage} alt="Dummy" />
                        </div>
                    </div>
                    <div className="cardBottom">
                        <p>Email: {email}</p>
                        <p>Phone: {phone}</p>
                    </div>
                    {/* <h3 className={classes.title}>{title}</h3>
                    <p className={classes.description}>{description}</p> */}
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
            fetch("http://localhost:3000/DeliverySaverApi/rkGetSavers", {
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


    const handleFilter = () => {
        const sortedData = [...custData].sort((a, b) => b.price - a.price);
        setCustData(sortedData);
    };
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("hare");
    return (



        <div className="FSC">
            <div className="GSC">
                <SideBar />
                <div className="GSC-main" style={isClicked ? { "marginTop": "-32vh" } : { "marginTop": "-32vh" }}>
                    <div className="GSC-heading">
                        <h1>Find Similar Customers near you</h1>
                        <h4>Find Similar Customers like you to order together to save delivery charges</h4>
                    </div>
                    {user && (
                        <div className="profile-info">
                            <img src={dummyImage} alt="Profile" className="profile-pic" />
                            <p className="username">Hello, {username}</p>
                        </div>)}
                    <div className="findbtn">
                        <button className='findButton' onClick={FindButtonClicked}>Find it!!</button>
                    </div>
                    <div className="filterIconDiv">
                        <i className="fa fa-filter filterIcon" aria-hidden="true" onClick={handleFilter}> Sort (Desc.)</i>

                    </div>
                    <div className="imageContainer">
                        {isClicked ? !loading ?
                            <div className='cardContainer'
                            >
                                {custData.map((card, index) => (
                                    <Card key={index} ind={index + 1} Name={card.firstName} phone={card.phone} email={card.email} price={card.price} />
                                ))}
                                {/* style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 2fr))', gap: '36px', justifyContent: "center" }} */}
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
