import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

// Import project images
import mineAerial from '@/assets/projects/mine-aerial.jpg';
import businessMeeting from '@/assets/projects/business-meeting.jpg';
import preciousStones from '@/assets/projects/precious-stones.jpg';
import geologicalInspection from '@/assets/projects/geological-inspection.jpg';

const projects = [
  {
    image: mineAerial,
    title: 'Operação de Mina a Céu Aberto',
    category: 'Exploração',
    description: 'Consultoria completa para operações de mineração de grande escala',
  },
  {
    image: businessMeeting,
    title: 'Consultoria Estratégica',
    category: 'Negócios',
    description: 'Reuniões técnicas e planeamento estratégico para cooperativas',
  },
  {
    image: preciousStones,
    title: 'Avaliação de Pedras Preciosas',
    category: 'Avaliação',
    description: 'Análise e valorização de diamantes e metais preciosos',
  },
  {
    image: geologicalInspection,
    title: 'Inspeção Geológica',
    category: 'Técnico',
    description: 'Avaliação técnica de amostras e terrenos mineiros',
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projectos" className="py-24 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Projectos e Atuação
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nossa <span className="text-gradient-gold">Atuação</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça alguns dos nossos projectos e áreas de intervenção no setor mineiro angolano
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden hover-gold-glow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-primary text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {project.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full glass-card rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:text-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            
            <div className="p-8">
              <span className="text-primary text-sm font-medium">{selectedProject.category}</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-muted-foreground">
                {selectedProject.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
