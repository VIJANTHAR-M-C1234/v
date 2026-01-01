
import React from 'react';
import { BookOpen, Code, Database, Globe, Layers, Terminal, Cpu, Layout as LayoutIcon, Zap, Hash } from 'lucide-react';
import { Subject, Course, Resource } from './types';

export const SUBJECTS: Subject[] = [
  {
    id: 'c-programming',
    name: 'C Programming',
    description: 'Master the foundation of procedural programming with exam-focused syntax and logic building.',
    syllabus: [
      'Introduction to C, Data Types, and Operators',
      'Control Structures (If-Else, Switch, Loops)',
      'Functions and Recursion',
      'Arrays and Strings',
      'Pointers and Memory Management',
      'Structures, Unions, and File Handling'
    ],
    definitions: [
      { term: 'Pointer', definition: 'A variable that stores the memory address of another variable.' },
      { term: 'Recursion', definition: 'A process in which a function calls itself directly or indirectly.' }
    ],
    keywords: ['Memory Allocation', 'Dereferencing', 'Iteration', 'Standard Input/Output', 'Static Scoping'],
    faq: [
      { question: 'Explain the difference between call by value and call by reference.', marks: 5, answer: 'In call by value, a copy of the argument is passed. In call by reference, the address is passed, allowing direct modification.' },
      { question: 'Discuss various storage classes in C with examples.', marks: 10, answer: 'Detailed explanation of auto, register, static, and extern with scope and lifetime analysis.' }
    ],
    resources: [
      { title: 'Essential C Syntax Cheat Sheet', type: 'Free', link: '#' },
      { title: 'Mastering Pointers - Exam Notes', type: 'Paid', price: 49, link: '#' }
    ],
    courseId: 'c-mini-course'
  },
  {
    id: 'cpp-programming',
    name: 'C++ Programming',
    description: 'Deep dive into Object Oriented Programming concepts with a focus on university exam writing style.',
    syllabus: [
      'Classes and Objects',
      'Inheritance and Polymorphism',
      'Operator Overloading',
      'Templates and STL',
      'Exception Handling'
    ],
    definitions: [
      { term: 'Encapsulation', definition: 'Wrapping of data and member functions into a single unit called a class.' },
      { term: 'Polymorphism', definition: 'The ability of a message to be displayed in more than one form.' }
    ],
    keywords: ['Access Specifiers', 'Virtual Functions', 'Function Overriding', 'Constructor', 'Destructor'],
    faq: [
      { question: 'What is a Virtual Function? Why is it used?', marks: 5, answer: 'A member function declared in the base class and redefined in a derived class to achieve runtime polymorphism.' },
      { question: 'Explain Multiple Inheritance with the Diamond Problem and its solution.', marks: 10, answer: 'Explain ambiguity in inheritance and how virtual base classes solve it.' }
    ],
    resources: [
      { title: 'OOPs Concepts Summary', type: 'Free', link: '#' },
      { title: 'C++ Exam Survival Guide', type: 'Paid', price: 99, link: '#' }
    ],
    courseId: 'cpp-mini-course'
  },
  {
    id: 'data-structures',
    name: 'Data Structures',
    description: 'Understand complexity, linear and non-linear data structures with keyword-rich explanations.',
    syllabus: [
      'Algorithm Complexity (Time/Space)',
      'Linked Lists (Single, Double, Circular)',
      'Stacks and Queues',
      'Trees (Binary, BST, AVL)',
      'Graphs and Hashing'
    ],
    definitions: [
      { term: 'Time Complexity', definition: 'The amount of time taken by an algorithm to run as a function of the length of the input.' },
      { term: 'Linked List', definition: 'A linear data structure where elements are not stored at contiguous memory locations.' }
    ],
    keywords: ['Big O Notation', 'Traversal', 'LIFO/FIFO', 'Recursion', 'Optimization'],
    faq: [
      { question: 'Convert an Infix expression to Postfix using Stack.', marks: 5, answer: 'Step-by-step algorithm and stack trace representation.' },
      { question: 'Explain BFS and DFS graph traversals with examples.', marks: 10, answer: 'Algorithm, implementation details, and comparison of time/space complexity.' }
    ],
    resources: [
      { title: 'DS Diagram Handbook', type: 'Free', link: '#' }
    ],
    courseId: 'ds-mini-course'
  },
  {
    id: 'dbms',
    name: 'DBMS',
    description: 'Relational databases, SQL, and Normalization taught with a focus on university exam scoring.',
    syllabus: [
      'ER Model and Relational Algebra',
      'SQL Queries and Joins',
      'Normalization (1NF, 2NF, 3NF, BCNF)',
      'Transaction Management and Concurrency',
      'Indexing and Hashing'
    ],
    definitions: [
      { term: 'Normalization', definition: 'The process of organizing data in a database to reduce redundancy and improve data integrity.' },
      { term: 'ACID Properties', definition: 'Atomicity, Consistency, Isolation, and Durability - the core properties of database transactions.' }
    ],
    keywords: ['Primary Key', 'Foreign Key', 'Functional Dependency', 'Deadlock', 'SQL DDL/DML'],
    faq: [
      { question: 'Explain the 3-Tier Schema Architecture.', marks: 5, answer: 'External, Conceptual, and Internal levels explanation with diagrams.' },
      { question: 'What is Normalization? Explain 1NF, 2NF, and 3NF with examples.', marks: 10, answer: 'Step-by-step decomposition process and keyword usage for maximum marks.' }
    ],
    resources: [
      { title: 'SQL Query Cheat Sheet', type: 'Free', link: '#' }
    ]
  },
  {
    id: 'os',
    name: 'Operating Systems',
    description: 'Master process management, memory allocation, and file systems for your finals.',
    syllabus: [
      'Process Management and Scheduling',
      'Process Synchronization (Semaphores)',
      'Deadlocks',
      'Memory Management (Paging, Segmentation)',
      'File Systems and Disk Scheduling'
    ],
    definitions: [
      { term: 'Paging', definition: 'A memory management scheme that eliminates the need for contiguous allocation of physical memory.' },
      { term: 'Semaphore', definition: 'A synchronization tool used to solve the critical section problem.' }
    ],
    keywords: ['Throughput', 'Context Switching', 'Virtual Memory', 'Fragmentation', 'Kernel'],
    faq: [
      { question: 'Explain Banker\'s Algorithm for Deadlock Avoidance.', marks: 5, answer: 'Mathematical explanation of safety state and resource request algorithm.' },
      { question: 'Discuss various CPU scheduling algorithms.', marks: 10, answer: 'FCFS, SJF, Priority, Round Robin with Gantt charts and average waiting time calculations.' }
    ],
    resources: [
      { title: 'OS Diagrams Collection', type: 'Free', link: '#' }
    ]
  },
  {
    id: 'cn',
    name: 'Computer Networks',
    description: 'OSI layers, TCP/IP, and network protocols explained simply for exam readiness.',
    syllabus: [
      'OSI and TCP/IP Reference Models',
      'Physical and Data Link Layers',
      'Network Layer (IP Addressing, Routing)',
      'Transport Layer (TCP, UDP)',
      'Application Layer (HTTP, DNS)'
    ],
    definitions: [
      { term: 'IP Address', definition: 'A unique string of numbers separated by periods that identifies each computer using the Internet Protocol.' },
      { term: 'Routing', definition: 'The process of selecting a path for traffic in a network.' }
    ],
    keywords: ['Packet Switching', 'Subnetting', 'Handshake', 'Latency', 'Congestion Control'],
    faq: [
      { question: 'Compare OSI and TCP/IP models.', marks: 5, answer: 'Table-based comparison with focus on layer counts and functionality.' },
      { question: 'Explain IPv4 addressing and subnetting in detail.', marks: 10, answer: 'Classful vs Classless addressing, subnet mask calculation, and range determination.' }
    ],
    resources: [
      { title: 'Networking Keyword Guide', type: 'Free', link: '#' }
    ]
  },
  {
    id: 'software-engineering',
    name: 'Software Engineering',
    description: 'Understand software development life cycles, design models, testing strategies, and UML diagrams with exam-oriented explanations.',
    syllabus: [
      'SDLC Models (Waterfall, Spiral, Prototyping)',
      'Requirements Engineering',
      'Design Engineering & UML Diagrams',
      'Software Testing (White Box, Black Box)',
      'Software Project Management & Agile'
    ],
    definitions: [
      { term: 'SDLC', definition: 'A structured process used by the software industry to design, develop and test high-quality softwares.' },
      { term: 'Agile', definition: 'An iterative approach to software development that emphasizes incremental delivery, team collaboration, and continual planning.' }
    ],
    keywords: ['Waterfall', 'Scrum', 'Black-box testing', 'Use Case', 'Sprint'],
    faq: [
      { question: 'Discuss the Waterfall model with its advantages and disadvantages.', marks: 5, answer: 'A linear-sequential life cycle model where each phase must be completed before the next phase can begin.' },
      { question: 'Explain various levels of software testing in detail.', marks: 10, answer: 'Unit Testing, Integration Testing, System Testing, and Acceptance Testing with technical keywords.' }
    ],
    resources: [
      { title: 'SDLC Keyword Summary', type: 'Free', link: '#' }
    ]
  },
  {
    id: 'daa',
    name: 'Analysis of Algorithms',
    description: 'Learn algorithm design techniques, complexity analysis, and problem-solving strategies explained clearly for university exam writing.',
    syllabus: [
      'Asymptotic Notations & Complexity',
      'Divide and Conquer (Merge, Quick Sort)',
      'Greedy Algorithms (Knapsack, Huffman Coding)',
      'Dynamic Programming (LCS, Floyd Warshall)',
      'Backtracking & Branch and Bound'
    ],
    definitions: [
      { term: 'Big O Notation', definition: 'A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity.' },
      { term: 'Greedy Choice', definition: 'A strategy where a globally optimal solution can be arrived at by making a locally optimal choice at each step.' }
    ],
    keywords: ['Recurrence Relation', 'Optimal Substructure', 'Memoization', 'Backtracking', 'Asymptotic'],
    faq: [
      { question: 'Compare Merge Sort and Quick Sort.', marks: 5, answer: 'Table-based comparison focusing on stability, average/worst case time complexities, and space complexity.' },
      { question: 'Solve the 0/1 Knapsack problem using Dynamic Programming.', marks: 10, answer: 'Tabular representation of the solution, state-transition equation, and complexity analysis.' }
    ],
    resources: [
      { title: 'Complexity Cheat Sheet', type: 'Free', link: '#' }
    ]
  },
  {
    id: 'discrete-math',
    name: 'Discrete Mathematics',
    description: 'Master the mathematical foundations of computer science using clear definitions, theorems, and keyword-rich explanations.',
    syllabus: [
      'Mathematical Logic & Proofs',
      'Set Theory, Relations & Functions',
      'Graph Theory & Isomorphism',
      'Trees & Connectivity',
      'Algebraic Structures & Combinatorics'
    ],
    definitions: [
      { term: 'Proposition', definition: 'A declarative statement that is either true or false, but not both.' },
      { term: 'Relation', definition: 'A set of ordered pairs representing a relationship between elements of two sets.' }
    ],
    keywords: ['Quantifiers', 'Pigeonhole Principle', 'Euler Path', 'Isomorphism', 'Tautology'],
    faq: [
      { question: 'Explain basic Set Operations with Venn diagrams.', marks: 5, answer: 'Intersection, Union, Complement, and Symmetric Difference explained with visual aids.' },
      { question: 'Discuss Graph Coloring and its applications in scheduling.', marks: 10, answer: 'Algorithm for vertex coloring, chromatic number definition, and real-world mapping.' }
    ],
    resources: [
      { title: 'Logic Gates & Symbols Guide', type: 'Free', link: '#' }
    ]
  }
];

export const COURSES: Course[] = [
  {
    id: 'c-mini-course',
    title: 'C Syntax & Logic Mastery',
    duration: '1.5 Hours',
    price: 99,
    description: 'Master C programming syntax specifically for university exams. Learn to write bug-free code snippets that examiners love.',
    features: ['Keyword-rich answer writing', 'Common exam code patterns', 'Dry run techniques', 'Score-optimized formatting'],
    subjectId: 'c-programming'
  },
  {
    id: 'cpp-mini-course',
    title: 'OOPs Exam Survival Strategy',
    duration: '2 Hours',
    price: 149,
    description: 'A deep dive into C++ object-oriented features with a focus on theoretical and practical exam questions.',
    features: ['Diagram-based explanations', 'Keyword usage strategies', 'Real-world OOP mapping', 'Past paper analysis'],
    subjectId: 'cpp-programming'
  },
  {
    id: 'ds-mini-course',
    title: 'DS Algorithm Writing Workshop',
    duration: '2 Hours',
    price: 199,
    description: 'Learn the exact way to write algorithms and draw diagrams for stacks, queues, and trees to get maximum marks.',
    features: ['Complexity analysis simplified', 'Step-by-step algorithm writing', 'Time management tips', 'Interactive problem solving'],
    subjectId: 'data-structures'
  }
];

export const RESOURCES: Resource[] = [
  {
    id: 'r1',
    title: 'University Answer Writing Tips',
    category: 'General',
    description: '5 proven techniques to structure your answers using keywords to satisfy university examiners.',
    link: '#'
  },
  {
    id: 'r2',
    title: 'C/C++ Syntax Cheat Sheet',
    category: 'Programming',
    description: 'A two-page PDF containing all essential syntax required for basic to intermediate C and C++ programs.',
    link: '#'
  },
  {
    id: 'r3',
    title: 'Important Definitions PDF (All Subjects)',
    category: 'CSE Basics',
    description: 'Collection of 100+ most frequently asked definitions in university exams across all core subjects.',
    link: '#'
  }
];

export const ICONS = {
  'c-programming': <Terminal className="w-6 h-6" />,
  'cpp-programming': <Code className="w-6 h-6" />,
  'data-structures': <Layers className="w-6 h-6" />,
  'dbms': <Database className="w-6 h-6" />,
  'os': <Cpu className="w-6 h-6" />,
  'cn': <Globe className="w-6 h-6" />,
  'oops': <Layers className="w-6 h-6" />,
  'software-engineering': <LayoutIcon className="w-6 h-6" />,
  'daa': <Zap className="w-6 h-6" />,
  'discrete-math': <Hash className="w-6 h-6" />
};
