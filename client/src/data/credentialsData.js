/**
 * Centralized Certifications & Achievements Configuration
 * 
 * Reusable data structure for certification credentials and achievement milestones.
 * Includes clearly marked editable placeholders ready for your actual credentials,
 * verification URLs, credential IDs, and certificate files (image or PDF).
 */

export const certificationsData = [
  {
    id: 'cert-mern-fullstack',
    title: '[Certification Title: Full-Stack MERN Architecture Specialist]',
    issuer: '[Issuing Organization: Coursera / Meta / freeCodeCamp Placeholder]',
    issueDate: '[Issue Date: e.g. May 2025 Placeholder]',
    expiryDate: 'Does Not Expire',
    credentialId: 'CRED-MERN-89412-PLACEHOLDER',
    credentialUrl: null, // e.g. 'https://www.coursera.org/verify/PLACEHOLDER'
    certificateFile: null, // Slot for certificate PDF/image: e.g. '/certificates/cert-mern.pdf'
    skills: ['React 19', 'Node.js', 'Express.js', 'MongoDB / Mongoose', 'REST API Architecture'],
    iconType: 'Code',
    typeBadge: 'Full-Stack Specialization',
  },
  {
    id: 'cert-cloud-devops',
    title: '[Certification Title: Cloud Foundations & Containerization]',
    issuer: '[Issuing Organization: AWS Academy / Google Cloud / Docker Placeholder]',
    issueDate: '[Issue Date: e.g. November 2024 Placeholder]',
    expiryDate: 'Valid for 3 Years',
    credentialId: 'AWS-ACAD-67219-PLACEHOLDER',
    credentialUrl: null, // e.g. 'https://aws.amazon.com/verification/PLACEHOLDER'
    certificateFile: null, // Slot for certificate PDF/image: e.g. '/certificates/cert-cloud.pdf'
    skills: ['Cloud Architecture', 'Docker Containers', 'Linux CLI', 'CI/CD Automation'],
    iconType: 'Cloud',
    typeBadge: 'Cloud Architecture',
  },
  {
    id: 'cert-dsa-algorithms',
    title: '[Certification Title: Algorithmic Problem Solving & Data Structures]',
    issuer: '[Issuing Organization: LeetCode / HackerRank / University Honors Placeholder]',
    issueDate: '[Issue Date: e.g. August 2024 Placeholder]',
    expiryDate: 'Does Not Expire',
    credentialId: 'DSA-HONORS-41093-PLACEHOLDER',
    credentialUrl: null, // e.g. 'https://hackerrank.com/certificates/PLACEHOLDER'
    certificateFile: null, // Slot for certificate PDF/image: e.g. '/certificates/cert-dsa.pdf'
    skills: ['Data Structures', 'Algorithmic Complexity', 'Dynamic Programming', 'Graph Theory'],
    iconType: 'Binary',
    typeBadge: 'Core Computer Science',
  },
  {
    id: 'cert-dbms-nosql',
    title: '[Certification Title: Database Engineering & NoSQL Optimization]',
    issuer: '[Issuing Organization: MongoDB University / Oracle Academy Placeholder]',
    issueDate: '[Issue Date: e.g. March 2024 Placeholder]',
    expiryDate: 'Does Not Expire',
    credentialId: 'MONGO-UNIV-99214-PLACEHOLDER',
    credentialUrl: null, // e.g. 'https://university.mongodb.com/verify/PLACEHOLDER'
    certificateFile: null, // Slot for certificate PDF/image: e.g. '/certificates/cert-dbms.pdf'
    skills: ['MongoDB Aggregation', 'Indexing Strategies', 'Schema Validation', 'ACID Principles'],
    iconType: 'Database',
    typeBadge: 'Database Engineering',
  },
];

export const achievementsData = [
  {
    id: 'ach-hackathon-finalist',
    title: '[Achievement Title: Finalist / 1st Runner-Up — Annual Campus Hackathon]',
    category: 'Hackathons & Innovation',
    date: '[Date: e.g. October 2024 Placeholder]',
    organization: 'JK Lakshmipat University / Inter-College Tech Fest',
    description: '[Editable Description: Engineered a reactive collaborative web application prototype within 36 hours. Recognized by the jury for architectural resilience, clean API design, and intuitive UX.]',
    image: null, // Slot for event photo / award plaque: e.g. '/images/hackathon-award.jpg'
    verificationUrl: null, // Slot for event archive / winner announcement URL
    highlights: [
      'Prototyped full-stack real-time collaboration engine using WebSockets and React',
      'Presented technical demo to industry jury panel and university faculty',
      'Coordinated rapid agile sprint cycles with multidisciplinary student team',
    ],
    iconType: 'Trophy',
    badgeText: 'Hackathon Award',
  },
  {
    id: 'ach-academic-merit',
    title: '[Achievement Title: Academic Excellence Award / Dean\'s List Recognition]',
    category: 'Academic Excellence',
    date: '[Date: e.g. Academic Year 2023 — 2024 Placeholder]',
    organization: 'Department of Computer Science & Engineering, JKLU',
    description: '[Editable Description: Awarded for exemplary academic standing in foundational computer science, data structures, and mathematical computation coursework.]',
    image: null, // Slot for certificate / commendation letter image
    verificationUrl: null, // Slot for official department link
    highlights: [
      'Consistent top percentile standing across theoretical and laboratory evaluations',
      'Exemplary score in Object-Oriented Software Design and Database Systems',
      'Active contributor in academic peer learning circles and problem-solving clinics',
    ],
    iconType: 'Award',
    badgeText: 'Academic Merit',
  },
  {
    id: 'ach-leadership-mentorship',
    title: '[Achievement Title: Technical Workshop Lead & Mentorship Commendation]',
    category: 'Leadership & Community',
    date: '[Date: e.g. Spring 2024 Placeholder]',
    organization: 'Campus Coding Society & Student Technical Chapter',
    description: '[Editable Description: Led hands-on workshops on React component architecture, modern Git workflows, and Express REST fundamentals for 60+ junior engineering students.]',
    image: null, // Slot for workshop photo or certificate
    verificationUrl: null, // Slot for club page or photo archive
    highlights: [
      'Authored open-source starter templates for student hackathon participants',
      'Organized weekly hands-on coding clinics and debugging sessions',
      'Promoted clean code standards and version control best practices',
    ],
    iconType: 'Medal',
    badgeText: 'Leadership',
  },
];
