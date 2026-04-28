export default function About() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-serif font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block">About Our Firm</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        <div>
          <p className="text-lg text-white/60 leading-relaxed mb-6">
            Sterling & Cross was founded on a simple, unbreakable principle: everyday people deserve the same caliber of legal representation as massive insurance corporations.
          </p>
          <p className="text-lg text-white/60 leading-relaxed mb-6">
            For over 25 years, our trial attorneys have leveled the playing field, recovering over $500 Million for victims of negligence, catastrophic injuries, and medical malpractice. We do not just settle cases; we litigate aggressively to maximize value.
          </p>
          <ul className="space-y-4 mt-8">
            <li className="flex items-center gap-3 text-white/80 font-bold"><span className="w-2 h-2 rounded-full bg-accent"></span> 99% Success Rate</li>
            <li className="flex items-center gap-3 text-white/80 font-bold"><span className="w-2 h-2 rounded-full bg-accent"></span> Available 24/7 for Emergencies</li>
            <li className="flex items-center gap-3 text-white/80 font-bold"><span className="w-2 h-2 rounded-full bg-accent"></span> Zero Upfront Fees</li>
          </ul>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1558522195-e1201b090344?q=80&w=1000&auto=format&fit=crop" alt="Our Team" className="rounded-sm shadow-xl grayscale" />
        </div>
      </div>
    </div>
  );
}
