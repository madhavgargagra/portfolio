/**
 * Centralized Timeline Configuration
 *
 * Genuine academic milestones and verified university project leadership.
 * Omit unverified or fabricated internship experience until official details are provided.
 */

export const educationTimeline = [
  {
    id: 'edu-jklu',
    period: '2023 — Present',
    badge: 'Undergraduate',
    isCurrent: true,
    institution: 'JK Lakshmipat University (JKLU)',
    degree: 'B.Tech in Computer Science & Engineering',
    subheading: 'Active Semester: 5 • Full-Stack MERN & Systems Focus',
    location: 'Jaipur, Rajasthan, India',
    description: 'Undergraduate engineering curriculum blending theoretical computing foundations with practical full-stack web engineering, database architecture, and operating systems.',
    highlights: [
      'Focusing on Full-Stack MERN architecture, RESTful API contracts, and asynchronous server workflows',
      'Consistent laboratory practical evaluations across Database Systems and Operating Systems',
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
    period: 'Pre-University',
    badge: 'Senior Secondary',
    isCurrent: false,
    institution: 'Senior Secondary Certificate (Class XII)',
    degree: 'Higher Secondary Certificate (Science Stream)',
    subheading: 'Physics, Chemistry & Mathematics (PCM)',
    location: 'Rajasthan, India',
    description: 'Pre-university foundational studies developing analytical reasoning, quantitative computation, and introductory computer science fundamentals.',
    highlights: [
      'Completed rigorous coursework in advanced mathematics, physical sciences, and analytical method',
      'Demonstrated high aptitude in quantitative reasoning and scientific problem solving',
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
    description: 'Architecting web prototypes and full-stack MERN services. Assisting peer students in web development fundamentals, Git version control, and modular component architectures.',
    highlights: [
      'Built decoupled Express REST APIs with centralized error handling and Mongoose schema validation',
      'Engineered accessible, mobile-first React 19 interfaces using Tailwind CSS and Framer Motion',
      'Facilitated peer review sessions covering semantic commit standards and clean project structures',
    ],
    technologies: ['React 19', 'Express.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Git'],
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
