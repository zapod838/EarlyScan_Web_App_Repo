import React from 'react';
import Header from '../components_doc/Header/Header';
import Sidebar from '../components_doc/Sidebar/Sidebar';
import WelcomeBack from '../components_doc/WelcomeBack';
import Appointments from '../components_doc/Appointments/Appointments';
import ScanOverview from '../components_doc/ScanOverview/ScanOverview';
import ScanResults from '../components_doc/ScanResults'; // Adjust path as necessary
import PatientTrends from '../components_doc/PatientTrends'; // Adjust path as necessary

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <Sidebar />
      <div className="flex-grow flex flex-col ml-44">
        <Header style={{ marginBottom: '10px' }} />
        <div className="flex-grow flex flex-row p-4">
        <div className="flex flex-col w-full md:w-2/3"> {/* Adjust width for responsiveness */}
        <WelcomeBack />
            <ScanOverview />
            <div className="flex flex-row"> {/* Changed to flex-row for side-by-side layout */}
              <div className="w-1/2"> {/* Half width */}
                <ScanResults />
              </div>
              <div className="w-1/2"> {/* Half width */}
                <PatientTrends />
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-grow">
            <Appointments />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
