import React from 'react'
import './Navbar.css';

const Navbar = () => {
    return (
        // <nav class="Navbar">
        //     <ul class="ul">
        //         <li class="Ele"><a href="#">Home</a></li>
        //         <li class="Ele" ><a href="#">About</a></li>
        //         <li class="Ele"><a href="#">Contact</a></li>
        //         <li class="login"><a href="#">Login</a></li>
        //     </ul>
        // </nav>
        <nav>
            <ul>
                <li class="dropdown">
                    <a href="#">Language</a>
                    <ul class="dropdown-menu">
                        <li><a href="#">English</a></li>
                        <li><a href="#">Spanish</a></li>
                        <li><a href="#">French</a></li>
                        <li><a href="#">German</a></li>
                        <li><a href="#">Italian</a></li>
                    </ul>
                </li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li class="login"><a href="#">Login</a></li>
            </ul>
        </nav>


    )
}

export default Navbar;
