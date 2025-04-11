import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, BookOpen, Users } from 'lucide-react';
import { ThreeScene } from '../components/ThreeScene';
import { Navigation } from '../components/Navigation';

function LandingPage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Circular Disk Pointer */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-green-300 via-green-500 to-green-700 opacity-20 blur-[300px] transition-transform duration-75"
        style={{
          transform: `translate(${cursorPosition.x - 300}px, ${cursorPosition.y - 300}px)`,
        }}
      />

      <ThreeScene />
      <Navigation />

      <main className="relative pt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
              Revolutionizing Dyslexia Treatment
            </h1>
            <p className="text-lg md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Discover cutting-edge solutions that blend neuroscience and technology to transform lives.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 text-black px-8 py-3 rounded-full font-semibold flex items-center mx-auto space-x-2 transition-transform shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'Neural Adaptation',
                description: 'Our technology adapts to your brain\'s unique patterns.',
              },
              {
                icon: BookOpen,
                title: 'Personalized Learning',
                description: 'Custom-tailored exercises for your specific needs.',
              },
              {
                icon: Users,
                title: 'Expert Support',
                description: '24/7 access to specialized dyslexia professionals.',
              },
            ].map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-800 via-black to-gray-900 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-transform backdrop-blur-lg"
              >
                <Icon className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
                <p className="text-white">{description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-r from-green-500/20 to-green-700/20 rounded-3xl p-8 md:p-12 text-center backdrop-blur-lg shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Ready to Transform Your Reading Experience?
            </h2>
            <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
              Join thousands of others who have already improved their reading abilities with our revolutionary treatment.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-r from-green-500 to-green-700 text-black px-8 py-3 rounded-full font-semibold hover:from-green-400 hover:to-green-600 transition-transform shadow-lg"
            >
              Schedule a Free Consultation
            </motion.button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;