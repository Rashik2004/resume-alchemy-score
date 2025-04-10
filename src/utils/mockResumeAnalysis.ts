
import { ResumeMistake, ImprovementArea } from '@/types/resumeTypes';

export const generateMockScore = (): number => {
  return Math.floor(Math.random() * 30) + 55; // Score between 55-85
};

export const generateMockImprovementAreas = (): ImprovementArea[] => {
  return [
    {
      id: '1',
      category: 'Format',
      title: 'Resume Format Issues',
      description: 'Your resume may have formatting issues that could affect ATS parsing.',
      importance: 'high',
      suggestions: [
        'Use a single-column layout for better ATS compatibility',
        'Remove tables, headers, and footers',
        'Avoid using text boxes and complicated designs'
      ]
    },
    {
      id: '2',
      category: 'Keywords',
      title: 'Missing Industry Keywords',
      description: 'Your resume is missing key terms that ATS systems look for.',
      importance: 'high',
      suggestions: [
        'Include relevant keywords from the job description',
        'Add industry-specific terminology',
        'Mention specific tools and technologies you\'ve used'
      ]
    },
    {
      id: '3',
      category: 'Structure',
      title: 'Section Headings',
      description: 'Some standard section headings appear to be missing or non-standard.',
      importance: 'medium',
      suggestions: [
        'Use standard section headers like "Work Experience," "Education," and "Skills"',
        'Ensure clear separation between sections',
        'Maintain consistent formatting across sections'
      ]
    },
    {
      id: '4',
      category: 'Content',
      title: 'Quantifiable Achievements',
      description: 'Your resume lacks quantifiable achievements and results.',
      importance: 'medium',
      suggestions: [
        'Add metrics to showcase your impact (e.g., "increased sales by 20%")',
        'Quantify team size, project scope, or budget when relevant',
        'Include specific outcomes of your work'
      ]
    },
    {
      id: '5',
      category: 'Contact',
      title: 'Contact Information',
      description: 'Your contact information may be incomplete or formatted incorrectly.',
      importance: 'low',
      suggestions: [
        'Ensure your name, phone, email, and LinkedIn are at the top of the resume',
        'Use a professional email address',
        'Remove unnecessary contact details like full address'
      ]
    }
  ];
};

export const generateMockMistakes = (): ResumeMistake[] => {
  return [
    {
      id: 'm1',
      section: 'Work Experience',
      title: 'Missing Quantifiable Results',
      originalText: 'Managed a team responsible for developing new features for the company\'s main product.',
      improvedText: 'Led a team of 5 developers that increased product feature adoption by 35% through implementation of 3 major features over 6 months.',
      explanation: 'Adding specific numbers and metrics makes your achievements concrete and more impressive to both ATS systems and hiring managers.'
    },
    {
      id: 'm2',
      section: 'Skills Section',
      title: 'Generic Skills',
      originalText: 'Proficient in programming languages, communication, and problem-solving.',
      improvedText: 'Expert in Python, JavaScript, and Java with 5+ years experience. Advanced communication skills evidenced by 20+ client presentations. Solved complex data optimization problems reducing processing time by 40%.',
      explanation: 'Vague skills are filtered out by ATS. Specific technologies, years of experience, and concrete examples help your resume get past ATS filters.'
    },
    {
      id: 'm3',
      section: 'Job Description',
      title: 'Passive Language',
      originalText: 'Was responsible for the maintenance of the database systems.',
      improvedText: 'Maintained and optimized PostgreSQL databases resulting in 25% faster query performance and 99.9% uptime.',
      explanation: 'Start with strong action verbs and include specific technologies and measurable results to make your experience stand out to ATS systems.'
    }
  ];
};

export const extractTextFromResume = (file: File): Promise<string> => {
  // This is a placeholder for the actual text extraction process
  // In a real application, we would send the file to a server endpoint
  return new Promise((resolve) => {
    setTimeout(() => {
      // Generate a simple placeholder text based on the file name
      const fileText = `
        John Doe
        Software Engineer
        
        WORK EXPERIENCE
        
        Senior Developer at Tech Company (2020-Present)
        - Led development of web applications using React and Node.js
        - Improved system performance by 40% through optimization
        - Mentored junior developers and conducted code reviews
        
        Software Engineer at Startup Inc. (2018-2020)
        - Developed and maintained front-end applications
        - Collaborated with design team on implementing UI/UX
        
        EDUCATION
        
        Bachelor of Science in Computer Science
        University of Technology (2014-2018)
        
        SKILLS
        
        Programming: JavaScript, TypeScript, Python, Java
        Frameworks: React, Node.js, Express
        Tools: Git, Docker, AWS
        
        CERTIFICATIONS
        
        AWS Certified Developer
        Google Cloud Professional Developer
      `;
      resolve(fileText);
    }, 1500);
  });
};
