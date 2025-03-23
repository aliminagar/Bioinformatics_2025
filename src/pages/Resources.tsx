import React from 'react';
import { motion } from 'framer-motion';
import { Book, Link as LinkIcon, Video, FileText } from 'lucide-react';

const Resources = () => {
  const resources = {
    textbooks: [
      {
        title: "Bioinformatics and Functional Genomics",
        author: "Jonathan Pevsner",
        description: "Comprehensive introduction to the field of bioinformatics"
      },
      {
        title: "Biological Sequence Analysis",
        author: "Durbin et al.",
        description: "Probabilistic models of proteins and nucleic acids"
      }
    ],
    papers: [
      {
        title: "The ENCODE Project",
        journal: "Nature",
        year: 2012,
        description: "Encyclopedia of DNA Elements findings",
        url: "https://www.nature.com/articles/nature11247"
      },
      {
        title: "AlphaFold 2",
        journal: "Nature",
        year: 2021,
        description: "Highly accurate protein structure prediction",
        url: "https://www.nature.com/articles/s41586-021-03819-2"
      }
    ],
    courses: [
      {
        title: "Introduction to Genomics",
        platform: "Coursera",
        duration: "6 weeks",
        description: "Basic concepts in genomics and bioinformatics",
        url: "https://www.coursera.org/learn/genomics-research"
      },
      {
        title: "Advanced Bioinformatics",
        platform: "edX",
        duration: "8 weeks",
        description: "Advanced computational methods in biology",
        url: "https://www.edx.org/learn/bioinformatics"
      }
    ],
    additionalResources: [
      {
        title: "BioStars - Q&A Platform",
        url: "https://www.biostars.org",
        description: "Community-driven question and answer platform for bioinformatics"
      },
      {
        title: "NCBI Resources",
        url: "https://www.ncbi.nlm.nih.gov",
        description: "Comprehensive database for biomedical and genomic information"
      },
      {
        title: "European Bioinformatics Institute",
        url: "https://www.ebi.ac.uk",
        description: "Leading center for bioinformatics research and services"
      }
    ]
  };

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Expand Your Knowledge
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Access comprehensive learning materials and references for your bioinformatics journey.
        </p>

        <div className="space-y-12">
          <section>
            <div className="flex items-center mb-6">
              <Book className="h-6 w-6 text-teal-500 mr-3" />
              <h2 className="text-2xl font-bold">Recommended Textbooks</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {resources.textbooks.map((book, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="resource-card"
                >
                  <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                  <p className="text-gray-600 mb-2">by {book.author}</p>
                  <p className="text-gray-500">{book.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-teal-500 mr-3" />
              <h2 className="text-2xl font-bold">Key Papers</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {resources.papers.map((paper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="resource-card"
                >
                  <h3 className="text-xl font-bold mb-2">
                    <a 
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 hover:underline"
                    >
                      {paper.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-2">{paper.journal}, {paper.year}</p>
                  <p className="text-gray-500">{paper.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center mb-6">
              <Video className="h-6 w-6 text-teal-500 mr-3" />
              <h2 className="text-2xl font-bold">Online Courses</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {resources.courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="resource-card"
                >
                  <h3 className="text-xl font-bold mb-2">
                    <a 
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 hover:underline"
                    >
                      {course.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-2">{course.platform} • {course.duration}</p>
                  <p className="text-gray-500">{course.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="bg-teal-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <LinkIcon className="h-6 w-6 text-teal-500 mr-3" />
              <h2 className="text-2xl font-bold">Additional Resources</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {resources.additionalResources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <h3 className="text-xl font-bold mb-3">
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 hover:underline flex items-center"
                    >
                      {resource.title}
                      <LinkIcon className="h-4 w-4 ml-2" />
                    </a>
                  </h3>
                  <p className="text-gray-600">{resource.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Resources;