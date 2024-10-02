import React, { useState } from 'react';
import axios from 'axios';

function UploadVideo() {
  const [video, setVideo] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!video) {
      setMessage('Please select a video to upload.');
      return;
    }
    
    const formData = new FormData();
    formData.append('file', video);
    
    setUploading(true);
    
    try {
      const response = await axios.post('API_URL/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Upload successful!');
      // Redirect to results page with response data
    } catch (error) {
      setMessage('Upload failed. Try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Upload Video for Verification</h2>
      <input type="file" onChange={handleFileChange} />
      <button 
        onClick={handleUpload} 
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Upload Video'}
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}

export default UploadVideo;
