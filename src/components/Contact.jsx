import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    if (!payload.name || !payload.email || !payload.message) {
      setStatus('Please fill in the required fields.');
      return;
    }
    setLoading(true);
    setStatus('');
    try {
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Network error');
      setStatus('Message sent. We will get back to you shortly.');
      e.currentTarget.reset();
    } catch (e) {
      setStatus('Unable to send right now. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative bg-[#0b0b0f] text-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Let's build something remarkable</h2>
        <p className="text-white/70 mt-2">Tell us about your idea and we'll reach out.</p>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid gap-4 bg-white/5 ring-1 ring-white/10 rounded-2xl p-6"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-3 outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-3 outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="you@company.com" />
            </div>
          </div>
          <div>
            <label className="text-sm text-white/70">Company (optional)</label>
            <input name="company" className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-3 outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Acme Inc." />
          </div>
          <div>
            <label className="text-sm text-white/70">How can we help?</label>
            <textarea name="message" rows="5" required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-3 outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Tell us about your project, timeline, and goals..." />
          </div>

          <div className="flex items-center gap-3">
            <button disabled={loading} className="relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 blur-md opacity-60 group-hover:opacity-90 transition-opacity" />
              <span className="relative rounded-full bg-white/10 ring-1 ring-white/15 px-6 py-3 backdrop-blur-md hover:bg-white/15 transition-colors">{loading ? 'Sending...' : 'Send message'}</span>
            </button>
            {status && <p className="text-sm text-white/70">{status}</p>}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
