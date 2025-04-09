
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Mail, MessageSquare, Phone } from 'lucide-react';
import FooterSection from '@/components/FooterSection';
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:max-w-2xl mx-auto text-white/80 mb-8">
            Have questions or need support? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-8">
              <h2 className="text-2xl font-bold gradient-text mb-6">Get in Touch</h2>

              <div className="flex items-start gap-4">
                <div className="bg-alchemy-100 p-3 rounded-lg">
                  <Mail className="h-5 w-5 text-alchemy-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600 mt-1">rashikghosh1918@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-alchemy-100 p-3 rounded-lg">
                  <Phone className="h-5 w-5 text-alchemy-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600 mt-1">943XXXX19</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-alchemy-100 p-3 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-alchemy-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Live Chat</h3>
                  <p className="text-gray-600 mt-1">Available 9am-5pm IST, Monday through Friday</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 bg-white rounded-lg shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <Input
                      id="first-name"
                      name="first-name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <Input
                      id="last-name"
                      name="last-name"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-alchemy-600 hover:bg-alchemy-700"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default Contact;
