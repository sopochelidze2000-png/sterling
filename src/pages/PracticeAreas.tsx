import { Link } from 'react-router-dom';
import { Scale, ChevronRight } from 'lucide-react';

export default function PracticeAreas() {
  const areas = [
    { title: "Car Accidents", desc: "Whiplash, rear-end collisions, drunk driving accidents, and uninsured motorist claims." },
    { title: "Truck Accidents", desc: "Federal regulation violations, driver fatigue, and catastrophic commercial vehicle crashes." },
    { title: "Motorcycle Accidents", desc: "Lane splitting edge cases, severe road rash, traumatic brain injuries, and bias fighting." },
    { title: "Slip & Fall", desc: "Premises liability, negligent security, unmarked hazards, and retail store injuries." },
    { title: "Medical Malpractice", desc: "Surgical errors, misdiagnosis, birth injuries, and failure to treat emergencies." },
    { title: "Wrongful Death", desc: "Compassionate representation for grieving families seeking justice and financial security." },
    { title: "Workplace Injuries", desc: "Construction accidents, machinery malfunctions, and third-party liability claims." },
    { title: "Brain & Spinal Injuries", desc: "Long-term life care planning and aggressive litigation for catastrophic trauma." },
  ];

  return (
    <div className="bg-primary py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl font-serif font-bold text-white mb-6">Our Practice Areas</h1>
          <p className="text-xl text-white/60 max-w-3xl">
            We focus exclusively on personal injury law. This intense specialization allows us to outwork and outmaneuver the insurance companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, i) => (
            <Link to={`/practice-areas/${area.title.toLowerCase().replace(/ /g, '-').replace('&', 'and')}`} key={i} className="group flex flex-col bg-primary-light p-6 rounded-sm shadow-2xl border border-white/5 hover:border-accent/30 transition-all duration-300">
              <div className="w-10 h-10 bg-white/5 text-white rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-primary transition-colors">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">{area.title}</h3>
              <p className="text-white/60 text-sm mb-4 flex-grow">{area.desc}</p>
              <div className="flex items-center justify-between text-accent font-semibold text-sm">
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
