import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AppointmentWidget.css';

const AppointmentWidget = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:3001/appointments');
        setAppointments(response.data.slice(0, 8)); // Limit to first 10 appointments
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  const getRowClassName = (status) => {
    return `row-${status.replace(/\s+/g, '-').toLowerCase()}`;
  };
  
  return (
    <div className="appointment-widget">
      <table>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Doctor Assigned</th>
            <th>Specialize</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index} className={getRowClassName(appointment.Status)}>
              <td>{appointment['Patient ID']}</td>
              <td>{appointment.Doctor}</td>
              <td>{appointment.Specialize}</td>
              <td>{appointment.Date}</td>
              <td>{appointment.Time}</td>
              <td>{appointment.Status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );  
};

export default AppointmentWidget;
