import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ p }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-white/20"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img src={p.thumbnail} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold">{p.title}</h3>
          <span className="text-xs text-white/60">{p.client}</span>
        </div>
        {p.subtitle && <p className="text-white/70 mt-1 text-sm">{p.subtitle}</p>}
        <div className="mt-3 flex flex-wrap gap-2">
          {(p.tags || []).map((t) => (
            <span key={t} className="text-xs text-white/60 bg-white/5 rounded-full px-2 py-1 ring-1 ring-white/10">{t}</span>
          ))}
        </div>
      </div>
      {p.case_study_url && (
        <a href={p.case_study_url} target="_blank" rel="noreferrer" className="absolute inset-0">
          <span className="sr-only">Open case study</span>
        </a>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  useEffect(() => {
    fetch(`${base}/api/projects`).then((r) => r.json()).then(setProjects).catch(() => setProjects([]));
  }, []);

  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="work" className="relative bg-[#0b0b0f] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Selected Work</h2>
            <p className="text-white/70 mt-2">Interactive experiences, elevated brands, and beautiful products.</p>
          </div>
          <a href="#contact" className="hidden md:inline-block text-sm text-white/80 hover:text-white">Start a project →</a>
        </div>

        {featured.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {featured.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
