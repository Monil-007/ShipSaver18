import React from 'react';
import { Carousel } from 'react-carousel3';

const style = {
    width: 300,
    height: 200,
    backgroundColor: 'rgb(254,252,250)', // Adjust the background color and opacity here
    boxShadow: '0 6px 8px rgba(0, 0, 0.9, 0.9)', // Adjust the box shadow properties here
};

export default () => (
    <div className=' bg-gray-300 mx-40 flex justify-center my-20 rounded py-10' >


        <Carousel height={320} width={1380} xOrigin={10} yOrigin={42} yRadius={48} autoPlay={true}>
            <div key={1} style={style}>
                <h1>Radhe</h1>
                {/* <img className='rounded shadow-2xl' alt="" src="/images/SOU.jpg" /> */}
            </div>
            <div key={2} style={style}>
                <h1>Krishna</h1>
                {/* <img className='rounded shadow-2xl' alt="" src="/images/Rani-Ki-Vav.jpg" /> */}
            </div>
            <div key={3} style={style}>
                <h1>Radhe Govind</h1>
                {/* <img className='rounded shadow-2xl' alt="" src="/images/Khaman (1).png" /> */}
            </div>
            <div key={4} style={style}>
                <h1>Radha Madhav</h1>
                {/* <img className='rounded shadow-2xl' alt="" src="/images/Saputara Hill station.jpg" /> */}
            </div>
            <div key={5} style={style}>
                <h1>barsane wali radhe</h1>
                {/* <img className='rounded shadow-2xl' alt="" src="/images/Somnath-Temple.jpg" /> */}
            </div>
        </Carousel>
    </div>
);