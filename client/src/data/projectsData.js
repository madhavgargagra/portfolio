/**
 * Centralized Project Showcase Configuration (Task D Neutralized)
 *
 * Honest, academic & prototype engineering showcase on the modern MERN stack.
 * Fabricated enterprise metrics and claims have been neutralized to reflect
 * genuine architectural characteristics and coursework prototypes.
 */

export const projectsData = [
  {
    id: 'project-pulsemap',
    title: 'PulseStream — IoT Telemetry & Metrics Hub',
    subtitle: 'Event-driven telemetry ingestion & reactive monitoring prototype',
    category: 'Distributed Systems',
    featured: true,
    summary: 'A responsive telemetry dashboard prototype demonstrating asynchronous event ingestion, live state visualization, and threshold monitoring using React 19 and Node.js.',
    description: 'Developed to explore real-time data handling on the web, PulseStream pairs an event-driven Node.js backend with a reactive React 19 telemetry canvas. It processes simulated sensor events, tracks state transitions, and renders real-time interface metrics with clean component boundaries.',
    technologies: ['React 19', 'Node.js', 'Express REST', 'MongoDB', 'WebSockets', 'Tailwind CSS'],
    metrics: [
      { label: 'Architecture', value: 'Event-Driven MERN' },
      { label: 'State Model', value: 'Reactive Hooks' },
      { label: 'API Layer', value: 'REST + WebSockets' },
    ],
    links: {
      github: {
        url: null,
        isAvailable: false,
        label: 'Repository [Submission Ready]',
      },
      liveDemo: {
        url: null,
        isAvailable: false,
        label: 'Demo [Staging Environment]',
      },
    },
    visual: {
      accentColor: '#C7A052', // Champagne Gold
      badgeClass: 'bg-[#C7A052]/10 text-[#C7A052] border-[#C7A052]/30',
      iconName: 'Activity',
      previewType: 'stream-matrix',
    },
  },
  {
    id: 'project-sentinx',
    title: 'SentinX — Identity & Access Control Sentinel',
    subtitle: 'Cryptographic token verification & role-based access prototype',
    category: 'Cybersecurity',
    featured: true,
    summary: 'An authentication and authorization service demonstrating stateless JWT verification, least-privilege role validation, and sanitized API boundaries.',
    description: 'Designed as a secure access control prototype, SentinX implements role-based access control (RBAC) middleware for Express REST APIs. It ensures token integrity, validates user permissions against MongoDB schemas, and logs security events with centralized error handling.',
    technologies: ['Node.js', 'Express.js', 'MongoDB / Mongoose', 'JWT / Auth', 'React 19', 'Tailwind CSS'],
    metrics: [
      { label: 'Security Model', value: 'Role-Based (RBAC)' },
      { label: 'Auth Strategy', value: 'Stateless JWT' },
      { label: 'Persistence', value: 'Mongoose Schemas' },
    ],
    links: {
      github: {
        url: null,
        isAvailable: false,
        label: 'Source [Submission Ready]',
      },
      liveDemo: {
        url: null,
        isAvailable: false,
        label: 'Demo [Access Controlled]',
      },
    },
    visual: {
      accentColor: '#3B82F6', // Trust Blue
      badgeClass: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
      iconName: 'ShieldCheck',
      previewType: 'security-radar',
    },
  },
  {
    id: 'project-devnexus',
    title: 'DevNexus — Collaborative Code & Notes Canvas',
    subtitle: 'Interactive peer editing workspace & syntax-highlighted editor',
    category: 'Developer Tools',
    featured: false,
    summary: 'A developer productivity application featuring an embedded code editor, markdown notes synchronization, and structured project state management.',
    description: 'Built to streamline developer workflow collaboration, DevNexus provides an integrated browser workspace with Monaco Editor integration. It showcases modular component design, responsive split-pane layouts, and client-side document history tracking.',
    technologies: ['React 19', 'Node.js', 'Express REST', 'Monaco Editor', 'Tailwind CSS', 'Framer Motion'],
    metrics: [
      { label: 'Editor Engine', value: 'Monaco Component' },
      { label: 'Data Model', value: 'Structured State' },
      { label: 'Interface', value: 'Responsive Split-Pane' },
    ],
    links: {
      github: {
        url: null,
        isAvailable: false,
        label: 'Source [Submission Ready]',
      },
      liveDemo: {
        url: null,
        isAvailable: false,
        label: 'Preview [Staging Node]',
      },
    },
    visual: {
      accentColor: '#10B981', // Emerald
      badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
      iconName: 'Code2',
      previewType: 'code-canvas',
    },
  },
  {
    id: 'project-omnimarket',
    title: 'OmniMarket — Full-Stack E-Commerce Architecture',
    subtitle: 'Catalog management, cart state, and order persistence pipeline',
    category: 'Full-Stack Web',
    featured: false,
    summary: 'A full-stack commerce storefront prototype with categorized product listings, cart state persistence, and MongoDB-backed order tracking.',
    description: 'Developed to demonstrate complete MERN stack integration from database model to user checkout flow. Incorporates Mongoose models with validation hooks, Express API endpoints for catalog queries, and responsive React product grids styled with Tailwind CSS.',
    technologies: ['React 19', 'Express.js', 'MongoDB / Mongoose', 'Node.js', 'Tailwind CSS', 'REST API'],
    metrics: [
      { label: 'Stack Scope', value: 'Complete MERN' },
      { label: 'Data Queries', value: 'Mongoose Models' },
      { label: 'Cart Engine', value: 'Persistent Context' },
    ],
    links: {
      github: {
        url: null,
        isAvailable: false,
        label: 'Repository [Submission Ready]',
      },
      liveDemo: {
        url: null,
        isAvailable: false,
        label: 'Storefront [Sandbox Mode]',
      },
    },
    visual: {
      accentColor: '#8B5CF6', // Purple
      badgeClass: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
      iconName: 'ShoppingBag',
      previewType: 'ecommerce-cart',
    },
  },
];
