import React, { useState } from 'react';
import axios from 'axios';
import Google from '../../../assets/icons/google.png';
// import Facebook from "../../assets/icons/facebook.png";
import Github from "../../../assets/icons/github.png";
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleManualSignup = async () => {
        try {
            const response = await axios.post('http://localhost:3000/authManual/manualSignup', { username, password });
            console.log(response.data.message);
            // Redirect or perform other actions after successful signup
        } catch (error) {
            console.error('Error during manual signup', error);
            // Handle signup error, display error message, etc.
        }
    };

    const google = () => {
        window.open("http://localhost:3000/auth/google", "_self");
    };

    const github = () => {
        window.open("http://localhost:3000/auth/github", "_self");
    };

    // const facebook = () => {
    //     window.open("http://localhost:3000/auth/twitter", "_self");
    // };

    const handleTogglePage = () => {
        navigate('/login18');
    }
    return (
        <div className="authPage">
            <div className="signup">
                <h1 className="signupTitle">Choose a Signup Method</h1>
                <div className="wrapper">
                    <div className="left">
                        <div className="signupButton google" onClick={google}>
                            <img src={Google} alt="" className="icon" />
                            Google
                        </div>
                        {/* <div className="signupButton facebook" onClick={facebook}>
                        <img src={Facebook} alt="" className="icon" />
                        Facebook
                    </div> */}
                        <div className="signupButton github" onClick={github}>
                            <img src={Github} alt="" className="icon" />
                            Github
                        </div>
                    </div>
                    <div className="center">
                        <div className="line" />
                        <div className="or">OR</div>
                    </div>
                    <div className="right">
                        <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
                        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                        <button className="submit" onClick={handleManualSignup}>Signup</button>
                        <div className="loginText">
                            <p>Already have an account?</p>
                            <button className="loginLink" onClick={handleTogglePage}>Login here</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Signup;
