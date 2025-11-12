import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full bg-[#0b0b0f] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 bg-gradient-to-br from-fuchsia-500/20 to-sky-400/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 bg-gradient-to-tr from-emerald-400/10 to-indigo-500/20 blur-3xl rounded-full" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm/0"
        >
          <p className="text-sm tracking-widest text-white/60 uppercase mb-4">Creative Design Studio</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Designing the Future of Innovation
          </h1>
          <p className="mt-5 text-white/70 text-lg max-w-xl">
            Transforming ideas into immersive digital experiences across brand, product, and motion.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#work" className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 blur-md opacity-60 group-hover:opacity-90 transition-opacity" />
              <span className="relative rounded-full bg-white/10 ring-1 ring-white/15 px-6 py-3 backdrop-blur-md hover:bg-white/15 transition-colors">Explore Our Work</span>
            </a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">Get Started →</a>
          </div>
        </motion.div>

        <div className="hidden md:block" />
      </div>

      {/* Scroll cue */}
      <div className="relative z-10 flex justify-center pb-10">
        <a href="#work" className="group inline-flex flex-col items-center text-white/60 hover:text-white transition-colors">
          <span className="text-xs mb-2">Scroll</span>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-10 w-6 rounded-full border border-white/20 flex items-start justify-center p-1"
          >
            <div className="h-2 w-1 rounded bg-white/70" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
