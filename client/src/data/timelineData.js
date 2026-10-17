/**
 * Centralized Timeline Configuration
 * 
 * Data-driven timeline entries for Education and Experience.
 * Editable fields for institutions, roles, dates, descriptions, and highlights.
 * Clearly marked placeholders where personal information is customizable.
 */

export const educationTimeline = [
  {
    id: 'edu-jklu',
    period: '2023 — Present',
    badge: 'Undergraduate',
    isCurrent: true,
    institution: 'JK Lakshmipat University (JKLU)',
    degree: 'B.Tech in Computer Science & Engineering',
    subheading: 'Active Semester: 5 &bull; Full-Stack & Systems Focus',
    location: 'Jaipur, Rajasthan, India',
    description: 'Undergraduate engineering program blending theoretical computer science with modern full-stack application development. Maintaining rigorous academic coursework across core systems, algorithmic analysis, and software engineering.',
    highlights: [
      'Focusing on Full-Stack MERN architecture, RESTful API design, and asynchronous server workflows',
      'Consistent practical laboratory evaluations across Database Systems and Operating Systems',
      'Actively collaborating on peer code reviews and modular engineering assignments',
    ],
    coursework: [
      'Data Structures & Algorithms',
      'Full Stack Web Development',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering Principles',
    ],
  },
  {
    id: 'edu-school',
    period: 'Completed [e.g. 2021 — 2023]',
    badge: 'Senior Secondary',
    isCurrent: false,
    institution: '[Institution Name: Senior Secondary School / College Placeholder]',
    degree: 'Higher Secondary Certificate (Class XII / Science Stream)',
    subheading: 'Physics, Chemistry & Mathematics (PCM)',
    location: 'Rajasthan, India',
    description: 'Developed foundational competencies in advanced mathematics, analytical reasoning, and introductory programming before entering university engineering studies.',
    highlights: [
      'Completed comprehensive coursework in calculus, coordinate geometry, and physical sciences',
      'Demonstrated high aptitude in quantitative reasoning and scientific method',
    ],
    coursework: [
      'Advanced Mathematics',
      'Physics',
      'Chemistry',
      'Computer Science Fundamentals',
    ],
  },
];

export const experienceTimeline = [
  {
    id: 'exp-fullstack-academic',
    period: '2024 — Present',
    badge: 'Academic & Projects',
    isCurrent: true,
    role: 'Full-Stack Developer & Peer Collaborator',
    organization: 'University Project Initiatives & Open Source',
    location: 'JKLU, Jaipur',
    description: 'Architecting scalable web prototypes and full-stack MERN services. Serving as a peer mentor for junior students in web development fundamentals, Git workflows, and component architectures.',
    highlights: [
      'Built decoupled Express REST APIs with centralized error handling and Mongoose schema validation',
      'Engineered accessible, mobile-first React 19 interfaces using Tailwind CSS and Framer Motion',
      'Facilitated peer review sessions covering semantic commit standards and clean project structures',
    ],
    technologies: ['React 19', 'Express.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Git'],
  },
  {
    id: 'exp-internship-placeholder',
    period: '[Date Range: e.g. Summer 2025 Placeholder]',
    badge: 'Internship / Professional',
    isCurrent: false,
    role: '[Role Title: Software Engineering Intern / Web Developer Placeholder]',
    organization: '[Company / Organization Name Placeholder]',
    location: '[Location: e.g. Jaipur / Remote Placeholder]',
    description: '[Editable Description: Summarize your professional internship responsibilities, production contributions, and collaboration with the engineering team. Replace with your actual experience.]',
    highlights: [
      '[Key Contribution: e.g. Developed and tested responsive user interfaces using React and modern CSS]',
      '[API Collaboration: e.g. Integrated backend REST endpoints and optimized client network requests]',
      '[Code Quality: e.g. Authored unit tests and participated in daily stand-up engineering sprints]',
    ],
    technologies: ['React', 'REST APIs', 'Node.js', 'Git', 'Agile / Scrum'],
  },
  {
    id: 'exp-leadership-hackathon',
    period: '2023 — 2024',
    badge: 'Leadership & Hackathons',
    isCurrent: false,
    role: 'Technical Contributor & Event Coordinator',
    organization: 'Student Technical Community & Campus Hackathons',
    location: 'JKLU, Jaipur',
    description: 'Active contributor in campus technical societies and student hackathons. Assisted in coordinating development challenges, onboarding participants, and managing project showcase sessions.',
    highlights: [
      'Supported coordination of annual campus hackathons and algorithmic coding challenges',
      'Assisted student participants with local environment troubleshooting and Git repository setup',
      'Collaborated with faculty and student leads to promote campus open-source engagement',
    ],
    technologies: ['Event Coordination', 'Team Leadership', 'Technical Mentorship', 'Problem Solving'],
  },
];
