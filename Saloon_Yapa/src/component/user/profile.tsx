import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function UserProfile() {
  const { userId } = useParams(); // Get userId from URL parameter
  const [userProfile, setUserProfile] = useState({
    username: "",
    email: "",
    // other fields
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (userId) {
      fetchUserProfile(userId); // Fetch profile data using userId from URL
    }
  }, [userId]);

  const fetchUserProfile = async (id : string) => {
    try {
      const token = localStorage.getItem("token"); // Get token from localStorage
      const response = await fetch(`http://localhost:3000/api/users/user/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Pass token for authorization
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserProfile(data);
        setLoading(false);
      } else {
        setError("Failed to fetch profile data.");
        setLoading(false);
      }
    } catch (error) {
      setError("Error fetching profile data.");
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p><strong>Username:</strong> {userProfile.username}</p>
      <p><strong>Email:</strong> {userProfile.email}</p>
      {/* Add other user details */}
    </div>
  );
}

export default UserProfile;
