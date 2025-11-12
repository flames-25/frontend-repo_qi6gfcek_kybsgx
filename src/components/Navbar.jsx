import { useState } from 'react';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavLink = ({ href, children }) => (
  <a href={href} className="text-sm text-white/80 hover:text-white transition-colors">
    {children}
  </a>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl px-4 py-3">
          <a href="#home" className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-fuchsia-400" />
            <span className="font-semibold tracking-tight text-white">Aether</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-4 py-2 text-sm text-white hover:bg-white/15 transition-colors">
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-6 mt-2 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl p-6 md:hidden"
          >
            <div className="grid gap-4 text-center">
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
