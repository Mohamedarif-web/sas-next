export type Course = {
  image: string;
  title: string;
  description: string;
  topics: string[];
};

// Four rows of three, matching the original layout
export const courseRows: Course[][] = [
  [
    {
      image: 'image1.png',
      title: 'Java with Spring boot',
      description:
        "This course covers Core Java fundamentals and advances into building enterprise-level applications using Spring Boot. You'll learn about RESTful APIs, Spring MVC, Spring Data JPA, and microservices architecture. Real-time project integration and deployment are included. Ideal for backend developers aiming to build scalable Java applications.",
      topics: [
        'Core Java concepts & OOP principles',
        'Spring Boot framework & architecture',
        'RESTful API development & testing',
        'Microservices architecture & design',
        'Real-time project integration',
        'Database connectivity & JPA',
      ],
    },
    {
      image: 'j-s.webp',
      title: 'Selenium with Java',
      description:
        "Master automation testing using Selenium WebDriver with Java. This course includes TestNG, Maven, Page Object Model (POM), and reporting tools. Hands-on projects and real-time scenarios prepare you for QA roles. You'll also learn how to integrate Selenium with Jenkins and GitHub. Perfect for aspiring automation testers.",
      topics: [
        'Selenium WebDriver fundamentals',
        'TestNG framework & annotations',
        'Page Object Model (POM) design',
        'Maven project management',
        'CI/CD integration with Jenkins',
        'Real-world test automation scenarios',
      ],
    },
    {
      image: 'image2.png',
      title: 'Python Training',
      description:
        'Learn Python from basics to advance with practical use cases. This course includes data types, functions, OOPs, file handling, and more. Hands-on scripting, real-world mini-projects, and basic automation included. Perfect for beginners, students, and non-programmers transitioning into tech.',
      topics: [
        'Python fundamentals & syntax',
        'Data structures & algorithms',
        'Object-oriented programming concepts',
        'File handling & database operations',
        'Automation scripting & libraries',
        'Real-world mini-projects',
      ],
    },
  ],
  [
    {
      image: 'f-s.png',
      title: 'Full Stack Development',
      description:
        'Become a full stack developer by mastering frontend (HTML, CSS, JavaScript, React) and backend (Node.js, Express, MongoDB). Learn how to build complete web applications from scratch. The course includes responsive UI design, API integration, and deployment. Best suited for those looking to work in both frontend and backend roles.',
      topics: [
        'Frontend technologies (HTML, CSS, JS, React)',
        'Backend development (Node.js, Express)',
        'Database management (MongoDB)',
        'API development & integration',
        'Responsive UI design principles',
        'Deployment strategies & hosting',
      ],
    },
    {
      image: 'web.jpg',
      title: 'Web Development',
      description:
        'This course focuses on creating visually appealing and responsive websites. Learn HTML, CSS, JavaScript, Bootstrap, and basic React for frontend development. Real-world projects like landing pages, portfolios, and blogs included. Ideal for anyone starting a career in web design and development.',
      topics: [
        'HTML5 & CSS3 fundamentals',
        'JavaScript programming & DOM',
        'Responsive design with Bootstrap',
        'Introduction to React framework',
        'Portfolio & landing page projects',
        'Cross-browser compatibility',
      ],
    },
    {
      image: 'p-d.jpg',
      title: 'Python Full Stack Development',
      description:
        "This program covers frontend skills (HTML, CSS, JavaScript, React) and backend with Python, Django, and MySQL. You'll build full-fledged web apps with real-world functionality. The course includes REST API development, form validation, and deployment. Great for those looking to specialize in Python-based full stack projects.",
      topics: [
        'Frontend technologies & frameworks',
        'Python & Django backend development',
        'MySQL database integration',
        'REST API development & testing',
        'Form validation & user authentication',
        'Full application deployment',
      ],
    },
  ],
  [
    {
      image: 'aws.jpg',
      title: 'AWS - Linux Training',
      description:
        "Learn the essentials of Amazon Web Services (AWS) along with hands-on Linux administration. Topics include EC2, S3, IAM, CLI, server management, and cloud security. You'll gain practical skills in deploying applications in the cloud. Ideal for IT professionals, cloud beginners, and DevOps aspirants.",
      topics: [
        'AWS fundamentals & core services',
        'Linux system administration',
        'EC2, S3, IAM, VPC configurations',
        'AWS CLI & automation scripts',
        'Cloud security best practices',
        'Application deployment strategies',
      ],
    },
    {
      image: 'image7.png',
      title: 'Oracle SQL & PLSQL',
      description:
        'Master writing optimized SQL queries and PL/SQL procedures for real-time applications. This course covers DDL, DML, Joins, Cursors, Triggers, and Exception Handling. Includes practical scenarios and exercises with Oracle DB tools. Essential for backend developers, data analysts, and database admins.',
      topics: [
        'SQL fundamentals & advanced queries',
        'Database design & normalization',
        'PL/SQL programming & procedures',
        'Triggers, cursors & exception handling',
        'Performance optimization techniques',
        'Real-world database scenarios',
      ],
    },
    {
      image: 'mob.jpg',
      title: 'Android Developer',
      description:
        'Build Android apps from scratch using Java/Kotlin and Android Studio. Learn about layouts, activities, intents, SQLite, Firebase, and API integration. Projects include calculator apps, login systems, and to-do lists. Best for mobile development enthusiasts and freelance app developers.',
      topics: [
        'Android development fundamentals',
        'Java/Kotlin programming for Android',
        'UI/UX design with Material Design',
        'SQLite & Firebase integration',
        'API integration & networking',
        'App publishing on Google Play Store',
      ],
    },
  ],
  [
    {
      image: 'dev.jpg',
      title: 'DevOps Training',
      description:
        'Learn the tools and processes used in modern DevOps environments. Covers Git, Jenkins, Docker, Kubernetes, Ansible, and CI/CD pipelines. Real-time hands-on practice with cloud platforms and automation scripts. Ideal for developers, sysadmins, and anyone pursuing a DevOps career.',
      topics: [
        'Version control with Git & GitHub',
        'CI/CD pipelines with Jenkins',
        'Containerization with Docker',
        'Orchestration with Kubernetes',
        'Infrastructure as Code (Ansible)',
        'Monitoring & logging solutions',
      ],
    },
    {
      image: 'ccc.png',
      title: 'CCNA',
      description:
        'Gain in-depth knowledge of networking concepts, LAN/WAN, routing, and switching. This course prepares you for the official Cisco CCNA certification exam. Includes hands-on labs with routers, switches, and packet tracers. Perfect for those aiming to become network engineers or IT administrators.',
      topics: [
        'Network fundamentals & protocols',
        'Routing and switching technologies',
        'Network security implementations',
        'Wireless networking concepts',
        'Troubleshooting methodologies',
        'CCNA certification preparation',
      ],
    },
    {
      image: 'images11.webp',
      title: 'API Testing (Manual and Automation)',
      description:
        "Learn how to test RESTful APIs manually using tools like Postman and automate them using Rest Assured with Java. This course covers HTTP methods, status codes, request/response validation, JSON/XML handling, and assertions. You'll also learn API authentication types (Bearer, OAuth2), test automation frameworks, and CI integration.",
      topics: [
        'API fundamentals & HTTP protocols',
        'Manual testing with Postman',
        'Automation with Rest Assured & Java',
        'Authentication methods (OAuth, JWT)',
        'Test reporting & documentation',
        'CI/CD integration for API testing',
      ],
    },
  ],
];
