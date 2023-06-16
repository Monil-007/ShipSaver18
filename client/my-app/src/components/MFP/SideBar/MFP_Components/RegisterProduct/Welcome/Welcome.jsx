import React, { useState, useEffect } from 'react'
import SideBar from '../../../Sidebar.jsx';
import '../Welcome/Welcome.css';
import Carousel from '../../../../../Carousel/Carousel.jsx';

const Welcome = () => {

    const [showTypingText, setShowTypingText] = useState(false);

    useEffect(() => {
        setShowTypingText(true);
    }, []);

    return (
        <div style={{ "display": "flex" }}>
            <SideBar />
            <div className="main-container">
                <div className="greeting">Welcome</div>
                <div className="shortDesc">Your very own delivery charge saver wallet!!!</div>
                <div className={showTypingText ? 'typing-text' : ''}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium ipsam labore, tempora pariatur dolore nihil alias nisi a amet eaque nesciunt,
                    minima ea quibusdam voluptates sit at laboriosam harum earum.
                </div>
                <div className="carousel">
                    <Carousel />
                </div>
            </div>
        </div>
    )
}

export default Welcome;
