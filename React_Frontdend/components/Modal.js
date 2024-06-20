import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';
import doctorImage from '../doctor.png';
import radiographerImage from '../radiographer.png';
import tickIcon from '../check.png'; // Green check image

const Modal = ({ isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  const selectOption = (option) => {
    setSelectedOption(option); // Set the selected option
  };

  const handleConfirm = () => {
    if (selectedOption) {
      localStorage.setItem('selectedProfession', selectedOption);  // Save the selected profession in local storage
      navigate('/login');
      onClose();
    } else {
      alert('Please select an option first!');
    }
  };
  

  if (!isOpen) return null; // Render nothing if the modal is not open

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <div className="modal-header">
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="modal-content">
          <h2>Choose Your Profession</h2>
          <div className="option-grid">
            <div className="option" onClick={() => selectOption('radiographer')}>
              <img src={radiographerImage} alt="Radiographer" />
              {selectedOption === 'radiographer' && <img src={tickIcon} alt="Selected" style={{ width: '20px', height: 'auto', position: 'absolute', top: '80%', right: '-10px', transform: 'translateY(-50%)' }} />}
              <p>Radiographer</p>
            </div>
            <div className="option" onClick={() => selectOption('doctor')}>
              <img src={doctorImage} alt="Doctor" />
              {selectedOption === 'doctor' && <img src={tickIcon} alt="Selected" style={{ width: '20px', height: 'auto', position: 'absolute', top: '80%', right: '-05px', transform: 'translateY(-50%)' }} />}
              <p>Doctor</p>
              </div>
          </div>
          <div className="button-container">
            <button className="confirm-button" onClick={handleConfirm}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
