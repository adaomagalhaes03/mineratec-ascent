import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'José Manuel',
    role: 'Diretor da Cooperativa Diamantes do Leste',
    content: 'A MINERATEC transformou completamente a nossa gestão financeira. Graças à sua consultoria especializada, conseguimos aumentar a nossa eficiência operacional em 40%.',
    avatar: 'JM',
  },
  {
    name: 'Maria Fernanda',
    role: 'CEO da MineralTech Angola',
    content: 'Profissionais excepcionais! A equipa de auditoria identificou oportunidades de poupança que não tínhamos conhecimento. Recomendo vivamente os seus serviços.',
    avatar: 'MF',
  },
  {
    name: 'António Carlos',
    role: 'Presidente da Associação Mineira de Luanda',
    content: 'A parceria com a MINERATEC foi fundamental para a regularização fiscal da nossa associação. Serviço de primeira qualidade.',
    avatar: 'AC',
  },
  {
    name: 'Sandra Menezes',
    role: 'Diretora Financeira da GoldAngola',
    content: 'Excelente trabalho na área de marketing. A nossa visibilidade no mercado aumentou significativamente após implementar as estratégias recomendadas.',
    avatar: 'SM',
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Testemunhos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            O Que Dizem os <span className="text-gradient-gold">Nossos Clientes</span>
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 opacity-10">
                <Quote className="w-20 h-20 text-primary" />
              </div>

              {/* Content */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {testimonials[currentIndex].avatar}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div>
                  <h4 className="font-display text-xl font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={goToPrev}
                className="w-12 h-12 rounded-full border border-border bg-card hover:bg-primary hover:border-primary transition-all duration-300 flex items-center justify-center group"
              >
                <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary w-8'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full border border-border bg-card hover:bg-primary hover:border-primary transition-all duration-300 flex items-center justify-center group"
              >
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
