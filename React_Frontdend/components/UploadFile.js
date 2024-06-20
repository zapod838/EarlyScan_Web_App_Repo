import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import './styles.css'; // Make sure this path is correct
import DoctorSvg from '../Doctors-bro.svg'; // Make sure the path to your SVG is correct


const UploadFile = ({ onFileUpload, label }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileUpload(file);
  };

  return (
<div className="p-11 bg-gradient-to-r from-blue-start to-blue-end text-black rounded-lg shadow-custom-high w-full max-w-2xl">
      <div className="flex flex-col items-start">
        <h2 className="text-2xl font-semibold mb-2">Breast Cancer Detector</h2> {/* Increased font size */}
        <h3 className="text-2xs font-medium mb-6">Decision-Support Software</h3>
        <div className="flex items-center mb-6">
          <div className="vertical-bar mr-4"></div> {/* Custom vertical bar now outside and taller */}
          <div className="text-xs"> {/* Decreased text size for these descriptions */}
            <div>Aiding the physician in detecting</div>
            <div>Malignant, Benign and Normal</div>
            <div>cases</div>
          </div>
        </div>
        <div className="border-2 border-dashed border-[#27496D] p-6 rounded-lg bg-white flex flex-col items-center mb-4">
          <FaCloudUploadAlt className="text-2xl mb-2" /> {/* Icon above the label */}
          <input
            type="file"
            className="hidden"
            id="file-upload"
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center text-xs"> {/* Smaller font for drag and drop */}
            <span>Drag & Drop or Choose file</span>
          </label>
        </div>
        <button className="bg-[#407BFF] hover:bg-[#6593ff] text-white font-semibold rounded py-2 px-4 w-48 text-1xs"> {/* Smaller font and black font color */}
          Diagnose
        </button>
        </div>
        <div style={{ position: 'relative', height: '-10px' }}> {/* Needs explicit height if children are positioned absolutely */}
          <div className="form-container"> {/* Form container might be statically positioned */}
            {/* Form elements */}
          </div>
          <div style={{ position: 'absolute', right: -30, top: -300 }}> {/* Position image absolutely within the parent */}
            <img src={DoctorSvg} alt="Doctor" style={{ width: '300px', height: 'auto' }} />
          </div>
        </div>
    </div>
  );
};

export default UploadFile;
