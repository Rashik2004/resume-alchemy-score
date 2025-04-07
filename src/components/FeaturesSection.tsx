
import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Zap, PieChart, FileSearch, Award, Clock3 } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'ATS Compatibility Check',
      description: 'Our system analyzes your resume for ATS compatibility issues that could prevent it from reaching human recruiters.',
      icon: <FileSearch className="h-6 w-6 text-alchemy-500" />
    },
    {
      title: 'Detailed Score Breakdown',
      description: 'Get a comprehensive score with detailed breakdowns on format, keywords, content, and structure.',
      icon: <PieChart className="h-6 w-6 text-alchemy-500" />
    },
    {
      title: 'Actionable Recommendations',
      description: 'Receive specific, prioritized suggestions to improve your resume and boost your ATS score.',
      icon: <CheckCircle2 className="h-6 w-6 text-alchemy-500" />
    },
    {
      title: 'Industry-Specific Analysis',
      description: 'Our system identifies industry-specific keywords and formats that will help your resume stand out.',
      icon: <Award className="h-6 w-6 text-alchemy-500" />
    },
    {
      title: 'Instant Results',
      description: 'Get immediate feedback and recommendations without waiting, so you can apply with confidence.',
      icon: <Clock3 className="h-6 w-6 text-alchemy-500" />
    },
    {
      title: 'Increased Interview Chances',
      description: 'Optimizing your resume for ATS systems significantly increases your chances of landing interviews.',
      icon: <Zap className="h-6 w-6 text-alchemy-500" />
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Why Use Resume Alchemy Score?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our advanced AI system helps you optimize your resume to pass through Applicant Tracking Systems (ATS) 
            and land more interviews.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 border-t-4 border-t-alchemy-500 resume-card">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-alchemy-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
