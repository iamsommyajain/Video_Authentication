import React from 'react';
import Navbar from './components/Navbar';
import UploadVideo from './components/UploadVideo';
import VerificationResults from './components/VerificationResults';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto py-8">
          <Routes>
            <Route path="/" element={<UploadVideo />} />
            <Route path="/results" element={<VerificationResults />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
