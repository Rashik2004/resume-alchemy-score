
import React from 'react';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ResumeMistake } from '@/types/resumeTypes';
import { AlertCircle, ArrowRight } from 'lucide-react';

interface ResumeMistakesProps {
  mistakes: ResumeMistake[];
}

const ResumeMistakes: React.FC<ResumeMistakesProps> = ({ mistakes }) => {
  if (!mistakes || mistakes.length === 0) {
    return (
      <Card className="p-6 resume-card">
        <div className="text-center py-8">
          <h3 className="text-lg font-semibold">No specific issues found</h3>
          <p className="text-sm text-gray-500 mt-2">
            Your resume looks good! Check the Improvements tab for general suggestions.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 resume-card">
      <h2 className="text-xl font-bold mb-6">Specific Issues Found</h2>
      
      <div className="mb-4 py-2 px-4 bg-alchemy-50 rounded-lg border border-alchemy-100 text-sm">
        <p>We've identified <strong>{mistakes.length}</strong> specific issues in your resume text.
        Fix these issues to significantly improve your ATS score.</p>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        {mistakes.map((mistake) => (
          <AccordionItem key={mistake.id} value={mistake.id} className="border-b border-gray-200">
            <AccordionTrigger className="py-4 hover:no-underline">
              <div className="flex items-center">
                <div className="mr-3">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                </div>
                <div className="text-left mr-2">
                  <h3 className="font-medium">{mistake.title}</h3>
                  <p className="text-sm text-gray-500">{mistake.section}</p>
                </div>
                <Badge variant="destructive" className="ml-auto">
                  Fix Needed
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="py-3">
              <div className="pl-11 pr-2 space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-2">Original Text:</h4>
                  <div className="bg-red-50 border border-red-100 rounded-md p-3 text-sm">
                    <p className="text-gray-800">{mistake.originalText}</p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
                
                <div>
                  <h4 className="font-medium text-sm mb-2">Improved Version:</h4>
                  <div className="bg-green-50 border border-green-100 rounded-md p-3 text-sm">
                    <p className="text-gray-800">{mistake.improvedText}</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 rounded-md p-3 text-sm">
                  <h4 className="font-medium text-sm mb-1">Explanation:</h4>
                  <p className="text-gray-700">{mistake.explanation}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
};

export default ResumeMistakes;
