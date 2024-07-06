import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';
import { AiOutlineLoading } from 'react-icons/ai';

const Profile = () => {
  // State to store user data and loading state
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch user data from the server
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = Auth.getToken();
        const response = await fetch('http://localhost:3001/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = await response.json();
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // If the user is not logged in, redirect to the login page
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  // Get the first letter of the user's username
  const firstLetter = user.username?.charAt(0).toUpperCase();

  return (
    <section id="profile" className="w-full min-h-screen p-4 md:p-8">
      {/* Page Heading */}
      <h1 className="h1-style mb-8">Profile</h1>
      {/* Loading Spinner */}
      {loading && <AiOutlineLoading className="animate-spin h-12 w-12 mx-auto" />}
      {/* Profile Info */}
      <div className="box-container-style mb-8 flex flex-col sm:flex-row items-center gap-4">
        <div className="w-32 h-32 bg-primary rounded-full flex justify-center items-center uppercase font-bold text-6xl text-white">
          {firstLetter}
        </div>
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h2 className="text-2xl font-bold">{user.username}</h2>
          <p className="text-gray-500 dark:text-gray-400">{`Joined ${user.createdAt}`}</p>
        </div>
      </div>
      {/* Profile Statistics */}
      <div className="box-container-style mb-8 flex flex-col gap-4">
        <h3 className="text-xl font-bold">Statistics</h3>
        <div>
          <h4 className="text-gray-500 dark:text-gray-400">Total XP:</h4>
          <h2 className="text-2xl font-bold">{user.experience}</h2>
        </div>
      </div>
    </section>
  );
};

export default Profile;
