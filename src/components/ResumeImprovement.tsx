
import React from 'react';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import type { ImprovementArea } from './ResumeAnalyzer';
import { AlertCircle, CheckCircle2, AlertTriangle } from 'lucide-react';

interface ResumeImprovementProps {
  improvementAreas: ImprovementArea[];
}

const ResumeImprovement: React.FC<ResumeImprovementProps> = ({ improvementAreas }) => {
  // Get icon based on importance level
  const getImportanceIcon = (importance: 'high' | 'medium' | 'low') => {
    switch (importance) {
      case 'high':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'medium':
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case 'low':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      default:
        return null;
    }
  };
  
  // Get badge variant based on importance level
  const getImportanceVariant = (importance: 'high' | 'medium' | 'low') => {
    switch (importance) {
      case 'high':
        return 'destructive';
      case 'medium':
        return 'secondary';
      case 'low':
        return 'outline';
      default:
        return 'default';
    }
  };
  
  // Get importance text
  const getImportanceText = (importance: 'high' | 'medium' | 'low') => {
    switch (importance) {
      case 'high':
        return 'Critical';
      case 'medium':
        return 'Important';
      case 'low':
        return 'Consider';
      default:
        return '';
    }
  };

  return (
    <Card className="p-6 resume-card">
      <h2 className="text-xl font-bold mb-6">Recommended Improvements</h2>
      
      <div className="mb-4 py-2 px-4 bg-alchemy-50 rounded-lg border border-alchemy-100 text-sm">
        <p>We've identified <strong>{improvementAreas.length}</strong> areas for improvement in your resume. 
        Focus on addressing <strong>Critical</strong> issues first for the biggest impact on your ATS score.</p>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        {improvementAreas.map((area) => (
          <AccordionItem key={area.id} value={area.id} className="border-b border-gray-200">
            <AccordionTrigger className="py-4 hover:no-underline">
              <div className="flex items-center">
                <div className="mr-3">
                  {getImportanceIcon(area.importance)}
                </div>
                <div className="text-left mr-2">
                  <h3 className="font-medium">{area.title}</h3>
                  <p className="text-sm text-gray-500">{area.category}</p>
                </div>
                <Badge variant={getImportanceVariant(area.importance) as any} className="ml-auto">
                  {getImportanceText(area.importance)}
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="py-3">
              <div className="pl-11 pr-2">
                <p className="text-gray-700 mb-4">{area.description}</p>
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Recommendations:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {area.suggestions.map((suggestion, index) => (
                      <li key={index} className="text-sm text-gray-700">{suggestion}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
};

export default ResumeImprovement;
