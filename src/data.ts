import { SubjectGroup, Feature, MethodologyStep, Stat, Testimonial, FAQItem } from "./types";

export const SUBJECT_GROUPS: SubjectGroup[] = [
  {
    title: "Secondary School Foundation",
    classes: "Classes 8 – 10 (CBSE)",
    subjects: [
      {
        id: "hindi",
        name: "Hindi (Course A & B)",
        description: "Comprehensive coverage of CBSE literature books (Kshitij, Kritika, Sparsh, Sanchayan), advanced Hindi vyakaran (grammar), letter writing, and essay writing skills.",
        topics: ["Literature & Poetry Analysis", "Hindi Vyakaran (Grammar)", "Creative & Formal Writing", "Reading Comprehension Mastery"]
      },
      {
        id: "sst_history",
        name: "SST: History (India and the Contemporary World)",
        description: "Transforming dense history chapters into engaging narratives. Special emphasize on chronological mind-mapping, identifying key event chains, and answering board questions.",
        topics: ["French & Russian Revolutions", "Nationalism in Europe & India", "Mind-mapping Timelines", "Source-based Case Study Analysis"]
      },
      {
        id: "sst_geography",
        name: "SST: Geography (Contemporary India)",
        description: "Visual approach to spatial geography, physical attributes of India, resource distribution, and rigorous map pointing exercises required to secure full Marks in Section B.",
        topics: ["Resource & Development", "Climate, Wildlife & Vegetation", "Agriculture & Mineral Distribution", "CBSE Map Work Practice (Damp, Soil, Rivers)"]
      },
      {
        id: "sst_civics",
        name: "SST: Democratic Politics (Civics)",
        description: "Conceptual understanding of institutional systems, constitution-making, federalism, gender dynamics, and political rights with real-world examples.",
        topics: ["Power Sharing & Federalism", "Gender, Religion & Caste", "Political Parties & Electoral Politics", "Outcomes of Democracy Analysis"]
      },
      {
        id: "sst_economics",
        name: "SST: Understanding Economic Development",
        description: "Foundational economic terms simplified, exploring sectors of the Indian economy, money and credit, and globalization impacts with custom sample question guides.",
        topics: ["Sectors of Indian Economy", "Money, Credit & Banking", "Globalization & Consumer Rights", "Key Statistical & Logical Concepts"]
      }
    ]
  },
  {
    title: "Senior Secondary Mastery",
    classes: "Classes 11 – 12 (CBSE - Humanities)",
    subjects: [
      {
        id: "humanities_history",
        name: "History (Themes in World/Indian History)",
        description: "Highly rigorous exploration of historical archives, early empires, social structures, and colonial records. Focus on structuring detailed essay-type responses (8-Markers).",
        topics: ["Early Empires & Civilizations", "Medieval Society & Bhakti Sufi Traditions", "Colonialism, Partition & Constitution", "Source-Based Passage Writing Checks"]
      },
      {
        id: "humanities_geography",
        name: "Geography (Fundamentals & India People)",
        description: "Deep study of human geography, global demographic trends, settlement patterns, transport systems, and Indian resources. Practical map and graph data instruction.",
        topics: ["Human Geography Foundations", "World and India Population Trends", "Economic Activities & Trade Networks", "Comprehensive Secondary Map Books"]
      },
      {
        id: "humanities_polscience",
        name: "Political Science (World & Indian Politics)",
        description: "Detailed breakdown of global power structure change post-Cold War and democratic politics in India since independence. Mastery over regional aspirations and state-building.",
        topics: ["Contemporary World Politics", "India Since Independence Politics", "UN & Global Organizations", "Cartoons, Flags & Map-based Questions"]
      }
    ]
  }
];

export const KEY_FEATURES: (Feature & { iconName: string })[] = [
  {
    iconName: "Award",
    title: "25+ Years of Proven Excellence",
    description: "Undeterred academic leadership with deep familiarization of CBSE curriculum changes, evaluation keys, and topper answer-sheets over the last two decades."
  },
  {
    iconName: "Users",
    title: "Strictly Small Batch Sizes (10-15)",
    description: "Every class has a controlled strength. This ensures no student is overlooked or lost in a crowd, enabling individual tracking and custom speed parameters."
  },
  {
    iconName: "Target",
    title: "Personalized Academic Focus",
    description: "Custom strategies designed around each student's strong and weak points. Whether they struggle with complex concepts or just need push for 100% scores."
  },
  {
    iconName: "ClipboardCheck",
    title: "Weekly Assessments & Feedback",
    description: "No cramming before exams. Regular, small chapter-wise assessments track retention and test immediate clarity of concepts under standard time limits."
  },
  {
    iconName: "FileCheck",
    title: "CBSE Board Paper Preparation",
    description: "Specialized focus on high-yield and previous years' question papers. Solving standard sample documents and model answers matching exact CBSE marking schemes."
  },
  {
    iconName: "MessageCircleCode",
    title: "Dedicated Doubt Solving Sessions",
    description: "Post-class dedicated times to clear concept doubts. We ensure no student returns home with unresolved academic queries, establishing fundamental clarity."
  },
  {
    iconName: "BellRing",
    title: "Regular Parent Progress Updates",
    description: "Regular communication with parents regarding test scores, class attendance, and emotional stress management leading up to board examinations."
  },
  {
    iconName: "Edit3",
    title: "Answer-Writing Skill Mastery",
    description: "Humanities & Languages require structured presentation. We teach exact point-wise writing, introduction setups, highlighting keywords, and conclusion drafting."
  },
  {
    iconName: "Network",
    title: "Bilingual English & Hindi Medium",
    description: "Classes are conducted gracefully in English and/or Hindi, matching the student's comfortable medium of understanding and writing."
  },
  {
    iconName: "BookOpen",
    title: "Comprehensive Study Material",
    description: "Handcrafted summaries, structured high-yield bullet point notes, and custom map sheets designed by Anju Ma'am specifically for easy revision."
  }
];

export const METHOD_SEQUENCE: MethodologyStep[] = [
  {
    stepNumber: 1,
    title: "Core Concept Learning",
    description: "Breaking complex historical events or geographical phenomenons into simple stories and logic-driven modules."
  },
  {
    stepNumber: 2,
    title: "Interactive Classroom Discussion",
    description: "Encouraging active questions and open debates to promote logical thinking and ensure long-term topic recall."
  },
  {
    stepNumber: 3,
    title: "Point-wise Practice Questions",
    description: "Structuring textbook and reference questions into clear points immediately to lock down the core material."
  },
  {
    stepNumber: 4,
    title: "Weekly Micro Exercises",
    description: "Simulating brief classroom assessments to cross-verify weekly retention without high pressure on the young mind."
  },
  {
    stepNumber: 5,
    title: "Doubt Resolution Loops",
    description: "One-on-one reviews of completed answer sheets, finding common structural errors and rewriting weak answers."
  },
  {
    stepNumber: 6,
    title: "Structured Revision Series",
    description: "Fast-track review charts, map-work drills, and objective quiz matches for quick memory retrieval."
  },
  {
    stepNumber: 7,
    title: "Unsolved Mock Exams",
    description: "Conducting full-syllabus assessments adhering strictly to 3-hour exam schedules under actual board exam atmospheres."
  },
  {
    stepNumber: 8,
    title: "Board Exam Perfection",
    description: "Fine-tuning answer presentation, time management strategies, and bullet highlighting that exam examiners look for."
  }
];

export const STATS: Stat[] = [
  {
    value: "25+",
    numericValue: 25,
    suffix: "+",
    label: "Years Experience",
    subtext: "Mentoring children since 2001"
  },
  {
    value: "1500+",
    numericValue: 1500,
    suffix: "+",
    label: "Students Mentored",
    subtext: "Guiding careers and academic success"
  },
  {
    value: "95%",
    numericValue: 95,
    suffix: "%",
    label: "Topper Base Scores",
    subtext: "Consistent 95%+ marks secured in CBSE board exams"
  },
  {
    value: "100%",
    numericValue: 100,
    suffix: "%",
    label: "Parent Advisory Trust",
    subtext: "Personal referral-driven batch fill-ups"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    studentName: "Aarav Sharma",
    parentName: "Rajesh Sharma",
    className: "Class 10 CBSE",
    subjectInfo: "SST & Hindi",
    scoreOrResult: "98% in Social Science",
    feedback: "Anju Ma'am converted Social Science, which used to be my most boring subject, into my absolute favorite. Her interactive storytelling format for history made me remember dates and sequences naturally. The point-wise answer writing tips she shared were exactly why I managed to score 98% in my board exams!"
  },
  {
    id: "testi-2",
    studentName: "Ananya Iyer",
    parentName: "Meenakshi Iyer",
    className: "Class 12 CBSE (Humanities)",
    subjectInfo: "Political Science & Geography",
    scoreOrResult: "99% in Political Science",
    feedback: "I am extremely grateful to Anju Ma'am for her rigorous map-pointing drills and detailed 8-mark feedback sheets. Drawing timelines and keeping structured subheadings became second nature to me under her vigilant eye. She's not just a teacher; she is an inspiring mentor."
  },
  {
    id: "testi-3",
    studentName: "Kabir Malhotra",
    parentName: "Sanjay Malhotra",
    className: "Class 10 CBSE",
    subjectInfo: "Complete Social Science (SST)",
    scoreOrResult: "Marks Jumped from 62% to 94%",
    feedback: "Before joining Anju Ma'am's tuition center, Kabir was extremely anxious about SST and would struggle to write detailed answers. Ma'am identified his hesitation and personally worked on his speed, answer framing, and structure. His scores vaulted beyond belief!"
  },
  {
    id: "testi-4",
    studentName: "Priyanjali Sen",
    parentName: "Dr. Arundhati Sen",
    className: "Class 12 CBSE (Humanities)",
    subjectInfo: "History, Geo & Pol Science",
    scoreOrResult: "Class 12 Humanities School Topper",
    feedback: "The level of depth in Anju Ma'am's notes is matchless. She references real CBSE evaluation keys to point out exactly what examiners are looking for. Her small batches allowed her to check each of my answers and mock-exams with personal care. High recommendation to all parents!"
  },
  {
    id: "testi-5",
    studentName: "Rohan Varma",
    parentName: "Siddharth Varma",
    className: "Class 9 CBSE",
    subjectInfo: "Hindi, Social Science",
    scoreOrResult: "Consistently Top of Section",
    feedback: "Anju Ma'am's emphasis on neatness, structured points, and vocabulary in Hindi has elevated Rohan's writing confidence. The constant assessments and updates she sends keeps us in close loop with his day-to-day progress. Extremely satisfying experience!"
  },
  {
    id: "testi-6",
    studentName: "Drishti Kapoor",
    parentName: "Namrata Kapoor",
    className: "Class 10 CBSE",
    subjectInfo: "Hindi & SST",
    scoreOrResult: "96% in Hindi, 97% in SST",
    feedback: "My daughter was quite weak in grammar and struggled to write long-form questions, but Ma'am designed short, memorable guidelines and flowcharts. The weekly mocks helped her overcome exam-hall stage fright completely. Truly an exceptional teacher!"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Which classes do you teach?",
    answer: "We support Classes 8 to 10 for SST (Social Science) and Hindi, as well as Classes 11 and 12 for Humanities/Arts tracks (History, Geography, Political Science, and and related topics)."
  },
  {
    question: "Which subjects do you teach in detail?",
    answer: "For Classes 8–10: Hindi, History, Geography, Civics, and Economics (Complete Social Science/SST). For Classes 11–12: History, Geography, Political Science, and Humanities curriculum tracks."
  },
  {
    question: "Are classes conducted offline or online?",
    answer: "All classes are strictly held offline at our safe, dedicated tuition study center. Experience shows that in-person learning, classroom whiteboard discussions, physical feedback on paper, and face-to-face focus are irreplaceable for board preparation."
  },
  {
    question: "What is the typical batch size?",
    answer: "We strictly enforce a limit of 10 to 15 students per batch. This allows Anju Ma'am to visually monitor every student during lectures, check their notes, track attention span, and provide true personalized feedback."
  },
  {
    question: "Are regular tests and assessments conducted?",
    answer: "Yes, absolutely. We conduct short topic-wise tests every weekend and complete monthly mock exams modeled directly on high-yield and previous year CBSE exam papers to track student retention and speed under typical timelines."
  },
  {
    question: "How can parents enroll their children?",
    answer: "You can send an inquiry using our online form, contact us directly via Phone/Call, or text us on WhatsApp. We will invite the student and parent for a brief 1-on-1 counseling session to evaluate academic targets and reserve a seat in the next batch."
  },
  {
    question: "Is comprehensive board exam preparation and sample work provided?",
    answer: "Yes! Special CBSE-oriented sessions form our core pillar. We solve previous 10 years' questions, sample blueprints, master map tracing templates, and evaluate writing copies against actual board answer books to secure maximum score performance."
  },
  {
    question: "Are classes available in both English and Hindi?",
    answer: "Yes, classes are delivered bilingually. Lectures use intuitive explanations, and study cards/classroom instructions support whichever medium the student’s board registration matches (English medium or Hindi medium)."
  }
];

export const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1186719119316!2d75.7656755!3d26.904439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db43bde88eb67%3A0xe726df9f086b96e2!2sD-102%2C%20Siddharth%20Path%2C%20Shyam%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302019!5e0!3m2!1sen!2sin!4v1703624381001!5m2!1sen!2sin";
export const DIRECT_DIAL_PHONE = "+919811446304"; // Actual premium contact, clear and distinct
export const WHATSAPP_CONTACT_LINK = "https://wa.me/919811446304?text=Hello%20Anju%20Ma'am,%20I%20am%20interested%20in%20enrolling%20my%20child%20for%20your%20CBSE%20tuition%20classes.%20Please%20share%20the%20available%20batch%20timings.";
export const GOOGLE_MAPS_LOCATION_URL = "https://maps.app.goo.gl/AyA3DPig2kJFAQK86";
