import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CompleteScreen = () => {
  const location = useLocation();
  const { score, timeTaken, totalQuestions } = location.state || { score: 0, timeTaken: 0, totalQuestions: 0 };

  // Calculate the percentage score
  const percentageScore = (score / totalQuestions) * 100;

  return (
    <div className="grow flex flex-col justify-center items-center text-center gap-8">
      <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">Quiz Complete!</h1>
      <hr className="w-full max-w-2xl border-4 border-primary" />
      {/* Quiz Statistics Cards */}
      <div className="w-full max-w-2xl flex flex-row gap-2 sm:gap-4 md:gap-8 font-bold">
        {/* Score Card */}
        <div className="quiz-stat-container bg-amber-400">
          {/* Card Header */}
          <div className="p-1">
            <h2 className="uppercase">Score</h2>
          </div>
          {/* Card Body */}
          <div className="quiz-stat-body">
            <h3 className="text-amber-700 dark:text-amber-400">{score} / {totalQuestions}</h3>
            <p className="text-xs">({percentageScore.toFixed(2)}%)</p>
          </div>
        </div>

        {/* Time Card */}
        <div className="quiz-stat-container bg-lime-400">
          {/* Card Header */}
          <div className="p-1">
            <h2 className="uppercase">Time</h2>
          </div>
          {/* Card Body */}
          <div className="quiz-stat-body">
            <h3 className="text-lime-700 dark:text-lime-400">{timeTaken}s</h3>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-4">
        <Link to="/dashboard">
          <button className="btn btn-primary ">
            Back to Dashboard
          </button>
        </Link>
        <Link to="/roadmap">
          <button className="btn btn-secondary">
            Roadmap
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CompleteScreen;
