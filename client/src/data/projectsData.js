/**
 * Centralized Verified Project Showcase Configuration
 *
 * Sourced strictly from verified repositories and validated coursework.
 * No fabricated features, fake metrics, or invented external links.
 */

export const projectsData = [
  {
    slug: 'ecosort',
    title: 'EcoSort — Waste Sorting & Environmental Learning',
    subtitle: 'Browser-based AI waste classification & interactive recycling education',
    category: 'Applied AI & Web',
    featured: true,
    isCompleted: true,
    summary:
      'An environmental learning and waste-sorting application that helps users understand waste classification and recycling using browser-based machine learning.',
    problemStatement:
      'Improper waste disposal often stems from uncertainty about local recycling rules and material classification. EcoSort addresses this by delivering real-time, interactive classification directly in the browser without requiring server-side image processing.',
    description:
      'EcoSort pairs accessible browser interfaces with on-device AI inference. Using TensorFlow.js and MobileNet v2, the application classifies waste items into appropriate recycling categories, provides interactive learning quizzes, and tracks simulated environmental impact.',
    technologies: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'TensorFlow.js',
      'MobileNet v2',
      'PWA / Service Workers',
    ],
    verifiedFeatures: [
      {
        name: 'On-Device AI Classification',
        description: 'TensorFlow.js and MobileNet v2 classify waste items directly in the browser.',
        verification: 'Repository Documented',
      },
      {
        name: 'Camera & Image Upload',
        description: 'Supports real-time camera capture and local image uploads for classification.',
        verification: 'Repository Documented',
      },
      {
        name: 'Text & Voice Search',
        description: 'Allows users to query disposal guidelines using keyword and voice queries.',
        verification: 'Repository Documented',
      },
      {
        name: 'Sorting Game & Myth Quiz',
        description: 'Gamified sorting practice and educational quizzes explaining recycling myths.',
        verification: 'Repository Documented',
      },
      {
        name: 'Impact Dashboard & Marketplace',
        description: 'Simulated carbon diversion metrics and community reward marketplace concepts.',
        verification: 'Repository Documented',
      },
      {
        name: 'Progressive Web App (PWA)',
        description: 'Offline support via service workers and installable home screen manifest.',
        verification: 'Repository Documented',
      },
    ],
    role: 'Full-Stack Developer & ML Integrator (Project Architect)',
    disclaimer: null,
    metrics: [
      { label: 'Inference', value: 'Client-Side TF.js' },
      { label: 'Model Core', value: 'MobileNet v2' },
      { label: 'Architecture', value: 'Offline-First PWA' },
    ],
    links: {
      github: {
        url: 'https://github.com/madhavgargagra/ecosort',
        isAvailable: true,
        label: 'GitHub Repository',
      },
      liveDemo: {
        url: 'https://madhavgargagra.github.io/ecosort/',
        isAvailable: true,
        label: 'Live GitHub Pages Demo',
      },
    },
    badge: 'Open Source',
  },
  {
    slug: 'lung-cancer-prediction',
    title: 'Lung Cancer Prediction & Web Application',
    subtitle: 'Machine learning comparative evaluation & educational prediction interface',
    category: 'Machine Learning',
    featured: true,
    isCompleted: true,
    summary:
      'An educational machine-learning project exploring multi-classifier evaluation for lung cancer risk indicators, presented via a Flask web application.',
    problemStatement:
      'Understanding how different supervised learning algorithms evaluate clinical risk factors requires systematic model comparison, feature importance visualization, and transparent explanation of classification boundaries.',
    description:
      'This project implements and compares four distinct supervised learning algorithms on structured clinical datasets: XGBoost, Support Vector Machines (SVM), K-Nearest Neighbors (KNN), and Logistic Regression. A lightweight Flask web application demonstrates model inputs, decision explanations, and summary reports.',
    technologies: [
      'Python',
      'Flask',
      'XGBoost',
      'Scikit-learn',
      'SVM',
      'KNN',
      'Logistic Regression',
      'Pandas',
      'NumPy',
      'Matplotlib',
    ],
    verifiedFeatures: [
      {
        name: 'Multi-Classifier Comparison',
        description: 'Benchmarked XGBoost, SVM, KNN, and Logistic Regression on dataset parameters.',
        verification: 'Repository Documented',
      },
      {
        name: 'Flask Web Application',
        description: 'Interactive web UI for submitting parameter inputs and inspecting model outputs.',
        verification: 'Repository Documented',
      },
      {
        name: 'Decision Visualization',
        description: 'Visual representations of feature importance and classifier confidence scores.',
        verification: 'Repository Documented',
      },
      {
        name: 'Structured Report Generation',
        description: 'Automated synthesis of evaluated risk factors and comparative model outputs.',
        verification: 'Repository Documented',
      },
    ],
    role: 'ML Developer & Flask Application Engineer',
    disclaimer:
      'Educational machine learning project developed for academic research exploration only. This application is NOT clinically validated, NOT suitable for medical diagnosis, and NOT a substitute for professional healthcare advice.',
    metrics: [
      { label: 'Algorithms', value: 'XGBoost, SVM, KNN' },
      { label: 'Backend', value: 'Python / Flask' },
      { label: 'Domain', value: 'Clinical Analytics (Academic)' },
    ],
    links: {
      github: {
        url: 'https://github.com/madhavgargagra/Lung-Cancer-Prediction-and-web-application',
        isAvailable: true,
        label: 'GitHub Repository',
      },
      liveDemo: {
        url: null,
        isAvailable: false,
        label: 'No Public Demo (Academic Research)',
      },
    },
    badge: 'Academic Research',
  },
  {
    slug: 'insider-threat-detection',
    title: 'AI-Powered Insider Threat Detection System',
    subtitle: 'Enterprise security analytics, weighted risk scoring & role-based SOC dashboards',
    category: 'Cybersecurity & Enterprise',
    featured: true,
    isCompleted: true,
    summary:
      'An enterprise security analytics application designed to detect potentially anomalous insider behavior using weighted risk scoring and Isolation Forest models.',
    problemStatement:
      'Security Operations Centers (SOCs) face alert fatigue from massive volumes of user activity logs. Identifying genuine threats requires multi-tier role access, normalized anomaly detection, and automated alert triage.',
    description:
      'Developed during the Infosys Springboard Full-Stack Developer internship, this system processes employee activity streams, computes weighted five-factor risk scores, and flags statistical outliers using Scikit-learn Isolation Forests. It features a FastAPI REST API, a Next.js/React dashboard, SQLite persistence, and four discrete SOC role views with automated testing and Docker containerization.',
    technologies: [
      'FastAPI',
      'Next.js',
      'React',
      'Python',
      'Scikit-learn (Isolation Forest)',
      'SQLite',
      'JWT Authentication',
      'Docker',
      'Pytest',
      'GitHub Actions CI',
    ],
    verifiedFeatures: [
      {
        name: 'Four Dedicated SOC Roles',
        description: 'Custom dashboards and permission boundaries for Analyst, Investigator, Lead, and Admin.',
        verification: 'Internship Project Verified',
      },
      {
        name: 'Five-Factor Risk Scoring',
        description: 'Configurable weighted formula assessing access time, volume, sensitivity, and anomalies.',
        verification: 'Internship Project Verified',
      },
      {
        name: 'Isolation Forest Anomaly Model',
        description: 'Unsupervised outlier detection identifying irregular log access patterns.',
        verification: 'Internship Project Verified',
      },
      {
        name: 'Automated CI & Testing',
        description: 'Comprehensive Pytest suite executed through automated GitHub Actions CI workflows.',
        verification: 'Internship Project Verified',
      },
    ],
    role: 'Full-Stack Developer Intern (Infosys Springboard)',
    disclaimer:
      'Developed as part of the Infosys Springboard internship program. The underlying code repository is strictly proprietary and private. Project metrics (such as alert reduction from ~90 to 23 actionable incidents) are project-reported evaluation results under simulated workloads, not independently audited production metrics.',
    metrics: [
      { label: 'Backend API', value: 'FastAPI / Python' },
      { label: 'Security Model', value: '4-Tier RBAC + JWT' },
      { label: 'Anomaly Engine', value: 'Isolation Forest' },
    ],
    links: {
      github: {
        url: null,
        isAvailable: false,
        label: 'Private Repository (Internship Project)',
      },
      liveDemo: {
        url: null,
        isAvailable: false,
        label: 'Internal Prototype (Non-Public)',
      },
    },
    badge: 'Private Internship Project',
  },
  {
    slug: 'festival-event-management',
    title: 'Festival & Event Management System',
    subtitle: 'Relational event coordination & database management system',
    category: 'Full-Stack Systems',
    featured: true,
    isCompleted: true,
    summary:
      'A full-stack festival and event management application backed by a relational MySQL database and Sequelize ORM, engineered for event coordination, role-aware administration, and database schema relationships.',
    problemStatement:
      'Coordinating university festivals involves relational data dependencies across events, venues, and administrative roles that require strict database schema integrity.',
    description:
      'Engineered as an academic software engineering project, this system models festival event logistics with a relational MySQL database managed via Sequelize ORM. An Express.js REST API handles event records and role-aware administrative workflows paired with a responsive client interface.',
    technologies: [
      'React',
      'Express.js',
      'Node.js',
      'MySQL',
      'Sequelize ORM',
      'RESTful APIs',
      'Tailwind CSS',
    ],
    verifiedFeatures: [
      {
        name: 'Relational Event Schema',
        description: 'Structured MySQL tables with foreign key constraints and Sequelize ORM models.',
        verification: 'Coursework Verified',
      },
      {
        name: 'Modular REST Endpoints',
        description: 'Express controllers handling event records and role-based permissions.',
        verification: 'Coursework Verified',
      },
      {
        name: 'Role-Aware Access',
        description: 'Authentication and permission checks for administrative and event roles.',
        verification: 'Coursework Verified',
      },
      {
        name: 'Responsive Client Interface',
        description: 'Clean user interfaces for browsing festival event categories and details.',
        verification: 'Coursework Verified',
      },
    ],
    role: 'Full-Stack Developer (Coursework Team)',
    disclaimer:
      'Developed as a university practical project. Designed for campus and local testing environments without public cloud deployment.',
    metrics: [
      { label: 'Database', value: 'MySQL + Sequelize' },
      { label: 'API Architecture', value: 'Express REST' },
      { label: 'Interface', value: 'React / Component Trees' },
    ],
    links: {
      github: {
        url: 'https://github.com/madhavgargagra/festival-event-management',
        isAvailable: true,
        label: 'GitHub Repository',
      },
      liveDemo: {
        url: null,
        isAvailable: false,
        label: 'Local Deployment (Academic)',
      },
    },
    badge: 'University Project',
  },
];

export const plannedProjectsData = [
  {
    slug: 'crop-care-system',
    title: 'AI-Powered Crop Care System',
    subtitle: 'Agricultural diagnostic platform for crop disease detection and soil care guidance',
    status: 'In Progress / Planned',
    category: 'Computer Vision & AgriTech',
    summary:
      'A planned computer vision and diagnostic platform to assist farmers in detecting plant foliage diseases and recommending targeted soil remediation.',
    plannedTechnologies: [
      'React Native / React',
      'Python',
      'PyTorch / TensorFlow',
      'Computer Vision',
      'FastAPI',
    ],
    plannedScope: [
      'Mobile-friendly leaf disease classification from captured photos',
      'Context-aware treatment recommendations and soil fertility advisories',
      'Low-bandwidth offline mode tailored for agricultural fieldwork',
    ],
    note: 'This project is currently in the conceptual and architectural planning phase. It is not presented as a completed system.',
  },
];
