import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Auth from '../utils/auth';

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [collections, setCollections] = useState([]);

  // If the user is not logged in, redirect to the login page
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/collections');
        if (!response.ok) {
          throw new Error('Failed to fetch collections');
        }
        const data = await response.json();
        console.log('Fetched collections:', data);
        setCollections(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching collections:', error);
        setError('Error fetching collections');
        setLoading(false);
      }
    };
  
    fetchCollections();
  }, []);

  useEffect(() => {
    // Dynamically load the Botpress scripts
    const botpressScript1 = document.createElement('script');
    botpressScript1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    document.head.appendChild(botpressScript1);

    const botpressScript2 = document.createElement('script');
    botpressScript2.src = 'https://mediafiles.botpress.cloud/4ffea5b3-df9d-42b6-ab1f-7ed8020e18f2/webchat/config.js';
    botpressScript2.defer = true;
    document.head.appendChild(botpressScript2);

    // Clean up the dynamically added scripts on component unmount
    return () => {
      document.head.removeChild(botpressScript1);
      document.head.removeChild(botpressScript2);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section id="dashboard" className="w-full min-h-screen p-4 md:p-8">
      <h1 className="h1-style mb-8">Dashboard</h1>
      {/* Banner */}
      <div className="mb-8 banner-container-style text-white text-shadow bg-gradient-to-r from-purple-600 to-pink">
        <div className="relative p-8 z-10">
          <h2 className="banner-heading mb-3">Welcome {user.username}!</h2>
          <p className="text-lg">Your adventure begins here</p>
        </div>
        <div className="banner-bg-style bg-parkay-floor" />
      </div>
      <div className="mb-8">
        <p>
          These quizzes are intended to aid you in practicing the skills you've learned on <strong>Ascend: A Test Platform</strong>.
        </p>
        <br />
        <p>Select an exercise from a lesson to begin a quiz.</p>
      </div>

      <h3 className="font-bold mb-4 text-xl">Skills</h3>
      {/* Collections */}
      <div className="flex flex-col gap-6 p-4">
      {collections.map((collection) => (
        <div key={collection} className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl p-6 shadow-lg">
          <h4 className="text-2xl font-bold text-white border-b-2 border-white pb-2 mb-4">{collection}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lesson-box flex justify-start">
              <Link to={`/quiz/${collection}`} className="quiz-button bg-white text-purple-600 font-semibold py-2 px-4 rounded-md hover:bg-purple-600 hover:text-white transition-colors duration-300">
                Start Quiz
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    </section>
  );
};

export default Dashboard;
