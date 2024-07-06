const lesson_0_data = {
  lessonNumber: 1,
  lessonPages: '',
  lessonTitle: 'Javascript',
  lessonUrl: 'Skill-1',
  lessonUnits: [
    {
      unitTitle: 'MCQ',
      unitUrl: 'MCQ',
      unitContent: [

        {
          question: 'Explain the differences between "memoization" and "dynamic programming," and provide examples of scenarios where each is more suitable.',
          options: [
            { text: 'Memoization is a form of dynamic programming, and they are interchangeable concepts.', isCorrect: false },
            { text: 'Dynamic programming is a method for solving problems by breaking them down into smaller overlapping subproblems, while memoization is a specific technique to optimize dynamic programming solutions by caching results.', isCorrect: true },
            { text: 'Memoization is used for optimizing recursive algorithms, while dynamic programming is used for iterative solutions.', isCorrect: false },
            { text: 'Dynamic programming is a method for optimizing database queries, while memoization is used for optimizing network requests.', isCorrect: false },
          ],
        },
        {
          question: 'Explain the event loop in JavaScript, including the concepts of the call stack, callback queue, and microtasks queue.',
          options: [
            { text: 'The event loop is responsible for handling user interface events in a web application.', isCorrect: false },
            { text: 'The call stack is a data structure that stores function calls, the callback queue holds asynchronous tasks, and the microtasks queue contains tasks with higher priority.', isCorrect: true },
            { text: 'The event loop is a mechanism for handling AJAX requests in the background.', isCorrect: false },
            { text: 'The call stack, callback queue, and microtasks queue are concepts specific to multithreading in JavaScript.', isCorrect: false },
          ],
        },
        {
          question: 'What are the differences between "shallow copy" and "deep copy" when cloning objects in JavaScript? Provide examples of scenarios where each is necessary.',
          options: [
            { text: 'Shallow copy creates a new object with references to the same nested objects, while deep copy creates a new object with copies of all nested objects.', isCorrect: true },
            { text: 'Shallow copy and deep copy are terms used interchangeably, and they both refer to the same cloning process.', isCorrect: false },
            { text: 'Shallow copy is more memory-efficient than deep copy.', isCorrect: false },
            { text: 'Deep copy is only necessary when cloning arrays, and shallow copy is suitable for objects.', isCorrect: false },
          ],
        },
        {
          question: 'Explain the concepts of "currying," "monads," and "functors" in functional programming, providing examples of their application in JavaScript.',
          options: [
            { text: 'Currying is the process of transforming a function with multiple arguments into a sequence of functions with a single argument, monads are a type of functor, and functors are objects that implement a map function.', isCorrect: true },
            { text: 'Currying is a technique for creating asynchronous functions, monads are used for memoization, and functors are arrays with special properties.', isCorrect: false },
            { text: 'Currying, monads, and functors are concepts unrelated to functional programming.', isCorrect: false },
            { text: 'Currying is a method for optimizing recursive algorithms, monads are used for dynamic programming, and functors are synonymous with callbacks.', isCorrect: false },
          ],
        },
        {
          question: 'Explain the concept of "hoisting" in JavaScript and provide examples of scenarios where hoisting can lead to unexpected behavior.',
          options: [
            { text: 'Hoisting is the process of moving variable and function declarations to the top of their containing scope during compilation.', isCorrect: true },
            { text: 'Hoisting is only applicable to asynchronous functions.', isCorrect: false },
            { text: 'Hoisting is a feature specific to arrow functions.', isCorrect: false },
            { text: 'Hoisting is the process of optimizing code for better performance.', isCorrect: false },
          ],
        },
        {
          question: 'What are the advantages and disadvantages of using closures in JavaScript? Provide examples of scenarios where closures are beneficial and where they might lead to issues.',
          options: [
            { text: 'Closures provide encapsulation and can lead to cleaner code, but they may cause memory leaks if not handled properly.', isCorrect: true },
            { text: 'Closures are unnecessary in modern JavaScript development.', isCorrect: false },
            { text: 'Closures can only be used in conjunction with arrow functions.', isCorrect: false },
            { text: 'Closures are only useful for handling UI events.', isCorrect: false },
          ],
        },
        {
          question: 'Explain the principles of "asynchronous programming" in JavaScript, and provide examples of situations where asynchronous code is essential.',
          options: [
            { text: 'Asynchronous programming allows tasks to be executed in a non-blocking manner, which is crucial for handling I/O operations, such as network requests.', isCorrect: true },
            { text: 'Asynchronous programming is limited to handling synchronous tasks.', isCorrect: false },
            { text: 'Asynchronous programming is only relevant in server-side development.', isCorrect: false },
            { text: 'Asynchronous programming is a technique for optimizing CPU-bound operations.', isCorrect: false },
          ],
        },
        {
          question: 'Explain the concepts of "prototypal inheritance" and "classical inheritance" in JavaScript, and provide examples of scenarios where each approach is appropriate.',
          options: [
            { text: 'Prototypal inheritance involves creating objects based on existing objects, while classical inheritance relies on classes and instances.', isCorrect: true },
            { text: 'Prototypal inheritance and classical inheritance are interchangeable concepts.', isCorrect: false },
            { text: 'Prototypal inheritance is only applicable to primitive data types.', isCorrect: false },
            { text: 'Classical inheritance is a more modern and preferred approach in JavaScript development.', isCorrect: false },
          ],
        },
        {
          question: 'Explain the purpose and use cases of the "Reflect" and "Proxy" objects in JavaScript.',
          options: [
            { text: 'Reflect and Proxy are used for creating asynchronous functions in JavaScript.', isCorrect: false },
            { text: 'Reflect is used for handling exceptions, while Proxy is used for network requests.', isCorrect: false },
            { text: 'Reflect and Proxy are used for metaprogramming and introspection, allowing developers to interact with objects in a more flexible manner.', isCorrect: true },
            { text: 'Reflect and Proxy are deprecated in favor of traditional object-oriented programming concepts.', isCorrect: false },
          ],
        },
        {
          question: 'Explain the principles of "functional programming" in JavaScript, and provide examples of pure functions, immutability, and higher-order functions.',
          options: [
            { text: 'Functional programming emphasizes the use of pure functions, immutability, and higher-order functions to create more predictable and maintainable code.', isCorrect: true },
            { text: 'Functional programming is focused on optimizing code execution speed.', isCorrect: false },
            { text: 'Functional programming is not applicable to web development.', isCorrect: false },
            { text: 'Functional programming is only relevant for server-side programming.', isCorrect: false },
          ],
        },
        {
          question: 'Explain the concept of event delegation in JavaScript and provide an example of its usage.',
          options: [
            { text: 'It involves the use of arrow functions for handling events', isCorrect: false },
            { text: 'It refers to the process of capturing events during the bubbling phase', isCorrect: false },
            { text: 'It involves handling events on a parent element for its child elements', isCorrect: true },
            { text: 'It refers to the asynchronous handling of events', isCorrect: false },
          ],
        },
        {
          question: 'What is the Event Loop in JavaScript, and how does it work?',
          options: [
            { text: 'A loop that iterates over DOM elements', isCorrect: false },
            { text: 'A mechanism for handling asynchronous operations and callbacks', isCorrect: true },
            { text: 'A loop used for iterating through arrays', isCorrect: false },
            { text: 'A loop that runs indefinitely without stopping', isCorrect: false },
          ],
        },
        {
          question: 'Explain the differences between the "let," "const," and "var" keywords in JavaScript.',
          options: [
            { text: '"let" and "const" are block-scoped, while "var" is function-scoped', isCorrect: true },
            { text: '"var" and "const" are block-scoped, while "let" is function-scoped', isCorrect: false },
            { text: '"const" cannot be reassigned, while "let" and "var" can', isCorrect: false },
            { text: '"let" and "var" are constants, while "const" is a variable', isCorrect: false },
          ],
        },
        {
          question: 'What is a Promise in JavaScript? Explain the concepts of resolve, reject, and chaining.',
          options: [
            { text: 'A representation of an eventual result of an asynchronous operation', isCorrect: true },
            { text: 'A method for resolving conflicts in code', isCorrect: false },
            { text: 'A way to handle errors in synchronous code', isCorrect: false },
            { text: 'A function for creating random numbers', isCorrect: false },
          ],
        },
        {
          question: 'What are Arrow Functions in JavaScript? Provide examples of their usage and explain their advantages.',
          options: [
            { text: 'Functions that use arrow symbols (=>) for comparison operations', isCorrect: false },
            { text: 'A shorthand syntax for writing function expressions', isCorrect: true },
            { text: 'Functions that point to other functions in memory', isCorrect: false },
            { text: 'A way to define functions inside objects', isCorrect: false },
          ],
        },
        {
          question: 'Explain the concept of prototypal inheritance in JavaScript.',
          options: [
            { text: 'The process of inheriting properties from multiple objects', isCorrect: false },
            { text: 'A mechanism for copying properties from one object to another', isCorrect: false },
            { text: 'Inheriting properties and methods from a prototype object', isCorrect: true },
            { text: 'The process of extending classes in JavaScript', isCorrect: false },
          ],
        },
        {
          question: 'What is the purpose of the "bind" method in JavaScript, and how does it work?',
          options: [
            { text: 'To bind two variables together', isCorrect: false },
            { text: 'To attach a function to a specific context and create a new function', isCorrect: true },
            { text: 'To concatenate strings in an array', isCorrect: false },
            { text: 'To create a new array', isCorrect: false },
          ],
        },
        {
          question: 'Explain the concept of Web Workers in JavaScript and how they differ from regular JavaScript threads.',
          options: [
            { text: 'Web Workers are a type of JavaScript thread used for UI operations', isCorrect: false },
            { text: 'Web Workers are background scripts that run in a separate thread from the main thread', isCorrect: true },
            { text: 'Web Workers are a type of JavaScript loop for handling events', isCorrect: false },
            { text: 'Web Workers are synchronous functions for handling AJAX requests', isCorrect: false },
          ],
        },
        {
          question: 'What is the purpose of the "async" and "await" keywords in JavaScript?',
          options: [
            { text: 'To define asynchronous functions', isCorrect: false },
            { text: 'To indicate that a function returns a Promise', isCorrect: false },
            { text: 'To handle asynchronous operations with a cleaner syntax', isCorrect: true },
            { text: 'To pause the execution of a function until a condition is met', isCorrect: false },
          ],
        },
        {
          question: 'Explain the concepts of hoisting and how it works in JavaScript.',
          options: [
            { text: 'Hoisting is the process of moving a variable or function declaration to the top of its scope during compilation', isCorrect: true },
            { text: 'Hoisting is the process of optimizing code for better performance', isCorrect: false },
            { text: 'Hoisting is the process of removing unused code during compilation', isCorrect: false },
            { text: 'Hoisting is the process of compressing JavaScript files', isCorrect: false },
          ],
        },
        {
          question: 'What are the differences between "localStorage" and "sessionStorage" in JavaScript?',
          options: [
            { text: '"localStorage" stores data permanently until explicitly deleted, while "sessionStorage" stores data for the duration of the page session', isCorrect: true },
            { text: '"localStorage" is only accessible in the same tab, while "sessionStorage" can be accessed across different tabs', isCorrect: false },
            { text: '"localStorage" is limited to 5MB of data, while "sessionStorage" can store unlimited data', isCorrect: false },
            { text: '"localStorage" is more secure than "sessionStorage"', isCorrect: false },
          ],
        },
        {
          question: 'Explain the concepts of currying and partial application in JavaScript, and provide examples of their usage.',
          options: [
            { text: 'Currying is the process of transforming a function with multiple arguments into a sequence of functions with a single argument', isCorrect: true },
            { text: 'Partial application is the process of applying all arguments to a function at once', isCorrect: false },
            { text: 'Currying and partial application are the same concepts with different names', isCorrect: false },
            { text: 'Currying and partial application are only applicable to asynchronous functions', isCorrect: false },
          ],
        },
        {
          question: 'What is the purpose of the "Symbol" data type in JavaScript, and how is it different from other data types?',
          options: [
            { text: 'Symbols are used to represent unique identifiers and are immutable', isCorrect: true },
            { text: 'Symbols are used to represent arrays of characters', isCorrect: false },
            { text: 'Symbols are used for performing bitwise operations', isCorrect: false },
            { text: 'Symbols are a type of string data with additional functionality', isCorrect: false },
          ],
        },
        {
          question: 'Explain the concepts of memoization and how it can be implemented in JavaScript for optimization.',
          options: [
            { text: 'Memoization is a technique to optimize recursive functions by caching their results', isCorrect: true },
            { text: 'Memoization is a way to store data in the browser cache for faster retrieval', isCorrect: false },
            { text: 'Memoization is a process of converting synchronous code into asynchronous code', isCorrect: false },
            { text: 'Memoization is a technique for compressing JavaScript files', isCorrect: false },
          ],
        },
        {
          question: 'What is the purpose of the "Proxy" object in JavaScript, and how can it be used to intercept operations on objects?',
          options: [
            { text: 'The "Proxy" object is used for creating arrays in JavaScript', isCorrect: false },
            { text: 'The "Proxy" object is used for creating asynchronous functions', isCorrect: false },
            { text: 'The "Proxy" object allows custom behavior to be defined for fundamental operations on objects', isCorrect: true },
            { text: 'The "Proxy" object is a replacement for the "let" keyword in variable declaration', isCorrect: false },
          ],
        },
        {
          question: 'Explain the concepts of CORS (Cross-Origin Resource Sharing) in JavaScript, and how it affects AJAX requests.',
          options: [
            { text: 'CORS is a security feature that restricts web pages from making requests to a different domain than the one that served the web page', isCorrect: true },
            { text: 'CORS is a technique for compressing data during AJAX requests', isCorrect: false },
            { text: 'CORS is a method for preventing memory leaks in JavaScript', isCorrect: false },
            { text: 'CORS is a protocol for encrypting data sent over AJAX requests', isCorrect: false },
          ],
        },
        {
          question: 'What is the purpose of the "Map" and "Set" objects in JavaScript, and how do they differ from regular objects and arrays?',
          options: [
            { text: '"Map" and "Set" are specialized objects for handling mathematical operations', isCorrect: false },
            { text: '"Map" is used for key-value pairs, and "Set" is used for storing unique values', isCorrect: true },
            { text: '"Map" and "Set" are used for creating custom data types in JavaScript', isCorrect: false },
            { text: '"Map" and "Set" are deprecated in favor of regular objects and arrays', isCorrect: false },
          ],
        },
        {
          question: 'Explain the differences between "function declaration" and "function expression" in JavaScript.',
          options: [
            { text: 'Function declaration is hoisted, while function expression is not hoisted', isCorrect: true },
            { text: 'Function expression is hoisted, while function declaration is not hoisted', isCorrect: false },
            { text: 'There is no difference between function declaration and function expression', isCorrect: false },
            { text: 'Function declaration and function expression are used interchangeably', isCorrect: false },
          ],
        },
        {
          question: 'What is the purpose of the "this" keyword in JavaScript, and how is it determined in different contexts?',
          options: [
            { text: 'The "this" keyword always refers to the global object', isCorrect: false },
            { text: 'The "this" keyword refers to the object on which a method is being invoked', isCorrect: true },
            { text: 'The "this" keyword is used for declaring variables in JavaScript', isCorrect: false },
            { text: 'The "this" keyword is only applicable inside arrow functions', isCorrect: false },
          ],
        },
        {
          question: 'Explain the concept of a "closure" in JavaScript, and provide an example of its usage.',
          options: [
            { text: 'A closure is a function with access to variables from its outer scope, even after the outer function has finished execution', isCorrect: true },
            { text: 'A closure is a type of loop used for iterating through arrays', isCorrect: false },
            { text: 'A closure is a shorthand syntax for writing arrow functions', isCorrect: false },
            { text: 'A closure is a way to reverse the order of elements in an array', isCorrect: false },
          ],
        },
        {
          question: 'What is the purpose of the "WeakMap" and "WeakSet" objects in JavaScript, and how do they differ from regular "Map" and "Set" objects?',
          options: [
            { text: '"WeakMap" and "WeakSet" are used for creating weak references to objects, allowing them to be garbage collected', isCorrect: true },
            { text: '"WeakMap" and "WeakSet" are specialized objects for handling encryption in JavaScript', isCorrect: false },
            { text: '"WeakMap" and "WeakSet" are deprecated in favor of regular "Map" and "Set" objects', isCorrect: false },
            { text: '"WeakMap" and "WeakSet" are used for creating arrays with weak typing', isCorrect: false },
          ],
        },
        {
          question: 'How do you remove the last element from an array in JavaScript?',
          options: [
            { text: 'array.removeLast()', isCorrect: false },
            { text: 'array.pop()', isCorrect: true },
            { text: 'array.deleteLast()', isCorrect: false },
            { text: 'array.splice(-1, 1)', isCorrect: false },
          ],
        },
        {
          question: 'What is the purpose of the "bind" method in JavaScript?',
          options: [
            { text: 'To bind two variables together', isCorrect: false },
            { text: 'To attach a function to a specific context', isCorrect: true },
            { text: 'To concatenate strings', isCorrect: false },
            { text: 'To create a new array', isCorrect: false },
          ],
        },
        {
          question: 'How can you check if a variable is an array in JavaScript?',
          options: [
            { text: 'typeof variable === "array"', isCorrect: false },
            { text: 'Array.isArray(variable)', isCorrect: true },
            { text: 'variable instanceof Array', isCorrect: true },
            { text: 'variable.isArray()', isCorrect: false },
          ],
        },
        {
          question: 'What is the purpose of the "setInterval" function in JavaScript?',
          options: [
            { text: 'To delay the execution of a function', isCorrect: false },
            { text: 'To execute a function repeatedly at specified intervals', isCorrect: true },
            { text: 'To set a timeout for a function', isCorrect: false },
            { text: 'To measure the time it takes for a function to execute', isCorrect: false },
          ],
        },
        {
          question: 'How do you declare a constant variable in JavaScript?',
          options: [
            { text: 'const myVar;', isCorrect: false },
            { text: 'let myVar = constant;', isCorrect: false },
            { text: 'const myVar = {};', isCorrect: true },
            { text: 'var myVar = constant;', isCorrect: false },
          ],
        },
        {
          question: 'What is the purpose of the "reduce" method in JavaScript?',
          options: [
            { text: 'To reduce the size of an array', isCorrect: false },
            { text: 'To concatenate strings in an array', isCorrect: false },
            { text: 'To accumulate the values of an array into a single value', isCorrect: true },
            { text: 'To remove elements from an array', isCorrect: false },
          ],
        },
        {
          question: 'How do you convert a string to lowercase in JavaScript?',
          options: [
            { text: 'string.toLower()', isCorrect: false },
            { text: 'string.toLowerCase()', isCorrect: true },
            { text: 'string.caseLower()', isCorrect: false },
            { text: 'string.lowerCase()', isCorrect: false },
          ],
        },
        {
          question: 'What is the purpose of the "typeof" operator in JavaScript?',
          options: [
            { text: 'To check if a variable is defined', isCorrect: false },
            { text: 'To determine the type of a variable or expression', isCorrect: true },
            { text: 'To compare the equality of two variables', isCorrect: false },
            { text: 'To assign a value to a variable', isCorrect: false },
          ],
        },
        {
          question: 'How can you create a copy of an array in JavaScript without modifying the original array?',
          options: [
            { text: 'array.copy()', isCorrect: false },
            { text: 'array.clone()', isCorrect: false },
            { text: 'array.slice()', isCorrect: true },
            { text: 'array.copyWithin()', isCorrect: false },
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
          question: 'How do you add an event listener to a DOM element in JavaScript?',
          options: [
            { text: 'element.addEvent()', isCorrect: false },
            { text: 'element.addListener()', isCorrect: false },
            { text: 'element.addEventListener()', isCorrect: true },
            { text: 'element.onEvent()', isCorrect: false },
          ],
        },
        {
          question: 'What does the "NaN" stand for in JavaScript?',
          options: [
            { text: 'Not a Number', isCorrect: true },
            { text: 'Numeric and Null', isCorrect: false },
            { text: 'No Available Numbers', isCorrect: false },
            { text: 'Negative and Null', isCorrect: false },
          ],
        },
        {
          question: 'How do you check if an object has a specific property in JavaScript?',
          options: [
            { text: 'object.hasProperty()', isCorrect: false },
            { text: 'object.contains()', isCorrect: false },
            { text: 'object.hasOwnProperty()', isCorrect: true },
            { text: 'object.isProperty()', isCorrect: false },
          ],
        },
        {
          question: 'What is the purpose of the "super" keyword in JavaScript classes?',
          options: [
            { text: 'To access the superclass constructor', isCorrect: true },
            { text: 'To invoke the current class constructor', isCorrect: false },
            { text: 'To reference the parent class', isCorrect: false },
            { text: 'To override a method in the superclass', isCorrect: false },
          ],
        },
        {
          question: 'How do you convert a JSON string to a JavaScript object?',
          options: [
            { text: 'JSON.parse()', isCorrect: true },
            { text: 'JSON.stringify()', isCorrect: false },
            { text: 'object.parseJSON()', isCorrect: false },
            { text: 'object.stringifyJSON()', isCorrect: false },
          ],
        },
        {
          question: 'What is the purpose of the "fetch" function in JavaScript?',
          options: [
            { text: 'To fetch a random value from an array', isCorrect: false },
            { text: 'To retrieve resources from the network asynchronously', isCorrect: true },
            { text: 'To search for elements in the DOM', isCorrect: false },
            { text: 'To remove elements from an array', isCorrect: false },
          ],
        },
        {
          question: 'How do you declare a variable that cannot be reassigned in JavaScript?',
          options: [
            { text: 'const myVar = 10;', isCorrect: true },
            { text: 'let myVar = 10;', isCorrect: false },
            { text: 'var myVar = 10;', isCorrect: false },
            { text: 'final myVar = 10;', isCorrect: false },
          ],
        },
        {
          question: 'What is the purpose of the "event.preventDefault()" method in JavaScript?',
          options: [
            { text: 'To stop the propagation of an event', isCorrect: false },
            { text: 'To prevent the default behavior associated with an event', isCorrect: true },
            { text: 'To capture the event in the capturing phase', isCorrect: false },
            { text: 'To remove an event listener', isCorrect: false },
          ],
        },
        {
          question: 'What is the purpose of the "apply" and "call" methods in JavaScript?',
          options: [
            { text: 'To invoke a function with a given this value and arguments provided as an array (apply)', isCorrect: true },
            { text: 'To create a new function with a given this value and arguments provided individually (call)', isCorrect: false },
            { text: 'To apply a function directly without invoking it (apply)', isCorrect: false },
            { text: 'To call a function with a predefined context and arguments (call)', isCorrect: false },
          ],
        },
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