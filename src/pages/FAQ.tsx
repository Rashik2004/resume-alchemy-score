
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MoveRight, Search } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import FooterSection from '@/components/FooterSection';

const FAQ: React.FC = () => {
  const faqItems = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What is Resume Alchemy?",
          answer: "Resume Alchemy is an AI-powered platform that analyzes your resume against Applicant Tracking Systems (ATS) and provides personalized recommendations to improve your chances of getting past automated screenings and landing interviews."
        },
        {
          question: "How does Resume Alchemy work?",
          answer: "Our platform uses advanced algorithms to scan your resume and evaluate its compatibility with ATS systems. We analyze format, keywords, section structure, and content quality to provide you with a comprehensive score and actionable recommendations for improvement."
        },
        {
          question: "Is Resume Alchemy free to use?",
          answer: "We offer a free basic analysis that includes an ATS compatibility score and general recommendations. For more detailed insights, section-by-section analysis, and industry-specific recommendations, we offer premium plans starting at $9.99 per month."
        },
        {
          question: "How accurate is Resume Alchemy's analysis?",
          answer: "Our analysis is based on data from over 50 different ATS systems and thousands of successful resumes. While we can't guarantee results with every employer's unique system, our recommendations have helped thousands of users increase their interview rates by an average of 40%."
        }
      ]
    },
    {
      category: "Technical Questions",
      questions: [
        {
          question: "What file formats does Resume Alchemy support?",
          answer: "We currently support PDF and DOCX file formats for resume uploads. These are the most common formats used by job seekers and are generally compatible with most ATS systems."
        },
        {
          question: "Is there a file size limit for resume uploads?",
          answer: "Yes, the maximum file size for resume uploads is 5MB. If your file exceeds this limit, we recommend compressing it or removing large images/graphics before uploading."
        },
        {
          question: "How long does the analysis take?",
          answer: "Most resume analyses are completed within 30-60 seconds, depending on the complexity of your resume and current server load. You'll see real-time progress as our system scans your document."
        },
        {
          question: "Can I upload multiple versions of my resume?",
          answer: "Yes, premium users can upload and compare multiple versions of their resume. This feature is particularly useful if you're targeting different industries or roles and want to optimize each version accordingly."
        }
      ]
    },
    {
      category: "Account & Privacy",
      questions: [
        {
          question: "How is my personal information protected?",
          answer: "We take privacy seriously. All uploaded resumes and personal information are encrypted and stored securely. We never share your information with third parties without your explicit consent. Please refer to our Privacy Policy for more details."
        },
        {
          question: "Can I delete my resume from your system?",
          answer: "Yes, you can delete your resume and all associated data from our system at any time through your account settings. Once deleted, your data cannot be recovered."
        },
        {
          question: "Do I need to create an account to use Resume Alchemy?",
          answer: "You can use our basic analysis without creating an account, but we recommend signing up to save your results, track improvements over time, and access premium features."
        },
        {
          question: "How do I cancel my subscription?",
          answer: "You can cancel your subscription at any time through your account settings. Your premium access will continue until the end of your current billing period, after which you'll revert to a free account."
        }
      ]
    },
    {
      category: "Using the Results",
      questions: [
        {
          question: "What should I do after receiving my analysis?",
          answer: "We recommend implementing the suggested changes to your resume in order of priority. Start with critical issues that significantly impact ATS compatibility, then move on to content and formatting improvements. After making changes, you can reupload your resume for a new analysis to track your progress."
        },
        {
          question: "Will implementing your suggestions guarantee I get interviews?",
          answer: "While we can't guarantee interviews, implementing our suggestions will significantly improve your resume's chances of passing ATS screenings, which is the first crucial step in the application process. The quality of your experience and fit for the role will still be evaluated by human recruiters."
        },
        {
          question: "Can I download my analysis results?",
          answer: "Yes, premium users can download a PDF report of their analysis results, which includes all recommendations and their ATS compatibility score. This can be useful for sharing with career coaches or keeping for reference."
        },
        {
          question: "Do you offer personalized support for resume improvement?",
          answer: "Our Enterprise plan includes access to career advisors who can provide personalized feedback on your resume. For other plans, our AI-generated recommendations are comprehensive and tailored to your specific resume."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container mx-auto p-4 mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-alchemy-600 hover:text-alchemy-800">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-alchemy-700 to-midnight-900 text-white py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl md:max-w-2xl mx-auto text-white/80 mb-8">
            Find answers to the most common questions about Resume Alchemy and how our platform can help you.
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Input 
              type="text" 
              placeholder="Search for questions..." 
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-3xl mx-auto">
          {faqItems.map((category, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 gradient-text">{category.category}</h2>
              <Accordion type="single" collapsible className="mb-6">
                {category.questions.map((item, qIndex) => (
                  <AccordionItem key={qIndex} value={`item-${index}-${qIndex}`}>
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-alchemy-600">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              {index < faqItems.length - 1 && <Separator className="my-8" />}
            </div>
          ))}
          
          {/* Contact Section */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-700 mb-6">
              We're here to help! Contact our support team and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" className="border-alchemy-600 text-alchemy-600 hover:bg-alchemy-50">
                View Support Center
              </Button>
              <Button className="bg-alchemy-600 hover:bg-alchemy-700 gap-2">
                Contact Support <MoveRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default FAQ;
