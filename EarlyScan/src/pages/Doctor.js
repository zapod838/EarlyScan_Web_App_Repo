import React from 'react';
import Header from '../components_doc/Header/Header';
import Sidebar from '../components_doc/Sidebar/Sidebar';
import WelcomeBack from '../components_doc/WelcomeBack';
import Appointments from '../components_doc/Appointments/Appointments';
import ScanOverview from '../components_doc/ScanOverview/ScanOverview';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <Sidebar />
      <div className="flex-grow flex flex-col ml-44"> {/* Reduced margin-left */}
        <Header />
        <div className="flex-grow flex flex-row p-4"> {/* Reduced padding around flex-row */}
          <div className="flex flex-col w-2/3"> {/* Allocate width */}
            <WelcomeBack />
            <ScanOverview /> {/* Make sure ScanOverview takes full width */}
          </div>
          <div className="flex flex-col w-1/3"> {/* Allocate width */}
            <Appointments />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
