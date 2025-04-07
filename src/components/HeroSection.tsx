
import React from 'react';
import { Button } from '@/components/ui/button';
import { MoveRight, FileSearch } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <div className="relative overflow-hidden py-12 md:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-alchemy-700 to-midnight-900 opacity-95 z-0"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-alchemy-400 opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-alchemy-600 opacity-10 blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-alchemy-900/30 px-4 py-1.5 mb-6 text-sm text-white/80 backdrop-blur-sm border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-alchemy-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-alchemy-500"></span>
            </span>
            NEW
            <span className="font-medium">Resume Alchemy Score is now available</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Optimize Your Resume for <span className="text-alchemy-400">ATS Success</span>
          </h1>
          
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/80">
            Upload your resume and instantly get feedback on its ATS compatibility, 
            with specific recommendations to improve your chances of getting past 
            automated screening systems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="bg-white text-alchemy-800 hover:bg-white/90 gap-2 text-base"
            >
              Analyze My Resume <FileSearch className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white gap-2 text-base"
            >
              Learn More <MoveRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
