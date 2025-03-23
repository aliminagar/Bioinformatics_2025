import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Tabs from '@radix-ui/react-tabs';
import { ChevronRight } from 'lucide-react';

const AdvancedTopics = () => {
  const topics = [
    {
      category: "Computational Biology",
      items: [
        {
          title: "What Is Computational Biology?",
          content: "Computational biology harnesses mathematics, statistics, and computer science to understand biological systems from molecules to ecosystems. Unlike bioinformatics, which focuses on data analysis, computational biology emphasizes modeling and simulation to predict biological behavior. It integrates experimental data with theoretical models to make predictions about complex biological systems."
        },
        {
          title: "Modeling Approaches",
          content: "Key approaches include Ordinary Differential Equations (ODEs) for gene expression dynamics, stochastic models using the Gillespie algorithm, agent-based modeling for tumor growth, machine learning with tools like TensorFlow, and network models for biological interactions. Tools like COPASI and NetLogo enable sophisticated biological simulations."
        },
        {
          title: "Molecular Dynamics Simulations",
          content: "Advanced computational methods simulate protein folding and molecular interactions over time. Tools like GROMACS and AMBER use physics-based models to predict biomolecular behavior, essential for drug design and understanding protein function. These simulations can reveal protein dynamics at atomic resolution."
        },
        {
          title: "Quantum Biology",
          content: "Study quantum effects in biological systems, from photosynthesis to enzyme catalysis. Quantum tunneling in DNA mutations and quantum coherence in bird navigation reveal nature's quantum mechanisms. This emerging field bridges quantum physics and biology to explain fundamental life processes."
        },
        {
          title: "Systems Biology Modeling",
          content: "Mathematical modeling of biological systems using differential equations and stochastic processes. Examples include predicting metabolic flux, simulating gene regulatory networks, and modeling cell signaling pathways. The repressilator, a synthetic gene circuit modeled in 2000, created the first artificial biological oscillator."
        },
        {
          title: "Evolutionary Algorithms",
          content: "Bio-inspired computational methods that mimic natural selection to solve optimization problems. Applications include protein structure prediction, drug discovery, and metabolic pathway optimization. These algorithms have revolutionized our ability to search vast solution spaces efficiently."
        },
        {
          title: "Neural Networks in Biology",
          content: "Deep learning applications in biological research, from predicting protein structures (AlphaFold) to identifying cancer biomarkers. Convolutional neural networks analyze medical images while recurrent networks predict gene expression. AlphaFold's 2020 breakthrough solved the protein folding problem for 98.5% of human proteins."
        },
        {
          title: "Computational Drug Design",
          content: "In silico methods for drug discovery, including virtual screening, molecular docking, and QSAR modeling. AI-powered approaches accelerate the identification of potential therapeutic compounds. Computational models of HIV spread in the 1990s helped design combination therapies, saving millions of lives."
        },
        {
          title: "Cellular Automata",
          content: "Discrete models simulating complex biological phenomena like pattern formation, tissue growth, and bacterial colony development. Famous examples include Conway's Game of Life applied to biological systems. Alan Turing's 1952 morphogenesis model used similar principles to explain animal coat patterns."
        },
        {
          title: "Cool Facts",
          content: "The Virtual Heart Project can simulate a heartbeat with 99% accuracy. Weather forecasting models use computational biology principles to predict algal blooms. Your gut microbiome's dynamics are modeled using computational biology to optimize probiotic treatments. The first computational biology model was Alan Turing's 1952 work on morphogenesis, explaining patterns like zebra stripes."
        },
        {
          title: "Applications and Impact",
          content: "Computational biology has revolutionized medicine through drug discovery, disease modeling, and personalized treatment strategies. In 2021, computational models predicted SARS-CoV-2 variants' impact, guiding vaccine updates. The field continues to evolve with quantum computing and AI advances, promising new insights into life's complexity."
        }
      ]
    },
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
      category: "Systems Biology",
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

  const [selectedCategory, setSelectedCategory] = useState(topics[0].category);

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Cutting-Edge Bioinformatics
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Explore advanced topics at the forefront of computational biology.
        </p>

        <Tabs.Root
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="flex flex-col md:flex-row gap-8"
        >
          <Tabs.List className="flex flex-row md:flex-col md:w-64 space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
            {topics.map((category) => (
              <Tabs.Trigger
                key={category.category}
                value={category.category}
                className={`px-4 py-2 rounded-lg text-left flex items-center justify-between whitespace-nowrap ${
                  selectedCategory === category.category
                    ? 'bg-blue-50 text-primary font-medium'
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

          {topics.map((category) => (
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

export default AdvancedTopics;