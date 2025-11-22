import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/nav-bar/Navbar.jsx';
// import Background from './components/background/Background.jsx';
import Footer from './components/footer/Footer.jsx';

import Home from './pages/home/Home.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import MyLinks from './pages/my-links/MyLinks.jsx';
import Discovery from './pages/discovery/Discovery.jsx';
import Profile from './pages/profile/Profile.jsx';
import Page404 from './pages/page-404/Page404.jsx';

import './App.css';

const App = () => {
  const location = useLocation();

  // List of routes where Navbar should show
  const showNavbarRoutes = ['/', '/login', '/dashboard', '/mylinks', '/discovery', '/profile'];

  const showNavbar = showNavbarRoutes.includes(location.pathname);

  return (
    <div className='App'>
      <div className='main row'>

        {showNavbar && <Navbar />}

        <div className='content-container grid'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/mylinks' element={<MyLinks />} />
            <Route path='/discovery' element={<Discovery />} />
            <Route path='/profile' element={<Profile />} />

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
