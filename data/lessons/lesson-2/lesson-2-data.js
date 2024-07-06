const lesson_0_data = {
    lessonNumber: 3,
    lessonPages: '',
    lessonTitle: 'Python',
    lessonUrl: 'Skill-3',
    lessonUnits: [
        {
            unitTitle: 'MCQ',
            unitUrl: 'MCQ',
            unitContent: [
                {
                    question: 'Explain the difference between deep copy and shallow copy in Python, and provide examples of scenarios where each is appropriate.',
                    options: [
                      { text: 'A deep copy creates a new object with a new memory address, copying all nested objects as well. A shallow copy creates a new object but does not create copies of nested objects.', isCorrect: true },
                      { text: 'A deep copy creates a new object without copying nested objects. A shallow copy creates copies of all nested objects.', isCorrect: false },
                      { text: 'Deep copy and shallow copy are the same in Python and can be used interchangeably.', isCorrect: false },
                      { text: 'Deep copy and shallow copy are both methods for copying files in Python.', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Write a Python function that implements the binary search algorithm to find the index of a target element in a sorted list. Explain the time complexity of your implementation.',
                    options: [
                      { text: 'The time complexity of binary search is O(log n).', isCorrect: true },
                      { text: 'The time complexity of binary search is O(n).', isCorrect: false },
                      { text: 'The time complexity of binary search is O(n^2).', isCorrect: false },
                      { text: 'The time complexity of binary search is O(1).', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Explain the Global Interpreter Lock (GIL) in Python and its impact on multi-threading. How can you overcome the limitations of the GIL?',
                    options: [
                      { text: 'The GIL is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes at once. One way to overcome its limitations is by using multiprocessing instead of multithreading.', isCorrect: true },
                      { text: 'The GIL allows multiple native threads to execute Python bytecodes at once, improving performance. There is no need to overcome its limitations.', isCorrect: false },
                      { text: 'The GIL is a feature that prevents recursion in Python programs. To overcome its limitations, use recursion sparingly.', isCorrect: false },
                      { text: 'The GIL is a garbage collection algorithm in Python. There is no need to overcome its limitations.', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Write a Python function to calculate the nth Fibonacci number using recursion. Explain the time complexity of your implementation.',
                    options: [
                      { text: 'The time complexity of the recursive Fibonacci algorithm is O(2^n).', isCorrect: true },
                      { text: 'The time complexity of the recursive Fibonacci algorithm is O(n).', isCorrect: false },
                      { text: 'The time complexity of the recursive Fibonacci algorithm is O(n^2).', isCorrect: false },
                      { text: 'The time complexity of the recursive Fibonacci algorithm is O(log n).', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Consider the code snippet:\n\n```python\na = [1, 2, 3]\nb = a\na[0] = 4\nprint(b)\n```What will be the output of this code?',
                    options: [
                      { text: '[4, 2, 3]', isCorrect: true },
                      { text: '[1, 2, 3]', isCorrect: false },
                      { text: '[4, 4, 4]', isCorrect: false },
                      { text: '[1, 2, 4]', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Write a Python function that returns the longest palindrome substring in a given string. Explain the time complexity of your implementation.',
                    options: [
                      { text: 'The time complexity of the palindrome substring algorithm is O(n^2).', isCorrect: true },
                      { text: 'The time complexity of the palindrome substring algorithm is O(n log n).', isCorrect: false },
                      { text: 'The time complexity of the palindrome substring algorithm is O(n).', isCorrect: false },
                      { text: 'The time complexity of the palindrome substring algorithm is O(log n).', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Explain the purpose of the "with" statement in Python and provide an example of its usage.',
                    options: [
                      { text: 'The "with" statement is used for resource management and ensures that a context is properly set up and torn down. For example, it can be used with file handling to automatically close the file after use.', isCorrect: true },
                      { text: 'The "with" statement is used for conditional statements in Python code. For example, it can be used to check if a variable is true.', isCorrect: false },
                      { text: 'The "with" statement is used for creating decorators in Python.', isCorrect: false },
                      { text: 'The "with" statement is used for defining classes in Python.', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Write a Python function to check if a given tree is a binary search tree (BST). Explain the time complexity of your implementation.',
                    options: [
                      { text: 'The time complexity of the BST-checking algorithm is O(n).', isCorrect: true },
                      { text: 'The time complexity of the BST-checking algorithm is O(log n).', isCorrect: false },
                      { text: 'The time complexity of the BST-checking algorithm is O(n^2).', isCorrect: false },
                      { text: 'The time complexity of the BST-checking algorithm is O(log n^2).', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Consider the code snippet:\n\n```python\ns = "python"\ns[0] = "P"\n```What will be the outcome of this code?',
                    options: [
                      { text: 'The code will result in an error since strings are immutable in Python.', isCorrect: true },
                      { text: 'The code will replace the first character "p" with "P" in the string "s".', isCorrect: false },
                      { text: 'The code will create a new string "Pshton" with the first character replaced.', isCorrect: false },
                      { text: 'The code will result in an error since strings cannot be assigned new values in Python.', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Write a Python function that implements the merge sort algorithm for sorting a list. Explain the time complexity of your implementation.',
                    options: [
                      { text: 'The time complexity of the merge sort algorithm is O(n log n).', isCorrect: true },
                      { text: 'The time complexity of the merge sort algorithm is O(n).', isCorrect: false },
                      { text: 'The time complexity of the merge sort algorithm is O(n^2).', isCorrect: false },
                      { text: 'The time complexity of the merge sort algorithm is O(log n).', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Explain the purpose of the "yield" statement in Python and provide an example of its usage in a generator function.',
                    options: [
                      { text: 'The "yield" statement is used to produce a sequence of values in a generator function, allowing the function to retain its state between calls. For example, it can be used to generate Fibonacci numbers.', isCorrect: true },
                      { text: 'The "yield" statement is used for conditional statements in Python code. For example, it can be used to check if a variable is true.', isCorrect: false },
                      { text: 'The "yield" statement is used for resource management and ensures that a context is properly set up and torn down.', isCorrect: false },
                      { text: 'The "yield" statement is used for defining classes in Python.', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Write a Python function to find the longest common prefix string amongst an array of strings. Explain the time complexity of your implementation.',
                    options: [
                      { text: 'The time complexity of the longest common prefix algorithm is O(n * m), where n is the number of strings and m is the length of the common prefix.', isCorrect: true },
                      { text: 'The time complexity of the longest common prefix algorithm is O(n log n).', isCorrect: false },
                      { text: 'The time complexity of the longest common prefix algorithm is O(n).', isCorrect: false },
                      { text: 'The time complexity of the longest common prefix algorithm is O(log n).', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Consider the code snippet:\n\n```python\nx = [1, 2, 3]\ny = [1, 2, 3]\nresult = x is y\n```What will be the value of the variable "result"?',
                    options: [
                      { text: 'False', isCorrect: true },
                      { text: 'True', isCorrect: false },
                      { text: 'None', isCorrect: false },
                      { text: 'Error', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Write a Python function to perform a depth-first search (DFS) on a graph. Explain the time complexity of your implementation.',
                    options: [
                      { text: 'The time complexity of the DFS algorithm is O(V + E), where V is the number of vertices and E is the number of edges in the graph.', isCorrect: true },
                      { text: 'The time complexity of the DFS algorithm is O(V log V), where V is the number of vertices in the graph.', isCorrect: false },
                      { text: 'The time complexity of the DFS algorithm is O(E log E), where E is the number of edges in the graph.', isCorrect: false },
                      { text: 'The time complexity of the DFS algorithm is O(log V), where V is the number of vertices in the graph.', isCorrect: false },
                    ],
                  },
                {
                    question: 'Consider the following code snippet:\n\n```python\na = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)\n```What will be the output of this code?',
                    options: [
                      { text: '[1, 2, 3, 4]', isCorrect: true },
                      { text: '[1, 2, 3]', isCorrect: false },
                      { text: '[1, 2, 4]', isCorrect: false },
                      { text: '[1, 2, 3, 4, 4]', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Write a Python function that takes a list of integers as input and returns the sum of squares of even numbers in the list.',
                    options: [
                      { text: 'def sum_of_squares_of_evens(lst):\n    return sum(x**2 for x in lst if x % 2 == 0)', isCorrect: true },
                      { text: 'def sum_of_squares_of_evens(lst):\n    return sum(x**2 for x in lst if x % 2 != 0)', isCorrect: false },
                      { text: 'def sum_of_squares_of_evens(lst):\n    return sum(x for x in lst if x % 2 == 0)', isCorrect: false },
                      { text: 'def sum_of_squares_of_evens(lst):\n    return sum(x for x in lst if x % 2 != 0)', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Given a string s, write a function to reverse the order of words in the string.',
                    options: [
                      { text: 'def reverse_words(s):\n    return " ".join(reversed(s.split()))', isCorrect: true },
                      { text: 'def reverse_words(s):\n    return " ".join(s.split()[::-1])', isCorrect: false },
                      { text: 'def reverse_words(s):\n    return " ".join(s.split())[::-1]', isCorrect: false },
                      { text: 'def reverse_words(s):\n    return " ".join(reversed(s))', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Consider the code snippet:\n\n```python\nx = 5\ny = 2\nresult = x / y\n```What will be the data type of the variable "result"?',
                    options: [
                      { text: 'float', isCorrect: true },
                      { text: 'int', isCorrect: false },
                      { text: 'str', isCorrect: false },
                      { text: 'bool', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Write a Python function that checks whether a given number is a prime number.',
                    options: [
                      { text: 'def is_prime(n):\n    return n > 1 and all(n % i != 0 for i in range(2, int(n**0.5) + 1))', isCorrect: true },
                      { text: 'def is_prime(n):\n    return n > 1 and any(n % i == 0 for i in range(2, n))', isCorrect: false },
                      { text: 'def is_prime(n):\n    return n > 1 and all(n % i == 0 for i in range(2, int(n**0.5) + 1))', isCorrect: false },
                      { text: 'def is_prime(n):\n    return n > 1 and any(n % i != 0 for i in range(2, int(n**0.5) + 1))', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Consider the following code snippet:\n\n```python\na = [1, 2, 3]\nb = a[:]\nb.append(4)\nprint(a)\n```What will be the output of this code?',
                    options: [
                      { text: '[1, 2, 3]', isCorrect: true },
                      { text: '[1, 2, 3, 4]', isCorrect: false },
                      { text: '[1, 2, 3, 4, 4]', isCorrect: false },
                      { text: '[1, 2, 4]', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Write a Python function to find the intersection of two lists.',
                    options: [
                      { text: 'def intersection(lst1, lst2):\n    return list(set(lst1) & set(lst2))', isCorrect: true },
                      { text: 'def intersection(lst1, lst2):\n    return list(set(lst1) | set(lst2))', isCorrect: false },
                      { text: 'def intersection(lst1, lst2):\n    return list(set(lst1).intersection(lst2))', isCorrect: false },
                      { text: 'def intersection(lst1, lst2):\n    return list(set(lst1).union(lst2))', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Consider the code snippet:\n\n```python\ns = "hello"\nresult = s[2:4]\n```What will be the value of the variable "result"?',
                    options: [
                      { text: '"ll"', isCorrect: true },
                      { text: '"llo"', isCorrect: false },
                      { text: '"lo"', isCorrect: false },
                      { text: '"he"', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Write a Python function that calculates the factorial of a given number using recursion.',
                    options: [
                      { text: 'def factorial(n):\n    return 1 if n == 0 else n * factorial(n-1)', isCorrect: true },
                      { text: 'def factorial(n):\n    return n * factorial(n-1) if n > 1 else 1', isCorrect: false },
                      { text: 'def factorial(n):\n    return n * factorial(n-1)', isCorrect: false },
                      { text: 'def factorial(n):\n    return 1 if n == 1 else n * factorial(n-1)', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Consider the following code snippet:\n\n```python\na = [1, 2, 3]\nb = a\nb = b + [4]\nprint(a)\n```What will be the output of this code?',
                    options: [
                      { text: '[1, 2, 3]', isCorrect: true },
                      { text: '[1, 2, 3, 4]', isCorrect: false },
                      { text: '[1, 2, 4]', isCorrect: false },
                      { text: '[1, 2, 3, 4, 4]', isCorrect: false },
                    ],
                  },
                  {
                    question: 'Write a Python function that checks if a given string is a palindrome.',
                    options: [
                      { text: 'def is_palindrome(s):\n    return s == s[::-1]', isCorrect: true },
                      { text: 'def is_palindrome(s):\n    return s == reversed(s)', isCorrect: false },
                      { text: 'def is_palindrome(s):\n    return s == s.reverse()', isCorrect: false },
                      { text: 'def is_palindrome(s):\n    return s == "".join(reversed(s))', isCorrect: false },
                    ],
                  },
                
                {
                    question: 'Consider the following code snippet:\n\n```python\na = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)\n```What will be the output of this code?',
                    options: [
                        { text: '[1, 2, 3, 4]', isCorrect: true },
                        { text: '[1, 2, 3]', isCorrect: false },
                        { text: '[1, 2, 4]', isCorrect: false },
                        { text: '[1, 2, 3, 4, 4]', isCorrect: false },
                    ],
                },
                {
                    question: 'Write a Python function that takes a list of integers as input and returns the sum of squares of even numbers in the list.',
                    options: [
                        { text: 'def sum_of_squares_of_evens(lst):\n    return sum(x**2 for x in lst if x % 2 == 0)', isCorrect: true },
                        { text: 'def sum_of_squares_of_evens(lst):\n    return sum(x**2 for x in lst if x % 2 != 0)', isCorrect: false },
                        { text: 'def sum_of_squares_of_evens(lst):\n    return sum(x for x in lst if x % 2 == 0)', isCorrect: false },
                        { text: 'def sum_of_squares_of_evens(lst):\n    return sum(x for x in lst if x % 2 != 0)', isCorrect: false },
                    ],
                },
                {
                    question: 'Given a string s, write a function to reverse the order of words in the string.',
                    options: [
                        { text: 'def reverse_words(s):\n    return " ".join(reversed(s.split()))', isCorrect: true },
                        { text: 'def reverse_words(s):\n    return " ".join(s.split()[::-1])', isCorrect: false },
                        { text: 'def reverse_words(s):\n    return " ".join(s.split())[::-1]', isCorrect: false },
                        { text: 'def reverse_words(s):\n    return " ".join(reversed(s))', isCorrect: false },
                    ],
                },
                {
                    question: 'Consider the code snippet:\n\n```python\nx = 5\ny = 2\nresult = x / y\n```What will be the data type of the variable "result"?',
                    options: [
                        { text: 'float', isCorrect: true },
                        { text: 'int', isCorrect: false },
                        { text: 'str', isCorrect: false },
                        { text: 'bool', isCorrect: false },
                    ],
                },
                {
                    question: 'Write a Python function that checks whether a given number is a prime number.',
                    options: [
                        { text: 'def is_prime(n):\n    return n > 1 and all(n % i != 0 for i in range(2, int(n**0.5) + 1))', isCorrect: true },
                        { text: 'def is_prime(n):\n    return n > 1 and any(n % i == 0 for i in range(2, n))', isCorrect: false },
                        { text: 'def is_prime(n):\n    return n > 1 and all(n % i == 0 for i in range(2, int(n**0.5) + 1))', isCorrect: false },
                        { text: 'def is_prime(n):\n    return n > 1 and any(n % i != 0 for i in range(2, int(n**0.5) + 1))', isCorrect: false },
                    ],
                },
                {
                    question: 'Consider the following code snippet:\n\n```python\na = [1, 2, 3]\nb = a[:]\nb.append(4)\nprint(a)\n```What will be the output of this code?',
                    options: [
                        { text: '[1, 2, 3]', isCorrect: true },
                        { text: '[1, 2, 3, 4]', isCorrect: false },
                        { text: '[1, 2, 3, 4, 4]', isCorrect: false },
                        { text: '[1, 2, 4]', isCorrect: false },
                    ],
                },
                {
                    question: 'Write a Python function to find the intersection of two lists.',
                    options: [
                        { text: 'def intersection(lst1, lst2):\n    return list(set(lst1) & set(lst2))', isCorrect: true },
                        { text: 'def intersection(lst1, lst2):\n    return list(set(lst1) | set(lst2))', isCorrect: false },
                        { text: 'def intersection(lst1, lst2):\n    return list(set(lst1).intersection(lst2))', isCorrect: false },
                        { text: 'def intersection(lst1, lst2):\n    return list(set(lst1).union(lst2))', isCorrect: false },
                    ],
                },
                {
                    question: 'Consider the code snippet:\n\n```python\ns = "hello"\nresult = s[2:4]\n```What will be the value of the variable "result"?',
                    options: [
                        { text: '"ll"', isCorrect: true },
                        { text: '"llo"', isCorrect: false },
                        { text: '"lo"', isCorrect: false },
                        { text: '"he"', isCorrect: false },
                    ],
                },
                {
                    question: 'Write a Python function that calculates the factorial of a given number using recursion.',
                    options: [
                        { text: 'def factorial(n):\n    return 1 if n == 0 else n * factorial(n-1)', isCorrect: true },
                        { text: 'def factorial(n):\n    return n * factorial(n-1) if n > 1 else 1', isCorrect: false },
                        { text: 'def factorial(n):\n    return n * factorial(n-1)', isCorrect: false },
                        { text: 'def factorial(n):\n    return 1 if n == 1 else n * factorial(n-1)', isCorrect: false },
                    ],
                },
                {
                    question: 'Consider the following code snippet:\n\n```python\na = [1, 2, 3]\nb = a\nb = b + [4]\nprint(a)\n```What will be the output of this code?',
                    options: [
                        { text: '[1, 2, 3]', isCorrect: true },
                        { text: '[1, 2, 3, 4]', isCorrect: false },
                        { text: '[1, 2, 4]', isCorrect: false },
                        { text: '[1, 2, 3, 4, 4]', isCorrect: false },
                    ],
                },
                {
                    question: 'Write a Python function that checks if a given string is a palindrome.',
                    options: [
                        { text: 'def is_palindrome(s):\n    return s == s[::-1]', isCorrect: true },
                        { text: 'def is_palindrome(s):\n    return s == reversed(s)', isCorrect: false },
                        { text: 'def is_palindrome(s):\n    return s == s.reverse()', isCorrect: false },
                        { text: 'def is_palindrome(s):\n    return s == "".join(reversed(s))', isCorrect: false },
                    ],
                },

                {
                    question: 'Explain the Global Interpreter Lock (GIL) in Python and its impact on multi-threading.',
                    options: [
                        { text: 'The GIL is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes at once.', isCorrect: true },
                        { text: 'The GIL is a mechanism for parallelizing code execution across multiple CPU cores.', isCorrect: false },
                        { text: 'The GIL is a garbage collection algorithm used in Python.', isCorrect: false },
                        { text: 'The GIL is a language feature for global variable management in Python.', isCorrect: false },
                    ],
                },
                {
                    question: 'What is the purpose of the "asyncio" module in Python, and how does it relate to asynchronous programming?',
                    options: [
                        { text: '"asyncio" provides support for writing asynchronous code using the async/await syntax and managing event loops.', isCorrect: true },
                        { text: '"asyncio" is a module for handling file I/O operations asynchronously.', isCorrect: false },
                        { text: '"asyncio" is used for creating asynchronous generators in Python.', isCorrect: false },
                        { text: '"asyncio" is a replacement for the "timeit" module in Python.', isCorrect: false },
                    ],
                },
                {
                    question: 'Explain the concept of decorators in Python and provide examples of their usage.',
                    options: [
                        { text: 'Decorators are a way to modify or extend the behavior of functions or methods without changing their source code.', isCorrect: true },
                        { text: 'Decorators are used for creating graphical user interfaces in Python.', isCorrect: false },
                        { text: 'Decorators are only applicable to class methods.', isCorrect: false },
                        { text: 'Decorators are used for defining constant variables in Python.', isCorrect: false },
                    ],
                },
                {
                    question: 'What are metaclasses in Python, and how are they different from regular classes?',
                    options: [
                        { text: 'Metaclasses are classes that define the behavior of other classes. They are responsible for creating class objects.', isCorrect: true },
                        { text: 'Metaclasses are used for creating instances of classes in Python.', isCorrect: false },
                        { text: 'Metaclasses are a feature of functional programming in Python.', isCorrect: false },
                        { text: 'Metaclasses are only applicable to single-threaded applications.', isCorrect: false },
                    ],
                },
                {
                    question: 'Explain the purpose of the "contextlib" module in Python and how it is used for context management.',
                    options: [
                        { text: '"contextlib" provides utilities for working with context managers and simplifies the creation of context management protocols using the "with" statement.', isCorrect: true },
                        { text: '"contextlib" is a module for handling file I/O operations asynchronously.', isCorrect: false },
                        { text: '"contextlib" is used for creating decorators in Python.', isCorrect: false },
                        { text: '"contextlib" is a replacement for the "os" module in Python.', isCorrect: false },
                    ],
                },
                {
                    question: 'What is the purpose of the "__slots__" attribute in Python classes?',
                    options: [
                        { text: 'The "__slots__" attribute is used to explicitly declare a static set of attributes for a class, reducing memory usage and improving attribute access speed.', isCorrect: true },
                        { text: 'The "__slots__" attribute is a special method for initializing class instances in Python.', isCorrect: false },
                        { text: 'The "__slots__" attribute is used for creating class methods.', isCorrect: false },
                        { text: 'The "__slots__" attribute is a replacement for the "self" parameter in Python methods.', isCorrect: false },
                    ],
                },
                {
                    question: 'Explain the purpose of the "functools" module in Python and provide examples of its usage.',
                    options: [
                        { text: '"functools" provides higher-order functions and operations on callable objects. It includes utilities like "partial" and "wraps".', isCorrect: true },
                        { text: '"functools" is a module for handling file I/O operations asynchronously.', isCorrect: false },
                        { text: '"functools" is used for creating decorators in Python.', isCorrect: false },
                        { text: '"functools" is a replacement for the "collections" module in Python.', isCorrect: false },
                    ],
                },
                {
                    question: 'What is the purpose of the "itertools" module in Python, and provide examples of its usage.',
                    options: [
                        { text: '"itertools" provides a set of fast, memory-efficient tools for working with iterators, such as infinite iterators, permutations, and combinations.', isCorrect: true },
                        { text: '"itertools" is a module for handling file I/O operations asynchronously.', isCorrect: false },
                        { text: '"itertools" is used for creating decorators in Python.', isCorrect: false },
                        { text: '"itertools" is a replacement for the "random" module in Python.', isCorrect: false },
                    ],
                },
                {
                    question: 'Explain the purpose of the "collections" module in Python and provide examples of its usage.',
                    options: [
                        { text: '"collections" provides alternatives to built-in types with additional functionality, such as namedtuples, deques, and defaultdicts.', isCorrect: true },
                        { text: '"collections" is a module for handling file I/O operations asynchronously.', isCorrect: false },
                        { text: '"collections" is used for creating decorators in Python.', isCorrect: false },
                        { text: '"collections" is a replacement for the "itertools" module in Python.', isCorrect: false },
                    ],
                },
                {
                    question: 'Explain the purpose of the "async/await" syntax in Python and how it facilitates asynchronous programming.',
                    options: [
                        { text: 'The "async/await" syntax allows the creation of asynchronous functions, making it easier to write concurrent and parallel code in Python.', isCorrect: true },
                        { text: 'The "async/await" syntax is used for handling file I/O operations asynchronously.', isCorrect: false },
                        { text: 'The "async/await" syntax is only applicable to class methods.', isCorrect: false },
                        { text: 'The "async/await" syntax is used for defining constant variables in Python.', isCorrect: false },
                    ],
                },
                {
                    question: 'Explain the purpose of the "type" function in Python and how it is used for dynamic type creation.',
                    options: [
                        { text: 'The "type" function can be used to dynamically create new types (classes) at runtime, allowing for metaprogramming.', isCorrect: true },
                        { text: 'The "type" function is a replacement for the "isinstance" function in Python.', isCorrect: false },
                        { text: 'The "type" function is only applicable to constant variables.', isCorrect: false },
                        { text: 'The "type" function is used for creating decorators in Python.', isCorrect: false },
                    ],
                },


                {
                    question: 'What is the purpose of the "enumerate" function in Python?',
                    options: [
                        { text: 'To iterate over a sequence and keep track of the index at the same time.', isCorrect: true },
                        { text: 'To create an enumerated list of values.', isCorrect: false },
                        { text: 'To count the occurrences of a specific element in a list.', isCorrect: false },
                        { text: 'To generate a sequence of numbers.', isCorrect: false },
                    ],
                },
                {
                    question: 'How is an exception handled in Python?',
                    options: [
                        { text: 'Using the try...except block.', isCorrect: true },
                        { text: 'By declaring an exception variable with the "exception" keyword.', isCorrect: false },
                        { text: 'With the "throw" statement.', isCorrect: false },
                        { text: 'By using the "raise" keyword.', isCorrect: false },
                    ],
                },
                {
                    question: 'What is the purpose of the "lambda" function in Python?',
                    options: [
                        { text: 'To create anonymous functions.', isCorrect: true },
                        { text: 'To declare constant variables.', isCorrect: false },
                        { text: 'To define a class method.', isCorrect: false },
                        { text: 'To handle exceptions.', isCorrect: false },
                    ],
                },
                {
                    question: 'How do you open and read a file in Python?',
                    options: [
                        { text: 'Using the open() function and then reading the content with the read() method.', isCorrect: true },
                        { text: 'With the readfile() function.', isCorrect: false },
                        { text: 'By including the file directly in the code with the include statement.', isCorrect: false },
                        { text: 'Using the readfile() method of the File class.', isCorrect: false },
                    ],
                },
                {
                    question: 'What is the purpose of the "__init__" method in Python classes?',
                    options: [
                        { text: 'To initialize the object\'s attributes when an instance is created.', isCorrect: true },
                        { text: 'To define the class constructor.', isCorrect: false },
                        { text: 'To declare constant variables for the class.', isCorrect: false },
                        { text: 'To handle exceptions in the class.', isCorrect: false },
                    ],
                },
                {
                    question: 'What does the "map" function do in Python?',
                    options: [
                        { text: 'Applies a specified function to all the items in an input list and returns an iterator.', isCorrect: true },
                        { text: 'Creates a map-like data structure for key-value pairs.', isCorrect: false },
                        { text: 'Generates a map of memory addresses for a given variable.', isCorrect: false },
                        { text: 'Maps a function to a specified object.', isCorrect: false },
                    ],
                },
                {
                    question: 'How is multiple inheritance implemented in Python?',
                    options: [
                        { text: 'By allowing a class to inherit from more than one base class.', isCorrect: true },
                        { text: 'By using the "extends" keyword.', isCorrect: false },
                        { text: 'By defining a class within another class.', isCorrect: false },
                        { text: 'By using the "inherit" keyword.', isCorrect: false },
                    ],
                },
                {
                    question: 'What is the purpose of the "zip" function in Python?',
                    options: [
                        { text: 'Combines two or more iterables element-wise into tuples.', isCorrect: true },
                        { text: 'Compresses files into a zip archive.', isCorrect: false },
                        { text: 'Converts a list of tuples into separate lists.', isCorrect: false },
                        { text: 'Zips and encrypts a folder for secure storage.', isCorrect: false },
                    ],
                },
                {
                    question: 'How is a module imported in Python?',
                    options: [
                        { text: 'Using the "import" keyword followed by the module name.', isCorrect: true },
                        { text: 'By including the module file directly in the code.', isCorrect: false },
                        { text: 'With the "require" statement.', isCorrect: false },
                        { text: 'By using the "use" keyword.', isCorrect: false },
                    ],
                },
                {
                    question: 'What does the "global" keyword do in Python?',
                    options: [
                        { text: 'Declares a variable as global, allowing it to be modified outside the current scope.', isCorrect: true },
                        { text: 'Defines a global constant variable.', isCorrect: false },
                        { text: 'Specifies a function as globally accessible.', isCorrect: false },
                        { text: 'Enforces global access to all variables in a module.', isCorrect: false },
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