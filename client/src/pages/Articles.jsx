import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { HiCheck, HiArrowRight } from 'react-icons/hi';
import './Article.css'
const Articles = () => {
  const [prediction, setPrediction] = useState(null);
  const [matchingRows, setMatchingRows] = useState([]);
  const [allRows, setAllRows] = useState([]); 
  const skillToMatch = 'Javascript'; 
  const [mountCount, setMountCount] = useState(0); 
   

  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };


  useEffect(() => {
    console.log('Articles component mounted');
    const fetchData = async () => {
      try {
        const mockPrediction = 4;
        setPrediction(mockPrediction);
  
        const response = await fetch(`http://localhost:3001/api/getRows/${mockPrediction}/${skillToMatch}`);
        const data = await response.json();
  
        console.log('Matching rows from API:', data);
  
        const shuffledRows = shuffleArray(data);
        const renderedRows = shuffledRows.slice(0,10);
        console.log(renderedRows);
        setMatchingRows(renderedRows);
        setMountCount((prevCount) => prevCount + 1);
      } catch (error) {
        console.error('Error loading or predicting with the model:', error);
      }
    };
  
    fetchData();
  }, []); 
  
  return (
    <div className="articles-container">
    {mountCount >= 2 && matchingRows.length > 0 && (
      <div>
        <h1 className="main-heading">Recommended Articles</h1>
        <ul className="article-list">
          {matchingRows.map((row, index) => (
            <li key={row.id || index} className="article-item">
              <p className="article-title">
                {index + 1}:{" "}
                <a href={row.Url} target="_blank" rel="noopener noreferrer">
                  {row.Title}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    )}


<div className="buttons-container">
        <Link to="/roadmap" className="button-link">
          <Button
            type="button"
            btnStyle="flex items-center gap-2 text-white dark:text-slate-800 bg-[#58CC02] hover:bg-[#4CAD02]"
            title="Roadmap"
            icon={<HiArrowRight className="w-5 h-5" />}
          />
        </Link>

        <Link to="/dashboard">
          <Button 
                type="button"
                btnStyle="flex justify-center items-center gap-2 text-white dark:text-slate-800 bg-[#58CC02] hover:bg-[#4CAD02]"
                // onClick={()=>gg}
                title="Continue"
                href="/dashboard"
                icon={<HiArrowRight className="w-5 h-5" />}
                
                
              />
            </Link>
      </div>
  </div>



  );
};

export default Articles;
