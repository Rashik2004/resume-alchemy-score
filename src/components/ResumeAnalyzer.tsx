
import React, { useState } from 'react';
import FileUpload from '@/components/FileUpload';
import ResumeScore from '@/components/ResumeScore';
import ResumeImprovement from '@/components/ResumeImprovement';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { BarChart, Sparkles, ClipboardCheck, FileText } from 'lucide-react';

interface ResumeData {
  file: File;
  text: string;
  analyzed: boolean;
  score: number;
  improvementAreas: ImprovementArea[];
  resumeMistakes: ResumeMistake[];
}

export interface ImprovementArea {
  id: string;
  category: string;
  title: string;
  description: string;
  importance: 'high' | 'medium' | 'low';
  suggestions: string[];
}

export interface ResumeMistake {
  id: string;
  section: string;
  originalText: string;
  improvedText: string;
  explanation: string;
}

const ResumeAnalyzer: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [analysisLoading, setAnalysisLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('score');
  const { toast } = useToast();

  const handleFileUpload = (file: File, text: string) => {
    setResumeData({
      file,
      text,
      analyzed: false,
      score: 0,
      improvementAreas: [],
      resumeMistakes: []
    });
    
    // Start analysis automatically when file is uploaded
    analyzeResume(file, text);
  };

  const analyzeResume = async (file: File, text: string) => {
    setAnalysisLoading(true);
    
    try {
      // This would normally be an API call to a backend service
      // For now, we'll simulate analysis with a delay
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock analysis results
      const mockScore = Math.floor(Math.random() * 30) + 55; // Score between 55-85
      const mockImprovementAreas: ImprovementArea[] = [
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

      // Mock resume mistake specifics with original text and improved versions
      const mockResumeMistakes: ResumeMistake[] = [
        {
          id: '1',
          section: 'Work Experience',
          originalText: 'Responsible for leading development team',
          improvedText: 'Led a development team of 6 engineers, delivering 3 major product updates that increased user retention by 27%',
          explanation: 'Original text lacks specificity and measurable achievements. The improved version adds team size and quantifiable results.'
        },
        {
          id: '2',
          section: 'Skills',
          originalText: 'Proficient in coding',
          improvedText: 'Technical Skills: JavaScript, React, Node.js, TypeScript, AWS, CI/CD, MongoDB, PostgreSQL',
          explanation: 'Vague skill descriptions are often filtered out by ATS. Specific technologies and frameworks are more likely to match job description keywords.'
        },
        {
          id: '3',
          section: 'Education',
          originalText: 'Computer Science',
          improvedText: 'Bachelor of Science in Computer Science, University of Technology, GPA: 3.8/4.0',
          explanation: 'Including the full degree name, institution, and GPA provides more context and helps with ATS keyword matching.'
        },
        {
          id: '4',
          section: 'Project Experience',
          originalText: 'Worked on an e-commerce website',
          improvedText: 'E-Commerce Platform (React, Node.js, MongoDB): Architected and implemented a scalable online store processing 500+ daily transactions, reducing page load time by 40% through optimization techniques',
          explanation: 'Adding technologies used and specific achievements transforms a generic statement into an impressive accomplishment.'
        },
        {
          id: '5',
          section: 'Summary',
          originalText: 'Hardworking individual looking for opportunities',
          improvedText: 'Results-oriented Software Engineer with 5+ years of experience developing high-performance web applications. Specialized in React ecosystem and cloud architecture, with a track record of reducing infrastructure costs by 30% while improving application response times.',
          explanation: 'The improved summary highlights years of experience, specific expertise, and quantifiable achievements that immediately showcase value.'
        }
      ];
      
      setResumeData(prevData => {
        if (!prevData) return null;
        return {
          ...prevData,
          analyzed: true,
          score: mockScore,
          improvementAreas: mockImprovementAreas,
          resumeMistakes: mockResumeMistakes
        };
      });
      
      toast({
        title: "Analysis Complete",
        description: "We've analyzed your resume and found some opportunities for improvement.",
      });
      
      // Switch to the mistakes tab automatically to highlight the new feature
      setActiveTab('mistakes');
    } catch (error) {
      console.error("Error analyzing resume:", error);
      toast({
        title: "Analysis Error",
        description: "There was an error analyzing your resume. Please try again.",
        variant: "destructive"
      });
    } finally {
      setAnalysisLoading(false);
    }
  };

  const resetAnalysis = () => {
    setResumeData(null);
    setActiveTab('score');
  };

  return (
    <div className="w-full">
      {!resumeData && (
        <FileUpload onFileUpload={handleFileUpload} />
      )}
      
      {resumeData && (
        <div className="space-y-6">
          <Card className="p-4 resume-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-alchemy-100 p-2">
                  <ClipboardCheck className="h-5 w-5 text-alchemy-600" />
                </div>
                <div>
                  <h3 className="font-medium">{resumeData.file.name}</h3>
                  <p className="text-sm text-gray-500">
                    {(resumeData.file.size / 1024).toFixed(1)} KB · Uploaded {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
              <button 
                onClick={resetAnalysis}
                className="text-sm text-alchemy-600 hover:text-alchemy-800 hover:underline"
              >
                Upload a different resume
              </button>
            </div>
          </Card>
          
          {analysisLoading ? (
            <Card className="p-8 resume-card">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative">
                  <div className="h-20 w-20 rounded-full border-4 border-alchemy-100 border-t-alchemy-600 animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-alchemy-500 animate-pulse" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Analyzing your resume</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    We're examining format, keywords, structure, and more...
                  </p>
                </div>
              </div>
            </Card>
          ) : (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="score" className="flex items-center gap-2">
                  <BarChart className="h-4 w-4" /> ATS Score
                </TabsTrigger>
                <TabsTrigger value="improvements" className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" /> Improvements
                </TabsTrigger>
                <TabsTrigger value="mistakes" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" /> Specific Fixes
                </TabsTrigger>
              </TabsList>
              <TabsContent value="score" className="mt-4">
                <ResumeScore score={resumeData.score} />
              </TabsContent>
              <TabsContent value="improvements" className="mt-4">
                <ResumeImprovement improvementAreas={resumeData.improvementAreas} />
              </TabsContent>
              <TabsContent value="mistakes" className="mt-4">
                <ResumeMistakes mistakes={resumeData.resumeMistakes} />
              </TabsContent>
            </Tabs>
          )}
        </div>
      )}
    </div>
  );
};

export default ResumeAnalyzer;
