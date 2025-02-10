import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Truck, 
  DollarSign, 
  BarChart3, 
  Shield, 
  MapPin,
  ArrowRight,
  Menu,
  X,
  Smartphone,
  Download,
  CheckCircle,
  Sun,
  Moon
} from 'lucide-react';
import { AnimatedSection } from './components/AnimatedSection';
import { LoadingScreen } from './components/LoadingScreen';
import { WelcomeOverlay } from './components/WelcomeOverlay';
import About from './pages/About';
import { useTheme } from './context/ThemeContext';

function Home() {
  const { theme } = useTheme();
  
  return (
    <>
      {/* Hero Section */}
      <AnimatedSection className="pt-20 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                Revolutionizing Freight Transport Through Digital Innovation
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg text-gray-600"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Connect with trusted carriers, get competitive bids, and streamline your logistics operations with our AI-powered marketplace.
              </motion.p>
              <motion.div 
                className="mt-8 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <button className="bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition-colors flex items-center justify-center group">
                  Post a Shipment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full hover:bg-primary-50 transition-colors">
                  Join as Driver
                </button>
              </motion.div>
            </div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
                alt="Truck on highway"
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-golden-100' : 'text-gray-900'}`}>
              Why Choose TruckerBid
            </h2>
            <p className={`mt-4 text-lg ${theme === 'dark' ? 'text-golden-300' : 'text-gray-600'}`}>
              Our platform offers comprehensive solutions for modern logistics challenges
            </p>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className={`h-8 w-8 ${theme === 'dark' ? 'text-golden-400' : 'text-primary-600'}`} />,
                title: "Real-time Bidding",
                description: "Get competitive rates through our transparent bidding system"
              },
              {
                icon: <Shield className={`h-8 w-8 ${theme === 'dark' ? 'text-golden-400' : 'text-primary-600'}`} />,
                title: "Secure Payments",
                description: "Protected transactions and escrow services for peace of mind"
              },
              {
                icon: <MapPin className={`h-8 w-8 ${theme === 'dark' ? 'text-golden-400' : 'text-primary-600'}`} />,
                title: "Route Optimization",
                description: "AI-powered routes to maximize efficiency and reduce costs"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className={`${theme === 'dark' ? 'bg-dark-card' : 'bg-white'} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`${theme === 'dark' ? 'bg-golden-900/20' : 'bg-primary-50'} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-golden-200' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`mt-2 ${theme === 'dark' ? 'text-golden-300' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">How TruckerBid Works</h2>
            <p className="mt-4 text-lg text-gray-600">
              Simple steps to transform your logistics operations
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Post Your Load",
                description: "Share your shipping requirements with our network"
              },
              {
                step: "2",
                title: "Receive Bids",
                description: "Get competitive offers from verified carriers"
              },
              {
                step: "3",
                title: "Select Carrier",
                description: "Choose the best bid based on price and ratings"
              },
              {
                step: "4",
                title: "Track & Pay",
                description: "Monitor shipments and process secure payments"
              }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-golden-100' : 'text-gray-900'}`}>
                Benefits for Everyone
              </h2>
              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "For Shippers",
                    benefits: [
                      "Competitive pricing through real-time bidding",
                      "Access to verified carriers",
                      "Transparent tracking and monitoring",
                      "Secure payment processing"
                    ]
                  },
                  {
                    title: "For Carriers",
                    benefits: [
                      "Consistent load opportunities",
                      "Reduced empty miles",
                      "Quick payment processing",
                      "Route optimization suggestions"
                    ]
                  }
                ].map((group, index) => (
                  <motion.div 
                    key={index} 
                    className={`${theme === 'dark' ? 'bg-dark-card border border-golden-800/30' : 'bg-white'} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-golden-200' : 'text-gray-900'} mb-4`}>
                      {group.title}
                    </h3>
                    <ul className="space-y-3">
                      {group.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className={`flex items-center ${theme === 'dark' ? 'text-golden-300' : 'text-gray-600'}`}>
                          <DollarSign className={`h-5 w-5 ${theme === 'dark' ? 'text-golden-400' : 'text-primary-600'} mr-2`} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                alt="Logistics center"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* App Showcase Section */}
      <AnimatedSection className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Experience TruckerBid on Mobile
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Manage your shipments, track deliveries, and connect with carriers - all from your pocket
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: <Smartphone className="h-6 w-6 text-primary-400" />,
                  title: "Intuitive Mobile Interface",
                  description: "User-friendly design that puts everything at your fingertips"
                },
                {
                  icon: <CheckCircle className="h-6 w-6 text-primary-400" />,
                  title: "Real-time Tracking",
                  description: "Monitor your shipments with live updates and notifications"
                },
                {
                  icon: <Shield className="h-6 w-6 text-primary-400" />,
                  title: "Secure Transactions",
                  description: "Process payments and manage documents safely on the go"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <button className="flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition-colors group">
                  <Download className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                  Download for iOS
                </button>
                <button className="flex items-center justify-center gap-2 bg-secondary-600 text-white px-8 py-3 rounded-full hover:bg-secondary-700 transition-colors group">
                  <Download className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                  Download for Android
                </button>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Phone Frame */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-[2.5rem] blur-xl"
                  animate={{ 
                    scale: [1, 1.02, 1],
                    rotate: [0, 1, 0] 
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div 
                  className="relative bg-gray-800 rounded-[2.5rem] p-4 shadow-2xl border-8 border-gray-700"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=600&q=80"
                    alt="TruckerBid mobile app interface"
                    className="rounded-[2rem] shadow-lg"
                  />
                </motion.div>
              </div>

              {/* Feature Highlights */}
              <motion.div
                className="absolute -right-4 top-1/4 bg-white p-4 rounded-lg shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">Real-time Updates</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-4 bottom-1/4 bg-white p-4 rounded-lg shadow-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary-600" />
                  <span className="text-sm font-medium">Secure Payments</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="bg-gradient-to-r from-primary-600 to-secondary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Transform Your Logistics?</h2>
          <p className="mt-4 text-xl text-primary-100">
            Join thousands of businesses and carriers already using TruckerBid
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              className="bg-white text-primary-600 px-8 py-3 rounded-full hover:bg-primary-50 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Get Started Now
            </motion.button>
            <motion.button 
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-primary-700 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Contact Sales
            </motion.button>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowWelcome(true);
    // Automatically transition to main content after 2 seconds
    setTimeout(() => {
      setShowWelcome(false);
      setShowContent(true);
    }, 2000);
  };

  const handleWelcomeComplete = () => {
    setShowContent(true);
  };

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <WelcomeOverlay show={showWelcome} onComplete={handleWelcomeComplete} />

      <motion.div
        className={`min-h-screen ${
          theme === 'dark' 
            ? 'bg-dark text-golden-100' 
            : 'bg-white text-gray-900'
        } transition-colors duration-200`}
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Map Background */}
        <div className="map-background" />
        
        {/* Navigation */}
        <nav className={`${
          theme === 'dark' 
            ? 'bg-dark-card border-b border-golden-800/30' 
            : 'bg-white'
        } shadow-sm fixed w-full z-50 transition-colors duration-200`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link to="/" className="flex items-center">
                <Truck className={`h-8 w-8 ${
                  theme === 'dark' ? 'text-golden-400' : 'text-primary-600'
                }`} />
                <span className={`ml-2 text-xl font-bold ${
                  theme === 'dark' ? 'text-golden-200' : 'text-gray-900'
                }`}>TruckerBid</span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className={`${
                  theme === 'dark' 
                    ? 'text-golden-300 hover:text-golden-200' 
                    : 'text-gray-600 hover:text-primary-600'
                } transition-colors`}>Home</Link>
                <Link to="/about" className={`${
                  theme === 'dark' 
                    ? 'text-golden-300 hover:text-golden-200' 
                    : 'text-gray-600 hover:text-primary-600'
                } transition-colors`}>About</Link>
                <a href="#features" className={`${
                  theme === 'dark' 
                    ? 'text-golden-300 hover:text-golden-200' 
                    : 'text-gray-600 hover:text-primary-600'
                } transition-colors`}>Features</a>
                <a href="#how-it-works" className={`${
                  theme === 'dark' 
                    ? 'text-golden-300 hover:text-golden-200' 
                    : 'text-gray-600 hover:text-primary-600'
                } transition-colors`}>How it Works</a>
                <button 
                  onClick={toggleTheme}
                  className={`p-2 rounded-full ${
                    theme === 'dark' 
                      ? 'bg-golden-900/30 text-golden-400 hover:bg-golden-900/50' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  } transition-colors`}
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <button className={`${
                  theme === 'dark'
                    ? 'bg-golden-600 hover:bg-golden-700 text-black'
                    : 'bg-primary-600 hover:bg-primary-700 text-white'
                } px-6 py-2 rounded-full transition-colors`}>
                  Get Started
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center gap-4">
                <button 
                  onClick={toggleTheme}
                  className={`p-2 rounded-full ${
                    theme === 'dark' 
                      ? 'bg-golden-900/30 text-golden-400' 
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={theme === 'dark' ? 'text-golden-300' : 'text-gray-600'}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
                theme === 'dark' ? 'bg-dark-card' : 'bg-white'
              }`}>
                <Link to="/" className={`block px-3 py-2 ${
                  theme === 'dark' 
                    ? 'text-golden-300 hover:text-golden-200' 
                    : 'text-gray-600 hover:text-primary-600'
                } transition-colors`}>Home</Link>
                <Link to="/about" className={`block px-3 py-2 ${
                  theme === 'dark' 
                    ? 'text-golden-300 hover:text-golden-200' 
                    : 'text-gray-600 hover:text-primary-600'
                } transition-colors`}>About</Link>
                <a href="#features" className={`block px-3 py-2 ${
                  theme === 'dark' 
                    ? 'text-golden-300 hover:text-golden-200' 
                    : 'text-gray-600 hover:text-primary-600'
                } transition-colors`}>Features</a>
                <a href="#how-it-works" className={`block px-3 py-2 ${
                  theme === 'dark' 
                    ? 'text-golden-300 hover:text-golden-200' 
                    : 'text-gray-600 hover:text-primary-600'
                } transition-colors`}>How it Works</a>
                <button className={`w-full mt-2 ${
                  theme === 'dark'
                    ? 'bg-golden-600 hover:bg-golden-700 text-black'
                    : 'bg-primary-600 hover:bg-primary-700 text-white'
                } px-6 py-2 rounded-full transition-colors`}>
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <footer className={`${
          theme === 'dark' 
            ? 'bg-dark-card border-t border-golden-800/30 text-golden-100' 
            : 'bg-gray-900 text-white'
        } py-12 transition-colors duration-200`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center">
                  <Truck className="h-8 w-8 text-primary-400" />
                  <span className="ml-2 text-xl font-bold">TruckerBid</span>
                </div>
                <p className="mt-4 text-gray-400">
                  Revolutionizing freight transport through digital innovation
                </p>
              </div>
              {[
                {
                  title: "Company",
                  links: ["About", "Careers", "Press", "Contact"]
                },
                {
                  title: "Resources",
                  links: ["Blog", "Help Center", "Partners", "API Docs"]
                },
                {
                  title: "Legal",
                  links: ["Privacy", "Terms", "Security", "Compliance"]
                }
              ].map((column, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg">{column.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>© 2024 TruckerBid. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </motion.div>
    </Router>
  );
}

export default App;