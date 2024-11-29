import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Assets from './components/Assets';
import Liabilities from './components/Liabilities';
import Reports from './components/Reports';
import Goals from './components/Goals';
import Login from './components/Login';
import Register from './components/Register';
import Settings from './components/Settings';

const App = () => {
  return (
    <Router>
      <Navbar state="Logout" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/liabilities" element={<Liabilities />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
