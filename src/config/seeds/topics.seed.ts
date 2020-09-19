export interface Topic {
  name: string;
  sentences: string[];
}

export const topics: Topic[] = [
    {
        'name': 'Biology I',
        'sentences': [
            'The cell is the basic unit of life.',
            'Photosynthesis is the conversion of light energy into chemical energy.',
            'Vegans are Herbivores.',
            'Humans are Omnivores.',
            'People that study biology are known as biologists.',
            'Ecology is the study of ecosystems and how organisms interact with their environment.',
            'The common cold is a type of virus.',
            'Moulds, yeasts and mushrooms are types of fungus.',
            'Bacteria are extremely small and are made up of just one cell.',
            'Dolly the sheep was the first mammal to be cloned from an adult cell.'
        ]
    },
    {
        'name': 'Cognitive Psychology',
        'sentences': [
            'Cognitive psychology is a branch of psychology that looks at basic actions of the mind.',
            'Perception is the process of getting, interpreting, selecting, and organizing sensory information.',
            'Thought is the operation of the brain in conscious activity.',
            'Learning is getting new stuff into your brain.',
            'Memory is the personal record of past experiences.',
            'Short-term memory can keep information in mind for a short time, up to 20-20 seconds',
            'Long-term memory can hold large amounts of information for long periods of time.',
            'Attention is cognitive resources, mental effort, or concentration devoted to a cognitive process.',
            'Artificial intelligence is a branch of computer science concerned with creating computers that mimic human performance on cognitive tasks.'
        ]
    },
    {
        'name': 'Constitutional History',
        'sentences': [
            'The first amendment gives us freedom of religion, speech, press, and assembly; right of petition.',
            'The second amendment gives us the right to bear arms.',
            'The third amendment limits quartering of troops.',
            'The fourth amendment protects agains unreasonable search and seizure.',
            'The fifth amendment gives due process, double jeopardy, and self incrimination laws.',
            'The sixth amendment gives the right to a speedy trial.',
            'The seventh amendment ensures trial by jury in civil cases.',
            'The eighth amendment protects against excessive bail or fine, and ensures no cruel or unusual punishment.',
            'The ninth amendment ensures that people retain rights.',
            'The tenth amendment defines powers not delegate to the US to states or people.',
            'The thirteenth amendment forbade slavery and involuntary servitude.',
            'The fourteenth amendment made all persons born or naturalized in the United States citizens of the country.',
            'The fifteenth amendment gave African American men the right to vote.'
        ]
    },
    {
        'name': 'Web Development - Concepts',
        'sentences': [
            'A path describes where a file or folder is on our computer.',
            'Version control is a way of tracking changes made to a file or directory.',
            'A branch is a pointer to a commit.',
            'A function is a reusable block of code.',
            'Developers should strive to make code Reusable, DRY, and readable.',
            'Arrays and Objects are collections of data.',
            'Encapsulation hides the internal state of an object',
            'An object encapsulates related data and behavior in an organized structure.',
            'Object-Oriented programming allows for abstraction, encapsulation, and modularity.',
            'The Document Object Model is a programming interface for HTML.',
            'DOM Events occur when the user interacts with a page.',
            'Synchronous code runs from top to bottom and occurs at the same time.',
            'Asynchronous code may not happen at the same time.',
            'A user story looks like: "As a <role>, I want <feature>, so that <benefit>".',
            'A wireframe is a mockup of a user interface.',
            'The model makes calculations and the view displays them.',
            'Documentation helps you remember the purpose of your code, and helps others contribute to it.',
            'Higher Order Functions and Enumerables are ways of iterating over collections.',
            'A class is a blueprint that defines properties and behavior needed for creating objects.',
            'An Entity-Relationship-Diagram-(ERD) specifies the relationships of models in a diagram.',
            'Clients are able to communicate with a server through request-response methods.',
            'The RESTful HTTP Methods are GET, POST, PUT, PATCH, and DELETE.',
            'CRUD stands for create, read, update, and delete.',
            'A session is a place to store data during one request that you can read during later requests.',
            'A cookie is a small piece of data sent from a website and stored on the user\'s computer by the user\'s web browser.',
            'The Software-Development-Life-Cycle describes a process for planning, creating, testing, and deploying an information system.',
            'A web framework is designed to support the development of web applications including web services, resources, and APIs.',
            'An API is a service that provides raw data for public use.',
            'Promises are callbacks that may or may not happen.',
            'An unopinionated framework allows for freedom in how an application is structured.',
            'Frameworks that leverage inference and convention over configuration are called opinionated.',
            'WebSockets is a web standard for talking to servers asynchronously.'
        ]
    },
    {
        'name': 'Web Development - Technologies',
        'sentences': [
            'HTML5 creates the structure and semantics of a document.',
            'CSS3 is a styling language that tells the browser how to display a document.',
            'Flexbox is a responsive layout model helps display content on different screen sizes.',
            'JavaScript is a programming language that manipulates the behavior of websites.',
            'jQuery is a JavaScript library that helps with DOM traversal.',
            'Markdown is a light-weight markup language that can be easily rendered into HTML.',
            'Ruby is a developer friendly, server-side programming language.',
            'ActiveRecord is an ORM framework for working with models and their data.',
            'Sinatra, is a lightweight, Ruby framework for for creating server-side applications.',
            'Rails is a highly opinionated server-side web application framework written in Ruby.',
            'Devise is a gem that simplifies implementing user authentication.',
            'AngularJS is a structural framework for dynamic web apps utilizing the MVC architecture.',
            'AJAX, which stands for Asynchronous-Javascript-and-XML, allows us to retrieve data from APIs.',
            'Node is a JavaScript runtime environment for running JS in a server environment.',
            'Express is an un-opinionated Sinatra-inspired web development framework for node.js.',
            'Mongoose is a MongoDB is an Object-Data-Modeling-(ODM) library for Node that allows us to encapsulate and model our data in our applications.',
            'MongoDB is an open source, document-oriented database.',
            'Mongoose is to MongoDB and Express as ActiveRecord is to PostgreSQL and Rails.',
            'Mocha is a JavaScript test framework for asynchronous testing.',
            'Chai is a BDD/TDD library for node made to work with JavaScript testing frameworks.',
            'Supertest is a super-agent driven library for testing node.js HTTP servers using a fluent API.',
            'Socket.io is a JavaScript library that helps create client-server applications that communicate over WebSockets',
            'React is a JavaScript library used to craft modern day UI and views for the front-end in web applications.',
            'Redux is a state management library that helps to create easy to test applications that behave consistently, and run in different environments.'
        ]
    },
    {
        'name': 'Data Structures',
        'sentences': [
            'A stack is a data structure that works like a pile of plates',
            'A queue is a data structure that works as a line of people'
        ]
    },
    {
        'name': 'Prolog',
        'sentences': [
            'Prolog is a logical programming language.',
            'An atom is a general-purpose name with no inherent meaning.',
            'Numbers can be floats or integers.',
            'Variables are denoted by a string consisting of letters, numbers and underscore characters, and beginning with an upper-case letter or underscore.',
            'A compound term is composed of an atom called a \'functor\' and a number of \'arguments\', which are again terms.',
            'A List is an ordered collection of terms.',
            'Strings are sequences of characters surrounded by quotes and equivalent to a list of (numeric) character codes.',
            'Pure Prolog is restricted to Horn clauses.',
            'A rule has a head and a body.',
            'Head is true if Body is true.',
            'Clauses with empty bodies are called facts.'
        ]
    }
];