import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import InputForm from "../InputForm/InputForm";
import GlobalStyles from "../styles/Global";
import ParallaxComponent from "../Parallax/Parallax";
import React from 'react';

const LandingPage = () => {
    return (
        <>
            <GlobalStyles />
            <Navbar />
            <Home />
            <ParallaxComponent />
            <InputForm />
            <Footer />
        </>
    )
}

export default LandingPage;
