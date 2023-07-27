import React from 'react'
import { Link } from 'react-router-dom'

import './App.css'

export default function ForgetPasswordPage() {
    return (
        <center>
        <div className='make'>
        <div className="text-center m-5-auto">
            <h2>Reset your password</h2>
            <h5>Enter your email address and we will send you a new password</h5>
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">Email address</label>
                    <input type="email" name="email" required />
                </p><br/>
                <p>
                    <button id="sub_btn" type="submit">Send password reset email</button>
                </p>
            </form>
            <footer>
                <br/>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </div>
        </center>
    )
}