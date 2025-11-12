import { ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0f] text-white/70 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 gap-6 items-center">
        <p className="text-sm">© {new Date().getFullYear()} Aether Studio. All rights reserved.</p>
        <div className="flex sm:justify-end items-center gap-4">
          <a className="hover:text-white" href="#">Twitter</a>
          <a className="hover:text-white" href="#">Instagram</a>
          <a className="hover:text-white" href="#">Dribbble</a>
          <a href="#home" className="ml-4 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition-colors" aria-label="Back to top">
            <ArrowUp className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
