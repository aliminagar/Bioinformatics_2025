import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, FlaskRound as Flask, Database, Brain, ChevronRight } from 'lucide-react';

const Home = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: 'Core Concepts',
      description: 'Master the fundamentals of DNA, RNA, and protein analysis',
      link: '/core-concepts'
    },
    {
      icon: Flask,
      title: 'Practical Tools',
      description: 'Learn essential bioinformatics tools and techniques',
      link: '/tools'
    },
    {
      icon: Database,
      title: 'Resources',
      description: 'Access comprehensive learning materials and references',
      link: '/resources'
    },
    {
      icon: Brain,
      title: 'Advanced Topics',
      description: 'Explore cutting-edge developments in bioinformatics',
      link: '/advanced-topics'
    }
  ];

  const molecularImages = [
    {
      title: "DNA Structure",
      description: "The blueprint of life",
      image: "https://cdn.pixabay.com/photo/2016/07/06/07/01/deoxyribonucleic-acid-1500071_1280.jpg",
      alt: "DNA double helix structure visualization"
    },
    {
      title: "RNA Transcription",
      description: "Gene expression in action",
      image: "https://media.istockphoto.com/id/929089984/vector/dna-replication-protein-synthesis-transcription-and-translation.jpg?s=1024x1024&w=is&k=20&c=7UGi5tMJH3YSPfOCjhQrKWABYD9C6sdevsjWxvaZp54=",
      alt: "RNA transcription and protein synthesis illustration"
    },
    {
      title: "Brain Proteins",
      description: "Neural molecular machinery",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
      alt: "Brain protein structure visualization"
    }
  ];

  return (
    <div>
      <section 
        className="min-h-screen -mt-8 flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?auto=format&fit=crop&q=80&w=2070')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Your Gateway to Bioinformatics Mastery
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Free comprehensive platform covering everything from Mendel to CRISPR.
              Perfect for undergrad to PhD students.
            </p>
            <Link to="/core-concepts" className="btn-primary inline-flex items-center text-lg px-8 py-3">
              Start Learning
              <ChevronRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Molecular Visualization Section */}
      <section className="py-16 bg-gradient-to-b from-background to-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12 text-gray-900"
          >
            Explore Molecular Structures
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {molecularImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/90">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="resource-card"
              >
                <item.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link
                  to={item.link}
                  className="text-primary hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white rounded-2xl shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why BioSpark?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our platform offers a structured learning path from basic genetics to advanced
              bioinformatics, with hands-on tutorials and real-world applications. Whether
              you're a student or researcher, we provide the resources you need to excel
              in computational biology.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/history" className="btn-primary">
                Explore Our Timeline
              </Link>
              <Link
                to="/resources"
                className="bg-white border-2 border-primary text-primary hover:bg-blue-50 font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                View Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;