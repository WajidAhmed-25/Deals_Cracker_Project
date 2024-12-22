import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Imports
import LoginForm from './Components/Login/index';
import RegisterForm from './Components/Signup/index';
import Homepage from './Components/HomePage/index';



import ProductPage from './Components/ProductPage/index'


// Imports Conditional //

import Navbar from './Components/Navbar/index'
import Footer from './Components/Footer/index'
import Dropdown from './Components/HomePage/Dropdowns/index'
import { CalendarSearch } from 'lucide-react';

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
        <Route path="/homepage" element={<Homepage />} />
   

        <Route path="/pp" element={<ProductPage/>}/>
       
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
