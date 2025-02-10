import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Truck, Award, Users, Globe } from 'lucide-react';
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

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Michael Chen",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Operations",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
              }
            ].map((member, index) => (
              <div key={index} className={`text-center ${
                theme === 'dark' ? 'bg-dark-card border border-golden-800/30' : ''
              } p-6 rounded-lg`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover hover:scale-105 transition-transform duration-300"
                />
                <h3 className={`text-xl font-semibold ${
                  theme === 'dark' ? 'text-golden-200' : 'text-gray-900'
                }`}>{member.name}</h3>
                <p className={theme === 'dark' ? 'text-golden-300' : 'text-gray-600'}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}