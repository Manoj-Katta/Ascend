const lesson_0_data = {
    lessonNumber: 2,
    lessonPages: '',
    lessonTitle: 'C++',
    lessonUrl: 'Skill-2',
    lessonUnits: [
        {
            unitTitle: 'MCQ',
            unitUrl: 'MCQ',
            unitContent: [
                {
                    question: 'Explain the concept of "perfect forwarding" in C++ and provide examples of its usage in function templates.',
                    options: [
                      { text: 'Perfect forwarding allows preserving the value category (lvalue or rvalue) and cv-qualifiers of a function argument when passed to another function.', isCorrect: true },
                      { text: 'Perfect forwarding is a method for optimizing file I/O operations.', isCorrect: false },
                      { text: 'Perfect forwarding is only applicable to template metaprogramming.', isCorrect: false },
                      { text: 'Perfect forwarding is a replacement for lambda expressions.', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Explain the purpose of the "constexpr" keyword in C++ and how it differs from "const." Provide examples of situations where "constexpr" is appropriate.',
                    options: [
                      { text: '"constexpr" is used to indicate that a variable or function can be evaluated at compile-time, providing better performance than runtime computations.', isCorrect: true },
                      { text: '"constexpr" is a replacement for the "const" keyword in C++.', isCorrect: false },
                      { text: '"constexpr" is only applicable to error handling.', isCorrect: false },
                      { text: '"constexpr" is used for declaring constant variables with runtime initialization.', isCorrect: false },
                    ],
                  },
                  {
                    question: 'What is the purpose of the "std::move" function in C++ and how does it enable efficient resource management?',
                    options: [
                      { text: '"std::move" is used to convert an lvalue into an rvalue, enabling the efficient transfer of resources, such as ownership of memory, between objects.', isCorrect: true },
                      { text: '"std::move" is a replacement for the "new" operator in C++.', isCorrect: false },
                      { text: '"std::move" is only applicable to constant variables.', isCorrect: false },
                      { text: '"std::move" is used for creating deep copies of objects.', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Explain the purpose of the "thread_local" keyword in C++ and how it is used for thread-local storage.',
                    options: [
                      { text: '"thread_local" is used to declare variables that have a separate instance for each thread, providing thread-local storage.', isCorrect: true },
                      { text: '"thread_local" is only applicable to single-threaded applications.', isCorrect: false },
                      { text: '"thread_local" is a replacement for the "const" keyword in C++.', isCorrect: false },
                      { text: '"thread_local" is used for declaring global variables.', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Explain the concepts of "SFINAE" (Substitution Failure Is Not An Error) in C++ template programming and provide examples of its application.',
                    options: [
                      { text: 'SFINAE is a rule that allows a template to fail substitution without causing a compilation error, often used for enabling or disabling template specializations.', isCorrect: true },
                      { text: 'SFINAE is a technique for optimizing memory allocation.', isCorrect: false },
                      { text: 'SFINAE is only applicable to constant variables.', isCorrect: false },
                      { text: 'SFINAE is used for declaring constant functions in C++.', isCorrect: false },
                    ],
                  },
                  {
                    question: 'What is the purpose of the "std::forward" function in C++ and how does it contribute to perfect forwarding?',
                    options: [
                      { text: '"std::forward" is used to preserve the value category (lvalue or rvalue) of a function argument when passed through multiple levels of function calls, contributing to perfect forwarding.', isCorrect: true },
                      { text: '"std::forward" is only applicable to constant variables.', isCorrect: false },
                      { text: '"std::forward" is used for defining constant functions in C++.', isCorrect: false },
                      { text: '"std::forward" is a replacement for the "new" operator.', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Explain the differences between "static_assert" and "assert" in C++, and provide examples of situations where each is appropriate.',
                    options: [
                      { text: '"static_assert" is used for compile-time assertions, checking conditions at compile-time, while "assert" is used for runtime assertions, checking conditions at runtime.', isCorrect: true },
                      { text: '"static_assert" is a replacement for the "const" keyword in C++.', isCorrect: false },
                      { text: '"static_assert" is only applicable to single-threaded applications.', isCorrect: false },
                      { text: '"static_assert" is used for creating deep copies of objects.', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Explain the concept of "tag dispatching" in C++ and provide examples of its application in template metaprogramming.',
                    options: [
                      { text: 'Tag dispatching involves using tag types to dispatch function calls at compile-time based on the properties of the input types, providing a way to specialize template functions.', isCorrect: true },
                      { text: 'Tag dispatching is only applicable to multithreading applications.', isCorrect: false },
                      { text: 'Tag dispatching is a technique for optimizing file I/O operations.', isCorrect: false },
                      { text: 'Tag dispatching is a replacement for lambda expressions.', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Explain the purpose of the "std::enable_if" template and how it is used for conditional template specialization in C++.',
                    options: [
                      { text: '"std::enable_if" is used to conditionally enable or disable template specializations based on compile-time conditions, contributing to SFINAE.', isCorrect: true },
                      { text: '"std::enable_if" is only applicable to constant variables.', isCorrect: false },
                      { text: '"std::enable_if" is used for creating deep copies of objects.', isCorrect: false },
                      { text: '"std::enable_if" is a replacement for the "const" keyword.', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Explain the purpose of the "CRTP" (Curiously Recurring Template Pattern) in C++ and provide examples of its usage.',
                    options: [
                      { text: 'CRTP is a template programming technique where a class template inherits from a template instantiation of itself, enabling static polymorphism and code reuse.', isCorrect: true },
                      { text: 'CRTP is only applicable to constant variables.', isCorrect: false },
                      { text: 'CRTP is a replacement for lambda expressions.', isCorrect: false },
                      { text: 'CRTP is used for defining constant functions in C++.', isCorrect: false },
                    ],
                  },
                  {
                    question: 'What is the purpose of the "std::variant" type in C++ and how does it differ from traditional unions?',
                    options: [
                      { text: '"std::variant" is a type-safe union that can hold values of different types, ensuring type safety at compile-time.', isCorrect: true },
                      { text: '"std::variant" is a replacement for the "const" keyword.', isCorrect: false },
                      { text: '"std::variant" is only applicable to multithreading applications.', isCorrect: false },
                      { text: '"std::variant" is used for creating deep copies of objects.', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Explain the purpose of the "std::ranges" library in C++20 and how it simplifies range-based operations.',
                    options: [
                      { text: '"std::ranges" is a library introduced in C++20 that provides a set of utilities for working with ranges, making it easier to perform common operations on collections of data.', isCorrect: true },
                      { text: '"std::ranges" is only applicable to single-threaded applications.', isCorrect: false },
                      { text: '"std::ranges" is a replacement for lambda expressions.', isCorrect: false },
                      { text: '"std::ranges" is used for defining constant functions in C++.', isCorrect: false },
                    ],
                  },
                {
                    question: 'Explain the differences between "stack" and "heap" memory in C++ and provide examples of scenarios where each is appropriate.',
                    options: [
                        { text: 'Stack memory is used for dynamic memory allocation, while heap memory is used for function call stacks.', isCorrect: false },
                        { text: 'Stack memory is managed automatically, and heap memory requires manual management using new and delete operators.', isCorrect: true },
                        { text: 'Stack memory is slower than heap memory for accessing variables.', isCorrect: false },
                        { text: 'Heap memory is limited to a fixed size, while stack memory can dynamically grow and shrink.', isCorrect: false },
                    ],
                },
                {
                    question: 'What is the purpose of the "smart pointers" in C++, and how do they differ from traditional pointers?',
                    options: [
                        { text: 'Smart pointers are used for managing memory automatically and avoid memory leaks, while traditional pointers require manual memory management.', isCorrect: true },
                        { text: 'Smart pointers are only applicable in multithreading environments.', isCorrect: false },
                        { text: 'Smart pointers are less efficient than traditional pointers for accessing memory.', isCorrect: false },
                        { text: 'Smart pointers can only be used with arrays, while traditional pointers are more versatile.', isCorrect: false },
                    ],
                },
                {
                    question: 'Explain the concept of "RAII" (Resource Acquisition Is Initialization) in C++ and provide examples of its application.',
                    options: [
                        { text: 'RAII is a technique where resources are acquired in a constructor and released in a destructor, ensuring proper resource management.', isCorrect: true },
                        { text: 'RAII is a design pattern specifically used for GUI programming.', isCorrect: false },
                        { text: 'RAII is only applicable to error handling in C++.', isCorrect: false },
                        { text: 'RAII is a method for optimizing code execution speed.', isCorrect: false },
                    ],
                },
                {
                    question: 'What are move semantics in C++ and how do they differ from copy semantics?',
                    options: [
                        { text: 'Move semantics allow the transfer of ownership of resources from one object to another without deep copying, while copy semantics involve creating a duplicate copy of an object.', isCorrect: true },
                        { text: 'Move semantics and copy semantics are terms used interchangeably.', isCorrect: false },
                        { text: 'Move semantics are only applicable to primitive data types.', isCorrect: false },
                        { text: 'Copy semantics are more efficient than move semantics for large data structures.', isCorrect: false },
                    ],
                },
                {
                    question: 'Explain the concept of "function overloading" in C++ and provide examples of its usage.',
                    options: [
                        { text: 'Function overloading allows multiple functions with the same name but different parameter lists to coexist, improving code readability.', isCorrect: true },
                        { text: 'Function overloading is a technique for optimizing recursive algorithms.', isCorrect: false },
                        { text: 'Function overloading is only applicable to member functions of a class.', isCorrect: false },
                        { text: 'Function overloading is a way to define custom data types in C++.', isCorrect: false },
                    ],
                },
                {
                    question: 'What is the "Rule of Three" in C++ and why is it important for classes managing dynamic resources?',
                    options: [
                        { text: 'The Rule of Three states that if a class defines a destructor, copy constructor, or copy assignment operator, it should define all three.', isCorrect: true },
                        { text: 'The Rule of Three is a guideline for naming variables in C++.', isCorrect: false },
                        { text: 'The Rule of Three is only relevant to single-threaded applications.', isCorrect: false },
                        { text: 'The Rule of Three is a method for optimizing memory usage.', isCorrect: false },
                    ],
                },
                {
                    question: 'Explain the concept of "lambda expressions" in C++ and provide examples of their usage.',
                    options: [
                        { text: 'Lambda expressions are anonymous functions that can capture variables from their surrounding scope, providing a concise way to define functions.', isCorrect: true },
                        { text: 'Lambda expressions are used for bitwise operations in C++.', isCorrect: false },
                        { text: 'Lambda expressions can only be used as class methods.', isCorrect: false },
                        { text: 'Lambda expressions are a replacement for traditional loops.', isCorrect: false },
                    ],
                },
                {
                    question: 'What is the purpose of the "const-correctness" concept in C++ and how does it affect function signatures and object methods?',
                    options: [
                        { text: 'Const-correctness ensures that const-qualified objects cannot be modified and allows for the creation of const-correct functions and methods.', isCorrect: true },
                        { text: 'Const-correctness is only applicable to error handling in C++.', isCorrect: false },
                        { text: 'Const-correctness is a way to enforce memory safety.', isCorrect: false },
                        { text: 'Const-correctness is a technique for optimizing code execution speed.', isCorrect: false },
                    ],
                },
                {
                    question: 'Explain the concept of "template metaprogramming" in C++ and provide examples of its application.',
                    options: [
                        { text: 'Template metaprogramming involves using templates and template specialization to perform computations at compile-time.', isCorrect: true },
                        { text: 'Template metaprogramming is only applicable to multithreading applications.', isCorrect: false },
                        { text: 'Template metaprogramming is a method for optimizing network requests.', isCorrect: false },
                        { text: 'Template metaprogramming is a replacement for traditional control structures like loops.', isCorrect: false },
                    ],
                },
                {
                    question: 'Explain the concept of "multiple inheritance" in C++ and discuss potential challenges and solutions.',
                    options: [
                        { text: 'Multiple inheritance allows a class to inherit from more than one base class, leading to the diamond problem and requiring careful design to avoid ambiguity.', isCorrect: true },
                        { text: 'Multiple inheritance is a technique for optimizing memory usage.', isCorrect: false },
                        { text: 'Multiple inheritance is only applicable to single-threaded applications.', isCorrect: false },
                        { text: 'Multiple inheritance is a way to define custom data types in C++.', isCorrect: false },
                    ],
                },

                {
                    question: 'What is the syntax for declaring a pointer in C++?',
                    options: [
                        { text: 'int *ptr;', isCorrect: true },
                        { text: 'ptr int;', isCorrect: false },
                        { text: 'pointer int ptr;', isCorrect: false },
                        { text: 'int pointer ptr;', isCorrect: false },
                    ],
                },
                {
                    question: 'Which C++ keyword is used to dynamically allocate memory?',
                    options: [
                        { text: 'new', isCorrect: true },
                        { text: 'malloc', isCorrect: false },
                        { text: 'allocate', isCorrect: false },
                        { text: 'dynamic', isCorrect: false },
                    ],
                },
                {
                    question: 'What is the purpose of the "const" keyword in C++?',
                    options: [
                        { text: 'To declare a constant variable', isCorrect: true },
                        { text: 'To create a constructor', isCorrect: false },
                        { text: 'To define a class method', isCorrect: false },
                        { text: 'To specify a loop condition', isCorrect: false },
                    ],
                },
                {
                    question: 'In C++, what is the difference between "++i" and "i++"?',
                    options: [
                        { text: '"++i" increments the value of i and then returns it', isCorrect: true },
                        { text: '"i++" returns the value of i and then increments it', isCorrect: false },
                        { text: 'Both are equivalent', isCorrect: false },
                        { text: 'There is no difference', isCorrect: false },
                    ],
                },
                {
                    question: 'What is the function of the "virtual" keyword in C++?',
                    options: [
                        { text: 'To indicate that a member function can be overridden in derived classes', isCorrect: true },
                        { text: 'To create a virtual machine', isCorrect: false },
                        { text: 'To specify constant variables', isCorrect: false },
                        { text: 'To allocate virtual memory', isCorrect: false },
                    ],
                },
                {
                    question: 'How do you open a file in C++ for writing data?',
                    options: [
                        { text: 'std::ofstream outfile("filename.txt");', isCorrect: true },
                        { text: 'std::ifstream infile("filename.txt");', isCorrect: false },
                        { text: 'std::file file("filename.txt", std::ios::write);', isCorrect: false },
                        { text: 'std::stream file("filename.txt", std::write);', isCorrect: false },
                    ],
                },
                {
                    question: 'What is the purpose of the "inline" keyword in C++?',
                    options: [
                        { text: 'To suggest the compiler to inline a function for performance optimization', isCorrect: true },
                        { text: 'To declare an inline style for HTML', isCorrect: false },
                        { text: 'To create a one-line comment', isCorrect: false },
                        { text: 'To define an internal link between functions', isCorrect: false },
                    ],
                },
                {
                    question: 'How is memory deallocated in C++ after dynamic allocation using "new"?',
                    options: [
                        { text: 'Using the "delete" keyword', isCorrect: true },
                        { text: 'Automatically by the garbage collector', isCorrect: false },
                        { text: 'Using the "free" function', isCorrect: false },
                        { text: 'Memory is deallocated automatically when the program exits', isCorrect: false },
                    ],
                },
                {
                    question: 'What is the purpose of the "namespace" keyword in C++?',
                    options: [
                        { text: 'To declare a named scope for identifiers', isCorrect: true },
                        { text: 'To define a new data type', isCorrect: false },
                        { text: 'To create a new namespace in the file system', isCorrect: false },
                        { text: 'To allocate memory for a namespace', isCorrect: false },
                    ],
                },
                {
                    question: 'In C++, what does the "typeid" operator return?',
                    options: [
                        { text: 'Information about the type of an expression', isCorrect: true },
                        { text: 'The size of a data type', isCorrect: false },
                        { text: 'The address of a variable', isCorrect: false },
                        { text: 'The current date and time', isCorrect: false },
                    ],
                },

            ],
        }, {
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