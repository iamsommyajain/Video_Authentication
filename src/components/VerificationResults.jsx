import React from 'react';

function VerificationResults() {
  // In a real scenario, this data would be fetched based on video ID
  const verificationData = {
    status: 'Verified',
    creator: 'John Doe',
    tampered: false,
    timestamp: '2024-09-28',
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Verification Results</h2>
      <p>Status: {verificationData.status}</p>
      <p>Creator: {verificationData.creator}</p>
      <p>Tampered: {verificationData.tampered ? 'Yes' : 'No'}</p>
      <p>Timestamp: {verificationData.timestamp}</p>
    </div>
  );
}

export default VerificationResults;
