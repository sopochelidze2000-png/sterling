import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold text-white mb-6">Contact Us</h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          Schedule your free, zero-obligation case evaluation today. We are available 24/7 to listen and help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-serif font-bold text-white mb-8">Send Us a Message</h2>
          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">First Name</label>
                <input type="text" className="w-full bg-primary border text-white border-white/10 p-3 text-sm focus:outline-none focus:border-accent rounded-sm" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">Last Name</label>
                <input type="text" className="w-full bg-primary border text-white border-white/10 p-3 text-sm focus:outline-none focus:border-accent rounded-sm" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">Phone Number</label>
              <input type="tel" className="w-full bg-primary border text-white border-white/10 p-3 text-sm focus:outline-none focus:border-accent rounded-sm" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">Email Address</label>
              <input type="email" className="w-full bg-primary border text-white border-white/10 p-3 text-sm focus:outline-none focus:border-accent rounded-sm" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">Brief Description of Your Case</label>
              <textarea rows={5} className="w-full bg-primary border text-white border-white/10 p-3 text-sm focus:outline-none focus:border-accent rounded-sm resize-none"></textarea>
            </div>
            <button className="w-full py-4 bg-accent hover:brightness-110 text-primary font-bold rounded-sm transition-all shadow-md uppercase tracking-widest text-sm">
              Request Free Consultation
            </button>
            <p className="text-[10px] text-white/40 text-center uppercase tracking-wider">Your privacy is strictly protected. This form submission is confidential.</p>
          </form>
        </div>

        <div className="bg-primary-light text-white p-10 rounded-sm border border-white/5 shadow-2xl relative">
          <div className="absolute -top-4 -left-4 bg-accent p-4 text-primary font-bold text-center leading-tight uppercase text-[10px] tracking-widest">Priority<br />Line</div>
          <h2 className="text-2xl font-serif mb-8">Firm Information</h2>
          <ul className="space-y-8">
            <li className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Office Location</h3>
                <p className="text-white/60">1200 Legal Avenue, Suite 400<br />Metropolis, NY 10001</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Phone (24/7)</h3>
                <a href="tel:+18005550199" className="text-white/60 hover:text-white transition-colors">1-800-555-0199</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <a href="mailto:help@sterlingcross.law" className="text-white/60 hover:text-white transition-colors">help@sterlingcross.law</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Hours</h3>
                <p className="text-white/60">Mon - Fri: 8:00 AM - 6:00 PM<br />Emergency Calls: 24/7</p>
              </div>
            </li>
          </ul>

          <div className="mt-12 bg-primary p-6 rounded-sm border border-white/10">
            <p className="text-accent font-serif font-bold text-xl mb-2">Notice to Clients</p>
            <p className="text-sm text-white/60">If you are contacting us regarding an active emergency or severe injury, please call our 24/7 hotline directly rather than using the form.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
