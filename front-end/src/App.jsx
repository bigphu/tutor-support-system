import React from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom'; // Added Navigate

// Components
import Navbar from './components/nav-bar/Navbar.jsx';
import Background from './components/background/Background.jsx';
import Footer from './components/footer/Footer.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

// Pages
import Home from './pages/home/Home.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import MyLinks from './pages/my-links/MyLinks.jsx';
import Discovery from './pages/discovery/Discovery.jsx';
import Profile from './pages/profile/Profile.jsx';
import Page404 from './pages/page-404/Page404.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';

import './App.css';

const App = () => {
  const location = useLocation();

  // 1. Show Navbar only on these specific paths
  const showNavbarRoutes = ['/home', '/dashboard', '/mylinks', '/discovery', '/profile'];
  const showNavbar = showNavbarRoutes.includes(location.pathname);

  // 2. Hide Background on Login and Register pages
  const hideBackgroundRoutes = [];
  const showBackground = !hideBackgroundRoutes.includes(location.pathname);

  return (
    <div className='App'>
      <div className='main row'>

        {showNavbar && <Navbar />}
        {showBackground && <Background />}

        <div className='content-container grid'>
          <Routes>
            {/* --- PUBLIC ROUTES --- */}

            {/* 1. Redirect Root '/' to '/login' automatically */}
            <Route path='/' element={<Navigate to="/login" replace />} />
            
            {/* 2. Restore the explicit Login route so 404s stop happening */}
            <Route path='/login' element={<Login />} />
            
            <Route path='/register' element={<Register />} />
            
            {/* Optional Home Route */}
            <Route path='/home' element={<Home />} />

            {/* --- PROTECTED ROUTES --- */}
            <Route path='/dashboard' element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />

            <Route path='/mylinks' element={
              <ProtectedRoute>
                <MyLinks />
              </ProtectedRoute>
            } />

            <Route path='/discovery' element={
              <ProtectedRoute>
                <Discovery />
              </ProtectedRoute>
            } />

            <Route path='/profile' element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />

            {/* catch-all */}
            <Route path='*' element={<Page404 />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;