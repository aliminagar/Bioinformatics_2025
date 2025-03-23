import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Cloud, Database, Workflow } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-primary mb-6">
            Powerful Features for Modern Research
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover the tools that make BioSpark the leading platform for biological data analysis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <Database className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-4">Data Analysis</h3>
            <p className="text-gray-600 mb-4">
              Process and analyze large-scale biological datasets with powerful algorithms
              and machine learning techniques.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Advanced statistical analysis</li>
              <li>• Machine learning integration</li>
              <li>• Real-time processing</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <BarChart2 className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-4">Visualization</h3>
            <p className="text-gray-600 mb-4">
              Transform complex data into clear, interactive visualizations that reveal
              hidden patterns and insights.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Interactive charts and graphs</li>
              <li>• 3D molecular visualization</li>
              <li>• Custom visualization tools</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <Cloud className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-4">Cloud Integration</h3>
            <p className="text-gray-600 mb-4">
              Seamlessly connect with cloud services for scalable storage and
              computing resources.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Secure data storage</li>
              <li>• Scalable computing</li>
              <li>• Easy collaboration</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <Workflow className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-4">Custom Workflows</h3>
            <p className="text-gray-600 mb-4">
              Build and automate custom analysis pipelines tailored to your
              research needs.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Drag-and-drop workflow builder</li>
              <li>• Automated pipeline execution</li>
              <li>• Version control integration</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;