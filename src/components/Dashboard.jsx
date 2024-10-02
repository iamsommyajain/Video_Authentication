import React from 'react';

function Dashboard() {
  // Dummy data for uploaded videos
  const videos = [
    { id: 1, title: 'My First Video', verified: true },
    { id: 2, title: 'Holiday Clip', verified: false },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Videos</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id} className="mb-2">
            {video.title} - {video.verified ? 'Verified' : 'Unverified'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
