import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './LandingPage'
import LoginPage from './LoginPage.js'
import RegisterPage from './RegisterPage'
import ForgetPasswordPage from './ForgetPasswordPage'
import HomePage from './HomePage'
import About from './About'
import Contact from './Contact';
import Analysis from './Analysis'
import Surveyform from './Surveyform'
// import ReadOnlyTokenGenerator from './ReadOnlyTokenGenerator';
import Share from './Share'
// import Get from './Get'
import Csv from './Csv'
function App() {
    return (
      // <div>
      //   <Csv/>
      // </div>
        <Router>
                <Routes>
                    <Route exact path="/" element={ <LandingPage/> } />
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/home" element={ <HomePage/> } />
                    <Route path="/register" element={ <RegisterPage/> } />
                    <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
                    <Route path='/About' element={<About/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="/Surveyform" element={<Surveyform/>}/>
                    <Route path="/Analysis" element={<Analysis/>}/>
                    <Route path="/share" element={<Share/>}/>
                    <Route path="/Csv" element={<Csv/>}/>
                 </Routes>
         </Router>
     );
}
export default App
