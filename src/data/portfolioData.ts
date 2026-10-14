export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  tagline: string;
  image: string;
  responsibilities: string[];
  keyHighlights: string[];
  skillsUsed: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  board: string;
  location: string;
  details: string;
}

export interface LanguageItem {
  name: string;
  fluency: string;
  usage: string;
}

export const portfolioData = {
  name: "Peddolla Karthik",
  title: "Sales Executive & Sales Representative",
  phone: "7673930347",
  formattedPhone: "+91 76739 30347",
  email: "peddollakarthik1@gmail.com",
  location: "Amrad, Nizamabad, Telangana",
  pinCode: "503003",
  whatsappUrl: "https://wa.me/917673930347?text=Hello%20Karthik%2C%20I%20reviewed%20your%20sales%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20job%20opportunity.",
  
  careerObjective:
    "To obtain a challenging position in a reputable organization where I can utilize my skills, expand my knowledge, and contribute to organizational growth while developing my career.",
  
  summary:
    "Target-driven and customer-focused Sales Professional with proven hands-on experience in retail electronics and logistics client services. Adept at customer relationship building, persuasive product demonstrations, aggressive lead generation, and consistently exceeding sales targets. Fluent in Telugu, Hindi, and English.",

  stats: [
    { label: "Target Achievement", value: "100%", detail: "Consistent monthly quota delivery" },
    { label: "Customer Relations", value: "500+", detail: "Satisfied buyers & clients served" },
    { label: "Key Languages", value: "3", detail: "Telugu, Hindi & English" },
    { label: "Retail & Field Sales", value: "Hands-on", detail: "Big C Mobiles & Go Express" },
  ],

  experiences: [
    {
      id: "go-express",
      role: "Sales Representative",
      company: "Go Express",
      location: "Nizamabad, Telangana",
      period: "Prior Experience",
      type: "Full-Time",
      tagline: "Logistics, Courier Services & Client Relationship Management",
      image: "/src/assets/images/sales_logistics_goexpress_1791905922445.jpg",
      responsibilities: [
        "Handled customer inquiries and assisted with services, ensuring prompt issue resolution and service delivery.",
        "Generated leads and followed up with potential customers to achieve sales targets across express distribution routes.",
        "Maintained positive customer relationships and provided timely support to drive repeat business and client retention."
      ],
      keyHighlights: [
        "Proactively converted walk-in and phone inquiries into long-term logistics accounts.",
        "Systematically followed up on pending dispatches and customer feedback to ensure high service satisfaction.",
        "Collaborated with dispatch teams to guarantee transparent tracking updates for high-value shipments."
      ],
      skillsUsed: ["Lead Generation", "Client Follow-ups", "Customer Service", "Service Sales", "Documentation"]
    },
    {
      id: "big-c",
      role: "Sales Executive",
      company: "Big C Mobiles",
      location: "Nizamabad, Telangana",
      period: "Prior Experience",
      type: "Full-Time",
      tagline: "Smart Devices, Electronics Retail & Value-Added Services",
      image: "/src/assets/images/sales_retail_bigc_1791905921204.jpg",
      responsibilities: [
        "Assisted customers in selecting mobile phones and accessories based on their personal budget and specific usage needs.",
        "Explained complex product features, technical specifications, promotional offers, and flexible pricing options clearly.",
        "Achieved daily and monthly sales targets through effective product promotion, consultative selling, and upselling."
      ],
      keyHighlights: [
        "Recognized for top-tier upselling of high-margin mobile accessories, extended warranties, and screen guards.",
        "Conducted engaging live smartphone demonstrations highlighting camera quality, processor speed, and battery longevity.",
        "Managed counter billing, customer invoicing, EMI finance coordination, and stock replenishment."
      ],
      skillsUsed: ["Product Demonstration", "Upselling & Cross-Selling", "Target Achievement", "Retail Billing", "Customer Rapport"]
    }
  ] as ExperienceItem[],

  skillCategories: [
    {
      title: "Direct Sales & Revenue Growth",
      description: "Proven capacity to prospect, pitch, negotiate, and close deals while meeting assigned targets.",
      skills: [
        { name: "Sales & Lead Generation", level: "Advanced", description: "Identifying prospective buyers, qualifying requirements, and driving conversions." },
        { name: "Achieving Sales Targets", level: "Core Strength", description: "Disciplined daily pipeline management to consistently hit monthly revenue goals." },
        { name: "Upselling & Cross-Selling", level: "Advanced", description: "Maximizing basket value with accessories, warranties, and premium upgrade paths." }
      ]
    },
    {
      title: "Customer Engagement & Demonstration",
      description: "Delivering empathetic, trustworthy customer interactions that build enduring loyalty.",
      skills: [
        { name: "Product Demonstration", level: "Advanced", description: "Simplifying technical specifications into tangible benefits tailored to the buyer." },
        { name: "Customer Service & Retention", level: "Expert", description: "Attentive listening, active problem-solving, and pleasant post-purchase support." },
        { name: "Client Follow-ups", level: "Advanced", description: "Structured outreach to warm leads, tracking inquiries, and closing open opportunities." }
      ]
    },
    {
      title: "Operations & Transaction Management",
      description: "Ensuring smooth transactional workflows, accurate documentation, and administrative precision.",
      skills: [
        { name: "Billing & Documentation", level: "Proficient", description: "Managing POS counters, generating tax invoices, and organizing warranty records." },
        { name: "Payment & EMI Assistance", level: "Proficient", description: "Guiding customers through card transactions, digital UPI payments, and finance approvals." },
        { name: "Inventory & Display Coordination", level: "Proficient", description: "Maintaining pristine showroom displays and monitoring stock availability." }
      ]
    }
  ] as SkillCategory[],

  languages: [
    {
      name: "Telugu",
      fluency: "Native / Mother Tongue",
      usage: "Fluent spoken and written communication with local customers across Telangana and Andhra Pradesh."
    },
    {
      name: "Hindi",
      fluency: "Professional Working Proficiency",
      usage: "Comfortable communicating with diverse pan-Indian customers, vendors, and business representatives."
    },
    {
      name: "English",
      fluency: "Professional Working Proficiency",
      usage: "Proficient in technical specifications reading, documentation, billing systems, and business communication."
    }
  ] as LanguageItem[],

  education: [
    {
      degree: "Board of Intermediate Education",
      institution: "Junior College",
      board: "Telangana State Board of Intermediate Education (TSBIE)",
      location: "Nizamabad, Telangana",
      details: "Completed Higher Secondary Intermediate course with focus on foundational academics, discipline, and analytical problem-solving."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "High School",
      board: "Board of Secondary Education, Telangana",
      location: "Nizamabad, Telangana",
      details: "Successfully passed 10th standard examinations with a well-rounded academic foundation."
    }
  ] as EducationItem[],

  personalStrengths: [
    "High Energy & Motivated Work Ethic",
    "Persuasive Verbal Communication",
    "Customer-Centric Problem Resolution",
    "Fast Learner with Rapid Product Adaptation",
    "Punctual, Reliable & Target Committed"
  ]
};
