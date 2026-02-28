import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ganesh Iyer — Technical Product Professional",
  author: "Ganesh Iyer",
  description:
    "Product Manager based in NY Metro, USA. I am product enthusiast, and always on the look out to turn complex problem into innovative products I specialize in everything Product - from strategy to execution to GTM.",
  lang: "en",
  siteLogo: "/GaneshProfile.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/ganeshiyer812/" },
    { text: "Github", href: "https://github.com/gggiyer812?tab=repositories" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ganesh Iyer",
    specialty: "Seasoned Product Specialist",
    summary:
      "Product Manager based in NY Metro, USA. I am an Product enthusiast, always on the look out to turn complex problem into innovative product offerings. I specialize in everything Product - from strategy to execution to GTM.",
    email: "ganesh.iyer812@email.com",
  },
  experience: [
    {
      company: "American Express",
      position: "Lead Technical Product Manager",
      startDate: "Jan 2016",
      endDate: "Current",
      summary: [
        "Defined and led the multi-year vision for the Enterprise Data & ML Platform, migrating 10K+ users from on-prem systems to Google Cloud Platform, enabling scalable AI capabilities across Risk, Marketing, and Merchant functions and accelerating enterprise AI transformation.",
        "Launched and scaled GenAI-driven and self-serve analytical and ML capabilities, reducing PySpark-to-BigQuery migration time by 60% and driving adoption of Vertex AI across Decision Science teams to standardize enterprise MLOps practices.",
        "Architected a unified data movement blueprint supporting 900+ enterprise tables and 100K+ attributes, enabling scalable, self-serve capabilities across ingestion, transformation, metadata enrichment, and governed data manifestation.",
        "Spearheaded development of a comprehensive enterprise data catalog and governance framework, enriching 500K+ metadata fields, improving attribute accuracy by 10%, and significantly enhancing data discoverability, lineage tracking, and compliance.",
        "Built and scaled enterprise data quality and ML-driven governance solutions, launching a self-serve platform adopted by 3,500+ users and processing 600K+ daily quality checks, while pioneering ML-based anomaly detection that improved operational efficiency by 50% and mentoring a high-performing ML team."
      ],
    },
    {
      company: "Credit Suisse",
      position: "Product Owner",
      startDate: "Feb 20110",
      endDate: "Dec 2015",
      summary: [
        "Owned end-to-end platform management of the enterprise Reference Data Platform, integrating 50+ upstream data sources and leading a 20+ member engineering and analytics team, delivering critical sourcing and distribution initiatives with 100% on-time execution.",
        "Led 10+ complex data implementation programs supporting back-office and risk operations, reducing manual data handling by 30%, ensuring 100% audit compliance with BASEL regulations, and strengthening data security by governing sensitive Class A and Class B datasets in partnership with data owners and stewards.",
        "Netting Library - Architected and launched portal workflow for Legal teams to manage and store legal cntracts",
        "Executed Master Data Management (MDM) strategy for the Netting Library, defining entity relationships and cardinality models to ensure accurate counterparty aggregation, improved reconciliation integrity, and scalable risk processing.",
      ],
    },
    {
      company: "Various",
      position: "Data Engineer",
      startDate: "Jun 2005",
      endDate: "Dec 2009",
      summary: [
        "Engineered and delivered Mortgage Data Marts, data warehouses, and financial applications that powered loan performance analytics, risk assessment, underwriting, servicing, and regulatory reporting, strengthening reporting accuracy and operational efficiency.",
        "Partnered with Data Stewards to codify mortgage-specific business rules and validate critical data definitions (e.g., loan-to-value, delinquency status), while implementing data entitlement frameworks to safeguard sensitive borrower and financial information across platforms.",
      ],
    },
  ],
  projects: [
      {
      name: "AI Code Accelerators",
      summary: "Enterprise tools to scan and recommend code optimizations and best practices ",
      image: "/AIAccel.gif",
    },
    {
      name: "Data ANomaly Detection",
      summary: "Single click experience to detect and flag anomalies on large scale data to ensure data integrity",
      image: "/Anomaly.gif",
    },
    {
      name: "Data Marketplace Discover",
      summary: "NLP based semantic data asset discovery to seamlessly drive the adotpion of platform",
      image: "/Discovery.jpg",
    },        
    {
      name: "Chord Lyric Fusion",
      summary: "App for music lover that help decode mucis and get chords by instrument preference",
      image: "/MusicChord.png",
    },
      {
      name: "Omni-Channel Ordering",
      summary: "Digital Ordering platform for restaurants  with Payment gateways and last mile delivery providers integrations",
      image: "/Restaurant.jpeg",
    },
    {
      name: "ReHUB",
      summary: "Marketplace for Retailers to efficiently manage operations - Deal submission, Invoice Parsing, Order And Inventory Management",
      image: "/ReHUB.png",
    },
    {
      name: "Expertise",
      summary: "Product Strategy, Roadmap & Execution - Stakeholder Management - Analytics & AI - Data Governance & Quality - Cross-functional Leadership - Innovation & Problem Solving - Team Building & Mentorship- Technical Acumen  ",
      image: "/Skills.jpg",
    },
  ],
  about: {
    description: `
      Hi, I’m a product professional, passionate about building platforms that empower teams and unlock innovation. My work centers on transforming complex ideas into scalable, intuitive solutions that bridge business strategy and technology. I’m deeply motivated by the craft of product thinking — understanding user needs, simplifying complexity, and bringing clarity to ambiguity. I thrive in environments where data, engineering, and vision intersect to create meaningful impact. Over the years, I have been fortunate to work with some great minds to build products for enterprise and as a freelancer. Outside of work, my interests span music, golf and exploring the culinary arts..
    `,
    image: "/GaneshProfile.jpeg",
  },
};

// #5755ff
