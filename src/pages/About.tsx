import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Truck, Award, Users, Globe, Linkedin, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { theme } = useTheme();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <AnimatedSection className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About TruckerBid</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Transforming the logistics industry through innovation and technology
          </p>
        </div>
      </AnimatedSection>

      {/* Mission Section */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-golden-100' : 'text-gray-900'}`}>
              Our Mission
            </h2>
            <p className={`mt-4 text-xl ${theme === 'dark' ? 'text-golden-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              To create a more efficient and transparent logistics ecosystem that benefits both shippers and carriers through innovative technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Award className={`h-12 w-12 ${theme === 'dark' ? 'text-golden-400' : 'text-primary-600'}`} />,
                title: "Excellence",
                description: "We strive for excellence in every aspect of our service, ensuring the highest quality solutions for our users."
              },
              {
                icon: <Users className={`h-12 w-12 ${theme === 'dark' ? 'text-golden-400' : 'text-primary-600'}`} />,
                title: "Community",
                description: "Building a strong, supportive community of shippers and carriers who trust and rely on our platform."
              },
              {
                icon: <Globe className={`h-12 w-12 ${theme === 'dark' ? 'text-golden-400' : 'text-primary-600'}`} />,
                title: "Innovation",
                description: "Continuously innovating to provide cutting-edge solutions that address real-world logistics challenges."
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className={`text-center p-6 rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-dark-card border border-golden-800/30 hover:bg-dark-card/80' 
                    : 'hover:bg-gray-50'
                } transition-colors`}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-golden-200' : 'text-gray-900'
                }`}>{value.title}</h3>
                <p className={theme === 'dark' ? 'text-golden-300' : 'text-gray-600'}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className={`${
        theme === 'dark' 
          ? 'bg-dark-card border-y border-golden-800/30' 
          : 'bg-gradient-to-r from-primary-50 to-secondary-50'
        } py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "50K+", label: "Successful Deliveries" },
              { number: "95%", label: "Satisfaction Rate" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-golden-400' : 'text-primary-600'
                }`}>{stat.number}</div>
                <div className={theme === 'dark' ? 'text-golden-300' : 'text-gray-600'}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold ${
              theme === 'dark' ? 'text-golden-100' : 'text-gray-900'
            }`}>Our Leadership</h2>
            <p className={`mt-4 ${
              theme === 'dark' ? 'text-golden-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Meet the team behind TruckerBid's success
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                name: "Abhay Pathania",
                role: "CEO & Founder",
                image: "https://i.postimg.cc/vmtSJDqt/3.png?auto=format&fit=crop&w=300&q=80",
                description: "A 3rd-year B.Com student at Chandigarh University, TruckerBid empowers the public with affordable transport and truck owners with better earnings.",
                linkedin: "https://www.linkedin.com/in/abhaypathania?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                github: "https://github.com"
              },
              {
                name: "Udit",
                role: "CTO",
                image: "https://i.postimg.cc/RFQ9bMfk/1.png?auto=format&fit=crop&w=300&q=80",
                description: "Bringing software engineering expertise, specializing in AI and machine learning. He leads our technical innovation and platform development.",
                linkedin: "https://www.linkedin.com/in/udit011",
                github: "https://github.com/Udit01111"
              },
              {
                name: "Pratham Rathi",
                role: "Head of Finance",
                image: "https://i.postimg.cc/QM8RxpWy/5.png?auto=format&fit=crop&w=300&q=80",
                description: "Specializing in strategic finance, business pitches, and presentations.His insights and communication strengthen investor confidence and efficiency.",
                linkedin: "https://www.linkedin.com/in/pratham-rathi-58ab39249/",
                github: "https://github.com"
              },
              {
                name: "Shivangini Sharma",
                role: "Head of Research",
                image: "https://i.postimg.cc/dVkFcRrm/2.png?auto=format&fit=crop&w=300&q=80",
                description: "Driven by passion, conducts research at TruckBid, applying insights to support company objectives and business environments.",
                linkedin: "https://www.linkedin.com/in/shivangini-sharma-9b8523255",
                github: "https://github.com"
              },
              {
                name: "Sarthak",
                role: "Head of Operations",
                image: "https://i.postimg.cc/kgxjSBmP/4.png?auto=format&fit=crop&w=300&q=80",
                description: "He drives market research, aligning with truckers & shippers needs. Bridging innovation & logistics, optimizing pricing, workflows & solutions.",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className={`text-center ${
                  theme === 'dark' ? 'bg-dark-card border border-golden-800/30' : 'bg-white shadow-lg'
                } p-6 rounded-lg group relative`}
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Hover Description */}
                  <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    theme === 'dark' 
                      ? 'bg-dark-card/90 text-golden-100' 
                      : 'bg-white/90 text-gray-800'
                  } rounded-full p-4`}>
                    <p className="text-sm">{member.description}</p>
                  </div>
                </div>
                <h3 className={`text-xl font-semibold ${
                  theme === 'dark' ? 'text-golden-200' : 'text-gray-900'
                }`}>{member.name}</h3>
                <p className={`${
                  theme === 'dark' ? 'text-golden-300' : 'text-gray-600'
                } mb-3`}>
                  {member.role}
                </p>
                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`hover:scale-110 transition-transform ${
                      theme === 'dark' ? 'text-golden-400 hover:text-golden-300' : 'text-primary-600 hover:text-primary-700'
                    }`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`hover:scale-110 transition-transform ${
                      theme === 'dark' ? 'text-golden-400 hover:text-golden-300' : 'text-primary-600 hover:text-primary-700'
                    }`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}