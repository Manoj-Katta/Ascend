const lesson_0_data = {
    lessonNumber: 4,
    lessonPages: '',
    lessonTitle: 'React JS',
    lessonUrl: 'Skill-4',
    lessonUnits: [
      {
        unitTitle: 'MCQ',
        unitUrl: 'MCQ',
        unitContent: [
            {
                question: 'What is JSX in React?',
                options: [
                  { text: 'JavaScript XML, a syntax extension for JavaScript recommended by React.', isCorrect: true },
                  { text: 'JavaScript XML, a JavaScript library for building user interfaces.', isCorrect: false },
                  { text: 'JavaScript Extension, a syntax used in React for extending JavaScript functionalities.', isCorrect: false },
                  { text: 'JavaScript XML, a deprecated feature in React.', isCorrect: false },
                ],
              },
              {
                question: 'Explain the purpose of the "useState" hook in React and provide an example of its usage.',
                options: [
                  { text: '', isCorrect: true },
                  { text: 'The "useState" hook is used for making asynchronous requests in React coThe "useState" hook is used to add state to functional components in React.mponents.', isCorrect: false },
                  { text: 'The "useState" hook is a replacement for class components in React.', isCorrect: false },
                  { text: 'The "useState" hook is used for creating context in React.', isCorrect: false },
                ],
              },
              {
                question: 'What is the purpose of the "useEffect" hook in React?',
                options: [
                  { text: 'The "useEffect" hook is used for handling side effects in functional components.', isCorrect: true },
                  { text: 'The "useEffect" hook is used for defining event handlers in React components.', isCorrect: false },
                  { text: 'The "useEffect" hook is a replacement for class components in React.', isCorrect: false },
                  { text: 'The "useEffect" hook is used for creating context in React.', isCorrect: false },
                ],
              },
              {
                question: 'Explain the concept of props in React and how they are used to pass data between components.',
                options: [
                  { text: 'Props (short for properties) are used to pass data from a parent component to a child component in React.', isCorrect: true },
                  { text: 'Props are used to define state in functional components in React.', isCorrect: false },
                  { text: 'Props are used for creating context in React.', isCorrect: false },
                  { text: 'Props are a replacement for the "useState" hook in React.', isCorrect: false },
                ],
              },
              {
                question: 'What is the Virtual DOM in React, and why is it used?',
                options: [
                  { text: 'The Virtual DOM is a lightweight copy of the real DOM, used to improve performance by minimizing direct manipulation of the actual DOM.', isCorrect: true },
                  { text: 'The Virtual DOM is a feature in React for creating virtual components.', isCorrect: false },
                  { text: 'The Virtual DOM is a replacement for class components in React.', isCorrect: false },
                  { text: 'The Virtual DOM is used for defining event handlers in React components.', isCorrect: false },
                ],
              },
              {
                question: 'Explain the purpose of the "map" function in React and provide an example of its usage.',
                options: [
                  { text: 'The "map" function is used to iterate over an array and create a new array of React elements.', isCorrect: true },
                  { text: 'The "map" function is used for making asynchronous requests in React components.', isCorrect: false },
                  { text: 'The "map" function is a replacement for the "useState" hook in React.', isCorrect: false },
                  { text: 'The "map" function is used for creating context in React.', isCorrect: false },
                ],
              },
              {
                question: 'What is the purpose of the "key" prop in React when rendering lists of elements?',
                options: [
                  { text: 'The "key" prop is used to help React identify which items have changed, are added, or are removed in a list.', isCorrect: true },
                  { text: 'The "key" prop is used to define a unique identifier for a component in React.', isCorrect: false },
                  { text: 'The "key" prop is a replacement for class components in React.', isCorrect: false },
                  { text: 'The "key" prop is used for creating context in React.', isCorrect: false },
                ],
              },
              {
                question: 'Explain the concept of controlled and uncontrolled components in React forms.',
                options: [
                  { text: 'Controlled components are React components where form data is handled by the state, while uncontrolled components manage form data using the DOM.', isCorrect: true },
                  { text: 'Controlled components are React components without any form data, while uncontrolled components manage form data using the state.', isCorrect: false },
                  { text: 'Controlled components are a replacement for class components in React forms.', isCorrect: false },
                  { text: 'Controlled components are React components where form data is handled by the DOM, while uncontrolled components manage form data using the state.', isCorrect: false },
                ],
              },
              {
                question: 'Explain the purpose of the "Context API" in React and how it is used to manage state.',
                options: [
                  { text: 'The Context API is used to share state between components without explicitly passing props through each level of the component tree.', isCorrect: true },
                  { text: 'The Context API is used for defining event handlers in React components.', isCorrect: false },
                  { text: 'The Context API is a replacement for class components in React.', isCorrect: false },
                  { text: 'The Context API is used for creating context in React forms.', isCorrect: false },
                ],
              },
              {
                question: 'What is React Router, and how is it used in a React application?',
                options: [
                  { text: 'React Router is a library that enables navigation and routing functionality in React applications, allowing for the creation of single-page applications with multiple views.', isCorrect: true },
                  { text: 'React Router is a replacement for the "useState" hook in React.', isCorrect: false },
                  { text: 'React Router is a feature in React for creating virtual components.', isCorrect: false },
                  { text: 'React Router is used for defining event handlers in React components.', isCorrect: false },
                ],
              },
              {
                question: 'Explain the purpose of the "Redux" library in React and how it is used for state management.',
                options: [
                  { text: 'Redux is a predictable state container for JavaScript applications, commonly used with React to manage the state of the entire application in a predictable way.', isCorrect: true },
                  { text: 'Redux is a replacement for class components in React.', isCorrect: false },
                  { text: 'Redux is used for creating context in React.', isCorrect: false },
                  { text: 'Redux is a feature in React for creating virtual components.', isCorrect: false },
                ],
              },
              {
                question: 'What is the significance of the "shouldComponentUpdate" lifecycle method in React?',
                options: [
                  { text: 'The "shouldComponentUpdate" method is used to indicate whether a component should re-render, optimizing performance by preventing unnecessary renders.', isCorrect: true },
                  { text: 'The "shouldComponentUpdate" method is a replacement for class components in React.', isCorrect: false },
                  { text: 'The "shouldComponentUpdate" method is used for defining event handlers in React components.', isCorrect: false },
                  { text: 'The "shouldComponentUpdate" method is used to create virtual components in React.', isCorrect: false },
                ],
              },
              {
                question: 'What is the purpose of the "memo" function in React and how is it used?',
                options: [
                  { text: 'The "memo" function is used to memoize functional components, preventing unnecessary re-renders when their props do not change.', isCorrect: true },
                  { text: 'The "memo" function is a replacement for class components in React.', isCorrect: false },
                  { text: 'The "memo" function is used for defining event handlers in React components.', isCorrect: false },
                  { text: 'The "memo" function is used for creating context in React forms.', isCorrect: false },
                ],
              },
              {
                question: 'What are React Hooks, and how do they differ from class components?',
                options: [
                  { text: 'React Hooks are functions that enable the use of state and lifecycle features in functional components, eliminating the need for class components.', isCorrect: true },
                  { text: 'React Hooks are a replacement for the "useState" hook in React.', isCorrect: false },
                  { text: 'React Hooks are a feature in React for creating virtual components.', isCorrect: false },
                  { text: 'React Hooks are used for defining event handlers in React components.', isCorrect: false },
                ],
              },
              {
                question: 'Explain the purpose of the "forwardRef" function in React and provide an example of its usage.',
                options: [
                  { text: 'The "forwardRef" function allows a component to receive a ref passed through its props, useful for creating higher-order components.', isCorrect: true },
                  { text: 'The "forwardRef" function is a replacement for class components in React.', isCorrect: false },
                  { text: 'The "forwardRef" function is used for creating context in React forms.', isCorrect: false },
                  { text: 'The "forwardRef" function is used for defining event handlers in React components.', isCorrect: false },
                ],
              },
              {
                question: 'What is the purpose of the "useReducer" hook in React, and how is it used for state management?',
                options: [
                  { text: 'The "useReducer" hook is an alternative to "useState" for managing complex state logic in React applications.', isCorrect: true },
                  { text: 'The "useReducer" hook is a replacement for class components in React.', isCorrect: false },
                  { text: 'The "useReducer" hook is used for creating context in React forms.', isCorrect: false },
                  { text: 'The "useReducer" hook is used for defining event handlers in React components.', isCorrect: false },
                ],
              },
              {
                question: 'Explain the concept of React Portals and provide an example of their usage.',
                options: [
                  { text: 'React Portals allow rendering children components into a DOM element that exists outside the hierarchy of the parent component.', isCorrect: true },
                  { text: 'React Portals are a replacement for class components in React.', isCorrect: false },
                  { text: 'React Portals are used for creating context in React forms.', isCorrect: false },
                  { text: 'React Portals are used for defining event handlers in React components.', isCorrect: false },
                ],
              },
              {
                question: 'What is the purpose of the "ErrorBoundary" component in React, and how is it used?',
                options: [
                  { text: 'The "ErrorBoundary" component is used to catch JavaScript errors anywhere in the component tree and log those errors, displaying a fallback UI.', isCorrect: true },
                  { text: 'The "ErrorBoundary" component is a replacement for class components in React.', isCorrect: false },
                  { text: 'The "ErrorBoundary" component is used for creating context in React forms.', isCorrect: false },
                  { text: 'The "ErrorBoundary" component is used for defining event handlers in React components.', isCorrect: false },
                ],
              },
              {
                question: 'Explain the concept of Higher-Order Components (HOCs) in React and provide an example of their usage.',
                options: [
                  { text: 'Higher-Order Components are functions that take a component and return a new component with additional features, used for code reuse and logic abstraction.', isCorrect: true },
                  { text: 'Higher-Order Components are a replacement for class components in React.', isCorrect: false },
                  { text: 'Higher-Order Components are used for creating context in React forms.', isCorrect: false },
                  { text: 'Higher-Order Components are used for defining event handlers in React components.', isCorrect: false },
                ],
              },
              {
                question: 'What is the purpose of the "useContext" hook in React, and how is it used for accessing context values?',
                options: [
                  { text: 'The "useContext" hook is used to consume values from the React context, providing a way to access context values in functional components.', isCorrect: true },
                  { text: 'The "useContext" hook is a replacement for class components in React.', isCorrect: false },
                  { text: 'The "useContext" hook is used for creating context in React forms.', isCorrect: false },
                  { text: 'The "useContext" hook is used for defining event handlers in React components.', isCorrect: false },
                ],
              },
              {
                question: 'Explain the purpose of the "useCallback" hook in React, and provide an example of its usage.',
                options: [
                  { text: 'The "useCallback" hook is used to memoize functions in React, preventing unnecessary re-creations of functions in child components.', isCorrect: true },
                  { text: 'The "useCallback" hook is a replacement for class components in React.', isCorrect: false },
                  { text: 'The "useCallback" hook is used for creating context in React forms.', isCorrect: false },
                  { text: 'The "useCallback" hook is used for defining event handlers in React components.', isCorrect: false },
                ],
              },
              {
                question: 'What is the purpose of the "useMemo" hook in React, and how is it used for memoization?',
                options: [
                  { text: 'The "useMemo" hook is used to memoize values in React, preventing unnecessary recalculations of values in child components.', isCorrect: true },
                  { text: 'The "useMemo" hook is a replacement for class components in React.', isCorrect: false },
                  { text: 'The "useMemo" hook is used for creating context in React forms.', isCorrect: false },
                  { text: 'The "useMemo" hook is used for defining event handlers in React components.', isCorrect: false },
                ],
              },
  
          
          {
            question: 'What does the "=== " operator do in JavaScript?',
            options: [
              { text: 'Checks for equality and type', isCorrect: true },
              { text: 'Checks for equality only', isCorrect: false },
              { text: 'Checks for type only', isCorrect: false },
              { text: 'Assigns a value', isCorrect: false },
            ],
          },
          {
            question: 'How do you properly comment a single line of JavaScript code?',
            options: [
              { text: '// This is a comment', isCorrect: true },
              { text: '/* This is a comment */', isCorrect: false },
              { text: '# This is a comment', isCorrect: false },
              { text: '-- This is a comment', isCorrect: false },
            ],
          },
          {
            question: 'What is the purpose of the "let" keyword in JavaScript?',
            options: [
              { text: 'Declares a constant variable', isCorrect: false },
              { text: 'Declares a block-scoped variable', isCorrect: true },
              { text: 'Declares a global variable', isCorrect: false },
              { text: 'Declares a function', isCorrect: false },
            ],
          },
          {
            question: 'Which event is triggered when a user clicks on an HTML element?',
            options: [
              { text: 'onhover', isCorrect: false },
              { text: 'onload', isCorrect: false },
              { text: 'onclick', isCorrect: true },
              { text: 'onchange', isCorrect: false },
            ],
          },
          {
            question: 'What does the "typeof" operator return for an array?',
            options: [
              { text: 'array', isCorrect: false },
              { text: 'object', isCorrect: true },
              { text: 'string', isCorrect: false },
              { text: 'number', isCorrect: false },
            ],
          },
          {
            question: 'How can you convert a string to a number in JavaScript?',
            options: [
              { text: 'parseInt()', isCorrect: true },
              { text: 'stringToNumber()', isCorrect: false },
              { text: 'Number()', isCorrect: false },
              { text: 'convertToNumber()', isCorrect: false },
            ],
          },
        ],
      },{
        unitTitle: 'CODING',
        unitUrl: 'CODING',
        unitContent: [
          // { character: '', meanings: '' },
          {
            question: 'Which array method is used to add elements to the end of an array?',
            options: [
              { text: 'push()', isCorrect: true },
              { text: 'pop()', isCorrect: false },
              { text: 'shift()', isCorrect: false },
              { text: 'unshift()', isCorrect: false },
            ],
          },
          {
            question: 'Which of the following is a correct way to declare a JavaScript object?',
            options: [
              { text: 'const obj = ();', isCorrect: false },
              { text: 'let obj = {};', isCorrect: true },
              { text: 'var obj = [];', isCorrect: false },
              { text: 'const obj = [];', isCorrect: false },
            ],
          },
          {
            question: 'What does the "=== " operator do in JavaScript?',
            options: [
              { text: 'Checks for equality and type', isCorrect: true },
              { text: 'Checks for equality only', isCorrect: false },
              { text: 'Checks for type only', isCorrect: false },
              { text: 'Assigns a value', isCorrect: false },
            ],
          },
          {
            question: 'How do you properly comment a single line of JavaScript code?',
            options: [
              { text: '// This is a comment', isCorrect: true },
              { text: '/* This is a comment */', isCorrect: false },
              { text: '# This is a comment', isCorrect: false },
              { text: '-- This is a comment', isCorrect: false },
            ],
          },
          {
            question: 'What is the purpose of the "let" keyword in JavaScript?',
            options: [
              { text: 'Declares a constant variable', isCorrect: false },
              { text: 'Declares a block-scoped variable', isCorrect: true },
              { text: 'Declares a global variable', isCorrect: false },
              { text: 'Declares a function', isCorrect: false },
            ],
          },
          {
            question: 'Which event is triggered when a user clicks on an HTML element?',
            options: [
              { text: 'onhover', isCorrect: false },
              { text: 'onload', isCorrect: false },
              { text: 'onclick', isCorrect: true },
              { text: 'onchange', isCorrect: false },
            ],
          },
          {
            question: 'What does the "typeof" operator return for an array?',
            options: [
              { text: 'array', isCorrect: false },
              { text: 'object', isCorrect: true },
              { text: 'string', isCorrect: false },
              { text: 'number', isCorrect: false },
            ],
          },
          {
            question: 'How can you convert a string to a number in JavaScript?',
            options: [
              { text: 'parseInt()', isCorrect: true },
              { text: 'stringToNumber()', isCorrect: false },
              { text: 'Number()', isCorrect: false },
              { text: 'convertToNumber()', isCorrect: false },
            ],
          },
        ],
      },
      
     ,
    ],
  };
  
  export default lesson_0_data;