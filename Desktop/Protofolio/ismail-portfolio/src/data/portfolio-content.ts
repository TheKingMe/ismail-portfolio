export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'enterprise' | 'saas' | 'ecommerce' | 'data-cloud' | 'ai-hardware';
  categoryLabel: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  highlights: string[];
  featuredMetric?: {
    value: string;
    label: string;
  };
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  iconName: 'Code' | 'Server' | 'Cloud' | 'TrendingUp';
  badgeColor: string;
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    title: string;
    valueProposition: string;
    bio: string;
    location: string;
    status: string;
    experienceYears: string;
    email: string;
    phone: string;
    whatsappNumber: string;
    whatsapp: string;
    github: string;
    linkedin: string;
  };
  stats: StatItem[];
  skillsMatrix: {
    frontend: SkillCategory;
    backend: SkillCategory;
    dataCloud: SkillCategory;
    digitalBusiness: SkillCategory;
  };
  projects: Project[];
  testimonials: {
    quote: string;
    author: string;
    role: string;
    company: string;
  }[];
}

export const portfolioContent: PortfolioData = {
  profile: {
    name: "Ismail Mamad",
    title: "Full-Stack Software Engineer & Digital Solutions Builder",
    valueProposition:
      "Building scalable web applications, data pipelines, and high-converting e-commerce ecosystems.",
    bio: "Versatile engineer bridging enterprise software rigor with commercial e-commerce velocity. Specialized in architecting distributed Spring Boot & Next.js systems, automating mission-critical data pipelines, and building high-converting SaaS products that generate measurable business revenue.",
    location: "Morocco • Open to Worldwide Remote & Enterprise Contracts",
    status: "Available for Enterprise Opportunities & High-Impact Freelance",
    experienceYears: "5+ Years Engineering & Growth",
    email: "ismailxmamad@gmail.com",
    phone: "+212 681 508 291",
    whatsappNumber: "212681508291",
    whatsapp: "https://wa.me/212681508291",
    github: "https://github.com/TheKingMe",
    linkedin: "https://www.linkedin.com/in/ismail-mamad-0180a7271/",
  },
  stats: [
    {
      value: "99.95%",
      label: "Enterprise Reliability",
      detail: "High-uptime Spring Boot microservices & automated pipelines",
    },
    {
      value: "$450K+",
      label: "E-Commerce GMV Driven",
      detail: "Through bespoke storefronts, CRO, and paid acquisition",
    },
    {
      value: "40+",
      label: "Active SaaS Merchants",
      detail: "Powered by custom inventory, billing, & dispatch tools",
    },
    {
      value: "42%",
      label: "Latency Reduction",
      detail: "Optimized multi-tenant workflows and enterprise databases",
    },
  ],
  skillsMatrix: {
    frontend: {
      title: "Frontend Engineering",
      description: "High-performance reactive user interfaces, component design systems, and cross-platform native experiences.",
      skills: ["React", "Next.js", "Angular", "Tailwind CSS", "React Native"],
      iconName: "Code",
      badgeColor: "from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-300",
    },
    backend: {
      title: "Backend & Systems",
      description: "Scalable enterprise architectures, secure RESTful/GraphQL APIs, microservices, and asynchronous event workflows.",
      skills: ["Java", "Spring Boot", "Node.js", "Express", "PHP"],
      iconName: "Server",
      badgeColor: "from-indigo-500/20 to-violet-500/20 border-indigo-500/30 text-indigo-300",
    },
    dataCloud: {
      title: "Data & Cloud Infrastructure",
      description: "Relational database tuning, automated ETL data pipelines, containerization, and cloud deployment pipelines.",
      skills: ["PostgreSQL", "Docker", "AWS (Amplify, S3)", "Apache Airflow"],
      iconName: "Cloud",
      badgeColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300",
    },
    digitalBusiness: {
      title: "Digital Business & Growth",
      description: "Performance marketing funnels, conversion rate optimization (CRO), custom payment flows, and e-commerce growth.",
      skills: ["Meta Ads Manager", "Shopify", "YouCan"],
      iconName: "TrendingUp",
      badgeColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300",
    },
  },
  projects: [
    {
      id: "novitus",
      title: "Novitus (Enterprise LMS Modernization)",
      subtitle: "Legacy Chamilo Monolith Refactoring to Spring Boot 3 & React",
      category: "enterprise",
      categoryLabel: "Enterprise & Professional Experience",
      problem:
        "The client operated on a legacy monolithic Chamilo LMS platform plagued by schema drift, slow manual support ticketing workflows, and an inability to deliver low-latency reporting across distributed organizations.",
      solution:
        "Engineered an enterprise-grade migration to Spring Boot 3 microservices with a React frontend. Implemented automated data pipelines, direct & channel chat with STOMP WebSockets, collaborative workspaces, and an integrated SLA ticketing engine.",
      impact:
        "Achieved 42% faster ticket turnaround, migrated 250k+ critical records without downtime, and maintained 99.95% enterprise uptime across corporate training cohorts.",
      techStack: ["Java", "Spring Boot 3", "React", "PostgreSQL"],
      highlights: [
        "Decomposed 140+ legacy Chamilo tables using Spring Batch pipelines",
        "STOMP-over-WebSocket real-time channel and direct messaging",
        "Collaborative group workspaces with integrated SLA ticketing",
        "Stateless JWT auth with fine-grained Role-Based Access Control (RBAC)",
      ],
      featuredMetric: {
        value: "42%",
        label: "Latency Reduction",
      },
      liveUrl: undefined,
      githubUrl: undefined,
    },
    {
      id: "stocksaas",
      title: "StockSaaS (B2B E-Commerce SaaS)",
      subtitle: "Multi-Store Inventory, MAD Invoicing & Courier Logistics",
      category: "saas",
      categoryLabel: "Full-Stack SaaS & Web Apps",
      problem:
        "E-commerce merchants in Morocco faced high package return rates (30%+) and stock miscounts due to manual WhatsApp order booking, fragmented courier communication, and unstandardized paper invoicing.",
      solution:
        "Designed and built an all-in-one B2B SaaS platform specifically tuned for COD (Cash-on-Delivery) logistics. Integrated atomic SKU reservations, automated MAD currency fiscal invoicing, and live carrier webhook tracking.",
      impact:
        "Adopted by 40+ active e-commerce brands, processing 180k+ packages and curtailing inventory discrepancies by 85% while reclaiming an estimated $60k in lost return fees.",
      techStack: ["Node.js", "Express", "Next.js", "Tailwind CSS", "PostgreSQL", "Docker", "AWS (Amplify, Cognito, S3)"],
      highlights: [
        "Pessimistic row-level locking (SELECT FOR UPDATE) preventing oversells",
        "High-performance async PDF invoice generator (MAD & EUR)",
        "Live webhook integration with Amana, Cathedis, and Ozone couriers",
        "Multi-tenant AWS Cognito authentication and encrypted S3 storage",
      ],
      featuredMetric: {
        value: "180K+",
        label: "Shipments Tracked",
      },
      liveUrl: "https://stocksaas.vercel.app",
      githubUrl: "https://github.com/TheKingMe/stocksaas",
    },
    {
      id: "nidora",
      title: "NIDORA (B2C Family Management App)",
      subtitle: "Dual-User Profile Coordination & Domestic Logistics Hub",
      category: "saas",
      categoryLabel: "Full-Stack SaaS & Web Apps",
      problem:
        "Modern families lacked a unified, privacy-conscious digital space where parents and older dependents could coordinate schedules, shared checklists, and emergency medical records without sacrificing role privacy.",
      solution:
        "Architected an interactive full-stack web application featuring dual-user profile views (Guardian vs. Dependent), synchronized timeline calendars, encrypted family vaults, and responsive checklists.",
      impact:
        "Delivered a seamless multi-device experience with sub-100ms real-time state synchronization, scoring a 4.9/5 beta rating across 150+ testing families.",
      techStack: ["React", "Next.js", "Tailwind CSS"],
      highlights: [
        "Client-side sandbox isolating Guardian and Dependent state trees",
        "Optimistic UI with vector-clock conflict resolution",
        "Encrypted pediatric health and emergency document storage",
        "Mobile-first responsive design optimized for quick one-thumb input",
      ],
      featuredMetric: {
        value: "<100ms",
        label: "Sync Latency",
      },
      liveUrl: "https://nidora-app.vercel.app",
      githubUrl: "https://github.com/TheKingMe/nidora-family-hub",
    },
    {
      id: "big-data-natural-disasters",
      title: "Big Data Analytics Platform (Natural Disasters)",
      subtitle: "Distributed Lakehouse for Global Geospatial & Seismic Telemetry",
      category: "data-cloud",
      categoryLabel: "Data Engineering & Cloud Infrastructure",
      problem:
        "High-velocity seismic and meteorological sensor streams overwhelmed traditional relational databases, making ad-hoc disaster risk queries unfeasible during emergency dispatch operations.",
      solution:
        "Engineered an open lakehouse pipeline utilizing PySpark, Apache Iceberg, and Apache Airflow to process multi-gigabyte spatial-temporal datasets with interactive Trino SQL and Superset dashboards.",
      impact:
        "Achieved 92% partition scan pruning efficiency, sub-second query latency across multi-terabyte datasets, and real-time geospatial emergency dispatch visualizations.",
      techStack: ["PySpark", "Apache Iceberg", "Apache Airflow", "Trino", "Apache Superset"],
      highlights: [
        "Automated Airflow DAGs for bin-packing Iceberg data files",
        "Hidden partitioning on event time and geospatial bounding boxes",
        "Cost-based optimization (CBO) on distributed Trino query clusters",
        "High-concurrency time-travel snapshot querying without table locks",
      ],
      featuredMetric: {
        value: "92%",
        label: "Scan Pruning",
      },
      liveUrl: undefined,
      githubUrl: "https://github.com/TheKingMe/disaster-telemetry-lakehouse",
    },
    {
      id: "secure-serverless-cloud-storage",
      title: "Secure Serverless Cloud Storage",
      subtitle: "Direct-to-S3 Pre-Signed Upload Pipeline & Event-Driven Processing",
      category: "data-cloud",
      categoryLabel: "Data Engineering & Cloud Infrastructure",
      problem:
        "Routing multi-gigabyte client file uploads through standard web application servers saturated network bandwidth and caused memory exhaustion and server timeouts.",
      solution:
        "Developed a zero-server cloud storage platform using Next.js, AWS S3 pre-signed multipart uploads, and event-driven AWS Lambda serverless functions.",
      impact:
        "Reduced application server network load by 100%, enabled resilient chunked uploads for files up to 5GB, and automated serverless file metadata extraction.",
      techStack: ["Next.js", "AWS S3", "AWS Lambda", "AWS API Gateway", "Tailwind CSS"],
      highlights: [
        "Two-stage pre-signed multipart upload handshake bypassing web servers",
        "Client-side SHA-256 cryptographic checksum verification",
        "Event-driven Lambda triggers on s3:ObjectCreated for thumbnails",
        "Lifecycle rules automatically aborting incomplete multipart uploads",
      ],
      featuredMetric: {
        value: "5GB+",
        label: "Chunked Uploads",
      },
      liveUrl: "https://cloudstorage-demo.vercel.app",
      githubUrl: "https://github.com/TheKingMe/secure-serverless-storage",
    },
    {
      id: "laravel-elearning-platform",
      title: "Laravel E-Learning Platform",
      subtitle: "Custom Video Course Marketplace & Evaluation Engine",
      category: "ecommerce",
      categoryLabel: "Freelance & Digital Business",
      problem:
        "A private educational client needed a bespoke video course platform without high third-party SaaS subscription fees, requiring strict protection against video piracy and course link sharing.",
      solution:
        "Developed a custom Laravel e-learning portal with signed ephemeral streaming URLs, student progress tracking, automated quiz grading, and PDF certification.",
      impact:
        "Eliminated $3,600/yr in recurring SaaS fees, protected proprietary media from scraping, and supported hundreds of active concurrent learners.",
      techStack: ["PHP", "Laravel", "HTML/CSS", "MySQL"],
      highlights: [
        "Signed temporary media streaming endpoints preventing URL scraping",
        "Debounced client watch progress dispatched via background queues",
        "Polymorphic curriculum data modeling in Eloquent ORM",
        "Automated PDF certificate compilation with cryptographic hashes",
      ],
      featuredMetric: {
        value: "100%",
        label: "Data Ownership",
      },
      liveUrl: undefined,
      githubUrl: "https://github.com/TheKingMe/laravel-elearning-platform",
    },
    {
      id: "digital-ecommerce-ad-management",
      title: "Digital E-Commerce Operations & Ad Management",
      subtitle: "High-Converting Storefronts & Meta Ads Growth Strategy",
      category: "ecommerce",
      categoryLabel: "Freelance & Digital Business",
      problem:
        "Direct-to-consumer fashion brands (Yescherie, Boutique Hidaya, Qumashique) faced severe ad signal loss post-iOS 14.5 and sluggish mobile checkout speeds (>4.5s) bleeding ad spend.",
      solution:
        "Re-engineered custom Shopify/YouCan storefronts for sub-1.2s loading speeds, deployed server-side Meta Conversions API (CAPI) deduplication, and managed full-funnel ad campaigns.",
      impact:
        "Generated over $450K+ in verified sales, elevated Event Quality Match Score to 9.2/10, and maintained a 4.2x average ROAS across seasonal campaigns.",
      techStack: ["Shopify", "YouCan", "Meta Ads Manager", "Pixel Tracking", "Canva", "CapCut"],
      highlights: [
        "Sub-1.2s First Contentful Paint mobile loading times",
        "Server-side Meta Conversions API (CAPI) with deterministic event_id hashing",
        "Custom frictionless 1-click Cash on Delivery (COD) checkout modals",
        "Data-driven creative testing framework across Reels and TikTok",
      ],
      featuredMetric: {
        value: "4.2x",
        label: "Average Ad ROAS",
      },
      liveUrl: "https://yescherie.com",
      githubUrl: undefined,
    },
    {
      id: "biometric-identification-system",
      title: "Biometric Identification System",
      subtitle: "Fuzzy Logic Pattern Recognition & Verification Engine",
      category: "ai-hardware",
      categoryLabel: "AI, Hardware & Academic Research",
      problem:
        "Traditional biometric verification algorithms fail when sensors encounter noise, lighting variance, or skin elasticity changes, resulting in high false rejection rates (FRR).",
      solution:
        "Engineered a biometric identification and classification system in MATLAB applying mathematical feature extraction models and fuzzy inference engines (FIS).",
      impact:
        "Achieved an Equal Error Rate (EER) of under 2.8%, dramatically outperforming rigid Euclidean distance classifiers under noisy biometric inputs.",
      techStack: ["MATLAB", "Fuzzy Logic"],
      highlights: [
        "Adaptive asymmetric Gaussian membership function calibration",
        "Centroid defuzzification producing smooth decision surfaces",
        "Multi-stage noise filtering and adaptive contrast normalization",
        "Comprehensive ROC, FAR, and FRR statistical evaluation suite",
      ],
      featuredMetric: {
        value: "<2.8%",
        label: "Equal Error Rate",
      },
      liveUrl: undefined,
      githubUrl: "https://github.com/TheKingMe/biometric-fuzzy-system",
    },
    {
      id: "embedded-systems-iot",
      title: "Embedded Systems & IoT Automation",
      subtitle: "Hardware Circuit Design, Firmware in Embedded C & Simulation",
      category: "ai-hardware",
      categoryLabel: "AI, Hardware & Academic Research",
      problem:
        "Resource-constrained 8-bit microcontrollers suffer severe clock jitter and interrupt contention when handling high-frequency SPI RFID polling and servo PWM simultaneously.",
      solution:
        "Designed and coded an autonomous physical security gate using PIC16F877A / ATmega328P with interrupt-driven SPI, hardware CCP/Timer2 PWM, and Proteus simulation.",
      impact:
        "Achieved zero-jitter motor actuation, sub-10ms RFID authentication response, and verified circuit integrity before physical PCB soldering.",
      techStack: ["Arduino UNO", "RC522 RFID", "SG90 servos", "PIC16F877 microcontrollers", "Proteus Simulation"],
      highlights: [
        "Interrupt-driven state machine reading MFRC522 over SPI",
        "Hardware CCP1/Timer2 registers generating jitter-free 50Hz PWM",
        "Brown-out protection and optical isolation against motor inductive spikes",
        "Virtual circuit schematic capture and logic simulation in Proteus VSM",
      ],
      featuredMetric: {
        value: "<10ms",
        label: "Access Latency",
      },
      liveUrl: undefined,
      githubUrl: "https://github.com/TheKingMe/embedded-iot-access-control",
    },
  ],
  testimonials: [
    {
      quote:
        "Ismail possesses a rare blend: deep enterprise backend discipline coupled with an entrepreneur's instinct for what actually drives user action and revenue.",
      author: "Enterprise Project Lead",
      role: "Engineering Director",
      company: "Novitus Ecosystem",
    },
    {
      quote:
        "Our order fulfillment and inventory was chaotic before StockSaaS. Ismail understood our COD business model immediately and delivered an ironclad tool.",
      author: "Yassine B.",
      role: "E-Commerce Brand Founder",
      company: "DTC Retail Morocco",
    },
  ],
};
