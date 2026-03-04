import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ganesh Iyer — Technical Product Professional",
  author: "Ganesh Iyer",
  description:
    "I am a product enthusiast based of NY Metro,, turning complex problems into innovative products. I specialize in everything Product - from strategy to execution to GTM.",
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
  socialImage: "/ganesh_social.jpeg",
  canonicalURL: "https://ganeshiyer.xyz",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ganesh Iyer",
    specialty: "Product Specialist",
    summary:
      "I am a product enthusiast based of NY Metro,, turning complex problems into innovative products. I specialize in everything Product - from strategy to execution to GTM.",
    email: "ganesh.iyer812@email.com",
  },
  experience: [
    {
      company: "American Express",
      position: "Lead Technical Product Manager",
      startDate: "Jan 2016",
      endDate: "Current",
      summary: [
        "Lead the multi year product strategy and roadmap for Enterprise Data Platform Cloud modernaization on GCP, driving the adoption of 15K+ users.",
        "Launched and scaled GenAI-driven self-serve capabilities, accelerating 60% efficiency driving adoption of Vertex AI and BigQuery.",
        "Led the product launch of Uified Data Movement -  ingestion, transformation, metadata enrichment, and governed data manifestation scaling 30 PB of Data.",
        "Championed and pioneered ML-based anomaly detection capability with a single click experience adopted by 3,500+ Data Stewards and Custodians ensuring over 90% Data Integrity across Critical Data Elements."
      ],
    },
    {
      company: "Credit Suisse",
      position: "Product Owner",
      startDate: "Feb 20110",
      endDate: "Dec 2015",
      summary: [
        "Owned end-to-end development of the enterprise Reference Data Platform, leading a 20+ member engineering and analytics team.",
        "Led 10+ complex data implementation programs ensuring 100% audit compliance with BASEL regulations in partnership with data owners and stewards.",
        "Netting Library - Architected and launched digital contract managements portal to  empower Legal teams create, manage and store legal cntracts.",
      ],
    },
    {
      company: "Various",
      position: "Data Engineer",
      startDate: "Jun 2005",
      endDate: "Dec 2009",
      summary: [
        "Engineered and delivered Mortgage Data Marts, data warehouses, and financial applications .",
        "Partnered with Data Stewards to codify mortgage-specific business rules and validate critical data definitions.",
      ],
    },
  ],
  projects: [
      {
      name: "AI Code Accelerators",
      summary: "Enterprise self serve tools to recommend code optimizations and best practices ",
      image: "/AIAccel.gif",
    },
    {
      name: "Data Anomaly Detection",
      summary: "Single click experience to detect and flag anomalies on large scale data to ensure data integrity",
      image: "/Anomaly.gif",
    },
    {
      name: "Data Marketplace Intelligence",
      summary: "Semantic Layer to Catalog, Organize, Store and NLP based data asset discovery to seamlessly drive the adotpion of platform",
      image: "/Discovery.jpg",
    },        
    {
      name: "Music Chord Generator",
      summary: "App for music lovers that help decode music and get chords by instrument preference. Generate Chords, sheet music and more",
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
      summary: "Product Strategy     -     Design Thinking     -     Product Execution    -     GTM     -     Technical design    -     Stakeholder Management     -     Product Champion and Leadership",
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
