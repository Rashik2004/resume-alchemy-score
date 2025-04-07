
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MoveRight, Users, Target, History, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import FooterSection from '@/components/FooterSection';

const AboutUs: React.FC = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Resume Alchemy</h1>
          <p className="text-xl md:max-w-2xl text-white/80">
            We're on a mission to help job seekers optimize their resumes for today's competitive job market.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">Our Story</h2>
              <p className="text-gray-700 mb-4">
              Founded in 2025, our journey began with a shared passion for innovation and a commitment to making a meaningful impact in the job application process. We are a team of keen students, led by Rashik, who embarked on this venture after extensive consultation with corporate partners and recognizing a crucial challenge in the industry: many qualified candidates were being prematurely filtered out by Applicant Tracking Systems (ATS) before their resumes reached human recruiters.
              </p>
              <p className="text-gray-700 mb-4">
              Understanding this gap, we set out to develop a solution aimed at empowering job seekers. Our mission is to optimize resumes for ATS compatibility while ensuring they retain the personal touch that highlights the unique qualities of each candidate. By bridging the gap between technology and human insight, we strive to enhance the job application experience and increase the success rates of candidates.
              </p>
              <p className="text-gray-700">
              Our goal is to equip them with the tools and knowledge they need to land interviews at their dream companies, turning the daunting task of resume writing and submission into a streamlined and successful endeavor.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Team working together"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-alchemy-100 rounded-full z-[-1]"></div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="resume-card">
              <CardHeader>
                <div className="mb-4 p-3 bg-alchemy-100 rounded-full w-14 h-14 flex items-center justify-center">
                  <Users className="h-7 w-7 text-alchemy-600" />
                </div>
                <CardTitle>Empowerment</CardTitle>
                <CardDescription>We believe in giving people the tools they need to succeed on their own terms.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We're committed to democratizing the job search process by providing accessible, practical tools that
                  level the playing field for all job seekers.
                </p>
              </CardContent>
            </Card>

            <Card className="resume-card">
              <CardHeader>
                <div className="mb-4 p-3 bg-alchemy-100 rounded-full w-14 h-14 flex items-center justify-center">
                  <Target className="h-7 w-7 text-alchemy-600" />
                </div>
                <CardTitle>Precision</CardTitle>
                <CardDescription>We focus on data-driven insights that deliver measurable results.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our algorithms are carefully calibrated to provide specific, actionable feedback that directly
                  improves ATS compatibility and human readability.
                </p>
              </CardContent>
            </Card>

            <Card className="resume-card">
              <CardHeader>
                <div className="mb-4 p-3 bg-alchemy-100 rounded-full w-14 h-14 flex items-center justify-center">
                  <Award className="h-7 w-7 text-alchemy-600" />
                </div>
                <CardTitle>Excellence</CardTitle>
                <CardDescription>We're committed to continuous improvement in everything we do.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We constantly update our algorithms and recommendations based on the latest hiring trends, ATS
                  technologies, and feedback from both job seekers and hiring managers.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Meet Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rashik Ghosh",
                role: "Coder and Designer",
                image: "./images/WhatsApp Image 2025-04-07 at 3.24.32 PM.jpeg",
                bio: "An Aspiring Full Stack Web-Developer And Web Designer with a passion for creating user-friendly applications."
              },
              {
                name: "Ashmit Sabaran",
                role: "Bug finder and fixer",
                image: "./images/WhatsApp Image 2025-04-07 at 3.24.04 PM.jpeg",
                bio: "An Aspiring Full Stack Web-Developer."
              },
              {
                name: "Anjana Kumari",
                role: "Data Organiser And Beta tester",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
                bio: "An Aspiring Full Stack Web-Developer."
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden resume-card">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-alchemy-100 rounded-xl p-8 mb-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to transform your job search?</h2>
          <p className="max-w-2xl mx-auto mb-6 text-gray-700">
            Let Resume Alchemy help you optimize your resume for ATS systems and increase your chances of landing interviews.
          </p>
          <Button className="bg-alchemy-600 hover:bg-alchemy-700 gap-2">
            Analyze My Resume <MoveRight className="h-4 w-4" />
          </Button>
        </section>
      </div>

      <FooterSection />
    </div>
  );
};

export default AboutUs;
