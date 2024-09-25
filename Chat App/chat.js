document.getElementById('send-btn').addEventListener('click', function () {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        addMessage(userInput, 'user');
        document.getElementById('user-input').value = '';

        // Simulate bot response
        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            addMessage(botResponse, 'bot');
        }, 1000);
    }
});

function addMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('p');
    messageElement.className = sender === 'user' ? 'user-msg' : 'bot-msg';
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(userInput) {
    const responses = {
        "hi": "Hello! I'm here to assist you with web development topics or just to chat!",
        "how are you?": "I'm just a bot, but I'm doing great! How about you?",
        "bye": "Goodbye! Have a wonderful day!",
        "what's your name?": "I'm a chatbot created to assist you. You can call me WebBot!",
        "help": "What do you need help with? I can assist you with web development or just have some fun!",
        "thank you": "You're welcome! If you have more questions, just ask!",
        "tell me a joke": "Why do programmers prefer dark mode? Because light attracts bugs!",
        "web development": "Web development is the process of creating websites. It involves front-end (HTML, CSS, JS) and back-end (server-side languages). What do you want to know about it?",
        "html": "HTML stands for HyperText Markup Language. It's used to structure web pages.",
        "css": "CSS stands for Cascading Style Sheets. It's used for styling web pages.",
        "javascript": "JavaScript is a programming language that enables interactive web pages. It's an essential part of web development.",
        "what is a framework?": "A framework is a pre-built collection of code that helps developers build applications faster. Examples include React, Angular, and Vue.js.",
        "what is a library?": "A library is a collection of pre-written code that can be used to optimize tasks. For example, jQuery is a JavaScript library that simplifies DOM manipulation.",
        "what is responsive design?": "Responsive design ensures that a website looks good on all devices by using flexible layouts, images, and CSS media queries.",
        "what is an API?": "An API (Application Programming Interface) allows different software applications to communicate with each other.",
        "what is Git?": "Git is a version control system that helps developers track and manage changes to their code.",
        "what is CSS Grid?": "CSS Grid is a powerful layout system that allows you to create complex web layouts with rows and columns.",
        "what is Flexbox?": "Flexbox is a CSS layout model that provides a more efficient way to lay out, align, and distribute space among items in a container.",
        "what is the box model?": "The box model describes the rectangular boxes generated for elements in the document tree, including margins, borders, padding, and the actual content.",
        "what is a CDN?": "A Content Delivery Network (CDN) is a system of distributed servers that deliver web content based on the user's geographic location.",
        "what is SEO?": "SEO (Search Engine Optimization) is the practice of optimizing web pages to rank higher in search engine results.",
        "what is a database?": "A database is an organized collection of data that can be easily accessed, managed, and updated.",
        "what is SQL?": "SQL (Structured Query Language) is a programming language used for managing and manipulating relational databases.",
        "what is NoSQL?": "NoSQL databases are non-relational databases that provide flexible schemas and are designed to handle unstructured data.",
        "what is a variable?": "A variable is a named storage location in programming that holds a value which can be changed during program execution.",
        "what is a function?": "A function is a block of code designed to perform a particular task. Functions help to organize code into reusable components.",
        "what is an event listener?": "An event listener is a procedure in JavaScript that waits for an event to occur and executes a function when that event occurs.",
        "what is debugging?": "Debugging is the process of identifying and removing errors or bugs from code.",
        "what is a breakpoint?": "A breakpoint is a marker that you can set in your code to temporarily pause the execution of the program for debugging.",
        "what is a class in programming?": "A class is a blueprint for creating objects in object-oriented programming, encapsulating data and methods that operate on that data.",
        "what is an object?": "An object is a data structure that can contain data in the form of key-value pairs. In JavaScript, objects are a core part of the language.",
        "what is a loop?": "A loop is a programming construct that repeats a block of code multiple times until a certain condition is met.",
        "what is an array?": "An array is a collection of elements, each identified by an index or key. Arrays are commonly used to store lists of data.",
        "what is an index?": "An index is a numerical representation of the position of an element in an array, starting from zero.",
        "what is the DOM?": "The Document Object Model (DOM) is a programming interface for web documents that represents the structure of the document as a tree of objects.",
        "what is AJAX?": "AJAX (Asynchronous JavaScript and XML) is a technique for creating asynchronous web applications, allowing web pages to update without reloading.",
        "what is fetch API?": "The Fetch API provides a modern way to make network requests in JavaScript, allowing you to retrieve data from a server asynchronously.",
        "what is local storage?": "Local storage is a web storage feature that allows you to store key-value pairs in a web browser with no expiration time.",
        "what is session storage?": "Session storage is similar to local storage, but it stores data for the duration of the page session, clearing it when the page session ends.",
        "what is a cookie?": "A cookie is a small piece of data stored on the user's computer by the web browser while browsing a website.",
        "what is a server?": "A server is a computer program or device that provides functionality for other programs or devices, known as clients.",
        "what is a client?": "A client is a program or device that requests services or resources from a server.",
        "what is HTTP?": "HTTP (HyperText Transfer Protocol) is an application protocol for transmitting hypermedia documents, such as HTML.",
        "what is HTTPS?": "HTTPS (HyperText Transfer Protocol Secure) is an extension of HTTP that adds a layer of security to the communication between web browsers and servers.",
        "what is a domain name?": "A domain name is a human-readable address for a website, representing an IP address in a more memorable format.",
        "what is web hosting?": "Web hosting is a service that allows individuals and organizations to post a website onto the Internet.",
        "what is a web server?": "A web server is a server that stores web pages and delivers them to clients over the Internet.",
        "what is a template?": "A template is a pre-designed web page layout that can be customized with your content.",
        "what is a CMS?": "A Content Management System (CMS) is a software application that allows users to create, manage, and modify content on a website without specialized technical knowledge.",
        "what is WordPress?": "WordPress is a popular CMS that allows users to create and manage websites easily, even with no coding skills.",
        "what is e-commerce?": "E-commerce refers to buying and selling goods or services using the Internet.",
        "what is UX design?": "User Experience (UX) design is the process of enhancing user satisfaction by improving the usability, accessibility, and pleasure of interaction with a product.",
        "what is UI design?": "User Interface (UI) design is the process of designing the user interface for software or machines, focusing on maximizing usability and the user experience.",
        "what is a prototype?": "A prototype is an early sample or model of a product used to test and validate concepts before full-scale production.",
        "what is wireframing?": "Wireframing is a visual representation of a user interface that outlines the structure and elements of a website or application.",
        "what is a persona?": "A persona is a fictional character created to represent a user type that might use a service, product, site, or brand.",
        "what is A/B testing?": "A/B testing is a method of comparing two versions of a webpage or app against each other to determine which one performs better.",
        "what is a landing page?": "A landing page is a standalone web page designed specifically for a marketing or advertising campaign.",
        "what is a call to action?": "A call to action (CTA) is a prompt on a website that tells the user to take some specified action, such as 'Buy Now' or 'Sign Up.'",
        "what is a sitemap?": "A sitemap is a visual or textually organized model of a website's content that helps users navigate the site.",
        "what is a keyword?": "A keyword is a word or phrase that users type into a search engine to find relevant content.",
        "what is a plugin?": "A plugin is a piece of software that adds specific features or functionalities to an existing computer program.",
        "what is a theme?": "A theme is a pre-designed template that determines the overall look and layout of a website.",
        "what is caching?": "Caching is the process of storing copies of files or data in temporary storage to reduce access time and improve speed.",
        "what is a redirect?": "A redirect is a way to send both users and search engines to a different URL from the one they initially requested.",
        "what is a 404 error?": "A 404 error is an HTTP status code indicating that the server could not find the requested resource.",
        "what is SSL?": "SSL (Secure Sockets Layer) is a standard security technology that establishes an encrypted link between a web server and a browser.",
        "what is TLS?": "TLS (Transport Layer Security) is the successor to SSL and provides secure communication over a computer network.",
        "what is web accessibility?": "Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them.",
        "what is mobile-first design?": "Mobile-first design is a design approach that starts with designing for smaller screens before expanding to larger screens.",
        "what is a micro-interaction?": "Micro-interactions are small moments that focus on a specific task, such as liking a post or setting a status.",
        "what is a hover effect?": "A hover effect is a visual effect that occurs when a user hovers over an element, often used for buttons and links.",
        "what is a breakpoint in CSS?": "A breakpoint in CSS is a specific point where the layout of a webpage changes to accommodate different screen sizes.",
        "what is a web standard?": "Web standards are formal standards and specifications that ensure the long-term growth of the web.",
        "what is a tech stack?": "A tech stack is a combination of programming languages, tools, and frameworks used to develop a web application.",
        "what is a front-end developer?": "A front-end developer is responsible for creating the visual aspects of a website that users interact with directly.",
        "what is a back-end developer?": "A back-end developer is responsible for server-side application logic and integration of the work front-end developers do.",
        "what is full-stack development?": "Full-stack development refers to the ability to work on both the front-end and back-end of a web application.",
        "what is version control?": "Version control is a system that records changes to files or sets of files over time so that you can recall specific versions later.",
        "what is GitHub?": "GitHub is a web-based platform for version control and collaboration, allowing multiple people to work on projects at once.",
        "what is deployment?": "Deployment is the process of making an application or website available for use.",
        "what is a user story?": "A user story is a simple description of a feature from the perspective of the user who desires the new capability.",
        "what is agile development?": "Agile development is a method of software development that emphasizes flexibility, collaboration, and customer satisfaction.",
        "what is a sprint?": "A sprint is a set period during which specific work has to be completed and made ready for review in Agile development.",
        "what is DevOps?": "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops), aiming to shorten the development lifecycle.",
        "what is a wireframe?": "A wireframe is a visual guide that represents the skeletal framework of a website.",
        "what is a mockup?": "A mockup is a static representation of the design of a website or application.",
        "what is a prototype?": "A prototype is a preliminary version of a product that demonstrates its functionality.",
        "what is a flowchart?": "A flowchart is a diagram that represents a process, showing the steps as boxes of various kinds and their order.",
        "what is pair programming?": "Pair programming is an agile development technique in which two programmers work together at one workstation.",
        "what is unit testing?": "Unit testing is a software testing technique where individual units or components of a software are tested.",
        "what is integration testing?": "Integration testing is a type of software testing in which individual units are combined and tested as a group.",
        "what is end-to-end testing?": "End-to-end testing is a testing methodology that tests the application flow from start to finish.",
        "what is a coding challenge?": "A coding challenge is a task given to assess the programming skills of a developer.",
        "what is open source?": "Open source refers to software that is released with a license that allows anyone to use, modify, and distribute the source code.",
        "what is a software library?": "A software library is a collection of precompiled routines that a program can use.",
        "what is a software framework?": "A software framework is a platform for developing software applications that provides a foundation and reusable code.",
        "what is a command line interface?": "A command line interface (CLI) is a text-based interface used to interact with computer programs by typing commands.",
        "what is a GUI?": "A graphical user interface (GUI) is a type of user interface that allows users to interact with electronic devices through graphical icons and visual indicators.",
        "what is a system design interview?": "A system design interview assesses a candidate's ability to design complex systems and their understanding of how to scale them.",
        "what is software architecture?": "Software architecture is the high-level structure of a software system and the discipline of creating such structures.",
        "what is technical debt?": "Technical debt refers to the implied cost of additional rework caused by choosing an easy solution now instead of using a better approach that would take longer.",
        "what is a software development lifecycle (SDLC)?": "The software development lifecycle is a process used by software developers to design, develop, and test software applications.",
        "what is a wireframe?": "A wireframe is a visual representation of a user interface that outlines the structure and elements of a webpage or application.",
        "what is a backlog?": "A backlog is a prioritized list of work for a team that is derived from the roadmap and its requirements.",
        "what is an iteration?": "An iteration is a single pass through a process, often used in the context of software development to denote a stage of development.",
        "what is a release?": "A release is the distribution of the final version of a software product to users.",
        "what is a hotfix?": "A hotfix is a quick solution to a specific problem, usually involving code changes, that is deployed immediately.",
        "what is a feature branch?": "A feature branch is a dedicated branch created in version control systems to develop a specific feature or fix without affecting the main codebase."
    };

    const inputLower = userInput.toLowerCase();

    // Fuzzy matching for common phrases
    if (inputLower.includes("hello")) {
        return "Hi there! How can I assist you today?";
    }
    if (inputLower.includes("how")) {
        return "I'm here to help! What would you like to know?";
    }
    if (inputLower.includes("guess") || inputLower.includes("number")) {
        return playGuessingGame();
    }

    return responses[inputLower] || "I'm sorry, I don't understand. Try asking me about web development or say 'tell me a joke'!";
}

let randomNumber = Math.floor(Math.random() * 10) + 1;

function playGuessingGame() {
    return "I'm thinking of a number between 1 and 10. Type your guess!";
}

document.getElementById('user-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const userInput = document.getElementById('user-input').value;
        addMessage(userInput, 'user');
        document.getElementById('user-input').value = '';

        // Simulate bot response
        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            if (botResponse.includes("number")) {
                // Check the guess against the random number
                checkGuess(userInput);
            } else {
                addMessage(botResponse, 'bot');
            }
        }, 1000);
    }
});

function checkGuess(userInput) {
    const userGuess = parseInt(userInput);
    if (!isNaN(userGuess)) {
        if (userGuess === randomNumber) {
            addMessage("Congratulations! You guessed the right number! 🎉", 'bot');
            randomNumber = Math.floor(Math.random() * 10) + 1; // Reset the game
        } else if (userGuess < randomNumber) {
            addMessage("Too low! Try again!", 'bot');
        } else {
            addMessage("Too high! Try again!", 'bot');
        }
    } else {
        addMessage("Please enter a valid number!", 'bot');
    }
}
