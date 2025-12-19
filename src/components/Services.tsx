import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Search, Landmark, TrendingUp, Users, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Contabilidade e Relatórios Financeiros',
    description: 'Gestão contabilística completa, elaboração de relatórios financeiros e demonstrações de resultados para empresas do setor mineiro.',
    features: ['Balanços Patrimoniais', 'DRE Completo', 'Relatórios Periódicos'],
  },
  {
    icon: Search,
    title: 'Auditoria Financeira e Fiscal',
    description: 'Auditoria independente para garantir a conformidade e transparência das operações financeiras das cooperativas mineiras.',
    features: ['Auditoria Interna', 'Auditoria Externa', 'Due Diligence'],
  },
  {
    icon: Landmark,
    title: 'Fiscalidade Mineira',
    description: 'Consultoria especializada em tributação do setor mineiro, garantindo cumprimento das obrigações fiscais e optimização tributária.',
    features: ['Planeamento Fiscal', 'Compliance Tributário', 'Assessoria Legal'],
  },
  {
    icon: TrendingUp,
    title: 'Marketing e Comunicação Estratégica',
    description: 'Estratégias de marketing digital, branding corporativo e comunicação institucional para o setor de mineração.',
    features: ['Marketing Digital', 'Branding Corporativo', 'Gestão de Crise'],
  },
  {
    icon: Users,
    title: 'Consultoria Empresarial',
    description: 'Assessoria estratégica para optimização de processos, gestão de recursos humanos e desenvolvimento organizacional.',
    features: ['Gestão de RH', 'Optimização de Processos', 'Estratégia Empresarial'],
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-24 relative" ref={ref}>
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
            O Que Oferecemos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nossos <span className="text-gradient-gold">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções completas e integradas para o sucesso da sua empresa no setor mineiro
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full hover-gold-glow transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                >
                  Saber mais
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
