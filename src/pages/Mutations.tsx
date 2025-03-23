import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Tabs from '@radix-ui/react-tabs';
import { ChevronRight } from 'lucide-react';

const Mutations = () => {
  const sections = [
    {
      category: "Introduction",
      items: [
        {
          title: "What Are Mutations?",
          content: "A mutation is a permanent alteration in the nucleotide sequence of DNA, ranging from a single base change to large chromosomal rearrangements. They occur naturally due to errors in DNA replication, environmental factors (e.g., UV radiation), or chemical mutagens. In bioinformatics, mutations are studied to understand genetic diseases, evolutionary relationships, and biodiversity."
        },
        {
          title: "Detection Methods",
          content: "Mutations are identified using sequencing technologies (e.g., NGS) and tools like GATK or VarScan, which compare genomes to reference sequences. Modern bioinformatics pipelines can detect various types of mutations with high accuracy."
        }
      ]
    },
    {
      category: "Cool Facts",
      items: [
        {
          title: "Human Mutations",
          content: "Every human has ~60 new mutations not present in their parents. The CCR5-Δ32 mutation provides HIV resistance in some European populations. Red hair and blue eyes result from mutations in MC1R and OCA2 genes. The FOXP2 gene mutation is linked to speech development in humans. A mutation in the LRP5 gene leads to stronger bones in some populations."
        },
        {
          title: "Plant Mutations",
          content: "The orange color of carrots comes from a mutation increasing beta-carotene production. Polyploidy mutations in plants lead to larger fruits. The 'Star Gazer' lily was created through radiation-induced mutations. The non-shattering seed trait in domesticated crops came from beneficial mutations. C4 photosynthesis evolved multiple times through convergent mutations."
        },
        {
          title: "Animal Mutations",
          content: "White tigers result from a mutation in the SLC45A2 gene. The axolotl's regenerative abilities are linked to unique mutations. Double muscling in Belgian Blue cattle is caused by a myostatin gene mutation. Some Arctic fish produce antifreeze proteins due to adaptive mutations. Electric eels developed their shocking ability through sodium channel gene mutations."
        },
        {
          title: "General Facts",
          content: "Mutations occur at a rate of about 1 in 10^9 base pairs per cell division. Cosmic rays from space can cause mutations. Some mutations are 'mosaic,' occurring only in certain cells. The 'hopeful monster' hypothesis suggests rare, large mutations can create new species rapidly. UV-induced mutations in skin cells are a leading cause of melanoma."
        },
        {
          title: "Dinosaur and Bird Evolution Mutations",
          content: "Dinosaurs like Velociraptor had feathers due to mutations in keratin genes, a trait passed to modern birds. A mutation in the BMP4 gene (~125 million years ago) helped dinosaurs evolve beaks. HOX gene mutations in theropod dinosaurs reduced forelimbs, leading to wings in birds like Archaeopteryx. Mutations in COL1A1 genes altered bone density in dinosaurs, aiding flight in early birds. Scale-to-feather transition in dinosaurs involved SHH gene mutations, now studied in chicken embryos."
        }
      ]
    },
    {
      category: "Types of Mutations",
      items: [
        {
          title: "Point Mutations",
          content: "Single nucleotide changes including: Silent mutations (no change in protein), Missense mutations (changes amino acid, e.g., sickle cell anemia: GAG → GTG), and Nonsense mutations (introduces stop codon, e.g., cystic fibrosis: CAG → TAG)."
        },
        {
          title: "Insertions/Deletions",
          content: "Adding or removing nucleotides: Small indels causing frameshifts (e.g., Huntington's disease: CAG repeat expansion) and Large indels that can delete entire genes (e.g., Duchenne muscular dystrophy)."
        },
        {
          title: "Chromosomal Mutations",
          content: "Large-scale changes including: Deletions (loss of segment), Duplications (extra copies), Inversions (reversed orientation), and Translocations (swapped segments, e.g., Philadelphia chromosome in leukemia)."
        }
      ]
    },
    {
      category: "Eye Color Genetics",
      items: [
        {
          title: "Introduction to Eye Color",
          content: "Eye color is a polygenic trait influenced by mutations affecting melanin production and distribution in the iris. The primary genes involved are OCA2 and HERC2 on chromosome 15, which regulate melanin synthesis."
        },
        {
          title: "Color Spectrum",
          content: "Brown eyes (55% globally) result from high eumelanin levels. Blue eyes (~10%) occur with low eumelanin and light scattering. Green eyes (~2%) combine low eumelanin with pheomelanin. Rare colors include amber, violet, and heterochromia."
        }
      ]
    },
    {
      category: "Significance",
      items: [
        {
          title: "Evolution",
          content: "Mutations introduce genetic variation for natural selection, exemplified by the peppered moth color change during the Industrial Revolution."
        },
        {
          title: "Disease",
          content: "Harmful mutations cause genetic disorders, such as BRCA1 mutations increasing breast cancer risk."
        },
        {
          title: "Adaptation",
          content: "Beneficial mutations enhance survival, like lactase persistence in humans for milk digestion."
        }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(sections[0].category);

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Mutations: The Drivers of Evolution and Diversity
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Explore how genetic changes shape life's diversity and drive evolution.
        </p>

        <Tabs.Root
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="flex flex-col md:flex-row gap-8"
        >
          <Tabs.List className="flex flex-row md:flex-col md:w-64 space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
            {sections.map((section) => (
              <Tabs.Trigger
                key={section.category}
                value={section.category}
                className={`px-4 py-2 rounded-lg text-left flex items-center justify-between whitespace-nowrap ${
                  selectedCategory === section.category
                    ? 'bg-blue-50 text-primary font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {section.category}
                <ChevronRight
                  className={`ml-2 h-4 w-4 transition-transform ${
                    selectedCategory === section.category ? 'rotate-90' : ''
                  }`}
                />
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {sections.map((section) => (
            <Tabs.Content
              key={section.category}
              value={section.category}
              className="flex-1"
            >
              <div className="grid gap-6">
                {section.items.map((item, index) => (
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

export default Mutations;