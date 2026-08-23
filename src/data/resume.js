export const profile = {
  name: "Bablu Kumar",
  title: "MERN Stack Developer",
  tagline: "Building fast, scalable full-stack products with React, Next.js & Node.js",
  email: "bk392534@gmail.com",
  phone: "+91 7667869102",
  location: "Chandigarh, Punjab, India",
  linkedin: "https://linkedin.com/in/bablukumar-7b7028275",
  github: "https://github.com/bablusharma13",
  resumeUrl: "/BabluKumarResume.pdf",
};

export const experience = [
  {
    company: "AllHeart Web",
    location: "Chandigarh, India",
    role: "MERN Stack Developer",
    period: "July 2025 – Present",
    bullets: [
      "Building features on MarketXY (marketxy.com), a data research platform for domain, WHOIS, DNS, SSL, IP, and company intelligence at scale.",
      "Developing responsive, performant user interfaces using React.js, Next.js, and Tailwind CSS across the public site, client portal, and admin applications.",
      "Building and maintaining REST APIs and authentication systems using Node.js and Express.js to support secure, scalable application workflows.",
      "Implementing search functionality using Elasticsearch and real-time features to enhance product usability and user experience.",
      "Optimizing application performance through caching strategies using Redis and efficient data handling with MongoDB and MySQL.",
    ],
  },
  {
    company: "Pisoft Informatics Pvt. Ltd.",
    location: "Mohali district",
    role: "MERN Stack Developer",
    period: "January 2025 – July 2025",
    bullets: [
      "Worked across the MERN stack (MongoDB, Express.js, React.js, Node.js) to build and maintain web application features.",
      "Built reusable, responsive UI components with React.js and Redux Toolkit, improving consistency and maintainability across the codebase.",
      "Developed REST APIs with Node.js and Express.js, integrating MongoDB and MySQL for data persistence.",
      "Used Docker to streamline local development and deployment workflows.",
    ],
  },
];

export const projects = [
  {
    title: "MarketXY — Data Research Platform",
    period: "AllHeart Web · Live",
    featured: true,
    url: "https://marketxy.com/",
    description:
      "Production platform at AllHeart Web — domain and intelligence research with 600M+ domain records, linking domain → company → email → tech → category in unified queries. Public website, client portal, and admin share a Node.js backend.",
    highlights: [
      "Shipped UI on the live product (marketxy.com) using React.js, Next.js 15, and Tailwind CSS across marketing site, client portal, and admin panel.",
      "Developed REST APIs in Node.js/Express with JWT authentication and role-based access control (RBAC).",
      "Worked with MongoDB and Elasticsearch for domain search, DNS, IP/ASN, SSL certificates, and email datasets.",
      "Integrated Stripe for subscription and billing in the client dashboard.",
      "Implemented async bulk exports (CSV/Excel) using BullMQ job queues and ExcelJS.",
      "Used Redis for caching and rate limiting on high-traffic API paths.",
      "Managed state with Redux Toolkit and TanStack React Query across frontend apps.",
      "Set up cron jobs for scheduled data updates and cache cleanup.",
    ],
    stack: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "Elasticsearch", "Redis", "Redux Toolkit", "Tailwind CSS", "Stripe", "Docker"],
  },
  {
    title: "Full-Stack API Monitoring Platform",
    period: "AllHeart Web",
    description:
      "Multi-tenant SaaS API monitoring platform that continuously tracks external API health (uptime, latency, status codes).",
    highlights: [
      "Designed and built scheduled BullMQ workers running every minute to track API health.",
      "Implemented an automated incident management system that detects status changes, creates/resolves incidents, and dispatches email alerts via a dedicated email microservice.",
      "Built a cron job heartbeat monitor using an inbound ping-based system to detect missed or late scheduled jobs with configurable grace periods.",
      "Developed a React 19 frontend with server-side pagination/filtering tables and real-time dashboards (SLO, traffic, latency, saturation).",
      "Engineered multi-tenant architecture with per-tenant MongoDB connections and separate analytics pipelines.",
      "Integrated Redis + BullMQ for job queue persistence with automatic re-sync on Redis flush to ensure zero job loss.",
    ],
    stack: ["React 19", "Express 5", "MongoDB", "Redis", "BullMQ", "Tailwind CSS"],
  },
];

export const skills = [
  { category: "Programming", items: ["JavaScript", "Python"] },
  { category: "Frontend", items: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { category: "Databases & Search", items: ["MongoDB", "MySQL", "Redis", "Elasticsearch"] },
  { category: "Tools & Platforms", items: ["Docker", "Git/GitHub"] },
];

export const education = [
  {
    school: "Punjab Technical University",
    degree: "Bachelor of Technology – Computer Science",
    period: "September 2021 – June 2025",
    primary: true,
  },
  {
    school: "Zila School Chhapra, Saran (BSEB)",
    degree: "Intermediate, Mathematics and Science",
    period: "June 2018 – February 2020",
  },
  {
    school: "Utkramit M S Panapur Mohammedpur, Saran",
    degree: "Matriculation",
    period: "March 2017 – May 2018",
  },
];
