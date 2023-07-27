import React, { useState, useEffect } from 'react'
import SideBar from '../../../Sidebar.jsx';
import './Welcome.css';
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
                {/* <div className={showTypingText ? 'typing-text' : ''}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium ipsam labore, tempora pariatur dolore nihil alias nisi a amet eaque nesciunt,
                    minima ea quibusdam voluptates sit at laboriosam harum earum.
                </div>
                
                */
                }
                <div className={`typing-text ${showTypingText ? 'fade-in' : ''}`}>
                    <ul>
                        <li><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>    Welcome to ShipSaver18, a unique web portal designed to revolutionize your online shopping experience! Are you tired of missing out on free delivery options just because your order falls below the minimum purchase value? Look no further!</li>
                        <li><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>    Introducing our innovative platform that connects like-minded shoppers who are seeking to maximize their savings. With our portal, you can easily find and join forces with other individuals ordering from various ecommerce websites, all aiming to reach the desired minimum order value of 500Rs. Together, you'll collectively surpass the threshold and unlock the benefits of free delivery!</li>
                        <li><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>    Say goodbye to those frustrating extra charges for delivery and embrace a smarter way to shop. Our intuitive interface allows you to effortlessly browse through a wide range of ongoing orders, finding the perfect match for your needs. By joining forces with others, you not only save money but also foster a sense of community and collaboration.</li>
                        <li><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>    Why pay for delivery when you can pool your orders and enjoy the convenience of free delivery? This ShipSaver18 project offers a secure and reliable platform where you can connect with fellow shoppers, share your shopping lists, and coordinate your purchases seamlessly.</li>
                        <li><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>    Join us today and become part of a growing network of savvy shoppers who are reaping the benefits of collective ordering. Together, we're reshaping the way online shopping works, empowering individuals to make smarter, more cost-effective choices.</li>
                    </ul>
                </div>
                <div className="carousel">
                    <div className="CaroHead">
                        <h3>How to Use:</h3>
                    </div>
                    <Carousel />
                </div>
            </div>
        </div>
    )
}

export default Welcome;
