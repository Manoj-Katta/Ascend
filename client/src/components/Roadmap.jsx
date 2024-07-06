import React, { useEffect, useState } from 'react';
import flowchart from 'flowchart.js';
import { Link } from 'react-router-dom';
import Button from './Button';
import { HiCheck, HiArrowRight } from 'react-icons/hi';
const Roadmap = ({ roadmapData }) => {

  const [result,setResult] = useState('');
  useEffect(() => {
    const generateRoadmapCode = (data) => {
      let code = 'st=>start: Start\n';

      data.forEach(({ Skill, Roadmap, Link }) => {
        code += `${Skill}=>operation: ${Roadmap}\n`;
        code += `${Skill}(link)->${Link}\n`;
      });

      code += 'e=>end: End\n';

      return code;
    };

    const roadmapCode = generateRoadmapCode(roadmapData);

    const diagram = flowchart.parse(roadmapCode);
    const diagramContainer = document.getElementById('roadmap-container');
    // diagramContainer.innerHTML = '';
    // diagram.drawSVG('roadmap-container');
  }, [roadmapData]);

  const predictArticles=()=>{
    console.log("articles");
  }

  return (
    <div>
      <style>
        {`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          
          body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            background: #000000;
          }
          
          .timeline {
            position: relative;
            width: 100%;
            max-width: 1140px;
            margin: 0 auto;
            padding: 15px 0;
            
          }
          
          .timeline::after {
            content: '';
            position: absolute;
            width: 2px;
            background: #000000;
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -1px;
            
          }
          
          .container {
            padding: 15px 30px;
            position: relative;
            background: inherit;
            width: 50%;
          }
          
          .container.left {
            left: 0;
          }
          
          .container.right {
            left: 50%;
          }
          
          .container::after {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            top: calc(50% - 8px);
            right: -8px;
            background: #000000;
            border: 2px solid #000000;
            border-radius: 16px;
            z-index: 1;
          }
          
          .container.right::after {
            left: -8px;
          }
          
          .container::before {
            content: '';
            position: absolute;
            width: 50px;
            height: 2px;
            top: calc(50% - 1px);
            right: 8px;
            background: #000000;
            z-index: 1;
          }
          
          .container.right::before {
            left: 8px;
          }
          
          .container .date {
            position: absolute;
            display: inline-block;
            top: calc(50% - 8px);
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            color: #000000;
            text-transform: uppercase;
            letter-spacing: 1px;
            z-index: 1;
          }
          
          .container.left .date {
            right: -75px;
          }
          
          .container.right .date {
            left: -75px;
          }
          
          .container .icon {
            position: absolute;
            display: inline-block;
            width: 40px;
            height: 40px;
            padding: 9px 0;
            top: calc(50% - 20px);
            background: #9333ea;
            border: 2px solid #000000;
            border-radius: 40px;
            text-align: center;
            font-size: 18px;
            color: #000000;
            z-index: 1;
          }
          
          .container.left .icon {
            right: 56px;
          }
          
          .container.right .icon {
            left: 56px;
          }
          
          .container .content {
            padding: 30px 90px 30px 30px;
            background: #9333ea;
            position: relative;
            border-radius: 0 500px 500px 0;
            background: linear-gradient(to right, #c355f6 0%, #c355f6 100%)
          }
          
          .container.right .content {
            padding: 30px 30px 30px 90px;
            border-radius: 500px 0 0 500px;
          }
          
          .container .content h2 {
            margin: 0 0 10px 0;
            font-size: 18px;
            font-weight: normal;
            color: #000000;
          }
          
          .container .content p {
            margin: 0;
            font-size: 16px;
            line-height: 22px;
            color: #000000;
          }
          
          @media (max-width: 767.98px) {
            .timeline::after {
              left: 90px;
            }
          
            .container {
              width: 100%;
              padding-left: 120px;
              padding-right: 30px;
            }
          
            .container.right {
              left: 0%;
            }
          
            .container.left::after, 
            .container.right::after {
              left: 82px;
            }
          
            .container.left::before,
            .container.right::before {
              left: 100px;
              border-color: transparent #000000 transparent transparent;
            }
          
            .container.left .date,
            .container.right .date {
              right: auto;
              left: 15px;
            }
          
            .container.left .icon,
            .container.right .icon {
              right: auto;
              left: 146px;
            }
          
            .container.left .content,
            .container.right .content {
              padding: 30px 30px 30px 90px;
              border-radius: 500px 0 0 500px;
            }

            .buttons-container {
              display: flex;
              margin-top: 20px; /* Add margin at the top if needed */
            }
            
            .button-link {
              text-decoration: none;
            }
            
            /* Adjust the margin between buttons based on your preference */
            .button-link:first-child {
              margin-right: 10px;
            }
            
            .button-link:last-child {
              margin-left: 10px;
            }
          }
        `}
      </style>

      <div id="roadmap-container"></div>
      <div className="timeline">
        <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables">
          <div className="container left">
            <i className="icon fa fa-home"></i>
            <div className="content">
              <h2>All About Variables</h2>
            </div>
          </div>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures">
        <div className="container right">
          <i className="icon fa fa-gift"></i>
          <div className="content">
            <h2>Datatypes in JS</h2>
          </div>
        </div>
        </a>
        <a href="https://www.w3schools.com/js/js_type_conversion.asp">
        <div className="container left">
          <i className="icon fa fa-user"></i>
          <div className="content">
            <h2>Typecasting in JS</h2>
          </div>
        </div>
        </a>
        <a href="https://www.freecodecamp.org/news/how-to-loop-through-an-array-in-javascript-js-iterate-tutorial/">
        <div className="container right">
          <i className="icon fa fa-running"></i>
          <div className="content">
            <h2>Loops and Iteration</h2>
          </div>
        </div>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Glossary/Control_flow">
        <div className="container left">
          <i className="icon fa fa-cog"></i>
          <div className="content">
            <h2>Control Flow</h2>
          </div>
        </div>
        </a>
        <a href="https://www.w3schools.com/js/js_strict.asp">
        <div className="container right">
          <i className="icon fa fa-certificate"></i>
          <div className="content">
            <h2>Strict Mode</h2>
          </div>
        </div>
        </a>
        <a href="https://javascript.info/async-await">
        <div className="container left">
          <i className="icon fa fa-cog"></i>
          <div className="content">
            <h2>async/await</h2>
          </div>
        </div>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules">
        <div className="container right">
          <i className="icon fa fa-certificate"></i>
          <div className="content">
            <h2>ESModules</h2>
          </div>
        </div>
        </a>
        <a href="https://developer.chrome.com/docs/devtools/javascript/">
        <div className="container left">
          <i className="icon fa fa-certificate"></i>
          <div className="content">
            <h2>Debug Javascript</h2>
          </div>
        </div>
        </a>
        <a href="https://medium.com/coding-blocks/catching-memory-leaks-with-chrome-devtools-57b03acb6bb9">
        <div className="container right">
          <i className="icon fa fa-certificate"></i>
          <div className="content">
            <h2>Debugging using Chrome dev tools</h2>
          </div>
        </div>
        </a>
        <a href="https://www.w3schools.com/whatis/whatis_frontenddev.asp">
        <div className="container left">
          <i className="icon fa fa-certificate"></i>
          <div className="content">
            <h2>Frontend</h2>
          </div>
        </div>
        </a>

      </div>
      <div className="buttons-container">
        <Link to="/articles" className="button-link">
          <Button
            type="button"
            btnStyle="flex items-center gap-2 text-white dark:text-slate-800 bg-[#58CC02] hover:bg-[#4CAD02]"
            title="Article"
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

export default Roadmap;
