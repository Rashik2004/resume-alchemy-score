
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MoveRight, FileSearch, LineChart, BarChart, CheckCircle2, Award, Zap, TrendingUp, Users, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import FooterSection from '@/components/FooterSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Features: React.FC = () => {
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
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resume Alchemy Features</h1>
          <p className="text-xl md:max-w-3xl text-white/80">
            Powerful tools designed to optimize your resume and improve your chances of landing your dream job.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        {/* Core Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Core Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="resume-card">
              <CardHeader>
                <div className="mb-4 p-3 bg-alchemy-100 rounded-full w-14 h-14 flex items-center justify-center">
                  <FileSearch className="h-7 w-7 text-alchemy-600" />
                </div>
                <CardTitle>ATS Compatibility Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our advanced algorithm analyzes your resume against the most common Applicant Tracking Systems to ensure maximum compatibility.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-alchemy-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Format compatibility check</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-alchemy-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Keyword optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-alchemy-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Section identification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="resume-card">
              <CardHeader>
                <div className="mb-4 p-3 bg-alchemy-100 rounded-full w-14 h-14 flex items-center justify-center">
                  <LineChart className="h-7 w-7 text-alchemy-600" />
                </div>
                <CardTitle>Resume Score</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Get a comprehensive score that indicates how well your resume will perform with ATS systems and hiring managers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-alchemy-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Overall compatibility score</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-alchemy-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Section-by-section breakdown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-alchemy-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Industry benchmark comparison</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="resume-card">
              <CardHeader>
                <div className="mb-4 p-3 bg-alchemy-100 rounded-full w-14 h-14 flex items-center justify-center">
                  <Award className="h-7 w-7 text-alchemy-600" />
                </div>
                <CardTitle>Smart Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Receive personalized, actionable recommendations to improve your resume's effectiveness.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-alchemy-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Content improvement suggestions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-alchemy-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Format optimization tips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-alchemy-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Industry-specific guidance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">How Resume Alchemy Works</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our three-step process makes it easy to optimize your resume for ATS systems and increase your chances of landing interviews.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-16 left-[25%] w-[50%] h-0.5 bg-gray-200"></div>
            
            {[
              {
                step: "1",
                title: "Upload Your Resume",
                description: "Simply upload your resume in PDF or DOCX format.",
                icon: <FileSearch className="h-6 w-6 text-white" />
              },
              {
                step: "2",
                title: "Get Your Analysis",
                description: "Our AI analyzes your resume against 50+ ATS systems.",
                icon: <LineChart className="h-6 w-6 text-white" />
              },
              {
                step: "3",
                title: "Implement Changes",
                description: "Follow our recommendations to improve your resume.",
                icon: <TrendingUp className="h-6 w-6 text-white" />
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-alchemy-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  {item.icon}
                </div>
                <div className="bg-gray-50 text-sm font-semibold text-gray-700 px-3 py-1 rounded-full mb-4">
                  Step {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advanced Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Advanced Features</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Explore our premium features designed to give you the competitive edge in your job search.
            </p>
          </div>
          
          <Tabs defaultValue="analysis" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="analysis">Detailed Analysis</TabsTrigger>
              <TabsTrigger value="reporting">Reporting Tools</TabsTrigger>
              <TabsTrigger value="industry">Industry Insights</TabsTrigger>
            </TabsList>
            
            <TabsContent value="analysis" className="p-6 border rounded-lg">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">In-Depth Resume Analysis</h3>
                  <p className="text-gray-700 mb-4">
                    Our advanced algorithm provides a comprehensive analysis of your resume, identifying strengths and areas for improvement.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-alchemy-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Section-by-section evaluation with specific recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-alchemy-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Keyword matching against job descriptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-alchemy-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Content quality assessment for impact and clarity</span>
                    </li>
                  </ul>
                  <Button className="bg-alchemy-600 hover:bg-alchemy-700">Learn More</Button>
                </div>
                <div className="bg-gray-100 rounded-lg p-6">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="Resume analysis dashboard" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reporting" className="p-6 border rounded-lg">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-gray-100 rounded-lg p-6">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80" 
                    alt="Resume analysis reports" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Comprehensive Reporting</h3>
                  <p className="text-gray-700 mb-4">
                    Get detailed reports on your resume's performance and track improvements over time.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <BarChart className="h-5 w-5 text-alchemy-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Visual representation of your resume's strengths and weaknesses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BarChart className="h-5 w-5 text-alchemy-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Progress tracking as you implement suggested changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BarChart className="h-5 w-5 text-alchemy-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Exportable reports to share with career coaches or mentors</span>
                    </li>
                  </ul>
                  <Button className="bg-alchemy-600 hover:bg-alchemy-700">View Sample Report</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="industry" className="p-6 border rounded-lg">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Industry-Specific Insights</h3>
                  <p className="text-gray-700 mb-4">
                    Gain valuable insights into how your resume stacks up against industry standards and competitors.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-alchemy-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Industry benchmark comparisons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-alchemy-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Role-specific optimization recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-alchemy-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Trending keywords and skills for your target roles</span>
                    </li>
                  </ul>
                  <Button className="bg-alchemy-600 hover:bg-alchemy-700">Explore Industries</Button>
                </div>
                <div className="bg-gray-100 rounded-lg p-6">
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Industry insights dashboard" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* CTA Banner */}
        <section className="bg-alchemy-100 rounded-xl p-8 mb-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to optimize your resume?</h2>
          <p className="max-w-2xl mx-auto mb-6 text-gray-700">
            Upload your resume now and get instant feedback on how to improve your chances of landing that interview.
          </p>
          <Button className="bg-alchemy-600 hover:bg-alchemy-700 gap-2">
            Get Started <MoveRight className="h-4 w-4" />
          </Button>
        </section>
      </div>

      <FooterSection />
    </div>
  );
};

export default Features;
