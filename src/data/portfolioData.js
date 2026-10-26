// Centralized portfolio data for Aarzoo
// Everything is strictly aligned with the authentic, verified profile information.

export const personalInfo = {
  name: "Aarzoo",
  headline: "Software Developer | AI/ML Enthusiast | Full-Stack Developer",
  shortIntro: "HELLO, I'M",
  bio: "I build practical software applications and AI-powered solutions using modern web technologies and machine learning.",
  aboutText: "I'm a Computer Science graduate with a B.Tech degree and a CGPA of 8.47/10. I enjoy developing full-stack applications and exploring Artificial Intelligence, Machine Learning, and Natural Language Processing. I focus on building useful, user-friendly applications that solve real-world problems.",
  
  email: "rmishra.connect@gmail.com",
  github: "https://github.com/AARZOO00",
  linkedin: "https://linkedin.com/in/aarzoo00/",
  resumePath: "/resume.pdf",
  profileImage: "/profile-placeholder.jpg", // Replace with /profile.jpg if Aarzoo adds their own photo
  
  academic: {
    degree: "B.Tech in Computer Science and Engineering",
    graduation: "May 2026",
    cgpa: "8.47 / 10",
    collegePlaceholder: "[College / University Name - Add Institution]",
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
    description: "An NLP-based application that analyzes WhatsApp chat exports to identify message-level sentiment and emotions.",
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
      live: null,
      backend: null
    },
    featured: true
  },
  {
    id: "ai-counsellor",
    title: "AI Counsellor",
    subtitle: "Full-Stack Advisory & Knowledge Assistant",
    description: "A full-stack AI-powered application for guidance and university-related information.",
    fullDescription: "Comprehensive academic advising web platform that assists prospective and current students with admissions guidance, program selection, and coursework queries using OpenRouter LLM endpoints.",
    image: "/projects/ai-counsellor.jpg",
    technologies: ["React", "Node.js", "REST APIs", "OpenRouter"],
    features: [
      "Context-aware academic advisory chat agent",
      "Integration with OpenRouter LLM models",
      "Full-stack client and service separation",
      "Deployed with live frontend and backend endpoints"
    ],
    links: {
      github: null,
      live: "https://ai-counsellor-pink.vercel.app/",
      backend: "https://ai-counsellor-vosd.onrender.com/"
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
      "Interactive data visualizations and radar metrics",
      "AI-assisted contextual resilience breakdown",
      "Production deployment optimized for Vercel"
    ],
    links: {
      github: null,
      live: null, // As requested: verified links only
      backend: null
    },
    featured: true
  },
  {
    id: "voice-translator",
    title: "Real-Time Voice Translator",
    subtitle: "Speech Recognition, Translation & TTS",
    description: "A voice translation application integrating speech recognition, translation, and text-to-speech functionality.",
    fullDescription: "End-to-end multi-language voice translation system built with FastAPI. Captures live microphone speech, transcribes via SpeechRecognition, translates through Deep Translator, and synthesizes clear vocal output with gTTS.",
    image: "/projects/voice-translator.jpg",
    technologies: ["Python", "FastAPI", "SpeechRecognition", "Deep Translator", "gTTS"],
    features: [
      "Live microphone audio capture and speech recognition",
      "Multi-language text translation pipeline",
      "Natural voice synthesis (TTS) playback",
      "Modular FastAPI backend service architecture"
    ],
    links: {
      github: "https://github.com/AARZOO00/real-time-voice-translator",
      live: null,
      backend: null
    },
    featured: true
  }
];
