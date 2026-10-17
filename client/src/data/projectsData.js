/**
 * Centralized Data-Driven Project Configuration
 * 
 * Each project corresponds to one of the four superhero-inspired character art themes:
 * 1. Iron Man-inspired (Crimson Red & Champagne Gold)
 * 2. Batman-inspired (Graphite Grey & Silver)
 * 3. Hulk-inspired (Emerald Green & Muted Sage)
 * 4. Superman-inspired (Sky Blue & Cool White)
 * 
 * To customize with your own artwork or URLs, simply edit the fields below.
 * When real links are not available, isAvailable remains false to avoid broken links.
 */

export const projectsData = [
  {
    id: 'project-iron',
    themeKey: 'iron',
    themeName: 'Iron Resonance',
    inspiration: 'Iron Man-inspired Art Direction',
    characterCodename: 'The Vanguard Architect',
    colorPalette: {
      primary: '#8B1E24',
      primaryLight: '#A62B32',
      accent: '#C7A052',
      surface: '#F6EFE9',
      border: 'rgba(139, 30, 36, 0.22)',
      glow: 'rgba(199, 160, 82, 0.25)',
      badgeBg: 'rgba(139, 30, 36, 0.08)',
      badgeText: '#8B1E24',
    },
    title: 'Arc Engine: Real-Time Energy Orchestrator',
    tagline: 'High-frequency distributed systems monitoring & reactive automation',
    summary: 'A full-stack reactive telemetry dashboard managing microgrid power distributions with sub-millisecond anomaly detection.',
    longDescription: 'Arc Engine blends event-driven Node.js backend streams with an interactive React data visualization canvas. Built to process live sensor telemetry, it provides automatic power re-routing, predictive load balancing, and a resilient failover protocol for critical infrastructure.',
    technologies: ['React 19', 'Express.js', 'WebSockets', 'Tailwind CSS', 'Node.js', 'Recharts'],
    links: {
      github: {
        url: null,
        isAvailable: false,
        label: 'Repository [Configured on Request]',
      },
      liveDemo: {
        url: null,
        isAvailable: false,
        label: 'Deployment [Staging Only]',
      },
    },
    frames: [
      {
        perspective: 'left',
        perspectiveTitle: 'Left Profile: Telemetry Ingestion',
        caption: 'Frame 01 — Sub-millisecond stream ingestion with concurrent worker pipelines.',
        metric: '99.98% Telemetry Uptime',
        details: 'Initial architectural view showcasing telemetry ingestion nodes, state synchronizers, and low-latency buffer queues.',
        customImagePath: null, // Place custom image here: e.g. '/projects/iron-frame-1.webp'
      },
      {
        perspective: 'front',
        perspectiveTitle: 'Front Facing: Command Center Matrix',
        caption: 'Frame 02 — High-density reactive dashboard visualizing microgrid topology.',
        metric: '< 14ms Stream Latency',
        details: 'Core command canvas featuring live interactive topologies, instantaneous circuit breaker alerts, and predictive heuristics.',
        customImagePath: null,
      },
      {
        perspective: 'right',
        perspectiveTitle: 'Right Profile: Failover Protocols',
        caption: 'Frame 03 — Automated failover and self-healing cluster synchronization.',
        metric: 'Zero Single Point of Failure',
        details: 'Resilience layer demonstrating hot-standby node migration, transaction isolation, and cryptographic auditing.',
        customImagePath: null,
      },
    ],
  },
  {
    id: 'project-batman',
    themeKey: 'batman',
    themeName: 'Graphite Shadow',
    inspiration: 'Batman-inspired Art Direction',
    characterCodename: 'The Dark Sentinel',
    colorPalette: {
      primary: '#2B2D33',
      primaryLight: '#43464F',
      accent: '#9CA3AF',
      surface: '#EAE7E1',
      border: 'rgba(43, 45, 51, 0.22)',
      glow: 'rgba(156, 163, 175, 0.25)',
      badgeBg: 'rgba(43, 45, 51, 0.08)',
      badgeText: '#2B2D33',
    },
    title: 'Vigil Core: Zero-Trust Security Sentinel',
    tagline: 'Cryptographic identity verification & intrusion telemetry analyzer',
    summary: 'An autonomous perimeter defense platform providing heuristic threat evaluation, RBAC token auditing, and behavioral anomaly detection.',
    longDescription: 'Designed with stealth architecture principles, Vigil Core operates silently across distributed networks. It continuously analyzes ingress vectors, enforces ephemeral token validity, and visualizes stealth access patterns without impacting throughput.',
    technologies: ['Node.js', 'Express REST', 'JWT / OAuth2', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
    links: {
      github: {
        url: null,
        isAvailable: false,
        label: 'Source Code [Private Sentinel]',
      },
      liveDemo: {
        url: null,
        isAvailable: false,
        label: 'Sandbox Environment [Restricted]',
      },
    },
    frames: [
      {
        perspective: 'left',
        perspectiveTitle: 'Left Profile: Ingress Analysis',
        caption: 'Frame 01 — Deep packet heuristic evaluation and perimeter posture mapping.',
        metric: '100% Request Fingerprinting',
        details: 'Visualizing peripheral threat vectors, cryptographic handshake validation, and rate-limiting heuristics at edge nodes.',
        customImagePath: null,
      },
      {
        perspective: 'front',
        perspectiveTitle: 'Front Facing: Tactical Radar',
        caption: 'Frame 02 — Centralized tactical security radar and real-time session audit graph.',
        metric: 'Zero-Trust Token Enforcer',
        details: 'The central security console mapping live active token sessions, privilege escalations, and automated quarantine containment.',
        customImagePath: null,
      },
      {
        perspective: 'right',
        perspectiveTitle: 'Right Profile: Quarantine Containment',
        caption: 'Frame 03 — Sandboxed isolation chambers and automated countermeasure logs.',
        metric: '< 5ms Containment Trigger',
        details: 'Dynamic threat mitigation displaying instant IP isolation, forensic session playback, and tamper-proof log persistence.',
        customImagePath: null,
      },
    ],
  },
  {
    id: 'project-hulk',
    themeKey: 'hulk',
    themeName: 'Verdant Colossus',
    inspiration: 'Hulk-inspired Art Direction',
    characterCodename: 'The Gamma Dynamo',
    colorPalette: {
      primary: '#264E36',
      primaryLight: '#35694A',
      accent: '#8F9F88',
      surface: '#EBF0E9',
      border: 'rgba(38, 78, 54, 0.22)',
      glow: 'rgba(143, 159, 136, 0.25)',
      badgeBg: 'rgba(38, 78, 54, 0.08)',
      badgeText: '#264E36',
    },
    title: 'Gamma Stream: High-Throughput Data Transformer',
    tagline: 'Massive parallel data ingestion & resilient pipeline orchestration',
    summary: 'A resilient data pipeline processing millions of concurrent event payloads with self-scaling microservices and zero memory leaks.',
    longDescription: 'Gamma Stream harnesses raw computational throughput. Utilizing reactive backpressure algorithms and decoupled buffer stages, it transforms massive unparsed datasets into structured analytical views with unyielding resilience.',
    technologies: ['React 19', 'Express', 'Mongoose / Mongo', 'Worker Threads', 'Tailwind CSS', 'Vite'],
    links: {
      github: {
        url: null,
        isAvailable: false,
        label: 'Pipeline Repo [Pending Review]',
      },
      liveDemo: {
        url: null,
        isAvailable: false,
        label: 'Benchmark Suite [Offline]',
      },
    },
    frames: [
      {
        perspective: 'left',
        perspectiveTitle: 'Left Profile: Backpressure Influx',
        caption: 'Frame 01 — Reactive backpressure ingestion buffers absorbing sudden traffic spikes.',
        metric: '2.5M Events / Minute',
        details: 'Telemetry monitoring stage showing multi-channel stream ingestion, elastic buffer queues, and dynamic worker allocation.',
        customImagePath: null,
      },
      {
        perspective: 'front',
        perspectiveTitle: 'Front Facing: Mutation Engine Core',
        caption: 'Frame 02 — High-octane aggregation engine running parallel map-reduce transformations.',
        metric: 'Sub-second Aggregations',
        details: 'Central analytical dashboard showing schema validation rates, partition health matrices, and active compute clusters.',
        customImagePath: null,
      },
      {
        perspective: 'right',
        perspectiveTitle: 'Right Profile: Persistence Sink',
        caption: 'Frame 03 — Bulk transactional database writing with zero data loss.',
        metric: 'ACID Compliance Guaranteed',
        details: 'Final persistence stage showcasing batch commit pools, schema index optimization, and cold-storage archiving.',
        customImagePath: null,
      },
    ],
  },
  {
    id: 'project-superman',
    themeKey: 'superman',
    themeName: 'Solar Horizon',
    inspiration: 'Superman-inspired Art Direction',
    characterCodename: 'The Solar Paragon',
    colorPalette: {
      primary: '#1D4570',
      primaryLight: '#285C94',
      accent: '#C7A052', // Harmonized champagne & cool white
      coolWhite: '#F0F4F8',
      surface: '#EBF1F7',
      border: 'rgba(29, 69, 112, 0.22)',
      glow: 'rgba(29, 69, 112, 0.22)',
      badgeBg: 'rgba(29, 69, 112, 0.08)',
      badgeText: '#1D4570',
    },
    title: 'Aegis Beacon: Planetary Communications Relay',
    tagline: 'Global peer-to-peer mesh synchronization with cryptographic integrity',
    summary: 'A unified global collaboration mesh synchronizing distributed edge clients with solar-fast latency and continuous consistency.',
    longDescription: 'Aegis Beacon unites dispersed client applications into a synchronized mesh network. Leveraging WebRTC channels, optimistic UI mutations, and state reconciliation algorithms, it enables real-time collaborative document authoring and instant media distribution.',
    technologies: ['React 19', 'Node.js', 'Express', 'WebRTC', 'Tailwind CSS', 'Framer Motion'],
    links: {
      github: {
        url: null,
        isAvailable: false,
        label: 'Mesh Source [Coming Soon]',
      },
      liveDemo: {
        url: null,
        isAvailable: false,
        label: 'Live Relay [Staging Node]',
      },
    },
    frames: [
      {
        perspective: 'left',
        perspectiveTitle: 'Left Profile: Global Node Discovery',
        caption: 'Frame 01 — Geographic proximity node routing and decentralized peer discovery.',
        metric: '180+ Global Edge Pops',
        details: 'Ingress topology showing automated latency-based peer discovery, STUN/TURN negotiation, and route optimization.',
        customImagePath: null,
      },
      {
        perspective: 'front',
        perspectiveTitle: 'Front Facing: Solar Beacon Core',
        caption: 'Frame 02 — Real-time peer-to-peer data mesh and conflict-free replicated data types.',
        metric: 'CRDT Consensus Engine',
        details: 'The luminous core hub visualizing simultaneous multi-user document edits, state reconciliation, and optimistic client rendering.',
        customImagePath: null,
      },
      {
        perspective: 'right',
        perspectiveTitle: 'Right Profile: Planetary Broadcast',
        caption: 'Frame 03 — High-bandwidth encrypted broadcast channels reaching millions of peers.',
        metric: 'End-to-End Encryption',
        details: 'Broadcast stage demonstrating zero-knowledge cryptographic relays, distributed consensus verification, and planetary delivery.',
        customImagePath: null,
      },
    ],
  },
];
