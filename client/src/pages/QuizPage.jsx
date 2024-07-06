import React, { useState, useEffect } from 'react';
import { Link, Navigate, useParams, useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';
import { HiX, HiCheck, HiArrowRight } from 'react-icons/hi';
import { AiOutlineLoading } from 'react-icons/ai';
import { BsFillSkipForwardFill } from 'react-icons/bs';

const QuizPage = () => {
  const { collection: skill } = useParams();
  const navigate = useNavigate();

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [startTime, setStartTime] = useState(Date.now()); // Track the start time

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3001/api/quiz/lessons/${skill}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch questions from ${skill}`);
        }
        const questionsData = await response.json();
        setQuestions(questionsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [skill]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const checkAnswer = () => {
    setLoading(true); // Start the loading state

    setTimeout(() => {
      const currentQuestion = questions[questionIndex];
      if (selectedOption === currentQuestion.answer) {
        setScore(score + 1);
      }
      setShowFeedback(true);
      setLoading(false); // End the loading state
    }, 1000); // Simulate a 1-second delay
  };

  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setQuizComplete(true);
      const endTime = Date.now();
      const timeTaken = (endTime - startTime) / 1000; // Calculate the time taken in seconds
      navigate('/completescreen', { state: { score, totalQuestions: questions.length, timeTaken } });
    }
  };

  const handleRetry = () => {
    setQuestionIndex(0);
    setScore(0);
    setQuizComplete(false);
    setSelectedOption(null);
    setStartTime(Date.now()); // Reset the start time
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (quizComplete) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>Quiz Complete!</h1>
        <p>Your Score: {score} / {questions.length}</p>
        <div className="flex gap-4 mt-4">
          <button onClick={handleRetry} className="btn">
            Retry
          </button>
          <Link to="/dashboard">
            <button className="btn">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div>No questions available.</div>;
  }

  const currentQuestion = questions[questionIndex];

  return (
    <div className="w-full h-screen p-4 py-6 md:p-0 flex flex-col">
      <div className="md:h-20">
        <div className="w-full h-full max-w-5xl mx-auto md:pt-12 md:px-4 flex items-center">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="hover:opacity-60 mr-4"
          >
            <HiX className="w-7 h-7" />
          </button>

          {/* Progress Bar */}
          <div className="bg-gray-300 dark:bg-gray-700 h-4 w-full rounded-2xl overflow-x-hidden">
            {/* Outer Bar */}
            <div
              className={`${
                ((questionIndex + 1) / questions.length) * 100 <= 0
                  ? 'opacity-0'
                  : ''
              } custom-transition h-full px-2 pt-1 bg-gradient-to-b from-primary-tint to-red-800 rounded-2xl`}
              style={{
                width: `${
                  ((questionIndex + 1) / questions.length) * 100
                }%`,
              }}
            >
              {/* Inner Bar */}
              <div className="bg-white/30 h-1 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full my-2 flex flex-col md:grid justify-center items-center md:content-center">
        <div className="w-full max-w-2xl md:w-[600px] h-full md:min-h-[450px] quiz-main-container gap-2 md:gap-6">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
            {currentQuestion.question}
          </h1>
          <div className="font-medium text-2xl sm:text-3xl md:text-4xl grid grid-cols-1 gap-2">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                type="button"
                className={`w-full h-full p-2 md:py-3 rounded-xl border-2 ${
                  selectedOption === option
                    ? 'bg-sky-200 border-2 border-sky-400 dark:bg-sky-700'
                    : 'border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-slate-800'
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="-mx-4 -mb-6 mt-4 max-md:pb-6 md:m-0 md:h-36 md:min-h-[144px] md:border-t-2 border-gray-300 dark:border-gray-700">
        <div className="w-full h-full max-w-5xl mx-auto px-4 flex items-center">
          <div className="w-full flex flex-col md:flex-row justify-between md:items-center">
            {!selectedOption ? (
              <button
                type="button"
                className="hidden md:flex justify-center items-center gap-2 text-sky-500 border-2 border-sky-500 bg-transparent hover:bg-gray-200 dark:hover:bg-slate-800"
                onClick={handleNextQuestion}
              >
                <BsFillSkipForwardFill className="w-6 h-6" />
                Skip
              </button>
            ) : (
              showFeedback ? (
                <button
                  type="button"
                  className="flex justify-center items-center gap-2 text-sky-500 border-2 border-sky-500 bg-transparent hover:bg-gray-200 dark:hover:bg-slate-800"
                  onClick={handleNextQuestion}
                >
                  <HiArrowRight className="w-6 h-6" />
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  className={`flex justify-center items-center gap-2 ${
                    loading
                      ? 'text-white dark:text-slate-800 bg-[#58CC02] dark:bg-lime-500 hover:bg-[#4CAD02] dark:hover:bg-lime-600'
                      : 'text-gray-500 bg-gray-300'
                  }`}
                  onClick={checkAnswer}
                  disabled={!selectedOption}
                >
                  {loading ? (
                    <AiOutlineLoading className="text-white dark:text-slate-800 animate-spin h-6 w-6 mx-auto" />
                  ) : (
                    <>
                      <HiCheck className="w-6 h-6" />
                      Check
                    </>
                  )}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
