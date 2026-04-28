import { Link } from 'react-router-dom';
import { Scale, MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-white/10 text-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <Scale className="w-8 h-8 text-accent" />
              <div>
                <h2 className="font-serif font-bold text-2xl text-white uppercase tracking-wide">
                  Sterling & Cross
                </h2>
                <p className="text-xs uppercase tracking-widest text-accent font-medium mt-1">
                  Trial Attorneys
                </p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              We are a premier personal injury and trial law firm dedicated to fighting for victims across the state. No fee unless we win.
            </p>
            <div className="flex gap-4 pt-2">
              <img src="https://placehold.co/100x40/172a45/fff?text=AVVO+10.0" alt="Avvo Badge" className="h-10 opacity-80" />
              <img src="https://placehold.co/100x40/172a45/fff?text=Super+Lawyers" alt="Super Lawyers" className="h-10 opacity-80" />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-white font-bold text-lg mb-6 tracking-wide">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>1200 Legal Avenue, Suite 400<br />Metropolis, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+18005550199" className="hover:text-white transition-colors">1-800-555-0199</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:help@sterlingcross.law" className="hover:text-white transition-colors">help@sterlingcross.law</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Available 24/7 for<br />emergencies</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-white font-bold text-lg mb-6 tracking-wide">Practice Areas</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/practice-areas/car-accidents" className="hover:text-accent transition-colors">Car Accidents</Link></li>
              <li><Link to="/practice-areas/truck-accidents" className="hover:text-accent transition-colors">Truck Accidents</Link></li>
              <li><Link to="/practice-areas/motorcycle-accidents" className="hover:text-accent transition-colors">Motorcycle Accidents</Link></li>
              <li><Link to="/practice-areas/slip-and-fall" className="hover:text-accent transition-colors">Slip & Fall</Link></li>
              <li><Link to="/practice-areas/medical-malpractice" className="hover:text-accent transition-colors">Medical Malpractice</Link></li>
              <li><Link to="/practice-areas/wrongful-death" className="hover:text-accent transition-colors">Wrongful Death</Link></li>
              <li><Link to="/practice-areas" className="text-accent hover:text-white font-medium transition-colors">View All Practices &rarr;</Link></li>
            </ul>
          </div>

          {/* Disclaimers & Newsletter */}
          <div>
            <h3 className="font-serif text-white font-bold text-lg mb-6 tracking-wide">Information</h3>
            <ul className="space-y-3 text-sm mb-8">
              <li><Link to="/about" className="hover:text-accent transition-colors">About the Firm</Link></li>
              <li><Link to="/case-results" className="hover:text-accent transition-colors">Case Results</Link></li>
              <li><Link to="/testimonials" className="hover:text-accent transition-colors">Client Reviews</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Legal Blog</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} Sterling & Cross Law Firm. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Use</Link>
            <Link to="/disclaimer" className="hover:text-white">Legal Disclaimer</Link>
          </div>
        </div>
        <div className="mt-4 text-[10px] text-white/30 text-center md:text-left max-w-4xl">
          Disclaimer: The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship. Past results do not guarantee future outcomes.
        </div>
      </div>
    </footer>
  );
}
