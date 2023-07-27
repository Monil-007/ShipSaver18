import React from 'react'
import './Homepage.css';
import Symb from '../HomePage/NDF.png'
import Navbar from '../Navbar/Navbar';
import Carousel from '../Carousel/Carousel';


const Homepage = () => {
    return (
        <div class="main">
            <Navbar />
            <div class="FirstView">

                <div class="sect1"> lorem ipsum lorem ipsum lorem ipsum lorem ipsum </div>
                <div class="sect2"> lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum</div>
                <div class="sect3">
                    <input type='text' placeholder='Enter you mail id' ></input>
                    <button class="freeTrial">Start Free trial</button>
                </div>
                <div class="sect4"> lorem ipsum loremjhjkhkjhk lorem ipsumlorem ipsum lorem ipsum</div>
            </div>
            <svg viewBox="0 0 500 100">
                <path d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0" fill="rgb(29, 215, 235)"></path>

            </svg>
            <div class="centered-image">
                <img src={Symb} alt="NDF"></img>
            </div>
            <div class="container">
                <div class="box">
                    <i class="fa fa-star"></i>
                    <h3>Title 1</h3>
                    <p>Description 1</p>
                </div>
                <div class="box">
                    <i class="fa fa-heart"></i>
                    <h3>Title 2</h3>
                    <p>Description 2</p>
                </div>
                <div class="box">
                    <i class="fa fa-bell"></i>
                    <h3>Title 3</h3>
                    <p>Description 3</p>
                </div>
            </div>
            <Carousel />

        </div>
    )
}

export default Homepage;
