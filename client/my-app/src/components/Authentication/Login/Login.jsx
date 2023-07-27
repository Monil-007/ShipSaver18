import Google from '../../../assets/icons/google.png'
// import Facebook from "../../assets/icons/facebook.png";
import Github from "../../../assets/icons/github.png";
import './Login.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import Signup from '../Signup/Signup';

const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const google = () => {
        window.open("http://localhost:3000/auth/google", "_self");

    };

    const github = () => {
        window.open("http://localhost:3000/auth/github", "_self");
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleManualSignin = async () => {
        try {
            console.log("radhe hari!!!")
            const response = await axios.post('http://localhost:3000/authManual/manualSignin', { username, password });
            const token = response.data.token;
            // Store the token in local storage or a secure cookie for future use
            console.log("JWT Token: " + token);
            navigate("/welcome");
            // Redirect or perform other actions after successful signin
        } catch (error) {
            console.error('Incorrect Email or Password', + error);
            // Handle signin error, display error message, etc.
        }
    };
    // const facebook = () => {
    //     window.open("http://localhost:3000/auth/twitter", "_self");
    // };

    const handleTogglePage = () => {
        navigate('/Signup');
    }
    return (
        <div className="authPage">
            <div className="login">
                <h1 className="loginTitle">Choose a Login Method</h1>
                <div className="wrapper">
                    <div className="left">
                        <div className="loginButton google" onClick={google}>
                            <img src={Google} alt="" className="icon" />
                            Google
                        </div>
                        {/* <div className="loginButton facebook" onClick={facebook}>
                            <img src={Facebook} alt="" className="icon" />
                            Facebook
                        </div> */}
                        <div className="loginButton github" onClick={github}>
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
                        <button className="submit" onClick={handleManualSignin}>Login</button>
                        <div className="signupText">
                            <p>Don't have an account?</p>
                            <button className="signupLink" onClick={handleTogglePage}>Signup here</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;