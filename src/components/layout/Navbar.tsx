import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Scale } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Practice Areas', path: '/practice-areas' },
  { name: 'Case Results', path: '/case-results' },
  { name: 'About Us', path: '/about' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Blog', path: '/blog' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="bg-primary text-white text-sm py-2 px-4 shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="hidden sm:block text-slate-300">
            Available 24/7 for Free Consultations
          </p>
          <a
            href="tel:+18005550199"
            className="flex items-center text-accent hover:text-white transition-colors ml-auto font-semibold"
          >
            <Phone className="w-4 h-4 mr-2" />
            1-800-555-0199
          </a>
        </div>
      </div>
      
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300 border-b border-white/10',
          isScrolled ? 'bg-primary shadow-2xl py-3' : 'bg-primary/95 backdrop-blur-sm py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border-2 border-accent flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors">
              <span className="font-serif font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="font-serif font-bold text-2xl leading-none text-white uppercase tracking-wide">
                Sterling & Cross
              </h1>
              <p className="text-xs uppercase tracking-widest text-accent font-medium mt-1">
                Trial Attorneys
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-[11px] uppercase tracking-widest font-medium transition-colors hover:text-accent',
                  location.pathname === link.path ? 'text-accent border-b border-accent pb-1' : 'text-white/70'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-accent hover:bg-white text-primary font-bold px-6 py-3 text-xs uppercase tracking-widest transition-colors block text-center"
            >
              Free Case Review
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-50 bg-primary border-l border-white/10"
          >
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <span className="font-serif font-bold text-xl text-white uppercase tracking-wide">Sterling & Cross</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white hover:text-accent">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-serif text-white hover:text-accent uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-8 border-t border-white/10 mt-auto">
                <a
                  href="tel:+18005550199"
                  className="flex items-center justify-center w-full py-4 bg-primary-light border border-white/10 text-white font-bold mb-4 uppercase tracking-widest text-xs"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Call 1-800-555-0199
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center w-full py-4 bg-accent text-primary font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors"
                >
                  Free Case Review
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
