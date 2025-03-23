import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Tabs from '@radix-ui/react-tabs';
import { ChevronRight } from 'lucide-react';

const CoreConcepts = () => {
  const concepts = [
    {
      category: "CRISPR Technology",
      items: [
        {
          title: "CRISPR-Cas9 Mechanism",
          content: "Explore how Cas9 nuclease uses guide RNA (gRNA) to target specific DNA sequences, creating double-strand breaks for gene editing."
        },
        {
          title: "CRISPR Applications",
          content: "Learn about CRISPR's role in gene knockout, knock-in, and base editing, with examples like correcting mutations in cystic fibrosis."
        },
        {
          title: "CRISPR Ethics",
          content: "Understand the ethical debates around germline editing, including the 2018 controversy of CRISPR-edited babies in China."
        }
      ]
    },
    {
      category: "Proteomics",
      items: [
        {
          title: "Proteomics via Mass Spectrometry",
          content: "Dive into mass spectrometry techniques (e.g., MALDI-TOF) for identifying proteins and post-translational modifications (PTMs)."
        },
        {
          title: "Protein-Protein Interactions",
          content: "Study methods like co-immunoprecipitation and yeast two-hybrid screening to map interaction networks."
        },
        {
          title: "Proteomics and Disease",
          content: "Explore how proteomic profiling identifies biomarkers, such as in Alzheimer's disease with amyloid-beta peptides."
        }
      ]
    },
    {
      category: "Metabolomics",
      items: [
        {
          title: "Metabolomics Overview",
          content: "Learn about metabolomics as the study of small molecules (metabolites) in biological systems, mapping metabolic pathways."
        },
        {
          title: "LC-MS in Metabolomics",
          content: "Understand liquid chromatography-mass spectrometry (LC-MS) for high-throughput metabolite identification."
        },
        {
          title: "Metabolic Pathway Analysis",
          content: "Use tools like KEGG and MetaboAnalyst to analyze pathways, such as glycolysis or the TCA cycle."
        }
      ]
    },
    {
      category: "Transcriptomics",
      items: [
        {
          title: "Transcriptomics and RNA-Seq",
          content: "Discover RNA sequencing workflows, from library prep to differential expression analysis using tools like DESeq2."
        },
        {
          title: "Single-Cell RNA-Seq",
          content: "Explore single-cell transcriptomics to study cellular heterogeneity, with applications in cancer research."
        },
        {
          title: "Non-Coding RNAs",
          content: "Investigate the roles of miRNAs, lncRNAs, and piRNAs in gene regulation and their bioinformatics analysis."
        }
      ]
    },
    {
      category: "Epigenetics",
      items: [
        {
          title: "Epigenetics and DNA Methylation",
          content: "Learn how DNA methylation at CpG islands regulates gene expression, analyzed via bisulfite sequencing."
        },
        {
          title: "Histone Modifications",
          content: "Study histone acetylation and methylation, their impact on chromatin structure, and detection via ChIP-seq."
        },
        {
          title: "Epigenetic Clocks",
          content: "Understand how DNA methylation patterns can predict biological age, with applications in aging research."
        }
      ]
    },
    {
      category: "Advanced Topics",
      items: [
        {
          title: "Systems Biology Networks",
          content: "Dive into gene regulatory networks using ordinary differential equations (ODEs) to model dynamics, like the lac operon."
        },
        {
          title: "Synthetic Biology",
          content: "Explore designing synthetic gene circuits using bioinformatics tools, with examples like the repressilator."
        },
        {
          title: "Metagenomics",
          content: "Study microbial communities through shotgun sequencing, analyzing diversity in environments like the human gut."
        }
      ]
    },
    {
      category: "Modern Applications",
      items: [
        {
          title: "Structural Bioinformatics",
          content: "Use tools like AlphaFold to predict protein 3D structures, with applications in drug design."
        },
        {
          title: "Immunoinformatics",
          content: "Analyze immune system data, such as predicting T-cell epitopes for vaccine development using MHC binding algorithms."
        },
        {
          title: "Multi-Omics Integration",
          content: "Combine genomics, proteomics, and metabolomics data to study complex diseases like cancer holistically."
        }
      ]
    },
    {
      category: "Emerging Technologies",
      items: [
        {
          title: "Machine Learning in Bioinformatics",
          content: "Understand how ML models (e.g., random forests, neural networks) predict protein functions or classify variants."
        },
        {
          title: "Spatial Transcriptomics",
          content: "Explore techniques like Visium to map gene expression in tissue sections, revealing spatial patterns."
        },
        {
          title: "Personalized Medicine",
          content: "Learn how integrative analysis of patient data guides personalized treatment strategies."
        }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(concepts[0].category);

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Foundations of Bioinformatics
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Master the essential concepts that form the backbone of modern bioinformatics.
        </p>

        <Tabs.Root
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="flex flex-col md:flex-row gap-8"
        >
          <Tabs.List className="flex flex-row md:flex-col md:w-64 space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
            {concepts.map((category) => (
              <Tabs.Trigger
                key={category.category}
                value={category.category}
                className={`px-4 py-2 rounded-lg text-left flex items-center justify-between whitespace-nowrap ${
                  selectedCategory === category.category
                    ? 'bg-teal-50 text-teal-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {category.category}
                <ChevronRight
                  className={`ml-2 h-4 w-4 transition-transform ${
                    selectedCategory === category.category ? 'rotate-90' : ''
                  }`}
                />
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {concepts.map((category) => (
            <Tabs.Content
              key={category.category}
              value={category.category}
              className="flex-1"
            >
              <div className="grid gap-6">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.content}</p>
                  </motion.div>
                ))}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </motion.div>
    </div>
  );
};

export default CoreConcepts;