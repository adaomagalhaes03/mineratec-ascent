import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Send } from 'lucide-react';
import { Button } from './ui/button';
import logo from '@/assets/logo-mineratec.jpeg';

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer id="contacto" className="relative pt-24 pb-8" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 md:p-12 text-center mb-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
          <div className="relative z-10">
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">
              Pronto para Transformar a Sua <span className="text-gradient-gold">Gestão Mineira?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contacto connosco e descubra como podemos ajudar a sua cooperativa a alcançar novos patamares de sucesso.
            </p>
            <Button variant="gold" size="xl" className="group">
              Solicitar Consultoria Gratuita
              <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img src={logo} alt="MINERATEC" className="h-16 mb-6" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Multiconsultória especializada em contabilidade, auditoria, marketing e fiscalidade para o setor mineiro angolano.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary transition-colors flex items-center justify-center group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {['Sobre Nós', 'Serviços', 'Planos', 'Equipa', 'Projectos'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">Serviços</h4>
            <ul className="space-y-3">
              {['Contabilidade', 'Auditoria', 'Fiscalidade Mineira', 'Marketing', 'Consultoria'].map((service) => (
                <li key={service}>
                  <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+244944215526" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Phone className="w-5 h-5 text-primary" />
                  +244 944 215 526
                </a>
              </li>
              <li>
                <a href="tel:+244923418803" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Phone className="w-5 h-5 text-primary" />
                  +244 923 418 803
                </a>
              </li>
              <li>
                <a href="mailto:Mineratec@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Mail className="w-5 h-5 text-primary" />
                  Mineratec@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                Talatona, Luanda - Angola
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Clock className="w-5 h-5 text-primary" />
                Seg - Sex: 8h - 17h
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} MINERATEC S.A. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
