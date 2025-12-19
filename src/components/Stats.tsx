import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Award, Users, Building, Briefcase } from 'lucide-react';

const stats = [
  { icon: Award, value: 15, suffix: '+', label: 'Anos de Experiência' },
  { icon: Users, value: 200, suffix: '+', label: 'Clientes Satisfeitos' },
  { icon: Building, value: 50, suffix: '+', label: 'Cooperativas Atendidas' },
  { icon: Briefcase, value: 500, suffix: '+', label: 'Projectos Concluídos' },
];

const CounterAnimation = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

export const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-gold opacity-10" />
      <div className="absolute inset-0 bg-background/80" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                <CounterAnimation value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
