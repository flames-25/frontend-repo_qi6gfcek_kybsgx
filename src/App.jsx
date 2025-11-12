import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0f]">{/* dark base */}
      <Navbar />
      <main>
        <Hero />
        <Projects />
        {/* Services and About sections (placeholder visuals for now) */}
        <section id="services" className="bg-[#0b0b0f] text-white py-20">
          <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: 'Brand Identity', d: 'Strategy, systems, and enduring visual languages.' },
              { t: 'Product & Web', d: 'Interfaces with motion, depth, and clarity.' },
              { t: '3D & Motion', d: 'Real-time scenes and cinematic storytelling.' },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <h3 className="font-semibold">{s.t}</h3>
                <p className="text-white/70 mt-1">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-[#0b0b0f] text-white py-20">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 ring-1 ring-white/10 p-6">
              <p className="text-white/80 text-lg">
                We are a design and technology studio crafting immersive digital brands and products. Our approach blends research, craft, and play to deliver experiences that feel inevitable.
              </p>
            </div>
            <ul className="grid gap-4">
              {[
                'Accessible, inclusive design',
                'Performance-first web engineering',
                'Collaborative, transparent process',
                'End-to-end creative partnership',
              ].map((i) => (
                <li key={i} className="text-white/70">• {i}</li>
              ))}
            </ul>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
