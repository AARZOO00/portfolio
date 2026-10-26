// Centralized portfolio data for Aarzoo
// Everything is strictly aligned with the authentic, verified profile information.

export const personalInfo = {
  name: "Aarzoo",
  headline: "Software Developer | AI/ML Enthusiast | Full-Stack Developer",
  shortIntro: "HELLO, I'M",
  bio: "I build practical software applications and AI-powered solutions using modern web technologies and machine learning.",
  aboutText: "I'm a Computer Science graduate with a B.Tech degree and a CGPA of 8.47/10. I enjoy developing full-stack applications and exploring Artificial Intelligence, Machine Learning, and Natural Language Processing. I focus on building useful, user-friendly applications that solve real-world problems.",

  email: "aarzoo.coder@gmail.com",
  github: "https://github.com/AARZOO00",
  linkedin: "https://linkedin.com/in/aarzoo00/",
  resumePath: "/resume.pdf",
  profileImage: "/images/aarzoo-profile.png",
  portraitCutout: "/images/aarzoo-profile.png",

  academic: {
    degree: "B.Tech in Computer Science and Engineering",
    graduation: "May 2026",
    cgpa: "8.47 / 10",
    collegePlaceholder: "Maulana Azad National Urdu University",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Natural Language Processing",
      "Web Technologies & REST APIs",
      "Machine Learning Fundamentals",
      "Operating Systems & Networks"
    ]
  },

  interests: [
    "Software Development",
    "Artificial Intelligence & ML",
    "Natural Language Processing",
    "Modern Web Technologies"
  ]
};

export const whatIBuildPillars = [
  {
    id: "fullstack",
    title: "Full-Stack Web Applications",
    description: "Responsive, responsive frontends paired with robust backend services, structured architectures, and modern UI/UX design.",
    icon: "Layers",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Node.js"]
  },
  {
    id: "aiml",
    title: "AI-Powered Applications",
    description: "Intelligent software integrating machine learning pipelines, LLM inference endpoints, and automated decision-support logic.",
    icon: "Cpu",
    technologies: ["Python", "OpenRouter API", "Transformer Models", "Prompt Engineering"]
  },
  {
    id: "nlp",
    title: "NLP-Based Tools",
    description: "Natural Language Processing applications delivering emotion analysis, sentiment classification, text mining, and token evaluation.",
    icon: "MessageSquareCode",
    technologies: ["Natural Language Processing", "VADER", "TextBlob", "Tokenization"]
  },
  {
    id: "api-deploy",
    title: "API Integration & Deployment",
    description: "Clean RESTful interfaces, synchronous and asynchronous request lifecycles, and production deployments on cloud platforms.",
    icon: "CloudUpload",
    technologies: ["FastAPI", "REST APIs", "Render", "Vercel", "Git"]
  }
];

export const skillCategories = [
  {
    id: "languages",
    name: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", category: "languages" },
      { name: "JavaScript", category: "languages" },
      { name: "SQL", category: "languages" }
    ]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React", category: "frontend" },
      { name: "HTML5", category: "frontend" },
      { name: "CSS3", category: "frontend" }
    ]
  },
  {
    id: "backend",
    name: "Backend and APIs",
    icon: "Server",
    skills: [
      { name: "Node.js", category: "backend" },
      { name: "FastAPI", category: "backend" },
      { name: "REST APIs", category: "backend" }
    ]
  },
  {
    id: "ai-nlp",
    name: "AI and NLP",
    icon: "Brain",
    skills: [
      { name: "Natural Language Processing", category: "ai-nlp" },
      { name: "VADER", category: "ai-nlp" },
      { name: "TextBlob", category: "ai-nlp" },
      { name: "Transformer Models", category: "ai-nlp" },
      { name: "OpenRouter API", category: "ai-nlp" }
    ]
  },
  {
    id: "tools",
    name: "Tools and Deployment",
    icon: "Wrench",
    skills: [
      { name: "Git", category: "tools" },
      { name: "GitHub", category: "tools" },
      { name: "Render", category: "tools" },
      { name: "Vercel", category: "tools" }
    ]
  }
];

export const projects = [
  {
    id: "whatsapp-sentiment",
    title: "WhatsApp Chat Sentiment Analyzer",
    subtitle: "Conversational NLP & Emotion Analytics",
    description: "An NLP-based application for analyzing WhatsApp chat exports and identifying message-level sentiment and emotions.",
    fullDescription: "Parses exported WhatsApp conversation archives to detect emotional nuance and message-level polarity. Employs VADER and Transformer architecture models to extract behavioral metrics, emotion distributions, and visual trend patterns.",
    image: "/projects/whatsapp-sentiment.jpg",
    technologies: ["Python", "FastAPI", "React", "NLP", "VADER", "Transformer Models"],
    features: [
      "WhatsApp chat export ingestion and clean parsing",
      "Message-level polarity and sentiment detection",
      "Granular emotion classification and trend mapping",
      "Interactive data visualizations and reporting"
    ],
    links: {
      github: "https://github.com/AARZOO00/whatsapp-sentiment-analyzer",
      live: "https://whatsapp-analytics-7gpztanlhdjxmgpa6p5dgp.streamlit.app/",
      backend: null
    },
    featured: true
  },
  {
    id: "careops-platform",
    title: "CareOps Platform",
    subtitle: "Unified Business Operations & CRM Platform",
    description: "A full-stack business operations platform for service booking, scheduling, and client management.",
    fullDescription: "All-in-one operations platform for service businesses featuring integrated service booking, scheduling management, CRM client pipelines, and real-time operational analytics.",
    image: "/projects/careops-platform.jpg",
    technologies: ["Next.js", "React", "JavaScript", "REST APIs", "Vercel"],
    features: [
      "Service booking and automated scheduling management",
      "Interactive CRM client and pipeline tracking",
      "Business operations workflow coordination",
      "Production deployment optimized on Vercel"
    ],
    links: {
      github: "https://github.com/AARZOO00/careops-platform",
      live: "https://frontend-snowy-xi-43.vercel.app/",
      backend: null
    },
    featured: true
  },
  {
    id: "mh-resilience-pro",
    title: "MH Resilience Pro – Mental Health Resilience Dashboard",
    subtitle: "Public Health Analytics & AI Insights",
    description: "A dashboard for exploring mental health resilience using social determinants of health and AI-assisted insights.",
    fullDescription: "Data visualization platform analyzing mental health indicators through the lens of social determinants of health (SDOH). Provides interactive exploration of resilience dimensions and AI-assisted contextual insights.",
    image: "/projects/mh-resilience.jpg",
    technologies: ["React.js", "JavaScript", "AI/ML APIs", "Data Visualization", "Vercel"],
    features: [
      "Social determinants of health multidimensional index",
      "Interactive data visualizations and resilience radar charts",
      "AI-assisted contextual resilience breakdown",
      "Production deployment optimized for Vercel"
    ],
    links: {
      github: "https://github.com/AARZOO00/mental-health-resilience-system",
      live: "https://mental-health-resilience-system.vercel.app/",
      backend: null
    },
    featured: true
  }
];
