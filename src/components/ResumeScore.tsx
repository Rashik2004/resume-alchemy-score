
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  Tooltip
} from 'recharts';

interface ResumeScoreProps {
  score: number;
}

const ResumeScore: React.FC<ResumeScoreProps> = ({ score }) => {
  // Define score categories and their thresholds
  const scoreCategories = [
    { name: 'Poor', threshold: 60, color: '#ef4444' },
    { name: 'Fair', threshold: 70, color: '#f97316' },
    { name: 'Good', threshold: 80, color: '#22c55e' },
    { name: 'Excellent', threshold: 100, color: '#10b981' },
  ];

  // Get current category based on score
  const getCurrentCategory = () => {
    for (let i = 0; i < scoreCategories.length; i++) {
      if (score < scoreCategories[i].threshold) {
        return scoreCategories[i];
      }
    }
    return scoreCategories[scoreCategories.length - 1];
  };

  const currentCategory = getCurrentCategory();
  
  // Score breakdown data for pie chart
  const scoreBreakdown = [
    { name: 'Format', value: Math.floor(Math.random() * 20) + 60, color: '#8b5cf6' },
    { name: 'Keywords', value: Math.floor(Math.random() * 20) + 60, color: '#6366f1' },
    { name: 'Content', value: Math.floor(Math.random() * 20) + 60, color: '#ec4899' },
    { name: 'Structure', value: Math.floor(Math.random() * 20) + 60, color: '#14b8a6' },
  ];

  // Calculate ATS pass likelihood percentage
  const passLikelihood = Math.min(95, Math.max(30, score + Math.floor(Math.random() * 15)));
  
  // Feedback based on score
  const getFeedback = () => {
    if (score < 60) {
      return "Your resume needs significant improvements to be ATS-compatible. Focus on addressing the critical issues highlighted.";
    } else if (score < 70) {
      return "Your resume has several ATS compatibility issues that should be addressed for better results.";
    } else if (score < 80) {
      return "Your resume is fairly ATS-compatible but could benefit from some targeted improvements.";
    } else {
      return "Your resume is well-optimized for ATS systems. Only minor tweaks are needed for perfection.";
    }
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 rounded shadow text-sm border">
          <p className="font-medium">{`${payload[0].name}: ${payload[0].value}/100`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 resume-card">
        <h2 className="text-2xl font-bold mb-6">Resume ATS Compatibility Score</h2>
        
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <svg className="w-32 h-32">
              <circle
                className="text-gray-200"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r="56"
                cx="64"
                cy="64"
              />
              <circle
                className="text-alchemy-600"
                strokeWidth="10"
                strokeDasharray={360}
                strokeDashoffset={360 - (score / 100) * 360}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="56"
                cx="64"
                cy="64"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-3xl font-bold">{score}</span>
              <span className="text-sm">/100</span>
            </div>
          </div>
          <div className="text-center">
            <span 
              className="inline-block px-3 py-1 rounded-full text-sm font-medium"
              style={{ backgroundColor: `${currentCategory.color}20`, color: currentCategory.color }}
            >
              {currentCategory.name}
            </span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">ATS Pass Likelihood</span>
              <span className="text-sm font-medium">{passLikelihood}%</span>
            </div>
            <Progress value={passLikelihood} className="h-2" />
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border mt-4">
            <h3 className="font-medium mb-2">Analysis Feedback</h3>
            <p className="text-sm text-gray-700">{getFeedback()}</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-6 resume-card">
        <h2 className="text-lg font-bold mb-4">Component Breakdown</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={scoreBreakdown}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  nameKey="name"
                >
                  {scoreBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 gap-3">
              {scoreBreakdown.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-sm">{item.value}/100</span>
                    </div>
                    <Progress value={item.value} className="h-1 mt-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ResumeScore;
