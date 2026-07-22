export const profile = {
  name: "Paras Kaushik",
  role: "AI Engineer",
  tagline: "Computer Vision · LLM · RAG · VLM Fine-tuning",
  email: "paraskaushik862@gmail.com",
  phone: "+91 9215460007",
  linkedin: "https://www.linkedin.com/in/paraskaushik07",
  linkedinLabel: "linkedin.com/in/paraskaushik07",
  location: "Mohali, India · UTC+5:30",
  resumeUrl: "/Paras-Kaushik-Resume.pdf",
  summary:
    "AI Engineer with production-grade expertise in Computer Vision, LLM/VLM fine-tuning, and RAG systems. Architect of GradeSmith, a national-scale AI grading platform, and co-founder of Flashr, an AI-native EdTech product for competitive exam preparation. Deep experience in handwritten OCR, agentic AI orchestration, GPU-efficient deployment, and multimodal model fine-tuning.",
};

export const heroStats = [
  { value: "3L+", label: "answer sheets evaluated" },
  { value: "97.5%", label: "OCR accuracy achieved" },
  { value: "80%", label: "inference cost reduced" },
  { value: "70%", label: "manual HR work reduced" },
];

export const flashrBadge = {
  label: "CURRENTLY BUILDING",
  title: "Flashr",
  copy: "Co-founding an AI-native study platform for UPSC, GATE, CAT, NEET & JEE.",
  href: "https://flashrapp.in",
};

export const skillGroups = [
  {
    title: "Models & learning",
    tags: ["LLMs & VLMs", "SFT / RFT / GRPO", "PyTorch", "TensorFlow", "Hugging Face", "vLLM", "Sentence Transformers"],
  },
  {
    title: "Vision & documents",
    tags: ["Computer Vision", "OCR", "Layout Parsing", "YOLO", "OpenCV", "Handwriting AI", "NLP"],
  },
  {
    title: "Agents & voice",
    tags: ["RAG", "Agentic AI", "Tool Calling", "LangChain", "LlamaIndex", "FAISS", "STT / TTS", "Pipecat"],
  },
  {
    title: "Deployment & APIs",
    tags: ["FastAPI", "Docker", "AWS", "GCP", "RunPod (GPU)", "Vast.ai", "Streamlit", "CI/CD", "Cloudflare", "OpenAI", "Gemini", "IBM Watson"],
  },
];

export const experience = [
  {
    role: "AI Engineer",
    org: "Infutrix",
    meta: "Jun 2025 - Present · Mohali, India",
    bullets: [
      "Architected GradeSmith, an end-to-end OCR grading pipeline processing 3L+ answer sheets across 20+ subjects, deployed across large universities and schools in India.",
      "Fine-tuned Qwen-VL for handwritten answer mapping and semantic extraction, and YOLO for cutting/strikethrough detection to identify invalidated content - reaching 97.5% OCR accuracy while cutting per-sheet inference cost by 80%.",
      "Engineered agentic multi-step LLM reasoning pipelines for subjective evaluation and automated rubric-scoring workflows adaptable across academic institutions.",
      "Built Hirefl.ai, an AI-driven recruitment platform with LLaMA-based resume parsing, real-time STT/TTS voice interviews, and automated scoring - cutting HR workload by 70%.",
    ],
  },
  {
    role: "AI & Cloud Computing Intern",
    org: "AICTE Edunet Foundation",
    meta: "Jul 2024 - Aug 2024 · Remote, India",
    bullets: [
      "Built a production-deployed conversational AI chatbot on IBM Watson Assistant with intent classification and entity recognition, running on scalable IBM Cloud infrastructure.",
    ],
  },
  {
    role: "Data Analyst Intern",
    org: "Dataplay",
    meta: "Jun 2024 - Jul 2024 · Remote, India",
    bullets: [
      "Developed interactive Power BI dashboards delivering actionable business insights, and led a cross-functional project team driving data-informed decisions for key stakeholders.",
    ],
  },
];

export const projects = [
  {
    title: "Flashr - AI-native exam prep",
    badge: "Founder · QuietGradient",
    copy: "An AI retention platform for India's competitive exams. Converts PDFs, screenshots, and handwritten notes into flashcards and MCQs via fine-tuned LLMs, schedules revision with SM-2, and adds live learning through a multiplayer Duel Arena.",
    metric: "Shipped across web and Google Play",
    tags: ["React Native", "Supabase", "Gemini", "OCR", "SM-2"],
    links: [
      ["flashrapp.in", "https://flashrapp.in"],
      ["Google Play", "https://play.google.com/store/apps/details?id=com.den.flashr"],
      ["QuietGradient", "https://quietgradient.com"],
    ],
    featured: true,
  },
  {
    title: "GradeSmith - institutional grading AI",
    badge: "Infutrix",
    copy: "A multimodal grading pipeline for handwritten university answer sheets: Qwen-VL fine-tuning for answer mapping, YOLO-based strikethrough detection, rubric-aware agentic reasoning, and confidence-controlled evaluation.",
    metric: "3L+ sheets evaluated · 97.5% OCR accuracy · 80% lower cost",
    tags: ["Qwen-VL", "YOLO", "VLM fine-tuning", "Agentic evaluation"],
  },
  {
    title: "Hirefl.ai - hiring intelligence",
    badge: "AI automation",
    copy: "An end-to-end hiring workflow: LLaMA-based resume parsing and candidate screening, real-time voice interviews, automated scoring, and decision-ready reports for HR teams.",
    metric: "70% less repetitive HR workload",
    tags: ["LLaMA", "Voice AI", "STT / TTS", "FastAPI"],
  },
  {
    title: "KAIROS AI - multi-agent workspace",
    badge: "Independent build",
    copy: "A modular multi-agent AI platform: a fine-tuned conversational engine for multi-document Q&A, a real-time STT/TTS voice assistant (PRINCE), OCR document intelligence, multilingual translation, and automated QR workflows.",
    metric: "7+ AI capabilities unified · 40%+ faster workflows",
    tags: ["Multi-agent", "RAG", "Voice control", "Tool calling"],
  },
  {
    title: "Qwen-VL handwriting OCR",
    badge: "Research build",
    copy: "Fine-tuned Qwen-3-VL-8B on a custom-annotated handwriting dataset with an end-to-end data preparation and augmentation pipeline for noisy, real-world documents.",
    metric: "8% CER on real-world noisy handwriting",
    tags: ["Qwen-3-VL-8B", "Fine-tuning", "Dataset design", "OCR"],
  },
];

export const achievements = [
  {
    title: "AI Summit 2026, Delhi",
    copy: "Presented GradeSmith to 500+ industry professionals and academic leaders - recognized for innovation in AI-driven education assessment.",
  },
  {
    title: "Smart India Hackathon (SIH)",
    copy: "Proposed Track-VAHAN, an IoT-based vehicular accident detection and emergency alert system using GPS, GSM, and onboard sensors.",
  },
  {
    title: "Ideathon - 1st Place",
    copy: "Designed a Tongue Driven System (TDS) wheelchair; secured first place for innovation and technical excellence.",
  },
];

export const certifications = [
  "Deep Learning Specialization - Andrew Ng",
  "Machine Learning Specialization - Andrew Ng",
  "Google Data Analyst Professional Certificate",
  "Data Structures & Algorithms Specialization",
];

export const education = {
  degree: "B.Tech in Computer Science Engineering",
  school: "MAIT, Baddi",
  dates: "Jun 2021 - Jun 2025",
  cgpa: "9.23",
};

export const capabilityMatches = {
  documents: {
    label: "Document AI",
    title: "From noisy pages to defensible decisions",
    copy: "Handwriting OCR, layout understanding, fine-tuned VLMs, specialist CV gates, rubric reasoning, and confidence-led review.",
    proof: "GradeSmith · 3L+ sheets · 97.5% OCR accuracy · 80% cost reduction",
  },
  agents: {
    label: "Agents & Voice",
    title: "AI that can retrieve, reason, speak, and act",
    copy: "RAG, multi-agent orchestration, tool calling, realtime STT/TTS, browser and local-system control, and evaluation loops.",
    proof: "KAIROS · PRINCE · DoChat · Hirefl.ai",
  },
  product: {
    label: "AI Product",
    title: "A model is only the beginning",
    copy: "I connect AI quality to mobile UX, subscriptions, realtime data, analytics, infrastructure, and the product loops that create retention.",
    proof: "Flashr · Web + Android · founder ownership",
  },
};
