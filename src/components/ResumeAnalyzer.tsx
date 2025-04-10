
import React, { useState } from 'react';
import FileUpload from '@/components/FileUpload';
import { useToast } from '@/hooks/use-toast';
import { ResumeData } from '@/types/resumeTypes';
import { 
  generateMockScore, 
  generateMockImprovementAreas, 
  generateMockMistakes,
  extractTextFromResume
} from '@/utils/mockResumeAnalysis';
import ResumeAnalysisContent from '@/components/resume/ResumeAnalysisContent';

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
      
      // Generate mock analysis results
      const mockScore = generateMockScore();
      const mockImprovementAreas = generateMockImprovementAreas();
      const mockMistakes = generateMockMistakes();
      
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
        <ResumeAnalysisContent 
          resumeData={resumeData}
          resetAnalysis={resetAnalysis}
          analysisLoading={analysisLoading}
        />
      )}
    </div>
  );
};

export default ResumeAnalyzer;
