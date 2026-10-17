/**
 * Centralized Verified Timeline & Milestone Configuration
 *
 * Sourced strictly from verified academic records, confirmed internship letters,
 * and authenticated university leadership appointments.
 */

export const educationTimeline = [
  {
    id: 'edu-jklu',
    period: '2024 — 2028 (Expected)',
    badge: 'Undergraduate',
    isCurrent: true,
    institution: 'JK Lakshmipat University (JKLU)',
    degree: 'B.Tech in Computer Science & Engineering',
    subheading: 'Current Status: 3rd Year (Semester 5) • CGPA: 8.6 / 10.0',
    location: 'Jaipur, Rajasthan, India',
    description:
      'Rigorous undergraduate engineering curriculum combining theoretical computing foundations, algorithm design, relational and distributed database architecture, and practical full-stack web and ML engineering.',
    highlights: [
      'Cumulative Grade Point Average (CGPA): 8.6 across completed semesters',
      'Core focus areas: Full-Stack Web Development, Data Structures & Algorithms, Machine Learning, DBMS',
      'Active participant in technical student chapters, coding initiatives, and laboratory evaluations',
    ],
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems (DBMS)',
      'Full Stack Web Development',
      'Operating Systems',
      'Computer Networks',
      'Artificial Intelligence Foundations',
      'Software Engineering Principles',
    ],
  },
  {
    id: 'edu-school',
    period: 'Completed Pre-University',
    badge: 'Senior Secondary',
    isCurrent: false,
    institution: 'Senior Secondary Certificate',
    degree: 'Higher Secondary Certificate (Class XII — Science Stream)',
    subheading: 'Physics, Chemistry & Mathematics (PCM)',
    location: 'Rajasthan, India',
    description:
      'Pre-university foundational studies developing quantitative computation, scientific problem-solving, and introductory analytical computing.',
    highlights: [
      'Solid analytical foundation in advanced calculus, mechanics, and physical sciences',
      'Demonstrated high aptitude in quantitative reasoning and algorithmic problem solving',
    ],
    coursework: [
      'Advanced Mathematics',
      'Physics',
      'Chemistry',
      'Computer Science Fundamentals',
    ],
  },
];

export const internshipsTimeline = [
  {
    id: 'intern-infosys-springboard',
    organization: 'Infosys Springboard',
    role: 'Full-Stack Developer Intern',
    period: 'July 2026 — October 2026',
    durationBadge: 'Internship Program',
    isCurrent: false,
    location: 'Remote',
    description:
      'Engineered the AI-Powered Insider Threat Detection System within the Infosys Springboard internship program, focusing on security analytics, weighted anomaly scoring, and multi-tier SOC dashboards.',
    highlights: [
      'Architected decoupled FastAPI backend with role-based JWT authentication for 4 distinct SOC roles',
      'Integrated Scikit-learn Isolation Forest unsupervised model for anomalous employee activity identification',
      'Implemented automated Pytest test suites and GitHub Actions CI pipelines with Docker containerization',
      'Project notes report simulated alert triage reduction from ~90 to 23 actionable incidents under evaluation',
    ],
    technologies: [
      'FastAPI',
      'Next.js',
      'React',
      'Python',
      'Scikit-learn',
      'SQLite',
      'Docker',
      'Pytest',
      'GitHub Actions',
    ],
    verificationNote:
      'Internship program undertaken during July–October 2026. Official internship certificate is awaited from the issuing portal. Repository remains strictly private and confidential.',
  },
  {
    id: 'intern-india-space-academy',
    organization: 'India Space Academy',
    role: 'Remote Sensing & GIS Intern',
    period: '19 May 2026 — 2 July 2026',
    durationBadge: '6-Week Summer Training Program',
    isCurrent: false,
    location: 'Hybrid / Research Facility',
    description:
      'Completed an intensive 6-week Summer Training Program in Remote Sensing and Geographic Information Systems (GIS), analyzing geospatial satellite datasets for environmental and meteorological monitoring.',
    highlights: [
      'Conducted Urban Heat Island (UHI) analysis using Land Surface Temperature (LST) and Built-up Density indexes across regional corridors',
      'Mapped air quality and aerosol optical depth patterns using Sentinel-5P and MODIS satellite imagery for the Taj Trapezium Zone (TTZ) and Delhi NCR',
      'Authored comprehensive technical documentation, maintained training logbooks, and successfully defended research in technical viva evaluations',
      'Observed approximately 1,270 km² of localized thermal hotspot patterns as recorded in project training report',
    ],
    technologies: [
      'Python',
      'Google Earth Engine',
      'QGIS',
      'MODIS',
      'Sentinel-5P',
      'Landsat-8',
      'Geospatial Analytics',
    ],
    verificationNote:
      'Official Completion Letter confirms successful completion of the 6-week Summer Training Program (19 May 2026 – 2 July 2026).',
  },
];

export const leadershipTimeline = [
  {
    id: 'lead-drama-club',
    organization: 'JKLU Student Drama Club',
    role: 'Chair, Drama Club',
    period: 'Academic Year 2025 — 2026',
    badge: 'Student Leadership',
    location: 'JKLU, Jaipur',
    description:
      'Selected to lead and coordinate the university drama society, directing student theatrical productions and managing collaborative rehearsals across disciplines.',
    highlights: [
      'Directly led and managed an active student ensemble of 25+ members across scripting, stage direction, and technical production',
      'Coordinated inter-college event participation and managed campus stage rehearsals',
      'Fostered peer mentorship, public speaking development, and teamwork among junior students',
    ],
  },
  {
    id: 'lead-fest-coordinator',
    organization: 'Sabrang Annual Cultural Fest',
    role: 'Cultural Coordinator & Decor Volunteer',
    period: 'Annual Fest Edition',
    badge: 'Campus Coordination',
    location: 'JKLU, Jaipur',
    description:
      'Contributed to the planning, venue decor, and on-ground logistics for Sabrang, JK Lakshmipat University’s flagship annual cultural festival.',
    highlights: [
      'Collaborated with student executive committees on campus decor and stage setup logistics',
      'Assisted in backstage participant scheduling, audio-visual readiness, and hospitality coordination',
    ],
  },
];

export const achievementsList = [
  {
    id: 'ach-football-runnerup',
    title: 'Runner-up, University Football Championship',
    category: 'Athletics & Sports',
    organization: 'Campus Sports Tournament',
    description:
      'Competed as a core team member in the inter-departmental university football tournament, securing the runner-up position.',
  },
  {
    id: 'ach-nukkad-natak',
    title: 'Second Position, Nukkad Natak (Street Play)',
    category: 'Cultural & Theatrical Arts',
    organization: 'Sabrang Cultural Fest',
    description:
      'Awarded second place in the competitive Nukkad Natak street play showcase, addressing critical social themes before university evaluators.',
  },
  {
    id: 'ach-hackjklu',
    title: 'Participant, HackJKLU Annual Hackathon',
    category: 'Technical Hackathon',
    organization: 'JK Lakshmipat University',
    description:
      'Participated in HackJKLU, collaborating with a multidisciplinary student team to prototype an innovative full-stack software application within an intensive sprint.',
  },
  {
    id: 'ach-intercollege-drama',
    title: 'Inter-College Drama Representation',
    category: 'Theatrical Arts',
    organization: 'University Maharani College Fest',
    description:
      'Represented JK Lakshmipat University as part of the drama delegation in an inter-college theatrical competition at University Maharani College, Jaipur.',
  },
  {
    id: 'ach-muqabala-spardha',
    title: 'Participant, Muqabala & Spardha Fest Competitions',
    category: 'Campus Co-Curricular',
    organization: 'University Multi-Fest Series',
    description:
      'Active participant across cultural and literary events during campus festival showcases, representing student societies.',
  },
];

export const experienceTimeline = [
  ...internshipsTimeline,
  ...leadershipTimeline,
];
