
import React, { useState } from 'react';
import FileUpload from '@/components/FileUpload';
import ResumeScore from '@/components/ResumeScore';
import ResumeImprovement from '@/components/ResumeImprovement';
import ResumeMistakes from '@/components/ResumeMistakes';
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
  mistakes: ResumeMistake[];
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
  title: string;
  originalText: string;
  improvedText: string;
  explanation: string;
}

const ResumeAnalyzer: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [analysisLoading, setAnalysisLoading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (file: File, text: string) => {
    setResumeData({
      file,
      text,
      analyzed: false,
      score: 0,
      improvementAreas: [],
      mistakes: []
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
      
      // Mock specific mistakes found in the resume
      const mockMistakes: ResumeMistake[] = [
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
      
      setResumeData(prevData => {
        if (!prevData) return null;
        return {
          ...prevData,
          analyzed: true,
          score: mockScore,
          improvementAreas: mockImprovementAreas,
          mistakes: mockMistakes
        };
      });
      
      toast({
        title: "Analysis Complete",
        description: "We've analyzed your resume and found some opportunities for improvement.",
      });
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
            <Tabs defaultValue="score" className="w-full">
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
                <ResumeMistakes mistakes={resumeData.mistakes} />
              </TabsContent>
            </Tabs>
          )}
        </div>
      )}
    </div>
  );
};

export default ResumeAnalyzer;
