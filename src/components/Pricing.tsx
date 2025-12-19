import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, Crown, Gem } from 'lucide-react';
import { Button } from './ui/button';

const plans = [
  {
    icon: Star,
    name: 'Plano Essencial',
    type: 'Online',
    price: '80.000',
    description: 'Ideal para pequenas cooperativas que necessitam de suporte básico contabilístico.',
    features: [
      'Contabilidade básica',
      'Relatórios mensais',
      'Suporte por email',
      'Acesso à plataforma online',
      'Consultoria fiscal básica',
    ],
    popular: false,
  },
  {
    icon: Crown,
    name: 'Plano Premium',
    type: 'Presencial + Online',
    price: '550.000',
    description: 'Solução completa para cooperativas que exigem excelência em todos os serviços.',
    features: [
      'Todos os serviços incluídos',
      'Contabilidade e auditoria completa',
      'Marketing e comunicação',
      'Fiscalidade especializada',
      'Gestor de conta dedicado',
      'Suporte prioritário 24/7',
      'Relatórios personalizados',
      'Visitas presenciais mensais',
    ],
    popular: true,
  },
  {
    icon: Gem,
    name: 'Plano Intermédio',
    type: 'Presencial',
    price: '420.000',
    description: 'Para cooperativas que valorizam o atendimento presencial e personalizado.',
    features: [
      'Contabilidade completa',
      'Auditoria trimestral',
      'Visitas presenciais',
      'Relatórios detalhados',
      'Suporte telefónico',
      'Consultoria fiscal avançada',
    ],
    popular: false,
  },
];

export const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="planos" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/10 rounded-full" />
      <div className="absolute bottom-20 right-20 w-48 h-48 border border-primary/10 rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Cartões e Planos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Planos <span className="text-gradient-gold">Acessíveis</span>
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha o plano ideal para a sua cooperativa. Todos os planos incluem suporte dedicado e acesso à nossa equipa de especialistas.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative perspective-1000 ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="gold-shimmer text-primary-foreground text-sm font-semibold px-6 py-2 rounded-full">
                    Mais Popular
                  </div>
                </div>
              )}

              <div
                className={`relative h-full rounded-3xl overflow-hidden transform-3d transition-all duration-500 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-primary/10 via-background to-background border-2 border-primary shadow-2xl shadow-primary/20'
                    : 'elegant-card'
                }`}
              >
                {/* Card Content */}
                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    plan.popular ? 'bg-gradient-gold' : 'bg-primary/10 border border-primary/30'
                  }`}>
                    <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                  </div>

                  {/* Plan Info */}
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-4">{plan.type}</p>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className={`font-display text-4xl font-bold ${plan.popular ? 'text-gradient-gold' : 'text-foreground'}`}>
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground">Kz</span>
                    </div>
                    <span className="text-muted-foreground text-sm">/ mês</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'bg-primary' : 'bg-primary/20'
                        }`}>
                          <Check className={`w-3 h-3 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                        </div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant={plan.popular ? 'gold' : 'goldOutline'}
                    className="w-full"
                    size="lg"
                  >
                    Aderir ao Plano
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
