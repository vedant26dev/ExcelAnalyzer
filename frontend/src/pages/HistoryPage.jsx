// src/pages/HistoryPage.jsx
import React, { useEffect, useState } from 'react';
import axios from '../api/axios'; // Assuming axios instance is here

const HistoryPage = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = localStorage.getItem('userId'); // Assuming user ID is stored in localStorage

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`/api/files/history/${userId}`);
        setHistory(response.data.files || []); // Assuming the history is in response.data.files
      } catch (err) {
        setError('Failed to fetch history.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchHistory();
    } else {
      setError('User not logged in.');
      setLoading(false);
    }
  }, [userId]);

  const handleDelete = async (fileId) => {
    try {
      await axios.delete(`/api/files/delete/${userId}/${fileId}`);
      setHistory(history.filter(file => file._id !== fileId));
    } catch (err) {
      setError('Failed to delete file.');
      console.error(err);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Your History</h1>
      {loading && <p>Loading history...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <ul>
          {history.length > 0 ? (
            history.map((file) => (
              <li key={file._id} className="mb-2 flex justify-between items-center">
                <span>{file.name} - {new Date(file.uploadedAt).toLocaleDateString()}</span>
                <button
                  onClick={() => handleDelete(file._id)}
                  className="ml-4 p-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <p>No history found.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default HistoryPage;
