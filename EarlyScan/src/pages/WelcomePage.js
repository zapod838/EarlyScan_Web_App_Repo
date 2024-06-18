// src/LaunchPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../components/Modal'; // Import the modal component
import welcomeImage from '../Launch_Page.jpeg';
import './LaunchPage.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const LaunchPage = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [actionType, setActionType] = useState('');

  const openModal = (action) => {
    setActionType(action);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAction = (action) => {
    closeModal();
    navigate(`/${action}`); // Assuming you have routes like '/login' and '/signup'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <h2>{actionType === 'login' ? 'Login' : 'Signup'} to EarlyScan</h2>
        <button onClick={() => handleAction(actionType)}>{actionType === 'login' ? 'Proceed to Login' : 'Proceed to Signup'}</button>
      </Modal>
      <header className="header">
        <div className="company-name"><span className="text-blue-500">Early</span>Scan</div>
        <nav>
          <Link to="/about-us">About</Link>
          <Link to="/support">Support</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main className="main-content">
        <div className="text-section">
          <h1>BREAST CANCER ANALYZER</h1>
          <h2>Early Detection Saves Lives</h2>
          <p>Our innovative application leverages advanced AI technology to analyze mammogram images with high precision, providing early detection and peace of mind from the comfort of your home. Stay proactive about your health with reliable and quick examinations</p>
          <div className="buttons-container">
            <button className="button button-login" onClick={() => openModal('login')}>Login</button>
            <button className="button button-signup" onClick={() => openModal('signup')}>Signup</button>
          </div>
        </div>
        <div className="image-container">
          <img src={welcomeImage} alt="Welcome banner showing support for breast cancer patients" />
        </div>
      </main>
      <div className="footer">
        <ArrowBackIosIcon className="footer-arrow" />
        <div className="footer-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <ArrowForwardIosIcon className="footer-arrow" />
      </div>
    </div>
  );
};

export default LaunchPage;
