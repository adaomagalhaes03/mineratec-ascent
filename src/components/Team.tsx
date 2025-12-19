import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

// Import team images
import teresaImg from '@/assets/team/teresa-kanga.jpg';
import walgnerImg from '@/assets/team/walgner-pembele.jpg';
import antonioImg from '@/assets/team/antonio-jaciro.jpg';
import tamaraImg from '@/assets/team/tamara-soares.jpg';
import claucioImg from '@/assets/team/claucio-leiria.jpg';

const teamMembers = [
  {
    name: 'Teresa Kanga',
    role: 'Diretora Geral',
    image: teresaImg,
    department: 'Administração',
  },
  {
    name: 'Walgner Pembele',
    role: 'Diretor de Auditoria',
    image: walgnerImg,
    department: 'Auditoria',
  },
  {
    name: 'António Jaciro Del Casssemene',
    role: 'Diretor de Marketing e Estratégia',
    image: antonioImg,
    department: 'Marketing',
  },
  {
    name: 'Tamara Soares',
    role: 'Contabilista Financeira',
    image: tamaraImg,
    department: 'Contabilidade',
  },
  {
    name: 'Cláucio Leiria',
    role: 'Gestor de Fiscalidade Mineira',
    image: claucioImg,
    department: 'Fiscalidade',
  },
];

export const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="equipa" className="py-24 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Nossa Equipa
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Conheça os <span className="text-gradient-gold">Especialistas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma equipa multidisciplinar dedicada a oferecer as melhores soluções para o setor mineiro
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden hover-gold-glow transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Department Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                      {member.department}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1 line-clamp-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link to="/equipa">
            <Button variant="goldOutline" size="lg" className="group">
              Ver Mais Membros
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
