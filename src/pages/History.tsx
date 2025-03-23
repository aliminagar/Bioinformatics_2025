import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { BookOpen, Dna, FlaskRound as Flask, Brain, Award, Microscope } from 'lucide-react';

const History = () => {
  const timelineEvents = [
    {
      date: '1865',
      title: "Mendel's Laws of Inheritance",
      description: "Gregor Mendel establishes the basic principles of heredity through his experiments with pea plants, laying the foundation for modern genetics.",
      icon: Flask
    },
    {
      date: '1953',
      title: 'DNA Structure Discovery',
      description: "Watson and Crick, building on the work of Rosalind Franklin and Maurice Wilkins, reveal DNA's double helix structure, revolutionizing our understanding of genetic material.",
      icon: Dna
    },
    {
      date: '1977',
      title: 'Sanger Sequencing',
      description: "Frederick Sanger develops DNA sequencing method, enabling scientists to read genetic code and earning him his second Nobel Prize.",
      icon: BookOpen
    },
    {
      date: '1990-2003',
      title: 'Human Genome Project',
      description: "International collaboration successfully maps and sequences the entire human genome, marking a milestone in genetic research.",
      icon: Brain
    },
    {
      date: '2012',
      title: 'CRISPR-Cas9 Gene Editing',
      description: "Jennifer Doudna and Emmanuelle Charpentier publish their groundbreaking work on CRISPR-Cas9 as a programmable gene-editing tool, revolutionizing genetic engineering. This discovery earned them the 2020 Nobel Prize in Chemistry.",
      icon: Award
    },
    {
      date: '2013',
      title: 'CRISPR Human Applications',
      description: "Feng Zhang and George Church's teams independently adapt CRISPR-Cas9 for use in human cells, opening new possibilities for treating genetic diseases.",
      icon: Microscope
    }
  ];

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mb-12 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          The Evolution of Modern Genetics & Bioinformatics
        </h1>
        <p className="text-xl text-gray-600">
          Explore the key milestones that shaped our understanding of genetics and
          computational biology.
        </p>
      </motion.div>

      <VerticalTimeline>
        {timelineEvents.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            date={event.date}
            icon={<event.icon size={24} />}
          >
            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
            <p className="text-gray-600">{event.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default History;