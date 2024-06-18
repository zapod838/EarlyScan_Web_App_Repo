import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StreamGraph from '../components/AreaGraph'; // Correct import path
import DiagnosisPieChart from '../components/PieChart';
import UploadFile from '../components/UploadFile';
import AppointmentWidget from '../components/AppointmentWidget';
import StatsRow from '../components/StatsRow';
import axios from 'axios';
import '../components/styles.css'; // Ensure this path is correct

const HomePage = () => {
  const [weeklyCases, setWeeklyCases] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [diagnosisData, setDiagnosisData] = useState([]);

  useEffect(() => {
    // Fetch stream graph data
    axios.get('http://localhost:3001/stream-graph-data')
      .then((response) => {
        console.log('Stream Graph Data:', response.data); // Log the data
        setWeeklyCases(response.data);
      })
      .catch((error) => {
        console.error('Error fetching stream graph data:', error);
      });

    // Fetch appointments data
    axios.get('http://localhost:3001/appointments')
      .then((response) => {
        console.log('Appointments Data:', response.data); // Log the data
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching appointments data:', error);
      });

    // Fetch diagnosis data
    axios.get('http://localhost:3001/malignant-cases-by-age')
      .then((response) => {
        console.log('Diagnosis Data:', response.data); // Log the data
        setDiagnosisData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching diagnosis data:', error);
      });
  }, []);

  const handleFileUpload = (file) => {
    // Implement file upload logic here
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Here you would handle the search logic based on the input
    console.log('Search submitted');
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <Sidebar />
      <div className="flex-grow flex flex-col ml-48">
        <Header style={{ marginBottom: '10px' }} />
        <div className="p-4 flex-grow">
          <StatsRow style={{ marginTop: '10px' }} className="mb-6" />
          <div className="grid grid-cols-2 grid-rows-2 gap-4 mb-6">
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-3">Upload Mammograms</h2>
              <UploadFile onFileUpload={handleFileUpload} label="Upload Breast X-Ray" />
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-3">Test Taken by Week</h2>
              <div className="inner-box bg-red-100 shadow rounded-lg p-4" style={{ height: '405px' }}>
                {weeklyCases.length > 0 ? (
                  <StreamGraph data={weeklyCases} />
                ) : (
                  <p>Loading data...</p>
                )}
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-3">Malignant Cases by Age Group</h2>
              <div className="inner-box bg-red-100 p-4 shadow rounded-lg p-4" style={{ height: '402px' }}>
                {diagnosisData.length > 0 ? (
                  <DiagnosisPieChart data={diagnosisData} />
                ) : (
                  <p>Loading data...</p>
                )}
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-3">Upcoming Appointments</h2>
              <AppointmentWidget appointments={appointments} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
