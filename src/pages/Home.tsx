import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ChevronRight, Star, Clock, Trophy, Users, BadgeCheck, Scale, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop" 
            alt="Law firm office" 
            className="w-full h-full object-cover opacity-20 Mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/50 text-accent font-medium text-sm mb-6">
                <Shield className="w-4 h-4" />
                <span>Over $500 Million Recovered for Clients</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6">
                When Life Is Disrupted, <span className="text-accent italic">We Restore Justice.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 font-light mb-10 leading-relaxed max-w-xl">
                Top-rated personal injury attorneys fighting relentless insurance companies so you can focus on healing. No fee unless we win.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+18005550199"
                  className="inline-flex justify-center items-center px-8 py-4 bg-accent hover:bg-accent-light text-primary font-bold text-lg rounded-sm transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transform hover:-translate-y-1"
                >
                  Get Your Free Case Review
                </a>
                <Link
                  to="/practice-areas"
                  className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-white hover:bg-white/10 text-white font-medium text-lg rounded-sm transition-all"
                >
                  See Our Practice Areas
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-6 text-sm text-slate-400">
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/100?img=1" alt="Client" className="w-10 h-10 rounded-full border-2 border-primary" />
                  <img src="https://i.pravatar.cc/100?img=2" alt="Client" className="w-10 h-10 rounded-full border-2 border-primary" />
                  <img src="https://i.pravatar.cc/100?img=3" alt="Client" className="w-10 h-10 rounded-full border-2 border-primary" />
                  <div className="w-10 h-10 rounded-full border-2 border-primary bg-slate-800 flex items-center justify-center font-bold text-white text-xs">+2k</div>
                </div>
                <div className="flex flex-col">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span>Trusted by thousands of clients</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SOCIAL PROOF / STATS */}
      <section className="bg-primary-light py-12 border-y border-slate-800 relative z-20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-700/50 text-white text-center">
            <div className="px-4">
              <div className="text-4xl sm:text-5xl font-serif font-bold text-accent mb-2">$500M+</div>
              <div className="text-sm uppercase tracking-widest text-slate-400 font-semibold">Recovered</div>
            </div>
            <div className="px-4">
              <div className="text-4xl sm:text-5xl font-serif font-bold text-accent mb-2">99%</div>
              <div className="text-sm uppercase tracking-widest text-slate-400 font-semibold">Success Rate</div>
            </div>
            <div className="px-4">
              <div className="text-4xl sm:text-5xl font-serif font-bold text-accent mb-2">25+</div>
              <div className="text-sm uppercase tracking-widest text-slate-400 font-semibold">Years Exp.</div>
            </div>
            <div className="px-4">
              <div className="text-4xl sm:text-5xl font-serif font-bold text-accent mb-2">0</div>
              <div className="text-sm uppercase tracking-widest text-slate-400 font-semibold">Upfront Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AS SEEN IN & TRUST BADGES */}
      <section className="py-10 bg-primary border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm uppercase tracking-widest text-slate-400 font-semibold mb-6">Our Attorneys Have Been Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="https://placehold.co/150x50/fff/000?text=Forbes" alt="Forbes" className="h-8" />
            <img src="https://placehold.co/150x50/fff/000?text=CNN" alt="CNN" className="h-8" />
            <img src="https://placehold.co/200x50/fff/000?text=The+New+York+Times" alt="NYT" className="h-8" />
            <img src="https://placehold.co/150x50/fff/000?text=Wall+Street+Journal" alt="WSJ" className="h-8" />
          </div>
        </div>
      </section>

      {/* 4. PRACTICE AREAS OVERVIEW */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-white text-4xl sm:text-5xl font-serif font-bold mb-6">Cases We Handle.</h2>
            <p className="text-lg text-white/60">
              We specialize in catastrophic injuries and complex litigation. Our focused approach means we dedicate maximum resources to getting you maximum compensation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Car Accidents", desc: "Whiplash, rear-end collisions, drunk driving accidents, and uninsured motorist claims." },
              { title: "Truck Accidents", desc: "Federal regulation violations, driver fatigue, and catastrophic commercial vehicle crashes." },
              { title: "Motorcycle Accidents", desc: "Lane splitting edge cases, severe road rash, traumatic brain injuries, and bias fighting." },
              { title: "Slip & Fall", desc: "Premises liability, negligent security, unmarked hazards, and retail store injuries." },
              { title: "Medical Malpractice", desc: "Surgical errors, misdiagnosis, birth injuries, and failure to treat emergencies." },
              { title: "Wrongful Death", desc: "Compassionate representation for grieving families seeking justice and financial security." },
            ].map((area, i) => (
              <Link to={`/practice-areas/${area.title.toLowerCase().replace(/ /g, '-').replace('&', 'and')}`} key={i} className="group flex flex-col bg-primary-light p-8 rounded-sm shadow-2xl border border-white/5 hover:border-accent/30 transition-all duration-300">
                <div className="w-12 h-12 bg-white/5 text-white rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-primary transition-colors">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">{area.title}</h3>
                <p className="text-white/60 mb-6 flex-grow">{area.desc}</p>
                <div className="flex items-center text-accent font-semibold group-hover:underline">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/practice-areas" className="inline-block border-b-2 border-white text-white font-bold text-lg hover:text-accent hover:border-accent transition-colors pb-1">
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION (How it works) */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">Our Path to <span className="text-accent italic">Your Victory.</span></h2>
              <p className="text-lg text-slate-300 mb-12">
                We handle every detail from the moment you call, completely eliminating your stress so you can focus completely on your physical recovery.
              </p>
              
              <div className="space-y-8">
                {[
                  { num: "01", title: "Free Case Evaluation", desc: "We review your claim at no cost, 24/7. We listen, evaluate, and provide immediate legal options.", icon: Clock },
                  { num: "02", title: "Investigation & Strategy", desc: "Our private investigators gather evidence, secure camera footage, and consult elite medical experts.", icon: Shield },
                  { num: "03", title: "Aggressive Negotiation", desc: "We demand maximum policy limits from the insurance company, leveraging our trial reputation.", icon: AlertCircle },
                  { num: "04", title: "Settlement or Trial", desc: "We settle for what you deserve, or we take them to court. We prepare every case as if it will go to trial.", icon: Trophy }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 relative">
                    {i !== 3 && <div className="absolute top-12 left-6 bottom-[-32px] w-px bg-white/10"></div>}
                    <div className="shrink-0 w-12 h-12 bg-primary-light border-2 border-accent rounded-full flex items-center justify-center font-bold text-accent z-10">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-serif mb-2">{step.title}</h3>
                      <p className="text-white/60">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 translate-x-4 translate-y-4 rounded-sm"></div>
              <img src="https://images.unsplash.com/photo-1575505586569-646b2ca898fc?q=80&w=1000&auto=format&fit=crop" alt="Lawyer meeting with client" className="relative z-10 w-full h-[600px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS / SUCCESS STORIES */}
      <section className="py-24 bg-primary border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-white text-4xl sm:text-5xl font-serif font-bold mb-6">Don't Take Our Word For It.</h2>
              <p className="text-lg text-white/60">Real results for real people. We measure our success solely by the impact we have on our clients' lives.</p>
            </div>
            <Link to="/testimonials" className="shrink-0 px-6 py-3 border border-white text-white hover:bg-white/10 font-bold transition-colors rounded-sm uppercase text-sm tracking-wider">
              Read All Reviews
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                text: "The insurance company offered me $15k initially. Sterling & Cross took my case, refused to back down, and got me a $1.2M settlement. They genuinely care.",
                author: "Sarah Jenkins",
                type: "Car Accident Victim"
              },
              {
                text: "After losing my husband in a trucking accident, I was lost. This firm didn't just provide exceptional legal service; they protected my family's future.",
                author: "Michael T.",
                type: "Wrongful Death Case"
              },
              {
                text: "Professional, ruthless in the courtroom, but so compassionate with me. They handled all my medical bills while I focused on surgery recovery.",
                author: "David R.",
                type: "Slip & Fall Victim"
              }
            ].map((review, i) => (
              <div key={i} className="bg-primary-light p-8 rounded-sm shadow-2xl border border-white/5 flex flex-col">
                <div className="flex text-accent mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-white/80 italic mb-8 flex-grow leading-relaxed">"{review.text}"</p>
                <div>
                  <p className="font-bold text-white font-serif">{review.author}</p>
                  <p className="text-xs uppercase tracking-widest text-slate-400 mt-1">{review.type}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Highlighted Case Results inside Testimonial block */}
          <div className="bg-primary text-white p-8 sm:p-12 rounded-sm shadow-lg border-l-4 border-accent relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-slate-700 pb-8 md:pb-0 pr-0 md:pr-8">
                <h3 className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">Recent Victory</h3>
                <div className="text-4xl font-serif font-bold mb-4">$4.5 Million</div>
                <p className="text-sm text-slate-300">Jury Verdict for a commercial trucking accident resulting in a traumatic brain injury.</p>
              </div>
              <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-slate-700 pb-8 md:pb-0 px-0 md:px-8">
                <h3 className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">Recent Settlement</h3>
                <div className="text-4xl font-serif font-bold mb-4">$2.1 Million</div>
                <p className="text-sm text-slate-300">Policy limits settlement for an uninsured motorist collision before trial.</p>
              </div>
              <div className="md:col-span-1 pl-0 md:pl-8 flex flex-col justify-center">
                <Link to="/case-results" className="text-accent hover:text-white font-bold flex items-center gap-2 group text-lg transition-colors">
                  View Case Results <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OBJECTION HANDLING & FAQ */}
      <section className="py-24 bg-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl font-serif font-bold text-white mb-16">Common Questions. Honest Answers.</h2>
          
          <div className="space-y-6">
            {[
              { q: "How much does it cost to hire your firm?", a: "Zero. We work on a contingency fee basis. This means we charge no upfront fees, and we only get paid if we successfully recover money for you. If we don't win, you pay us absolutely nothing." },
              { q: "How much is my case worth?", a: "Every case is unique. Value depends on medical bills, lost wages, future care needs, and pain & suffering. We provide a completely free, confidential case evaluation to give you an honest estimation based on our 25+ years of data." },
              { q: "Will my case go to trial?", a: "While we settle 95% of our cases out of court for maximum value, we prepare every single case as if it will go to a jury. When insurance companies know we are willing to fight in court, they offer higher settlements." },
            ].map((faq, i) => (
              <div key={i} className="border border-white/10 bg-primary rounded-sm p-6 hover:border-accent/50 transition-colors cursor-default">
                <h3 className="text-xl font-bold font-serif text-white mb-3 flex items-start gap-3">
                  <BadgeCheck className="w-6 h-6 text-accent shrink-0 mt-1" />
                  {faq.q}
                </h3>
                <p className="text-white/60 pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL URGENCY CTA */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-400 font-bold text-sm mb-8 border border-red-500/30">
            <AlertCircle className="w-4 h-4" />
             Time is running out on your legal rights.
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-8">
            Don't Speak To Insurance Until You Speak To Us.
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl">
            The insurance company already has a team of lawyers fighting against you. Level the playing field today.
          </p>
          
          <form className="w-full max-w-lg mb-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="tel" 
                placeholder="Enter your phone number" 
                className="flex-grow px-6 py-4 rounded-sm bg-primary-light text-white border border-white/10 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button 
                className="px-8 py-4 bg-accent hover:bg-accent-light text-primary font-bold rounded-sm transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)] whitespace-nowrap"
              >
                Call Me Back
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-4">By submitting, you agree to our privacy policy. 100% Free & Confidential.</p>
          </form>
          
          <div className="flex items-center justify-center gap-4 text-slate-300 font-medium">
            <span className="w-12 h-px bg-slate-700"></span>
            Or call directly
            <span className="w-12 h-px bg-slate-700"></span>
          </div>
          <a href="tel:+18005550199" className="text-3xl font-serif font-bold text-accent hover:text-white transition-colors mt-6">
            1-800-555-0199
          </a>
        </div>
      </section>

    </div>
  );
}
