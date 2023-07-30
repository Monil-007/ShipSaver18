import React from 'react';
import { Carousel } from 'react-carousel3';
import './Carousel.css';

const styleContent = [{
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    fontSize: '20px',
    animation: 'blinking 1s infinite',
},
{
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    fontSize: '20px',
    animation: 'blinking 1s infinite',
}, {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    fontSize: '20px',
}, {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    fontSize: '20px',
}, {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    fontSize: '20px',
},
{
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    fontSize: '20px',
}
]



const style = {
    width: 300,
    height: 200,
    backgroundColor: 'rgb(254,252,250)', // Adjust the background color and opacity here
    boxShadow: '0 6px 8px rgba(0, 0, 0.9, 0.9)', // Adjust the box shadow properties here
};

export default () => (
    <div className='carousel_header' >


        <Carousel height={320} width={1380} xOrigin={10} yOrigin={42} yRadius={48} autoPlay={true}>
            <div key={1} style={style} className="eachCard">
                <h3 className="styleHead">Step 1:</h3>
                <p className="styleContent">Navigate to register product page and fill up details for getting your shipsaver partner :)
                </p>
                {/* <img className='rounded shadow-2xl' alt="" src="/images/SOU.jpg" /> */}
            </div>
            <div key={2} style={style} className="eachCard">
                <h3 className="styleHead">Step 2:</h3>
                <p className="styleContent">Go to find shipsavers where you'll get a list of shipsavers nearby you according to your product price so as to surpass min shipping charges</p>
                {/* <img className='rounded shadow-2xl' alt="" src="/images/Rani-Ki-Vav.jpg" /> */}
            </div>
            <div key={3} style={style} className="eachCard">
                <h3 className="styleHead">Step 3:</h3>
                <p className="styleContent">Once you got there, you can use filters of various parameters to change list as per your requirement</p>
                {/* <img className='rounded shadow-2xl' alt="" src="/images/Khaman (1).png" /> */}
            </div>
            <div key={4} style={style} className="eachCard">
                <h3 className="styleHead">Step 4:</h3>
                <h1 className="styleContent">You can then select appropriate a shipsaver and click on its card to contact to order in collaboration.</h1>
                {/* <img className='rounded shadow-2xl' alt="" src="/images/Saputara Hill station.jpg" /> */}
            </div>
            <div key={5} style={style}>
                <h3 className="styleHead">Step 5:</h3>
                <p className="styleContent">Once you get your product without paying shipping charges do give a confirmation in Delivery status and click on received so that we remove the data from our DB.</p>
                {/* <img className='rounded shadow-2xl' alt="" src="/images/Somnath-Temple.jpg" /> */}
            </div>
        </Carousel>
    </div>
);