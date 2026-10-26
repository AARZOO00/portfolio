// Centralized portfolio data for Aarzoo
// Exactly matches the verified profile information and the reference design.

export const personalInfo = {
  name: "Aarzoo",
  headline: "Software Developer | AI/ML Enthusiast | Full-Stack Developer",
  shortIntro: "HELLO, I'M",
  bio: "I build practical software applications and AI-powered solutions using modern web technologies and machine learning.",
  aboutText: "I'm a Computer Science graduate with a B.Tech degree and a CGPA of 8.47/10. I enjoy developing full-stack applications and exploring Artificial Intelligence, Machine Learning, and Natural Language Processing. I focus on building useful, user-friendly applications that solve real-world problems.",

  email: "aarzoo.coder@gmail.com",
  github: "https://github.com/AARZOO00",
  linkedin: "https://linkedin.com/in/aarzoo00/",
  telegram: "https://t.me/aarzoo00",
  instagram: "https://instagram.com/aarzoo.dev",
  resumePath: "/resume.pdf",
  profileImage: "/images/aarzoo-hero-portrait.png",
  portraitCutout: "/images/aarzoo-hero-portrait.png",

  academic: {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    degreeShort: "B.Tech in CSE",
    graduation: "May 2026",
    cgpa: "8.47/10",
    college: "Maulana Azad National Urdu University | Hyderabad, India",
    collegePlaceholder: "[Your College / University Name] | [City, India]",
    timeline: "2022 – May 2026 | CGPA: 8.47/10",
    courseworkText: "Relevant Coursework: Python, Data Structures and Algorithms, Data Analytics, Artificial Intelligence, Machine Learning, Natural Language Processing.",
    coursework: [
      "Python",
      "Data Structures and Algorithms",
      "Data Analytics",
      "Artificial Intelligence",
      "Machine Learning",
      "Natural Language Processing"
    ]
  },

  interests: [
    "Software Development",
    "AI/ML, NLP",
    "Web Technologies"
  ]
};

export const skillCategories = [
  {
    id: "languages",
    name: "Programming Languages",
    skills: [
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "SQL", icon: "sql" }
    ]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    skills: [
      { name: "React", icon: "react" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" }
    ]
  },
  {
    id: "backend",
    name: "Backend and APIs",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "REST APIs", icon: "restapi" }
    ]
  },
  {
    id: "ai-nlp",
    name: "AI and NLP",
    skills: [
      { name: "NLP", icon: "nlp" },
      { name: "VADER", icon: "vader" },
      { name: "TextBlob", icon: "textblob" },
      { name: "Transformers", icon: "transformers" },
      { name: "OpenRouter", icon: "openrouter" }
    ]
  },
  {
    id: "tools",
    name: "Tools and Deployment",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Render", icon: "render" },
      { name: "Vercel", icon: "vercel" }
    ]
  }
];

export const projects = [
  {
    id: "whatsapp-sentiment",
    title: "WhatsApp Chat Sentiment Analyzer",
    description: "NLP-based application to analyze WhatsApp chat exports and identify message-level sentiment and emotions.",
    image: "/projects/whatsapp-sentiment.jpg",
    tags: ["Python", "FastAPI", "React", "NLP"],
    links: {
      github: "https://github.com/AARZOO00/whatsapp-sentiment-analyzer",
      live: "https://whatsapp-analytics-7gpztanlhdjxmgpa6p5dgp.streamlit.app/"
    },
    primaryButton: "live",
    swapButtons: false
  },
  {
    id: "ai-counsellor",
    title: "AI Counsellor",
    description: "A full-stack AI-powered application for guidance and university-related information.",
    image: "/projects/ai-counsellor.jpg",
    tags: ["React", "Node.js", "OpenRouter", "REST APIs"],
    links: {
      github: "https://github.com/AARZOO00/ai-study-abroad-counsellor",
      live: "https://ai-counsellor-pink.vercel.app/"
    },
    primaryButton: "live",
    swapButtons: true
  },
  {
    id: "mh-resilience-pro",
    title: "MH Resilience Pro – Mental Health Resilience Dashboard",
    description: "A dashboard to evaluate mental health resilience using social determinants of health and AI-driven insights.",
    image: "/projects/mh-resilience.jpg",
    tags: ["React", "JavaScript", "Data Visualization"],
    links: {
      github: "https://github.com/AARZOO00/mental-health-resilience-system",
      live: "https://mental-health-resilience-system.vercel.app/"
    },
    primaryButton: "live",
    swapButtons: false
  },
  {
    id: "voice-translator",
    title: "Real-Time Voice Translator",
    description: "Voice translation application with speech recognition, text translation, and audio output.",
    image: "/projects/voice-translator.jpg",
    tags: ["Python", "FastAPI", "SpeechRecognition"],
    links: {
      github: "https://github.com/AARZOO00/real-time-voice-translator",
      live: "https://github.com/AARZOO00"
    },
    primaryButton: "live",
    swapButtons: false
  }
];
