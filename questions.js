const questions = [
        {
            question: "What does CPU stand for?",
            answers: {
                a: "Central Process Unit",
                b: "Central Processing Unit",
                c: "Computer Personal Unit",
                d: "Central Processor Unit"
            },
            correctAnswer: "b"
        },
        {
            question: "Which of the following is not an input device?",
            answers: {
                a: "Keyboard",
                b: "Mouse",
                c: "Monitor",
                d: "Scanner"
            },
            correctAnswer: "c"
        },
        {
            question: "Who is known as the father of the computer?",
            answers: {
                a: "Alan Turing",
                b: "Charles Babbage",
                c: "John von Neumann",
                d: "Bill Gates"
            },
            correctAnswer: "b"
        },
        {
            question: "What does RAM stand for?",
            answers: {
                a: "Random Access Memory",
                b: "Read Access Memory",
                c: "Rapid Access Memory",
                d: "Real-time Access Memory"
            },
            correctAnswer: "a"
        },
        {
            question: "Which company developed the Windows operating system?",
            answers: {
                a: "Apple",
                b: "Google",
                c: "Microsoft",
                d: "IBM"
            },
            correctAnswer: "c"
        },
        {
            question: "What is the main function of the ALU?",
            answers: {
                a: "Store data",
                b: "Perform arithmetic and logic operations",
                c: "Control all parts of the computer",
                d: "Handle input and output operations"
            },
            correctAnswer: "b"
        },
        {
            question: "What does HTML stand for?",
            answers: {
                a: "Hyper Trainer Marking Language",
                b: "Hyper Text Marketing Language",
                c: "Hyper Text Markup Language",
                d: "Hyper Text Markup Leveler"
            },
            correctAnswer: "c"
        },
        {
            question: "Which of the following is a web browser?",
            answers: {
                a: "Google",
                b: "Firefox",
                c: "Bing",
                d: "DuckDuckGo"
            },
            correctAnswer: "b"
        },
        {
            question: "Which programming language is primarily used for web development?",
            answers: {
                a: "Python",
                b: "C++",
                c: "Java",
                d: "JavaScript"
            },
            correctAnswer: "d"
        },
        {
            question: "What is the name of the first electronic general-purpose computer?",
            answers: {
                a: "ENIAC",
                b: "UNIVAC",
                c: "EDSAC",
                d: "MANIAC"
            },
            correctAnswer: "a"
        },
        {
            question: "Which protocol is used to transfer files over the Internet?",
            answers: {
                a: "FTP",
                b: "HTTP",
                c: "SMTP",
                d: "IMAP"
            },
            correctAnswer: "a"
        },
        {
            question: "What does URL stand for?",
            answers: {
                a: "Uniform Resource Locator",
                b: "Uniform Resource Link",
                c: "Unified Resource Locator",
                d: "Uniform Retrieval Locator"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the main purpose of an operating system?",
            answers: {
                a: "To provide internet access",
                b: "To manage computer hardware and software resources",
                c: "To act as an interface for web applications",
                d: "To provide a platform for developing software"
            },
            correctAnswer: "b"
        },
        {
            question: "Which of these is a type of network topology?",
            answers: {
                a: "Mesh",
                b: "Tree",
                c: "Ring",
                d: "All of the above"
            },
            correctAnswer: "d"
        },
        {
            question: "What does PDF stand for?",
            answers: {
                a: "Portable Document Format",
                b: "Printable Document Format",
                c: "Public Document Format",
                d: "Page Description Format"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the primary function of a firewall?",
            answers: {
                a: "To scan for viruses",
                b: "To monitor network traffic",
                c: "To prevent unauthorized access to or from a private network",
                d: "To back up data"
            },
            correctAnswer: "c"
        },
        {
            question: "Who invented the World Wide Web?",
            answers: {
                a: "Bill Gates",
                b: "Steve Jobs",
                c: "Tim Berners-Lee",
                d: "Mark Zuckerberg"
            },
            correctAnswer: "c"
        },
        {
            question: "Which of the following is not a programming language?",
            answers: {
                a: "Python",
                b: "Java",
                c: "HTML",
                d: "C#"
            },
            correctAnswer: "c"
        },
        {
            question: "What is the use of an IP address?",
            answers: {
                a: "To locate a website on the Internet",
                b: "To identify a device on a network",
                c: "To secure a network",
                d: "To speed up internet connection"
            },
            correctAnswer: "b"
        },
        {
            question: "Which of the following is an example of an open-source operating system?",
            answers: {
                a: "Windows",
                b: "macOS",
                c: "Linux",
                d: "Android"
            },
            correctAnswer: "c"
        },
        {
            question: "What does SQL stand for?",
            answers: {
                a: "Structured Query Language",
                b: "Simple Query Language",
                c: "Structured Question Language",
                d: "Standard Query Language"
            },
            correctAnswer: "a"
        },
        {
            question: "Which device is used to connect multiple computers in a network?",
            answers: {
                a: "Router",
                b: "Switch",
                c: "Modem",
                d: "Hub"
            },
            correctAnswer: "b"
        },
        {
            question: "What does GPU stand for?",
            answers: {
                a: "General Processing Unit",
                b: "Graphical Processing Unit",
                c: "Global Processing Unit",
                d: "Graphical Performance Unit"
            },
            correctAnswer: "b"
        },
        {
            question: "Which of these is an example of an email protocol?",
            answers: {
                a: "HTTP",
                b: "FTP",
                c: "SMTP",
                d: "DNS"
            },
            correctAnswer: "c"
        },
        {
            question: "What is the full form of BIOS?",
            answers: {
                a: "Basic Input Output System",
                b: "Binary Input Output System",
                c: "Basic Internal Output System",
                d: "Binary Internal Output System"
            },
            correctAnswer: "a"
        },
        {
            question: "Which of the following is not a type of computer virus?",
            answers: {
                a: "Trojan Horse",
                b: "Worm",
                c: "Spyware",
                d: "Firewall"
            },
            correctAnswer: "d"
        },
        {
            question: "What is the primary purpose of a database?",
            answers: {
                a: "To process data",
                b: "To store data",
                c: "To transmit data",
                d: "To create data"
            },
            correctAnswer: "b"
        },
        {
            question: "Which of the following is a text editor used in programming?",
            answers: {
                a: "Microsoft Word",
                b: "Notepad++",
                c: "Excel",
                d: "PowerPoint"
            },
            correctAnswer: "b"
        },
        {
            question: "Which company is known for its Android operating system?",
            answers: {
                a: "Apple",
                b: "Microsoft",
                c: "Google",
                d: "IBM"
            },
            correctAnswer: "c"
        },
        {
            question: "What does HTTP stand for?",
            answers: {
                a: "HyperText Transfer Protocol",
                b: "HyperText Transmission Protocol",
                c: "HighText Transfer Protocol",
                d: "Hyperlink Transfer Protocol"
            },
            correctAnswer: "a"
        },
        {
            question: "What does SSL stand for?",
            answers: {
                a: "Secure Sockets Layer",
                b: "Secure System Layer",
                c: "Secure Software Layer",
                d: "Safe Sockets Layer"
            },
            correctAnswer: "a"
        },
        {
            question: "Which language is primarily used for artificial intelligence and machine learning?",
            answers: {
                a: "JavaScript",
                b: "C++",
                c: "Python",
                d: "Ruby"
            },
            correctAnswer: "c"
        },
        {
            question: "What is the main function of a DNS?",
            answers: {
                a: "To convert domain names into IP addresses",
                b: "To transfer emails",
                c: "To connect to the Internet",
                d: "To protect against malware"
            },
            correctAnswer: "a"
        },
        {
            question: "Which of the following is an example of a non-volatile memory?",
            answers: {
                a: "RAM",
                b: "ROM",
                c: "Cache",
                d: "Register"
            },
            correctAnswer: "b"
        },
        {
            question: "What does HTTPS stand for?",
            answers: {
                a: "HyperText Transfer Protocol Secure",
                b: "HyperText Transfer Protocol Service",
                c: "HyperText Transfer Process Secure",
                d: "HyperText Transfer Platform Secure"
            },
            correctAnswer: "a"
        },
        {
            question: "Which of these is a database management system?",
            answers: {
                a: "Oracle",
                b: "Microsoft Access",
                c: "MySQL",
                d: "All of the above"
            },
            correctAnswer: "d"
        },
        {
            question: "What does SaaS stand for in cloud computing?",
            answers: {
                a: "Software as a Service",
                b: "Storage as a Service",
                c: "System as a Service",
                d: "Software and System"
            },
            correctAnswer: "a"
        },
        {
            question: "Which of the following is not an example of a programming paradigm?",
            answers: {
                a: "Object-oriented",
                b: "Functional",
                c: "Procedural",
                d: "Network"
            },
            correctAnswer: "d"
        },
        {
            question: "What is the main purpose of an API?",
            answers: {
                a: "To connect databases",
                b: "To allow different software applications to communicate with each other",
                c: "To provide internet access",
                d: "To create user interfaces"
            },
            correctAnswer: "b"
        },
        {
            question: "Which company is famous for its iPhone product?",
            answers: {
                a: "Microsoft",
                b: "Google",
                c: "Samsung",
                d: "Apple"
            },
            correctAnswer: "d"
        }
];
