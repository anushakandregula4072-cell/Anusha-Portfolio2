import { Project, Skill, Experience, Education, Certification, PositionOfResponsibility, Achievement } from '../types';

export const personalInfo = {
    name: "Kandregula Anusha",
    title: "Aspiring Data Analyst & Civil Engineer",
    email: "kandregulaa.ug22.ce@nitp.ac.in",
    phone: "+91-7993342361",
    linkedin: "https://linkedin.com/in/anusha-kandregula",
    github: "https://github.com/KandregulaAnusha",
    resumeUrl: "/Kandregula_Anusha_Resume.pdf" // Placeholder for resume file
};

export const projects: Project[] = [
  {
    id: "customer-lifetime-value",
    title: "Customer Lifetime Value Prediction",
    category: "Machine Learning",
    shortDescription: "A regression model to predict Customer Lifetime Value (CLV) using RFM features.",
    description: "Developed a regression-based CLV prediction model using engineered Recency, Frequency, and Monetary (RFM) features. Trained and evaluated multiple models including Linear Regression, Random Forest, and XGBoost regressors. Achieved high predictive accuracy using metrics like MAE, RMSE, and R² to inform customer retention strategies and optimize marketing spend.",
    technologies: ["Python", "Pandas", "Numpy", "Scikit-learn", "XGBoost"],
    imageUrl: "https://picsum.photos/seed/clv/800/600",
    githubUrl: "https://github.com/KandregulaAnusha",
    myRole: "Lead Developer & Data Scientist"
  },
  {
    id: "customer-churn-analysis",
    title: "Customer Churn Analysis",
    category: "Data Visualization",
    shortDescription: "Interactive Power BI dashboards to analyze and predict customer churn.",
    description: "Performed comprehensive churn analysis using SQL to extract and integrate customer and transaction data from multiple tables. Developed interactive Power BI dashboards using DAX to calculate KPIs, track churn trends, and segment customer behavior. Identified key behavioral and demographic factors that drive churn to support data-driven retention strategies.",
    technologies: ["SQL", "PowerBI", "DAX"],
    imageUrl: "https://picsum.photos/seed/churn/800/600",
    githubUrl: "https://github.com/KandregulaAnusha",
    myRole: "Data Analyst & Dashboard Designer"
  },
  {
    id: "banking-customer-analysis",
    title: "Banking Customer Data Analysis",
    category: "Data Analysis",
    shortDescription: "Univariate and bivariate analysis of banking data to find patterns in financial holdings.",
    description: "Applied univariate and bivariate analysis to a large banking dataset. Generated histograms to visualize distributions and a correlation heatmap to find patterns in financial holdings. The insights helped in understanding customer profiles and potential areas for cross-selling financial products.",
    technologies: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
    imageUrl: "https://picsum.photos/seed/banking/800/600",
    githubUrl: "https://github.com/KandregulaAnusha",
    myRole: "Data Analyst"
  },
  {
    id: "retail-sales-analysis",
    title: "Retail Sales Analysis",
    category: "Business Intelligence",
    shortDescription: "An Excel-based project to enhance sales by analyzing trends and deriving insights.",
    description: "Developed an Excel-based sales enhancement project by creating calculated columns and building Pivot Tables. Summarized sales by different categories and visualized data with charts for trend analysis, deriving actionable insights and strategic decisions to boost sales performance.",
    technologies: ["MS Excel", "Pivot Tables", "Data Visualization"],
    imageUrl: "https://picsum.photos/seed/retail/800/600",
    githubUrl: "https://github.com/KandregulaAnusha",
    myRole: "Project Lead & Analyst"
  }
];

export const skills: Skill[] = [
    { name: "MS Excel", category: "Technical" },
    { name: "SQL", category: "Technical" },
    { name: "Python", category: "Technical" },
    { name: "Pandas & Numpy", category: "Technical" },
    { name: "PowerBI", category: "Technical" },
    { name: "Machine Learning", category: "Technical" },
    { name: "AI Tools", category: "Technical" },
    { name: "Langchain", category: "Technical" },
    { name: "Autocad", category: "Technical" },
    { name: "Revit", category: "Technical" },
    { name: "Communication", category: "Soft" },
    { name: "Team Work", category: "Soft" },
    { name: "Leadership", category: "Soft" },
    { name: "Time Management", category: "Soft" },
    { name: "Adaptability", category: "Soft" },
    { name: "Public Speaking", category: "Soft" },
];

export const experiences: Experience[] = [
    {
        title: "Tata GenAI Data Analytics",
        company: "Virtual Experience",
        date: "May 2025",
        description: "Analyzed customer data to identify key business trends. Utilized GenAI for risk profiling, delinquency prediction, and designed a data-driven collections strategy and business report."
    },
    {
        title: "Investment Banking Virtual Experience",
        company: "Bank of America",
        date: "July 2025",
        description: "Completed an advanced virtual investment banking program focused on the analyst workflow, gaining practical experience in financial statement analysis, SWOT analysis, financial modeling, and valuation."
    },
    {
        title: "Sponsored Content Branding & Design",
        company: "Forage",
        date: "Aug 2025",
        description: "Practiced end-to-end content creation, from brand strategy and design to digital marketing, community building, and strengthening brand loyalty."
    }
];

export const positionsOfResponsibility: PositionOfResponsibility[] = [
    {
        title: "Senior Executive Member",
        organization: "Science and Environmental club, NITP",
        year: "2024-25"
    },
    {
        title: "Event Head",
        organization: "Sahyog, NITP",
        year: "11/2024"
    }
];

export const education: Education[] = [
    {
        degree: "Civil Engineering",
        institution: "National Institute of Technology, Patna",
        year: "2022-2026",
        grade: "8.8 CGPA"
    },
    {
        degree: "Intermediate",
        institution: "Tirumala Junior College, Andhra Pradesh",
        year: "2020-2022",
        grade: "97 Percentage"
    },
    {
        degree: "Secondary School",
        institution: "Sri Chaitanya Techno School, Andhra Pradesh",
        year: "2020",
        grade: "96 Percentage"
    }
];

export const certifications: Certification[] = [
    { name: "Core Employability Skills", issuer: "Foundation of future Excellence(FFE)", year: "2023" },
    { name: "Specialization training of data analytics", issuer: "Certified", year: "2024" },
    { name: "Python for Data Analysis : Pandas and Numpy", issuer: "Certified", year: "2025" },
    { name: "Outstanding Mentee in the FY program", issuer: "Awardee Certification from FFE", year: "2025" },
];

export const achievements: Achievement[] = [
    {
        description: "Selected as Business development intern in Edustation.",
        year: "2025"
    },
    {
        description: "Selected as Summer Reasearch Intern in IIT Tirupati.",
        year: "2025"
    }
];

export const problemSolving = {
    description: "Solved 100+ SQL Queries on LeetCode and w3Schools addressing various data analysis challenges.",
    years: "2024-25"
};
