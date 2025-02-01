import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Imports
import LoginForm from './Components/Login/index';
import RegisterForm from './Components/Signup/index';
import Homepage from './Components/HomePage/index';
import About from './Components/About/index';
import ContactPage from './Components/Contact/index';



import ProductPage from './Components/ProductPage/index';

import ProfilePage from './Components/ProfilePage/index';



// Imports Conditional //

import Navbar from './Components/Navbar/index'
import Footer from './Components/Footer/index'
import Dropdown from './Components/HomePage/Dropdowns/index'
import { CalendarSearch, Contact } from 'lucide-react';

import Popup from './Components/ChoicePopup/index'
import Animation from './Components/Animations/index'
import ForgotPassword from './Components/ForgetPassword';
import OTPVerification from './Components/OTPVerification';
import UpdatePassword from './Components/UpdatePassword';
import CreateProfile from './Components/CreateProfile';

// Components//
function Layout() {
  const location = useLocation();

  // Check if the current route is login or register
  const isAuthPage = location.pathname === '/' || location.pathname === '/register' || location.pathname === '/forgetPassword' || location.pathname === '/otpVerification' || location.pathname === '/updatePassword' || location.pathname === '/createProfile';

  return (
    <>
      {/* Show Navbar and Footer only if it's NOT the login or register page */}
      {!isAuthPage && <Navbar/>}
      {!isAuthPage && <Dropdown/>}
      <Routes>
        {/* Login and Register Pages */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/forgetPassword" element={<ForgotPassword />} />
        <Route path="/otpVerification" element={<OTPVerification />} />
        <Route path="/updatePassword" element={<UpdatePassword />} />

        {/* HomePage */}
        <Route path="/homepage_Without_popup" element={<Homepage />} />
        

        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
   
   

        <Route path="/pp" element={<ProductPage/>}/>

        <Route path="/animation" element={<Animation/>}/>

        <Route path="/homepage" element={<Popup/>}/>
        <Route path="/createProfile" element={<CreateProfile/>}/>
       
<Route path='/profile-page' element={<ProfilePage/>}/>
       
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='root'>
    <Router>
      <Layout />
    </Router>
    </div>
  );
}

export default App;
