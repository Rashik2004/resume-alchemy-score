
import React from 'react';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FileText, Check, ArrowRight } from 'lucide-react';
import type { ResumeMistake } from './ResumeAnalyzer';

interface ResumeMistakesProps {
  mistakes: ResumeMistake[];
}

const ResumeMistakes: React.FC<ResumeMistakesProps> = ({ mistakes }) => {
  return (
    <Card className="p-6 resume-card">
      <h2 className="text-xl font-bold mb-6">Specific Resume Improvements</h2>
      
      <div className="mb-4 py-2 px-4 bg-alchemy-50 rounded-lg border border-alchemy-100 text-sm">
        <p>We've identified {mistakes.length} specific areas in your resume that could be improved. 
        Below are the actual content changes that would help boost your ATS score.</p>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        {mistakes.map((mistake) => (
          <AccordionItem key={mistake.id} value={mistake.id} className="border-b border-gray-200">
            <AccordionTrigger className="py-4 hover:no-underline">
              <div className="flex items-center">
                <div className="mr-3">
                  <FileText className="h-5 w-5 text-alchemy-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium">{mistake.section}</h3>
                </div>
                <Badge variant="outline" className="ml-auto bg-yellow-50 text-yellow-800 border-yellow-200">
                  Needs Improvement
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="py-3">
              <div className="pl-11 pr-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">ORIGINAL TEXT:</h4>
                    <div className="p-3 bg-red-50 border border-red-100 rounded-md text-gray-800">
                      {mistake.originalText}
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <ArrowRight className="text-alchemy-500" />
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">IMPROVED VERSION:</h4>
                    <div className="p-3 bg-green-50 border border-green-100 rounded-md text-gray-800">
                      {mistake.improvedText}
                    </div>
                  </div>
                  
                  <Alert className="bg-blue-50 border-blue-100">
                    <Check className="h-4 w-4 text-blue-600" />
                    <AlertTitle className="text-blue-800">Why this matters</AlertTitle>
                    <AlertDescription className="text-blue-700">
                      {mistake.explanation}
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="font-medium mb-2">Pro Tips:</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
          <li>Use a consistent formatting style throughout your resume</li>
          <li>Replace generic phrases with specific, quantifiable achievements</li>
          <li>Tailor your resume for each job application by matching keywords</li>
          <li>Focus on results rather than responsibilities</li>
        </ul>
      </div>
    </Card>
  );
};

export default ResumeMistakes;
