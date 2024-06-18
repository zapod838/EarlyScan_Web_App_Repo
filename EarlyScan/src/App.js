import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import DoctorDashboard from './pages/Doctor'; // Ensure you create this component

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/doctor-dashboard" element={<DoctorDashboard />} /> // New route for doctor dashboard
    </Routes>
  </Router>
);

export default App;
