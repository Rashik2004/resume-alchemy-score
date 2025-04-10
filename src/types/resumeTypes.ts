
export interface ImprovementArea {
  id: string;
  category: string;
  title: string;
  description: string;
  importance: 'high' | 'medium' | 'low';
  suggestions: string[];
}

export interface ResumeMistake {
  id: string;
  section: string;
  title: string;
  originalText: string;
  improvedText: string;
  explanation: string;
}

export interface ResumeData {
  file: File;
  text: string;
  analyzed: boolean;
  score: number;
  improvementAreas: ImprovementArea[];
  mistakes: ResumeMistake[];
}
