import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-primary mb-6">Our Mission</h1>
          <p className="text-xl text-gray-700">
            Empower scientists to decode life with intuitive tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <Lightbulb className="h-16 w-16 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Innovation</h3>
            <p className="text-gray-600">
              Pushing the boundaries of bioinformatics with cutting-edge technology
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <Users className="h-16 w-16 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Collaboration</h3>
            <p className="text-gray-600">
              Building bridges between researchers worldwide
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <Target className="h-16 w-16 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Impact</h3>
            <p className="text-gray-600">
              Accelerating discoveries that change lives
            </p>
          </motion.div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
          <p className="text-gray-700 mb-6">
            Founded in 2025 by a team of bioinformaticians and software engineers, 
            BioSpark emerged from a shared vision to democratize biological data analysis. 
            Our founders experienced firsthand the challenges of working with complex 
            biological datasets and were determined to create a solution that would 
            make powerful analysis tools accessible to all researchers.
          </p>
          <p className="text-gray-700">
            Today, we're proud to serve thousands of scientists worldwide, 
            helping them unlock new insights and accelerate their research. 
            Our commitment to innovation and scientific excellence drives us 
            to continuously evolve our platform, ensuring researchers have 
            the tools they need to make groundbreaking discoveries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;