// This file contains static work experience data

export const experiences_data = [
  {
    id: 1,
    company: "Stripe",
    location: "Seattle, WA",
    date: "Jun 2025 — Present",
    role: "Software Engineer - Core Infrastructure",
    description: [
      "Led incident remediation that reduced destructive cloud-infrastructure incidents by 50% by surfacing Terraform summaries on every GitHub PR at Stripe, enabling early detection of unsafe changes and preventing rollbacks",
      "Designed and developed a company-wide Terraform deployment framework used by 3,500 engineers that groups roots into packages and runs autodeploys with health checks estimated to save 60 engineering hours per week",
      "Orchestrated migration of all 9,000 Terraform roots across Stripe into the new autodeploy system",
    ],
  },
  {
    id: 2,
    company: "Capital One",
    location: "McLean, VA",
    date: "Jun 2024 — Aug 2024",
    role: "Software Engineer Intern - Back-end",
    description: [
      "Optimized build efficiency by 75% (from 1 hour to 15 mins) by parallelizing a sequentially running application with AWS Lambda and SQS, utilizing multi-threading techniques to distribute tasks across multiple threads",
      "Reduced infrastructure costs by 15% ($12K monthly) by architecting migration from AWS EC2 Docker containers to AWS Fargate, eliminating idle compute time and enabling auto-scaling for 8 microservices",
    ],
  },
  {
    id: 3,
    company: "University of Michigan College of Engineering",
    location: "Ann Arbor, MI",
    date: "Aug 2023 — May 2024",
    role: "Teaching Assistant - Computer Architecture",
    description: [
      "Led weekly labs for 30 students on computer architecture topics like ARM assembly, pipelining, virtual memory and caching, while also providing office hours and managing the course website for a class of 600+ students",
    ],
  },
  {
    id: 4,
    company: "General Motors Financial",
    location: "Detroit, MI",
    date: "May 2023 — Aug 2023",
    role: "Software Developer Intern - ETL & Data Integration",
    description: [
      "Developed and launched 5 end-to-end ETL workflows in an agile setting using IBM Datastage and Oracle SQL, integrating data warehousing principles to process over 1 million records for Business Intelligence analytics",
      "Spearheaded Databricks projects using Python scripting to transform, export data into XML, and automate XML-to-CSV conversions, enhancing data exchange efficiency by 25% and saving 15+ hours a week",
    ],
  },
  {
    id: 5,
    company: "nSpire.ai",
    location: "San Francisco, CA",
    date: "May 2022 — Apr 2023",
    role: "Software Engineer Intern - Machine Learning & Back-end",
    description: [
      "Implemented and integrated 5+ key product features including Text Summarization, Key-word Tagging and Face Emotion Recognition into the Django back-end infrastructure, enhancing product capabilities",
      "Contributed to the design and population of the 7-stage data analytics pipeline with Amazon Redshift and AWS Lambda enabling detailed monitoring of user metadata and interactions",
    ],
  },
];
