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



import ProductPage from './Components/ProductPage/index'




// Imports Conditional //

import Navbar from './Components/Navbar/index'
import Footer from './Components/Footer/index'
import Dropdown from './Components/HomePage/Dropdowns/index'
import { CalendarSearch, Contact } from 'lucide-react';

import Popup from './Components/ChoicePopup/index'
import Animation from './Components/Animations/index'

// Components //
function Layout() {
  const location = useLocation();

  // Check if the current route is login or register
  const isAuthPage = location.pathname === '/' || location.pathname === '/register';

  return (
    <>
      {/* Show Navbar and Footer only if it's NOT the login or register page */}
      {!isAuthPage && <Navbar/>}
      {!isAuthPage && <Dropdown/>}
      <Routes>
        {/* Login and Register Pages */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        {/* HomePage */}
        <Route path="/homepage_Without_popup" element={<Homepage />} />
        

        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
   
   

        <Route path="/pp" element={<ProductPage/>}/>

        <Route path="/animation" element={<Animation/>}/>

        <Route path="/homepage" element={<Popup/>}/>
       
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
