import React from 'react'
import { Link } from 'react-router-dom'

import BackgroundImage from './op.jpg'
import './LandingPage.css'
export default function LandingPage() {
    return (
        <header style={HeaderStyle}>
            <center>
            <h1 className="main-title text-center">login / register page</h1>
            <p className="main-para text-center">join us now</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary" id="reg_btn"><span>log in</span></button>
                </Link>
                <Link to="/register">
                    <button className="primary" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
            </center>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "cover",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    
}