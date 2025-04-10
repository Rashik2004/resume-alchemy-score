
import React, { useState, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import ResumeAnalyzer from '@/components/ResumeAnalyzer';
import FeaturesSection from '@/components/FeaturesSection';
import FooterSection from '@/components/FooterSection';
import WorkflowChart from '@/components/WorkflowChart';

const Index = () => {
  const [showAnalyzer, setShowAnalyzer] = useState(false);
  const analyzerRef = useRef<HTMLDivElement>(null);
  
  const handleGetStarted = () => {
    setShowAnalyzer(true);
    
    // Scroll to analyzer after a short delay to allow render
    setTimeout(() => {
      analyzerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection onGetStarted={handleGetStarted} />
        
        {/* Analyzer Section */}
        {showAnalyzer && (
          <div ref={analyzerRef} className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Analyze Your Resume</h2>
              <div className="max-w-2xl mx-auto">
                <ResumeAnalyzer />
              </div>
            </div>
          </div>
        )}
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* How it Works Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 gradient-text">How It Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our process is quick and simple, giving you actionable insights in just seconds.
              </p>
            </div>
            
            {/* Workflow Flowchart */}
            <WorkflowChart />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
              <div className="text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-alchemy-100 mb-4">
                  <span className="text-xl font-bold text-alchemy-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload Your Resume</h3>
                <p className="text-gray-600">
                  Upload your resume in PDF or DOCX format. Our system will securely process it.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-alchemy-100 mb-4">
                  <span className="text-xl font-bold text-alchemy-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Automated Analysis</h3>
                <p className="text-gray-600">
                  Our AI analyzes your resume for ATS compatibility issues and scoring factors.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-alchemy-100 mb-4">
                  <span className="text-xl font-bold text-alchemy-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Your Report</h3>
                <p className="text-gray-600">
                  Receive a detailed report with your ATS score and specific improvement suggestions.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button 
                onClick={handleGetStarted} 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-alchemy-600 to-alchemy-800 hover:from-alchemy-700 hover:to-alchemy-900 text-white font-semibold py-3 px-6 rounded-lg transition-all"
              >
                Try It Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;
