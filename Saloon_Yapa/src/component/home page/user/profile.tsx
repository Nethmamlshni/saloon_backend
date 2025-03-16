import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<{ username: string; email: string; TPNumber: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editing, setEditing] = useState<boolean>(false);
  const [updatedUser, setUpdatedUser] = useState<{ username: string; email: string; TPNumber: string }>({
    username: '',
    email: '',
    TPNumber: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          setError('User not authenticated');
          return;
        }

        // Decode JWT token
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        const userId = decodedToken.userId;

        // Fetch user data
        const response = await axios.get(`http://localhost:3000/api/users/user/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(response.data);
        setUpdatedUser(response.data); // Set the form fields with user data
      } catch (error: any) {
        setError(error.response?.data?.message || 'Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  // Handle update submission
  const handleUpdateProfile = async () => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('User not authenticated');
            return;
        }

        // Decode JWT token
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        const userId = decodedToken.userId;

        // Send PUT request
        const response = await axios.put(
            `http://localhost:3000/api/users/user/${userId}`,
            updatedUser,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,  // Add the token in the header
              },
            }
        );

        console.log('Update successful:', response.data);
        setUser(response.data.user);
        setEditing(false);
        alert('Profile updated successfully!');
    } catch (error: any) {
        console.error('Update error:', error.response?.data || error.message);
        setError(error.response?.data?.message || 'Failed to update user data');
    }
};

  if (loading) return <div className="text-white text-center mt-10">Loading...</div>;

  if (error) {
    return (
      <div className="text-white text-center mt-10">
        <h1 className="text-2xl font-semibold">Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">User Profile</h1>
        {user && !editing ? (
          <div>
            <p className="mb-2"><strong>Username:</strong> {user.username}</p>
            <p className="mb-2"><strong>Email:</strong> {user.email}</p>
            <p className="mb-4"><strong>TP Number:</strong> {user.TPNumber}</p>
            <button
              onClick={() => setEditing(true)}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              name="username"
              value={updatedUser.username}
              onChange={handleChange}
              className="w-full mb-2 p-2 rounded bg-gray-700 text-white"
              placeholder="Username"
            />
            <input
              type="email"
              name="email"
              value={updatedUser.email}
              onChange={handleChange}
              className="w-full mb-2 p-2 rounded bg-gray-700 text-white"
              placeholder="Email"
            />
            <input
              type="text"
              name="TPNumber"
              value={updatedUser.TPNumber}
              onChange={handleChange}
              className="w-full mb-4 p-2 rounded bg-gray-700 text-white"
              placeholder="Telephone Number"
            />
            <button
              onClick={handleUpdateProfile}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-200 mb-2"
            >
              Save Changes
            </button>
            <button
              onClick={() => setEditing(false)}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
