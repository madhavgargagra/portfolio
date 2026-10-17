/**
 * Centralized Project Showcase Configuration
 * 
 * Professional full-stack MERN & distributed systems portfolio projects.
 * Reusable data structure supporting titles, descriptions, technology badges,
 * categorized filters, key features, and GitHub / live demo link statuses.
 */

export const projectsData = [
  {
    id: 'project-pulsemap',
    title: 'PulseStream — IoT Telemetry & Metrics Hub',
    subtitle: 'High-frequency telemetry ingestion & reactive cluster monitoring',
    category: 'Distributed Systems',
    featured: true,
    summary: 'A mission-critical reactive telemetry matrix processing real-time sensor streams across distributed edge nodes with sub-millisecond anomaly detection.',
    description: 'Engineered for high-concurrency environments, PulseStream pairs event-driven Node.js worker pools with a reactive React 19 telemetry canvas. It handles fluctuating sensory inputs from industrial edge clusters, executes automatic threshold trip algorithms, and renders sub-15ms live state topologies.',
    technologies: ['React 19', 'Node.js', 'Express REST', 'MongoDB', 'WebSockets', 'Tailwind CSS'],
    metrics: [
      { label: 'Ingestion Latency', value: '< 14ms' },
      { label: 'Telemetry Uptime', value: '99.98%' },
      { label: 'Throughput', value: '1.2M events/min' },
    ],
    links: {
      github: {
        url: null,
        isAvailable: false,
        label: 'Source Repository [Configured on Request]',
      },
      liveDemo: {
        url: null,
        isAvailable: false,
        label: 'Staging Cluster [Internal Node]',
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
    title: 'SentinX — Zero-Trust Identity & Access Sentinel',
    subtitle: 'Cryptographic token verification, role auditing & intrusion forensics',
    category: 'Cybersecurity',
    featured: true,
    summary: 'An autonomous perimeter defense platform providing heuristic threat evaluation, RBAC token auditing, and behavioral anomaly quarantine.',
    description: 'Operating silently across distributed cloud networks, SentinX enforces strict least-privilege token verification at every microservice boundary. Using real-time graph traversal, it detects lateral movement vectors and triggers automated sandbox quarantines without degrading network throughput.',
    technologies: ['Node.js', 'Express.js', 'MongoDB / Mongoose', 'JWT / OAuth2', 'React 19', 'Tailwind CSS'],
    metrics: [
      { label: 'Token Verification', value: '100% Cryptographic' },
      { label: 'Containment Speed', value: '< 5ms Trigger' },
      { label: 'Architecture', value: 'Zero-Trust RBAC' },
    ],
    links: {
      github: {
        url: null,
        isAvailable: false,
        label: 'Source Code [Private Sentinel]',
      },
      liveDemo: {
        url: null,
        isAvailable: false,
        label: 'Audit Console [Restricted Access]',
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
    title: 'DevNexus — Collaborative Canvas & Code Matrix',
    subtitle: 'Low-latency peer document authoring & AST state synchronization',
    category: 'Developer Tools',
    featured: false,
    summary: 'A unified collaboration mesh synchronizing distributed developer sessions with conflict-free replicated data types and instant branch diffing.',
    description: 'DevNexus unites dispersed engineering teams into a real-time collaborative workspace. Leveraging WebRTC data channels, optimistic state mutations, and CRDT consensus algorithms, it enables simultaneous multi-user code editing and Markdown documentation authoring with zero central server lock contention.',
    technologies: ['React 19', 'Node.js', 'Express REST', 'WebRTC', 'Monaco Editor', 'Tailwind CSS'],
    metrics: [
      { label: 'Peer Sync Time', value: '< 20ms' },
      { label: 'Consensus Model', value: 'CRDT Conflict-Free' },
      { label: 'Security', value: 'End-to-End Encrypted' },
    ],
    links: {
      github: {
        url: null,
        isAvailable: false,
        label: 'Canvas Source [Coming Soon]',
      },
      liveDemo: {
        url: null,
        isAvailable: false,
        label: 'Live Preview [Staging Environment]',
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
    title: 'OmniMarket — High-Throughput E-Commerce Platform',
    subtitle: 'Atomic flash-sale inventory reservation & resilient checkout pipeline',
    category: 'Full-Stack Web',
    featured: false,
    summary: 'An enterprise-grade online storefront handling thousands of concurrent checkout operations with strict ACID inventory locking and zero overselling.',
    description: 'Built on the MERN stack with scalable decoupled architecture. Incorporates MongoDB two-phase transactional commits for seat and stock reservations, Express caching middleware for sub-50ms catalog searches, and a resilient Stripe webhook processing pipeline.',
    technologies: ['React 19', 'Express.js', 'MongoDB / Mongoose', 'Node.js', 'Stripe API', 'Tailwind CSS'],
    metrics: [
      { label: 'Catalog Search', value: '< 45ms P99' },
      { label: 'Stock Guarantee', value: '100% ACID Locking' },
      { label: 'Payment Sync', value: 'Automated Webhooks' },
    ],
    links: {
      github: {
        url: null,
        isAvailable: false,
        label: 'Storefront Repo [Pending Review]',
      },
      liveDemo: {
        url: null,
        isAvailable: false,
        label: 'Demo Store [Sandbox Mode]',
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
