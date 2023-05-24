import React, { useEffect, useState } from 'react'
import SideBar from '../../../Sidebar';
import '../FindSimilarCustomers/FindSimilarCustomers.css';
import { Button } from 'reactstrap';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

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

const Card = ({ title, description }) => {
    const classes = useStyles();

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

const cardsData = [
    { id: 1, title: 'Card 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Card 2', content: 'Nullam nec neque ac ipsum pharetra commodo.' },
    { id: 3, title: 'Card 3', content: 'Suspendisse euismod mauris eget justo lacinia, id ultrices lacus dignissim.' },
    { id: 4, title: 'Card 4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 5, title: 'Card 5', content: 'Nullam nec neque ac ipsum pharetra commodo.' },
    { id: 6, title: 'Card 6', content: 'Suspendisse euismod mauris eget justo lacinia, id ultrices lacus dignissim.' },
    { id: 7, title: 'Card 7', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 8, title: 'Card 8', content: 'Nullam nec neque ac ipsum pharetra commodo.' },
    { id: 9, title: 'Card 9', content: 'Suspendisse euismod mauris eget justo lacinia, id ultrices lacus dignissim.' },
    { id: 10, title: 'Card 10', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 11, title: 'Card 11', content: 'Nullam nec neque ac ipsum pharetra commodo.' },
    { id: 12, title: 'Card 12', content: 'Suspendisse euismod mauris eget justo lacinia, id ultrices lacus dignissim.' },
    // Add more card data as needed
];

// const Card = ({ title, content }) => {
//     return (
//         <div className="card">
//             <h3 className="card-title">{title}</h3>
//             <p className="card-content">{content}</p>
//         </div>
//     );
// };

// const Card = ({ title, content }) => {
//     return (
//         <div className="relative group rounded-lg bg-white shadow-lg p-4 cursor-pointer transition duration-300 transform hover:-translate-y-1 hover:shadow-xl">
//             <div className="absolute inset-0 rounded-lg bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//             <div className="relative">
//                 <h3 className="text-xl font-semibold mb-2">{title}</h3>
//                 <p className="text-gray-700">{content}</p>
//             </div>
//         </div>
//     );
// };



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
        console.log(custData);
        // }).then(resp => resp.json()).then((dt) => { CustData = dt; }).catch((err) => { console.log(err); })
    }

    useEffect(() => {
        setIsClicked(false);
    }, []);

    const FindButtonClicked = () => {
        setIsClicked(!isClicked);
        setTimeout(() => {
            getCust();
        }, 4000)

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
                {isClicked && custData && <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '36px' }}>
                    {custData.map((card, index) => (
                        <Card key={index} title={card.firstName} description={card.email} />
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
