// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// // Imports
// import LoginForm from './Components/Login/index';
// import RegisterForm from './Components/Signup/index';
// import Homepage from './Components/HomePage/index';
// import About from './Components/About/index';
// import ContactPage from './Components/Contact/index';



// import ProductPage from './Components/ProductPage/index';

// import ProfilePage from './Components/ProfilePage/index';



// // Imports Conditional //

// import Navbar from './Components/Navbar/index'
// import Footer from './Components/Footer/index'
// import Dropdown from './Components/HomePage/Dropdowns/index'
// import { CalendarSearch, Contact } from 'lucide-react';



// import Popup from './Components/ChoicePopup/index'
// import Animation from './Components/Animations/index'
// import ForgotPassword from './Components/ForgetPassword';
// import OTPVerification from './Components/OTPVerification';
// import UpdatePassword from './Components/UpdatePassword';
// import CreateProfile from './Components/CreateProfile';


// // Components//
// function Layout() {
//   const location = useLocation();

//   // Check if the current route is login or register
//   const isAuthPage = location.pathname === '/' || location.pathname === '/register' || location.pathname === '/forgetPassword' || location.pathname === '/otpVerification' || location.pathname === '/updatePassword' || location.pathname === '/createProfile';

//   return (
//     <>
//       {/* Show Navbar and Footer only if it's NOT the login or register page */}
//       {!isAuthPage && <Navbar/>}
//       {!isAuthPage && <Dropdown/>}
//       <Routes>
//         {/* Login and Register Pages */}
//         <Route path="/" element={<LoginForm />} />
//         <Route path="/register" element={<RegisterForm />} />
//         <Route path="/forgetPassword" element={<ForgotPassword />} />
//         <Route path="/otpVerification" element={<OTPVerification />} />
//         <Route path="/updatePassword" element={<UpdatePassword />} />

//         {/* HomePage */}
//         <Route path="/homepage_Without_popup" element={<Homepage />} />
        

//         <Route path="/about" element={<About/>}/>
//         <Route path="/contact" element={<ContactPage/>}/>
   
   

//         <Route path="/pp" element={<ProductPage/>}/>

//         <Route path="/animation" element={<Animation/>}/>

//         <Route path="/homepage" element={<Popup/>}/>
//         <Route path="/createProfile" element={<CreateProfile/>}/>
       
// <Route path='/profile-page' element={<ProfilePage/>}/>
       
//       </Routes>
//       {!isAuthPage && <Footer />}
//     </>
//   );
// }

// function App() {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <div className='root'>
//     <Router>
//       <Layout />
//     </Router>
//     </div>
//   );
// }

// export default App;


import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cookies from "js-cookie";

// Imports
import LoginForm from './Components/Login/index';
import RegisterForm from './Components/Signup/index';
import Homepage from './Components/HomePage/index';
import About from './Components/About/index';
import ContactPage from './Components/Contact/index';
import ProductPage from './Components/ProductPage/index';
import ProfilePage from './Components/ProfilePage/index';
import Navbar from './Components/Navbar/index';
import Footer from './Components/Footer/index';
import Dropdown from './Components/HomePage/Dropdowns/index';
import Popup from './Components/ChoicePopup/index';
import Animation from './Components/Animations/index';
import ForgotPassword from './Components/ForgetPassword';
import OTPVerification from './Components/OTPVerification';
import UpdatePassword from './Components/UpdatePassword';
import CreateProfile from './Components/CreateProfile';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("dealscracker-token");
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
};

// Auth Route Component (for routes that should only be accessible when NOT logged in)
const AuthRoute = ({ children }) => {
  const token = Cookies.get("dealscracker-token");
  if (token) {
    return <Navigate to="/homepage" replace />;
  }
  return children;
};

function Layout() {
  const location = useLocation();
  const isAuthPage = [
    '/', 
    '/register', 
    '/forgetPassword', 
    '/otpVerification', 
    '/updatePassword', 
    '/createProfile'
  ].includes(location.pathname);

  return (
    <>
      {!isAuthPage && <Navbar />}
      {!isAuthPage && <Dropdown />}
      <Routes>
        {/* Auth Pages - Only accessible when not logged in */}
        <Route path="/" element={
          <AuthRoute>
            <LoginForm />
          </AuthRoute>
        } />
        <Route path="/register" element={
          <AuthRoute>
            <RegisterForm />
          </AuthRoute>
        } />
        <Route path="/forgetPassword" element={
          <AuthRoute>
            <ForgotPassword />
          </AuthRoute>
        } />
        <Route path="/otpVerification" element={
          <ProtectedRoute>
            <OTPVerification />
            </ProtectedRoute>
        } />
        <Route path="/updatePassword" element={
          <ProtectedRoute>
            <UpdatePassword />
            </ProtectedRoute>
        } />
        <Route path="/createProfile" element={
          <ProtectedRoute>
            <CreateProfile />
            </ProtectedRoute>
        } />

        {/* Protected Routes - Only accessible when logged in */}
        <Route path="/homepage" element={
          // <ProtectedRoute>
            <Popup />
          // </ProtectedRoute>
        } />
        <Route path="/homepage_Without_popup" element={
          // <ProtectedRoute>
            <Homepage />
          // </ProtectedRoute>
        } />
        <Route path="/about" element={
          // <ProtectedRoute>
            <About />
          // </ProtectedRoute>
        } />
        <Route path="/contact" element={
          // <ProtectedRoute>
            <ContactPage />
          // </ProtectedRoute>
        } />
        <Route path="/pp" element={
          // <ProtectedRoute>
            <ProductPage />
          // </ProtectedRoute>
        } />
        <Route path="/animation" element={
          // <ProtectedRoute>
            <Animation />
          // </ProtectedRoute>
        } />
        <Route path="/profile-page" element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        } />
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