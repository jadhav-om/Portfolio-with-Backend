export const Bio = {
  name: "Om Jadhav",
  roles: [
    "Full Stack Developer",
    "Android Developer",
    "Web Developer",
    "Programmer",
  ],
  description:
    "I am a passionate Full Stack Developer with skills in web and Android development. I love solving problems, building user-friendly applications, and continuously learning new technologies. With a strong foundation in programming, I focus on creating efficient and high-quality solutions that make an impact.",
  github: "https://github.com/jadhav-om",
  resume:
    "https://drive.google.com/file/d/1ZGNJuA82pUeoNsV6ZIIlIWwpoMJvJASE/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/jadhav-om/",
  twitter: "https://twitter.com/objadhav7",
  insta: "",
  facebook: "",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },

      
  /*  {
        name: "Angular Js",
        image:
          "data:image/jpeg;base64,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",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      
      {
        name: "Next Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },
  */    
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
  
    /*  
      {
        name: "Flutter",
        image:
          "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
      },
   */
      
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,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",
      },
      // {
      //   name: "Java",
      //   image:
      //     "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      // },
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Flask",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1280px-Flask_logo.svg.png",
      },
      {
        name: "Django",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFFyY16N5NRhzoG24RqB7x8Ok2t8Bdgs-tuMsOBXS2Q&s",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      // {
      //   name: "Postgresql",
      //   image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      // },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "AWS",
        image:
          "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
      },
      {
        name: "Google Cloud",
        image:
          "https://static-00.iconduck.com/assets.00/google-cloud-platform-logo-icon-2048x1824-pg4wzspq.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Jenkins",
        image:
          "https://toppng.com/uploads/preview/jenkins-logo-11609365847mufysaivph.png",
      },
      // {
      //   name: "Nginx",
      //   image: "https://download.logo.wine/logo/Nginx/Nginx-Logo.wine.png",
      // },
      // {
      //   name: "Grafana",
      //   image:
      //     "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Grafana_logo.svg/1200px-Grafana_logo.svg.png",
      // },
      {
        name: "Kubernetes",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/00/Kubernetes_%28container_engine%29.png",
      },
      // {
      //   name: "Prometheus",
      //   image:
      //     "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/1200px-Prometheus_software_logo.svg.png",
      // },
    ],
  },
  {
    title: "Android",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Kotlin",
        image:
          "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
      },
      {
        name: "Jetpack Compose",
        image:
          "https://3.bp.blogspot.com/-VVp3WvJvl84/X0Vu6EjYqDI/AAAAAAAAPjU/ZOMKiUlgfg8ok8DY8Hc-ocOvGdB0z86AgCLcBGAsYHQ/s1600/jetpack%2Bcompose%2Bicon_RGB.png",
      },
      {
        name: "XML",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
      },
      {
        name: "Android Studio",
        image:
          "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
      },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Tenserflow",
        image:
          "https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png",
      },
      {
        name: "Keras",
        image:
          "https://miro.medium.com/v2/resize:fit:600/1*DKu_54iqz6C-p6ndo7rO3g.png",
      },
      {
        name: "Jupyter",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png",
      },
      {
        name: "Google Colab",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg",
      },
      {
        name: "Sk Learn Kit",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "Vercel",
        image:
          "https://www.svgrepo.com/show/354513/vercel-icon.svg",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Eclipse",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Postman",
        image:
          "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",
      },
      // {
      //   name: "Adobe XD",
      //   image:
      //     "https://camo.githubusercontent.com/c205ecbe12500177d102169d97bc1c17c545155fdf5ec78c08d54ac53e5b38c1/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61646f62652d78642e737667",
      // },
      {
        name: "Figma",
        image:
          "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-c687b.appspot.com/o/R3%20sys.png?alt=media&token=506ea486-c77b-42cf-b116-17b63d230a1c",
    role: "Java Developer Intern",
    company: "R3 System India Pvt. Ltd.",
    date: "June 2023 - July 2023",
    desc: "I have hands-on experience in web application development using Java technologies, including Core Java, Advanced Java, Java Servlet, JSP, and JDBC. During my training and internship, I successfully worked on real-time projects, gaining practical insights into database management with SQL. I demonstrated proficiency in implementing Java-based solutions, ensuring robust and efficient web applications.",
    skills: [
      "Core Java",
      "Advanced Java",
      "Java Servlet",
      "JSP",
      "JDBC",
      "MySQL",
      
    ],
    doc: "https://firebasestorage.googleapis.com/v0/b/portfolio-c687b.appspot.com/o/R3sys-Java_Certificate.png?alt=media&token=d4d85550-68af-4d58-adbc-d43cb0ab61e4",
  },
  {
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-c687b.appspot.com/o/sumago.png?alt=media&token=0f85d1c4-c3cc-4252-a2d0-d6b1c983cdf6",
  
    role: "Software Developer Intern",
    company: "Sumago Infotech Pvt. ltd.",
    date: "Aug 2021 - Sep 2021",
    desc: "During my 6-week learning internship, I focused on HTML, CSS, JavaScript, Arduino, and Cloud Computing. I actively built real-time projects, gaining hands-on experience in web development, embedded systems, and cloud technologies. This immersive journey enhanced my skills and deepened my passion for innovative solutions in the digital world.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Cloud Computing",
      "Arduino",
    ],
    doc: "https://firebasestorage.googleapis.com/v0/b/portfolio-c687b.appspot.com/o/Sumago_Certificate.jpg?alt=media&token=5e37a023-0eb1-4d29-8d2b-145d9960cb2e",
  }

];

export const education = [
  {
    id: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-c687b.appspot.com/o/rcpit_logo1.webp?alt=media&token=cbf3d4e7-7973-4514-9e89-4abcd0ffe07c",
    school: "R. C. Patel Institute of Technology, Shirpur",
    date: "Nov 2022 - July 2025",
    grade: "8.79 CGPA",
    desc: "I am currently in my final year pursuing a Bachelor’s degree in Computer Engineering at R. C. Patel Institute of Technology, Shirpur. With a CGPA of 8.79, I have gained strong technical knowledge through coursework in Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks. I am actively enhancing my skills through projects and hands-on learning, preparing for a career in software development.",
    degree: "Bachelor of Technology - B. Tech in Computer Engineering",
  },
  {
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-c687b.appspot.com/o/rcpp.jfif?alt=media&token=8e1b5af1-0b29-4503-b749-b8e5fd520ac4",
    school: "R. C. Patel Polytechnic, Shirpur",
    date: "Aug 2019 - July 2022",
    grade: "92.57%",
    desc: "I successfully completed a Diploma in Computer Engineering at R. C. Patel Polytechnic, Shirpur, with an impressive grade of 92.57%. This program equipped me with a strong foundation in practical and theoretical aspects of Computer Engineering.",
    degree: "Diploma in Computer Engineering",
  },
  {
    id: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-c687b.appspot.com/o/mrpms.jfif?alt=media&token=7aa0b1d1-db95-461f-a9dd-c0de295e9f24",
    school: "M. R. Patel Military School, Shirpur",
    date: "June 2018 - Apr 2019",
    grade: "88.40%",
    desc: "During my time at M. R. Patel Military School, I received a well-rounded education that combined strong academic learning with military discipline. I excelled in my studies and achieved a remarkable grade of 88.40% in my SSC exams. The rigorous academic curriculum, combined with a focus on leadership and physical fitness, helped me build a solid foundation for both personal and professional growth. ",
    degree: "SSC (Class X)",
  },
];

export const projects = [
  {
    id: 11,
    title: "OCR App",
    date: "Nov 2021 - May 2022",
    description:
      "Designed and built an Android app for Optical Character Recognition (OCR), enabling users to scan documents, perform text operations cut, copy, paste, share, and convert content to both text and PDF formats, simplifying document management and accessibility.",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/4130a8184000489.Y3JvcCwxNDAwLDEwOTUsMCwz.jpg",
    tags: [
      "Java",
      "Android Studio",
      "Firebase",
    
    ],
    category: "android app",
     github: "https://github.com/jadhav-om/OCR-App",
    
  },
  {
    id: 12,
    title: "Expense Tracker App",
    date: "Jan 2023 - March 2023",
    description:
      "Developed a web-based Expense Tracker application with user authentication, allowing secure login and registration. The application enables users to add, view, update, and delete expenses while categorizing transactions. It features interactive charts and visualizations for tracking spending patterns, analyzing expenses by category, and gaining better financial control. ",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-c687b.appspot.com/o/expense%20tracker%20project%20image.png?alt=media&token=1aee6718-8b37-44fc-8d86-cfece9bc621c",
    tags: [
      "Java",
      "Advanced Java",
      "JSP",
      "Servlets",
      "MySQL",
      "Hibernate",
      "HTML",
      "CSS",
    
    ],
    category: "web app",
     github: "https://github.com/jadhav-om/Expense-Tracker-App",
    
  },
  {
  id: 12,
    title: "Flight Management App",
    date: " Aug 2024 - Oct 2024",
    description:
      "Developed a robust Flight Management System to streamline airline operations and enhance user experience. The system enables administrators to efficiently manage flights, routes, and airports with features to add, view, update, and delete records. For passengers, it provides seamless flight search, ticket booking, booking history tracking, and automated ticket invoice generation. Built using Java, JSP, Spring Boot, Hibernate, HTML, and CSS, the application ensures efficient data handling, security, and a user-friendly interface for smooth airline management.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-c687b.appspot.com/o/Flight%20Management%20project%20image.png?alt=media&token=a874047a-675e-4fc3-834c-4e3b95413f64",
    tags: [
      "Java",
      "Advanced Java",
      "SpringBoot",
      "MySQL",
      "Hibernate",
      "HTML",
      "CSS",
      "JavaScript",
     
    
    ],
    category: "web app",
     github: "https://github.com/jadhav-om/Flight-Management-System",
    
  },
{
  id: 12,
    title: "Todo App",
    date: " Sep 2022 - Oct 2022",
    description:
      "Developed a Todo Web Application to help users efficiently manage tasks and stay organized. The application allows users to create, update, mark as completed, and delete tasks with ease. It features a clean and intuitive interface, offering real-time updates and task categorization for better organization. Built with HTML, CSS, JavaScript, and integrated with a backend server using Node.js, the application ensures a seamless user experience and persistent data storage.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-c687b.appspot.com/o/Todo%20project%20image.png?alt=media&token=9b38f85d-b6fd-4a60-ae18-b1642020f3dc",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
     
    
    ],
    category: "web app",
     github: "https://github.com/jadhav-om/Flight-Management-System",
    
  },

  {
    id: 13,
    title: "Brain Tumor Detection",
    date: "July 2023 - Aug 2023",
    description:
      "Preprocessed and augmented the dataset to improve model accuracy, trained the model, created API using model and Python, and used React web app for the project's front end. Achievements: Achieved an accuracy of 99.2% to accurately detect brain tumors from medical images.",
    image:
      "https://github.com/rishavchanda/Brain-Tumor-Detection/raw/main/Readme_resource/Image2.png",
    tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
    category: "machine learning",
   // github: "https://github.com/rishavchanda/Brain-Tumor-Detection",
   // webapp: "https://brain-tumor.netlify.app/",
   
  },

{

  id: 14,
    title: "Inventory Management System",
    date: " Jan 2022 - March 2022",
    description:
      "An efficient web-based application designed to streamline the management of inventory for businesses. The system enables inventory managers to effortlessly track raw and processed materials, update stock levels, and generate detailed logs of all inventory transactions. It provides a user-friendly interface to issue materials, view unavailable items, and maintain an organized inventory database. The system ensures accuracy, reduces human error, and improves operational efficiency by automating key tasks.",
    image:
      "https://codeastro.com/wp-content/uploads/2023/02/CodeAstro-Inventory-System-PHP-Laravel_Thumbnail.jpg",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
      "JSP",
      "Servlets",
      "MySQL",
      
      

     
    
    ],
    category: "web app",
     github: "https://github.com/jadhav-om/Inventory-Management-System",
    
  },


    {

      id: 15,
        title: "Library Management System",
        date: " March 2022 - May 2022",
        description:
          "This is a web-based application that helps manage library activities. It allows librarians to keep track of books, manage users, and handle book checkouts and returns. Users can easily search for books, view their details, and borrow them. The system makes it easier for libraries to manage their collections and helps users find and borrow books quickly.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/portfolio-c687b.appspot.com/o/Library%20Management%20system%20project%20image.png?alt=media&token=36f86aa9-7fda-485e-a849-51f18f4ca6f6",
        tags: [
          "HTML",
          "CSS",
          "JavaScript",
          "Java",
          "JSP",
          "Servlets",
          "MySQL",
          "Hibernate",
          
        
        ],
        category: "web app",
         github: "https://github.com/jadhav-om/Library-Management-System",
        
      },

  /*{
    id: 9,
    title: "Trackify",
    date: "Jun 2023 - Jul 2023",
    description:
      "Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. \nAdmin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials:	#Email: testemployee@gmail.com	#Password- 123@Testemployee",
    image:
      "https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",
    tags: [
      "Docker",
      "AWS",
      "DuckDNS",
      "Eslint",
      "Husky",
      "CI/CD",
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
    ],
    category: "web app",
    github: "https://github.com/rishavchanda/Trackify",
    webapp: "https://trackify-management.netlify.app/",
  },
  {
    id: 0,
    title: "Podstream",
    date: "Apr 2023 - May 2023",
    description:
      "Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",
    image:
      "https://user-images.githubusercontent.com/64485885/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png",
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    category: "web app",
    github: "https://github.com/rishavchanda/Podstream",
    webapp: "https://podstream.netlify.app/",
    member: [
      {
        name: "Rishav Chanda",
        img: "https://avatars.githubusercontent.com/u/64485885?v=4",
        linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
        github: "https://github.com/rishavchanda/",
      },
      {
        name: "Upasana Chaudhuri",
        img: "https://avatars.githubusercontent.com/u/100614635?v=4",
        linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
        github: "https://github.com/upasana0710",
      },
    ],
  },
  {
    id: 1,
    title: "Vexa",
    date: "Oct 2022 - Jan 2023",
    description:
      "Designed and developed the Vexa project, a project management app that helps users and teams stay organized and on track. Implemented key features such as task tracking, team collaboration, and time tracking to improve productivity and project outcomes and also invite team/project members. The plan is to add a community of users where they can find developers and other team members and chat system implementation.",
    image:
      "https://user-images.githubusercontent.com/64485885/234916413-96296f13-fe4b-4cc4-b215-e72bd7c27928.png",
    tags: [
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
      "NodeMailer",
    ],
    category: "web app",
    github: "https://github.com/rishavchanda/Project-Management-App",
    webapp: "https://vexa-app.netlify.app/",
  },
  {
    id: 2,
    title: "Brain Tumor Detection",
    date: "Jan 2023 - Mar 2023",
    description:
      "Preprocessed and augmented the dataset to improve model accuracy, trained the model, created API using model and Python, and used React web app for the project's front end. Achievements: Achieved an accuracy of 99.2% to accurately detect brain tumors from medical images.",
    image:
      "https://github.com/rishavchanda/Brain-Tumor-Detection/raw/main/Readme_resource/Image2.png",
    tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
    category: "machine learning",
    github: "https://github.com/rishavchanda/Brain-Tumor-Detection",
    webapp: "https://brain-tumor.netlify.app/",
    member: [
      {
        name: "Rishav Chanda",
        img: "https://avatars.githubusercontent.com/u/64485885?v=4",
        linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
        github: "https://github.com/rishavchanda/",
      },
      {
        name: "Upasana Chaudhuri",
        img: "https://avatars.githubusercontent.com/u/100614635?v=4",
        linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
        github: "https://github.com/upasana0710",
      },
    ],
  },
  {
    id: 3,
    title: "Buckoid",
    date: "Dec 2021 - Apr 2022",
    description:
      "App Is Currently In Playstore 100+ Downloads. This Project proposes an “Expense Tracking App”. Keep track of your personal expenses and compare them to your monthly income with the budget planner. It has Google Drive Cloud API for Backup of User Room Database. Made with Kotlin in MVVM Architecture & Live Data.",
    image:
      "https://camo.githubusercontent.com/3ad28aa710d18525f1fc87de056ed53c706d09979589bfd5a773df36653bad38/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f67696e2d65613565322e61707073706f742e636f6d2f6f2f4255434b4f49442532302831292e706e673f616c743d6d6564696126746f6b656e3d32653735376235372d323964372d346263612d613562322d653164346538313432373435",
    tags: ["Kotlin", "MVVM", "Room Database", "Google Drive Cloud API"],
    category: "android app",
    github: "https://github.com/rishavchanda/Buckoid-Android-App",
    webapp: "https://play.google.com/store/apps/details?id=com.rishav.buckoid",
  },
  {
    id: 10,
    title: "Job Finding App",
    date: "Jun 2023 - Jul 2023",
    description:
      "A Job Finding App made with React Native, Axios. Users can search for any job coming from API and apply there.",
    image:
      "https://user-images.githubusercontent.com/64485885/255237090-cf798a2c-1b41-4bb7-b904-b5353a1f08e8.png",
    tags: ["React Native", "JavaScript", "Axios"],
    category: "android app",
    github: "https://github.com/rishavchanda/Job-finder-App",
    webapp: "https://github.com/rishavchanda/Job-finder-App",
  },
  {
    id: 4,
    title: "Whatsapp Clone",
    date: "Jul 2021",
    description:
      "A WhatsApp clone made with React JS, Firebase, and Material UI. It has Phone Authentication, Real-time Database. It has a chat room where users can chat with each other. It has a sidebar where users can see all the chat rooms and can create a new chat room. It has a login page where users can log in with their Google account.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-rishav.appspot.com/o/Screenshot%20(151).png?alt=media&token=48391593-1ef0-4a8c-a92a-eb82bdf38e89",
    tags: ["React Js", "Firebase", "Firestore", "Node JS"],
    category: "web app",
    github: "https://github.com/rishavchanda/Whatsapp-Clone-React-Js",
    webapp: "https://whatsapp-clone-rishav.web.app",
  },
  {
    id: 5,
    title: "Todo Web App",
    date: "Jun 2021",
    description:
      " A Todo Web App made with React JS, Redux, and Material UI. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the tasks and can create a new task. It has a calendar where users can see all the tasks on a particular date. It has a search bar where users can search for a particular task.",
    image:
      "https://camo.githubusercontent.com/84ac6ab6f378348ef28d8184062b7e9e3511a1252ae3966eaa49e8e998f732a7/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f74253230283938292e706e673f616c743d6d6564696126746f6b656e3d33643335646366322d626666322d343730382d393031632d343232383866383332386633",
    tags: ["React Js", "Local Storage", "AWS Auth", "Node JS"],
    category: "web app",
    github: "https://github.com/rishavchanda/Todo-Web-App",
    webapp: "https://rishav-react-todo.netlify.app/",
  },
  {
    id: 6,
    title: "Breaking Bad",
    date: "Jun 2021",
    description:
      "A simple react app that shows the characters of the famous TV series Breaking Bad. It uses the Breaking Bad API to fetch the data. It also has a search bar to search for a particular character.",
    image:
      "https://camo.githubusercontent.com/937774368308a82419f53dd6eeb4a8675780e119636488b4e3cfe5d34859a72a/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f7425323028313534292e706e673f616c743d6d6564696126746f6b656e3d65613439383630632d303435362d343333342d616435372d336239346663303333363263",
    tags: ["React Js", "API", "Axios", "Node JS"],
    category: "web app",
    github: "https://github.com/rishavchanda/Breaking-Bad",
    webapp: "https://breaking-bad-webapp.netlify.app",
  },
  {
    id: 7,
    title: "Quiz App",
    date: "Dec 2020 - Jan 2021",
    description:
      "A android quiz app made with Java and Firebase. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the quiz categories and can create a new quiz. It has a leaderboard where users can see the top 10 scorers. It has a search bar where users can search for a particular quiz.",
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/64485885/239726262-c1b061d1-d9d0-42ef-9f1c-0412d14bc4f6.gif",
    tags: ["Java", "Android Studio", "Firebase", "Google Auth"],
    category: "android app",
    github: "https://github.com/rishavchanda/Quiz-Earn",
    webapp: "https://github.com/rishavchanda/Quiz-Earn",
  },
  {
    id: 8,
    title: "Speech Emotion Recognition",
    date: "Aug 2023 - Dec 2023",
    description:
      "A Face recognition python app made with OpenCV. It uses face_recognition library to detect faces. It uses the webcam to detect faces. It also has a search bar to search for a particular face.",
    image:
      "https://dontrepeatyourself.org/media/face-recognition-with-python-dlib-and-deep-learning_cezKZBj.png",
    tags: ["Python", "Google Colab"],
    category: "machine learning",
    github: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
    webapp: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
  }, */
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
