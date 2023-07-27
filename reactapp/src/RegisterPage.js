import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
import './RegisterPage.css'
import {useNavigate} from "react-router-dom"
import axios from 'axios'


export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();
    const checkPassword = (e) =>{
      const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
      if (!passwordRegex.test(password)) {
        window.alert(
          "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
        );
        initialize1()
        return;
      }
      else if (password !== confirmpassword) {
        window.alert("Passwords do not match.");
        initialize2()
        return;
      }
      else{
        window.alert("Registration Successful !!!");
      }
    }
    const initialize1 = () =>{
      setPassword('')
      setConfirmPassword('')
    }
    const initialize2 = () =>{
      setConfirmPassword('')
    } 
    
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };
    const handleSubmit= async (e)=>{
      e.preventDefault();
      try {
        const response = await axios.post(
          "http://localhost:8081/api/v1/auth/register",
          {
            name,
            email,
            mobile,
            password,
            // confirmpassword,
          },
        );
   
        console.log("Sign in successful");
        console.log(response.data); 
        navigate('/login');
   
        // setName("");
        // setEmail("");
        // setMobile("");
        // setPassword("");
        // setRegistrationError("");
      } catch (error) {
        console.error("Registration failed");
        console.error(error); 
   
      }
   }
    
    return (
        <center>
        <div className="regback">
        <div className="text-center atom">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <div className='regform'>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Username</label><br/>
                    <input type="text" className="vagathan" placeholder='Enter your Username' value={name} onChange={handleNameChange} name="username" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" className="vagathan" placeholder='Enter your Email' value={email} onChange={handleEmailChange}  name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" className="vagathan" placeholder='Ex:Ja$4StuN' value={password} onChange={handlePasswordChange} name="password" required />
                </p>
                <p>
                    <label>Confirm Password</label><br/>
                    <input type="password" className="vagathan" placeholder='Ex:Ja$4StuN' value={confirmpassword} onChange={handleConfirmPasswordChange} name="conpassword" required />
                </p>
                <p>
                    <label>Mobile No</label><br/>
                    <input type="tel" className="vagathan" placeholder='Enter Mobile No'  value={mobile} pattern="\d{10}$" onChange={handleMobileChange} name="mobile" required />
                </p>
                <b>
                <p>
                    <input type="checkbox"  className="vagathan" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                </b>
                <br/>
                <p>
                    <center><button id="sub" onClick={checkPassword} type="submit">Register</button></center>
                </p>
            </form>
            </div>
            <footer>
                <p>Already a member?<Link to="/login">Login</Link></p>
                <br/>
                <p><Link to="/">Back to Homepage</Link></p>
            </footer>
        </div>
        </div>
        </center>
    );
};
