
import React from 'react';
import { 
  Upload, 
  FileText, 
  FileSearch, 
  ChartBar, 
  List, 
  FilePen, 
  RefreshCw, 
  ArrowDown, 
  CheckCircle2 
} from 'lucide-react';

const WorkflowChart: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto py-8">
      <svg 
        width="800" 
        height="480" 
        viewBox="0 0 800 480" 
        className="mx-auto"
        style={{ minWidth: "800px" }}
      >
        {/* Background */}
        <rect width="800" height="480" fill="#f8fafc" rx="12" />
        
        {/* Connection Lines */}
        <path d="M 400 80 L 400 120" stroke="#6d28d9" strokeWidth="2" />
        <path d="M 400 180 L 400 220" stroke="#6d28d9" strokeWidth="2" />
        <path d="M 400 280 L 400 320" stroke="#6d28d9" strokeWidth="2" />
        <path d="M 320 380 L 200 420" stroke="#6d28d9" strokeWidth="2" />
        <path d="M 400 380 L 400 420" stroke="#6d28d9" strokeWidth="2" />
        <path d="M 480 380 L 600 420" stroke="#6d28d9" strokeWidth="2" />
        
        {/* Return Arrow */}
        <path d="M 680 420 Q 720 380 720 300 Q 720 100 460 40" stroke="#6d28d9" strokeWidth="2" strokeDasharray="5,5" fill="transparent" />
        <polygon points="460,30 450,40 460,50" fill="#6d28d9" />

        {/* Step 1: Initial Page Load */}
        <rect x="300" y="30" width="200" height="50" rx="8" fill="#6d28d9" />
        <text x="400" y="60" textAnchor="middle" fill="white" fontWeight="bold">Start: Homepage</text>
        
        {/* Step 2: User Interaction */}
        <rect x="300" y="120" width="200" height="60" rx="8" fill="#8b5cf6" />
        <text x="400" y="145" textAnchor="middle" fill="white" fontWeight="bold">"Get Started" Button</text>
        <text x="400" y="165" textAnchor="middle" fill="white" fontSize="12">User clicks to begin</text>
        
        {/* Step 3: Resume Upload */}
        <rect x="300" y="220" width="200" height="60" rx="8" fill="#a78bfa" />
        <text x="400" y="245" textAnchor="middle" fill="white" fontWeight="bold">Resume Upload</text>
        <text x="400" y="265" textAnchor="middle" fill="white" fontSize="12">Upload PDF or DOCX file</text>
        
        {/* Step 4: Analysis Process */}
        <rect x="300" y="320" width="200" height="60" rx="8" fill="#c4b5fd" />
        <text x="400" y="345" textAnchor="middle" fill="#4c1d95" fontWeight="bold">Analysis Processing</text>
        <text x="400" y="365" textAnchor="middle" fill="#4c1d95" fontSize="12">AI reviews your resume</text>
        
        {/* Results Display Options */}
        {/* Option 1: ATS Score */}
        <rect x="100" y="420" width="200" height="50" rx="8" fill="#ddd6fe" stroke="#6d28d9" strokeWidth="2" />
        <text x="200" y="450" textAnchor="middle" fill="#4c1d95" fontWeight="bold">ATS Score</text>
        
        {/* Option 2: Improvement Areas */}
        <rect x="300" y="420" width="200" height="50" rx="8" fill="#ddd6fe" stroke="#6d28d9" strokeWidth="2" />
        <text x="400" y="450" textAnchor="middle" fill="#4c1d95" fontWeight="bold">Improvement Areas</text>
        
        {/* Option 3: Specific Fixes */}
        <rect x="500" y="420" width="200" height="50" rx="8" fill="#ddd6fe" stroke="#6d28d9" strokeWidth="2" />
        <text x="600" y="450" textAnchor="middle" fill="#4c1d95" fontWeight="bold">Specific Fixes</text>
        
        {/* Try Again */}
        <rect x="690" y="380" width="30" height="30" rx="15" fill="#ede9fe" stroke="#6d28d9" strokeWidth="2" />
        
        {/* Success indicator */}
        <circle cx="250" cy="280" r="12" stroke="#10b981" fill="none" strokeWidth="2" />
        <path d="M 244 280 L 248 284 L 256 276" stroke="#10b981" strokeWidth="2" fill="none" />
        
        {/* Legend */}
        <rect x="620" y="30" width="160" height="100" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
        <text x="700" y="50" textAnchor="middle" fill="#4c1d95" fontWeight="bold" fontSize="14">Legend</text>
        
        <rect x="630" y="65" width="14" height="14" rx="2" fill="#6d28d9" />
        <text x="650" y="77" fill="#4c1d95" fontSize="12">User Action</text>
        
        <rect x="630" y="90" width="14" height="14" rx="2" fill="#a78bfa" />
        <text x="650" y="102" fill="#4c1d95" fontSize="12">System Process</text>
        
        <rect x="630" y="115" width="14" height="14" rx="2" fill="#ddd6fe" stroke="#6d28d9" strokeWidth="2" />
        <text x="650" y="127" fill="#4c1d95" fontSize="12">Results View</text>
        
        {/* Icons */}
        <foreignObject x="340" y="235" width="20" height="20">
          <Upload className="text-white" size={16} />
        </foreignObject>
        <foreignObject x="450" y="235" width="20" height="20">
          <FileText className="text-white" size={16} />
        </foreignObject>
        <foreignObject x="350" y="335" width="20" height="20">
          <FileSearch className="text-blue-900" size={16} />
        </foreignObject>
        <foreignObject x="135" y="440" width="20" height="20">
          <ChartBar className="text-blue-900" size={16} />
        </foreignObject>
        <foreignObject x="335" y="440" width="20" height="20">
          <List className="text-blue-900" size={16} />
        </foreignObject>
        <foreignObject x="535" y="440" width="20" height="20">
          <FilePen className="text-blue-900" size={16} />
        </foreignObject>
        <foreignObject x="695" y="385" width="20" height="20">
          <RefreshCw className="text-purple-700" size={16} />
        </foreignObject>
        <foreignObject x="385" y="80" width="30" height="30">
          <ArrowDown className="text-white" size={20} />
        </foreignObject>
      </svg>
    </div>
  );
};

export default WorkflowChart;
