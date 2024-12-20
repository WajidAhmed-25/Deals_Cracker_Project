import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Imports
import LoginForm from './Components/Login/index';
import RegisterForm from './Components/Signup/index';
import Homepage from './Components/HomePage/index'

// Components //




function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
  
        <Routes>

          {/* Login and Register Pages */}

          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />

        {/* HomePage */}

            <Route path="/homepage" element={<Homepage/>} />
            
        </Routes>
   
    </Router>
  );
}

export default App;

