import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calculator, FileSearch, Megaphone, Scale, Target, Eye, Heart } from 'lucide-react';

const features = [
  {
    icon: Calculator,
    title: 'Contabilidade',
    description: 'Gestão contabilística especializada para o setor mineiro',
  },
  {
    icon: FileSearch,
    title: 'Auditoria',
    description: 'Auditoria financeira e fiscal de excelência',
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    description: 'Estratégias de comunicação e branding corporativo',
  },
  {
    icon: Scale,
    title: 'Fiscalidade Mineira',
    description: 'Consultoria tributária especializada em mineração',
  },
];

const values = [
  { icon: Target, title: 'Missão', description: 'Ajudar na tomada de decisões sobre a divulgação dos produtos, organização e relatórios económico-financeiros das cooperativas mineiras a nível Nacional.' },
  { icon: Eye, title: 'Visão', description: 'Ser referência nacional em consultoria contabilística e de marketing, reconhecida internacionalmente em até 3 anos.' },
  { icon: Heart, title: 'Valores', description: 'Ética, inovação, compromisso com a sustentabilidade, transparência e respeito às normas legais e ambientais.' },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Quem Somos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Sobre a <span className="text-gradient-gold">MINERATEC</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A Mineratec é uma Multiconsultória que agrega diversos tipos de serviços com um único objetivo: 
            apoiar as cooperativas mineiras de Angola com excelência em contabilidade, auditoria e marketing.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-6 h-full hover-gold-glow transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index === 0 ? -30 : index === 2 ? 30 : 0, y: index === 1 ? 30 : 0 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
