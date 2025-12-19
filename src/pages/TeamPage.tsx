import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-mineratec.jpeg';

// Import team images
import teresaImg from '@/assets/team/teresa-kanga.jpg';
import walgnerImg from '@/assets/team/walgner-pembele.jpg';
import antonioImg from '@/assets/team/antonio-jaciro.jpg';
import tamaraImg from '@/assets/team/tamara-soares.jpg';
import claucioImg from '@/assets/team/claucio-leiria.jpg';

const allMembers = [
  // Administração
  { name: 'Teresa Kanga', role: 'Diretora Geral', image: teresaImg, department: 'Administração' },
  { name: 'Guacira Fernandes', role: 'Gestora de RH', image: teresaImg, department: 'Administração' },
  { name: 'Eloisa Faria', role: 'Assistente Administrativa', image: tamaraImg, department: 'Administração' },
  
  // Auditoria
  { name: 'Walgner Pembele', role: 'Diretor de Auditoria', image: walgnerImg, department: 'Auditoria' },
  { name: 'Odeth Rui', role: 'Consultora', image: tamaraImg, department: 'Auditoria' },
  
  // Contabilidade
  { name: 'Tamara Soares', role: 'Contabilista Financeira', image: tamaraImg, department: 'Contabilidade' },
  { name: 'Makinini Rosada', role: 'Contabilista', image: tamaraImg, department: 'Contabilidade' },
  { name: 'Cláucio Leiria', role: 'Gestor de Fiscalidade Mineira', image: claucioImg, department: 'Contabilidade' },
  
  // Marketing
  { name: 'António Jaciro Del Casssemene', role: 'Diretor de Marketing e Estratégia', image: antonioImg, department: 'Marketing' },
  { name: 'Sheila Narciso', role: 'Gestora de Marketing e Comunicação', image: tamaraImg, department: 'Marketing' },
  { name: 'Antónia Muehu da Costa', role: 'Assessora de Comunicação', image: tamaraImg, department: 'Marketing' },
  { name: 'Carol Varanda', role: 'Especialista em Relações Comunitárias', image: tamaraImg, department: 'Marketing' },
  { name: 'Teófilo', role: 'Designer Gráfico e Branding', image: antonioImg, department: 'Marketing' },
  { name: 'Ricardo', role: 'Produtor de Conteúdo Técnico', image: walgnerImg, department: 'Marketing' },
  { name: 'Benedita', role: 'Marketeer', image: tamaraImg, department: 'Marketing' },
  { name: 'Sandra Miguel', role: 'Coordenadora de Marketing Digital', image: tamaraImg, department: 'Marketing' },
  { name: 'Luana', role: 'Organizadora de Eventos Corporativos', image: tamaraImg, department: 'Marketing' },
  { name: 'Delma Silva', role: 'Analista de Inteligência de Mercado', image: tamaraImg, department: 'Marketing' },
  { name: 'Estevão', role: 'Assessor de Imprensa', image: claucioImg, department: 'Marketing' },
  
  // Tecnologia
  { name: 'Francisco Luzala', role: 'Técnico de TI e Gestão', image: walgnerImg, department: 'Tecnologia' },
];

const departments = ['Todos', 'Administração', 'Auditoria', 'Contabilidade', 'Marketing', 'Tecnologia'];

const TeamPage = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredMembers = activeFilter === 'Todos' 
    ? allMembers 
    : allMembers.filter(member => member.department === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="MINERATEC" className="h-12" />
            </Link>
            <Link to="/">
              <Button variant="goldOutline" className="group">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              Equipa Completa
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Conheça Todos os <span className="text-gradient-gold">Nossos Profissionais</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Uma equipa multidisciplinar de {allMembers.length} profissionais dedicados a oferecer as melhores soluções para o setor mineiro
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <div className="flex items-center gap-2 text-muted-foreground mr-4">
              <Filter className="w-5 h-5" />
              <span className="text-sm">Filtrar por:</span>
            </div>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveFilter(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === dept
                    ? 'bg-gradient-gold text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {dept}
              </button>
            ))}
          </motion.div>

          {/* Team Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="glass-card rounded-2xl overflow-hidden hover-gold-glow transition-all duration-500 hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
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
                  <div className="p-4 text-center">
                    <h3 className="font-display text-base font-semibold text-foreground mb-1 line-clamp-1">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm line-clamp-1">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-muted-foreground mt-12"
          >
            Mostrando {filteredMembers.length} de {allMembers.length} membros
          </motion.p>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MINERATEC S.A. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TeamPage;
