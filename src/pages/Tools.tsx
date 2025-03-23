import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Tabs from '@radix-ui/react-tabs';
import { ChevronRight, Dna, Database, Brain, Network, FileCode, Link as LinkIcon, Dices, BookOpen } from 'lucide-react';

const Tools = () => {
  const toolCategories = [
    {
      name: "Sequence Analysis and Alignment",
      icon: Dna,
      tools: [
        {
          name: "BLAST",
          description: "Searches for sequence similarity in DNA, RNA, or protein databases (e.g., NCBI), widely used for identifying homologous genes.",
          url: "https://blast.ncbi.nlm.nih.gov/",
          tutorial: "https://www.ncbi.nlm.nih.gov/books/NBK1734/"
        },
        {
          name: "Clustal Omega",
          description: "Aligns multiple DNA or protein sequences, ideal for phylogenetic studies and identifying conserved regions.",
          url: "https://www.ebi.ac.uk/Tools/msa/clustalo/",
          tutorial: "https://www.ebi.ac.uk/seqdb/confluence/display/JDSAT/Clustal+Omega+Help+and+Documentation"
        },
        {
          name: "Bowtie2",
          description: "Aligns short sequencing reads to a reference genome, commonly used in RNA-seq and ChIP-seq pipelines.",
          url: "https://bowtie-bio.sourceforge.net/bowtie2/",
          tutorial: "https://bowtie-bio.sourceforge.net/bowtie2/manual.shtml"
        },
        {
          name: "MAFFT",
          description: "Performs fast and accurate multiple sequence alignment, especially for large datasets like viral genomes.",
          url: "https://mafft.cbrc.jp/alignment/software/",
          tutorial: "https://mafft.cbrc.jp/alignment/software/manual/manual.html"
        },
        {
          name: "MUSCLE",
          description: "Aligns protein sequences with high accuracy, often used in evolutionary biology to study protein families.",
          url: "https://www.drive5.com/muscle/",
          tutorial: "https://www.drive5.com/muscle/manual/"
        }
      ]
    },
    {
      name: "Epigenetics",
      icon: Dices,
      tools: [
        {
          name: "ENCODE Portal",
          description: "Comprehensive database of epigenetic marks, including DNA methylation, histone modifications, and chromatin accessibility data across multiple species and cell types.",
          url: "https://www.encodeproject.org/",
          tutorial: "https://www.encodeproject.org/help/getting-started/"
        },
        {
          name: "Bismark",
          description: "Leading tool for analyzing bisulfite sequencing data to map DNA methylation patterns genome-wide. Supports both single-end and paired-end reads.",
          url: "https://www.bioinformatics.babraham.ac.uk/projects/bismark/",
          tutorial: "https://rawgit.com/FelixKrueger/Bismark/master/Docs/Bismark_User_Guide.html"
        },
        {
          name: "MACS2",
          description: "Model-based Analysis of ChIP-Seq data. Essential for identifying histone modification peaks and other epigenetic marks from sequencing data.",
          url: "https://github.com/macs3-project/MACS",
          tutorial: "https://github.com/macs3-project/MACS/wiki/Advanced-Features"
        },
        {
          name: "ChromHMM",
          description: "Segments the genome into chromatin states based on combinatorial patterns of histone modifications. Widely used for understanding chromatin organization.",
          url: "http://compbio.mit.edu/ChromHMM/",
          tutorial: "http://compbio.mit.edu/ChromHMM/ChromHMM_manual.pdf"
        },
        {
          name: "methylKit",
          description: "R package for analyzing DNA methylation data from bisulfite sequencing. Provides comprehensive statistical analysis and visualization tools.",
          url: "https://bioconductor.org/packages/release/bioc/html/methylKit.html",
          tutorial: "https://bioconductor.org/packages/release/bioc/vignettes/methylKit/inst/doc/methylKit.html"
        },
        {
          name: "WGBS Tools",
          description: "Suite of tools for analyzing whole-genome bisulfite sequencing data, including quality control, mapping, and methylation calling.",
          url: "https://www.bioinformatics.babraham.ac.uk/projects/bismark/",
          tutorial: "https://www.bioinformatics.babraham.ac.uk/projects/bismark/Bismark_User_Guide.pdf"
        },
        {
          name: "ChIPseeker",
          description: "R/Bioconductor package for ChIP peak annotation, comparison, and visualization. Essential for interpreting histone modification data.",
          url: "https://bioconductor.org/packages/release/bioc/html/ChIPseeker.html",
          tutorial: "https://www.bioconductor.org/packages/release/bioc/vignettes/ChIPseeker/inst/doc/ChIPseeker.html"
        },
        {
          name: "HOMER",
          description: "Comprehensive suite for ChIP-seq analysis, including peak calling, motif discovery, and annotation. Popular for studying transcription factor binding and histone modifications.",
          url: "http://homer.ucsd.edu/homer/",
          tutorial: "http://homer.ucsd.edu/homer/tutorials/index.html"
        }
      ]
    },
    {
      name: "Genome Assembly and Variant Calling",
      icon: FileCode,
      tools: [
        {
          name: "SPAdes",
          description: "Assembles genomes from short reads, optimized for bacterial and small eukaryotic genomes.",
          url: "https://cab.spbu.ru/software/spades/",
          tutorial: "https://cab.spbu.ru/files/release3.15.5/manual.html"
        },
        {
          name: "Canu",
          description: "Assembles long-read sequencing data (e.g., PacBio, Oxford Nanopore), ideal for complex genomes.",
          url: "https://canu.readthedocs.io/",
          tutorial: "https://canu.readthedocs.io/en/latest/tutorial.html"
        },
        {
          name: "GATK",
          description: "Identifies genetic variants (SNPs, indels) from sequencing data, widely used in human genomics.",
          url: "https://gatk.broadinstitute.org/",
          tutorial: "https://gatk.broadinstitute.org/hc/en-us/articles/360035894731-Genomic-variant-calling-with-GATK-4"
        }
      ]
    },
    {
      name: "Transcriptomics and Gene Expression",
      icon: Brain,
      tools: [
        {
          name: "DESeq2",
          description: "Analyzes differential gene expression from RNA-seq data using R, popular for studying disease-related expression changes.",
          url: "https://bioconductor.org/packages/release/bioc/html/DESeq2.html",
          tutorial: "https://bioconductor.org/packages/release/bioc/vignettes/DESeq2/inst/doc/DESeq2.html"
        },
        {
          name: "edgeR",
          description: "Performs differential expression analysis, robust for small sample sizes in RNA-seq experiments.",
          url: "https://bioconductor.org/packages/release/bioc/html/edgeR.html",
          tutorial: "https://www.bioconductor.org/packages/release/bioc/vignettes/edgeR/inst/doc/edgeRUsersGuide.pdf"
        },
        {
          name: "STAR",
          description: "Aligns RNA-seq reads to a reference genome, optimized for speed and accuracy in transcriptomics.",
          url: "https://github.com/alexdobin/STAR",
          tutorial: "https://github.com/alexdobin/STAR/blob/master/doc/STARmanual.pdf"
        }
      ]
    },
    {
      name: "Structural Bioinformatics",
      icon: Database,
      tools: [
        {
          name: "PyMOL",
          description: "Visualizes and analyzes 3D protein structures, widely used for studying protein-ligand interactions.",
          url: "https://pymol.org/",
          tutorial: "https://pymol.org/dokuwiki/doku.php?id=tutorials"
        },
        {
          name: "ChimeraX",
          description: "Advanced tool for 3D visualization of molecular structures, with features for cryo-EM and docking.",
          url: "https://www.cgl.ucsf.edu/chimerax/",
          tutorial: "https://www.rbvi.ucsf.edu/chimerax/docs/user/index.html"
        },
        {
          name: "AlphaFold",
          description: "Predicts protein 3D structures using AI, revolutionizing structural biology.",
          url: "https://alphafold.ebi.ac.uk/",
          tutorial: "https://alphafold.ebi.ac.uk/help"
        }
      ]
    },
    {
      name: "Pathway and Network Analysis",
      icon: Network,
      tools: [
        {
          name: "Cytoscape",
          description: "Visualizes and analyzes molecular interaction networks, such as protein-protein or gene regulatory networks.",
          url: "https://cytoscape.org/",
          tutorial: "https://manual.cytoscape.org/en/stable/"
        },
        {
          name: "KEGG Mapper",
          description: "Maps genes or metabolites to biological pathways in the KEGG database, used in metabolomics.",
          url: "https://www.genome.jp/kegg/mapper.html",
          tutorial: "https://www.genome.jp/kegg/tool/map_pathway.html"
        },
        {
          name: "STRING",
          description: "Predicts protein-protein interactions based on experimental and computational data, aiding systems biology.",
          url: "https://string-db.org/",
          tutorial: "https://string-db.org/cgi/help"
        }
      ]
    },
    {
      name: "Bioinformatics in Action: Case Studies",
      icon: BookOpen,
      tools: [
        {
          name: "Human Genome Project (HGP)",
          description: "The groundbreaking project (1990-2003) that sequenced the entire human genome, identifying ~20,000 genes. Used tools like BLAST and genome assemblers, revolutionizing personalized medicine. The project cost ~$2.7 billion but generated over $1 trillion in economic impact by 2020.",
          url: "https://www.genome.gov/human-genome-project",
          tutorial: "https://www.ncbi.nlm.nih.gov/projects/genome/guide/human/"
        },
        {
          name: "The Cancer Genome Atlas (TCGA)",
          description: "Comprehensive cancer genomics program that molecularly characterized over 20,000 primary cancers spanning 33 cancer types. Used GATK for variant calling and DESeq2 for expression analysis. Data has been cited in over 10,000 research papers since 2006.",
          url: "https://www.cancer.gov/ccg/research/genome-sequencing/tcga",
          tutorial: "https://portal.gdc.cancer.gov/",
        },
        {
          name: "COVID-19 Genomic Analysis",
          description: "Global initiative tracking SARS-CoV-2 variants using tools like Nextstrain for phylogenetic analysis and GISAID for sequence sharing. Key mutations like D614G increased viral transmissibility by 20-50%. Essential for vaccine development and public health strategies.",
          url: "https://nextstrain.org/ncov/global",
          tutorial: "https://docs.nextstrain.org/en/latest/learn/tutorials/sarscov2.html"
        },
        {
          name: "1000 Genomes Project",
          description: "International effort to catalog human genetic variation across populations. Identified over 88 million variants, providing insights into human diversity and disease susceptibility. Data widely used for population genetics and medical research.",
          url: "https://www.internationalgenome.org/",
          tutorial: "https://www.internationalgenome.org/data-portal/sample"
        },
        {
          name: "Neanderthal Genome Project",
          description: "Groundbreaking ancient DNA analysis revealing interbreeding between modern humans and Neanderthals. Used specialized tools for degraded DNA analysis and comparative genomics. Found 1-4% Neanderthal DNA in modern non-African populations.",
          url: "https://www.eva.mpg.de/genetics/genome-projects/neandertal/index.html",
          tutorial: "https://reich.hms.harvard.edu/ancient-dna-protocols"
        }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(toolCategories[0].name);

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Hands-On Bioinformatics
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Master essential tools and techniques for biological data analysis. From sequence alignment to structural analysis,
          these tools form the foundation of modern bioinformatics research.
        </p>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <Tabs.Root
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="flex flex-col md:flex-row gap-8"
          >
            <div className="md:w-80 shrink-0 border-r border-gray-100 pr-6">
              <Tabs.List className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 sticky top-4">
                {toolCategories.map((category) => (
                  <Tabs.Trigger
                    key={category.name}
                    value={category.name}
                    className={`px-4 py-3 rounded-lg text-left flex items-center justify-between whitespace-nowrap transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-blue-50 text-primary font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center min-w-0">
                      <category.icon className="h-5 w-5 mr-3 shrink-0" />
                      <span className="truncate">{category.name}</span>
                    </div>
                    <ChevronRight
                      className={`ml-3 h-4 w-4 shrink-0 transition-transform ${
                        selectedCategory === category.name ? 'rotate-90' : ''
                      }`}
                    />
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
            </div>

            <div className="flex-1 min-w-0">
              {toolCategories.map((category) => (
                <Tabs.Content
                  key={category.name}
                  value={category.name}
                  className="focus-visible:outline-none"
                >
                  <div className="grid gap-4">
                    {category.tools.map((tool, index) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-50 p-6 rounded-lg"
                      >
                        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                          <h3 className="text-xl font-bold text-gray-900">
                            <a
                              href={tool.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-blue-700 flex items-center"
                            >
                              {tool.name}
                              <LinkIcon className="h-4 w-4 ml-2 shrink-0" />
                            </a>
                          </h3>
                          <a
                            href={tool.tutorial}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-teal-600 hover:text-teal-700 font-medium whitespace-nowrap"
                          >
                            View Tutorial
                          </a>
                        </div>
                        <p className="text-gray-600">{tool.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </Tabs.Content>
              ))}
            </div>
          </Tabs.Root>
        </div>
      </motion.div>
    </div>
  );
};

export default Tools;