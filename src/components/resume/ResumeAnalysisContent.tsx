
import React from 'react';
import ResumeScore from '@/components/ResumeScore';
import ResumeImprovement from '@/components/ResumeImprovement';
import ResumeMistakes from '@/components/ResumeMistakes';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Sparkles, FileText, ClipboardCheck } from 'lucide-react';
import { ResumeData } from '@/types/resumeTypes';

interface ResumeAnalysisContentProps {
  resumeData: ResumeData;
  resetAnalysis: () => void;
  analysisLoading: boolean;
}

const ResumeAnalysisContent: React.FC<ResumeAnalysisContentProps> = ({ 
  resumeData, 
  resetAnalysis, 
  analysisLoading 
}) => {
  if (!resumeData) return null;
  
  return (
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
  );
};

export default ResumeAnalysisContent;
