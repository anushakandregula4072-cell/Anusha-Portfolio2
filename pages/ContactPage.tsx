
import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, MailIcon } from '../components/icons';

const ContactPage: React.FC = () => {
  
  // A simple handler for form submission. In a real app, this would send data to a server.
  // Here, it just prevents default and shows an alert.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    // In a real application, you would handle form submission here,
    // for example, by sending the data to an API endpoint.
    // Since there's no backend, this is a UI-only interaction.
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">Get In Touch</h1>
        <p className="text-lg text-cyan-400 mt-2">I'd love to hear from you. Let's connect!</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 bg-gray-800 p-8 rounded-lg shadow-2xl">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
          <p className="text-gray-300 mb-6">
            Feel free to reach out through the form, or connect with me on my social platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-300">
              <MailIcon />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400">{personalInfo.email}</a>
            </div>
          </div>
          <div className="flex space-x-6 mt-8">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <GithubIcon />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
            <input type="text" id="name" name="name" required className="mt-1 block w-full bg-gray-700 border-gray-600 text-white rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 p-2"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full bg-gray-700 border-gray-600 text-white rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 p-2"/>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
            <textarea id="message" name="message" rows={5} required className="mt-1 block w-full bg-gray-700 border-gray-600 text-white rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 p-2"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full bg-cyan-600 text-white font-bold py-3 px-4 rounded-md hover:bg-cyan-700 transition-colors duration-300">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
