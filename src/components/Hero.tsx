import { motion } from "motion/react";
import { Award, Users, Target, CheckCircle2, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { WHATSAPP_CONTACT_LINK } from "../data";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0B1D33] via-edu-indigo to-[#081322] min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Decorative Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-edu-accent blur-3xl" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-sky-400 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Admissions Banner Label */}
            <div className="inline-flex items-center gap-2 bg-edu-accent/10 border border-edu-accent/30 py-1.5 px-4 rounded-full text-edu-accent font-medium text-xs tracking-wider uppercase animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-edu-accent" />
              CBSE Academic Batches 2026-2027: Now Enrolling
            </div>

            {/* Key Title Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight sm:leading-none">
              25+ Years of Guiding <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-edu-lightgold to-edu-accent">
                Students Towards Success
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Expert CBSE coaching for Classes 8–12 in Hindi, Social Science, History, Geography, Political Science, and Humanities subjects.
            </p>

            {/* Interactive Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => handleScrollTo("contact")}
                className="w-full sm:w-auto bg-edu-accent hover:bg-edu-accent/90 text-edu-indigo font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-xl shadow-lg shadow-edu-accent/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group cursor-pointer"
                id="hero-demo-btn"
              >
                <span>Book a Demo Class</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo("contact")}
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-xl border border-white/15 transition-all duration-300 hover:border-edu-accent/50 flex items-center justify-center gap-2.5 cursor-pointer"
                id="hero-contact-btn"
              >
                <span>Contact Now</span>
              </button>
            </div>

            {/* Urgency Trigger */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 inline-flex items-center gap-3.5 max-w-md w-full sm:w-auto">
              <div className="bg-orange-500/10 text-orange-400 p-2 rounded-lg text-sm font-bold">
                Seat Alert
              </div>
              <p className="text-slate-300 text-xs text-left">
                🔔 <span className="font-semibold text-white">Only 4 Seats Left</span> in the Grade 10 batch and <span className="font-semibold text-white">3 Seats Left</span> in Grade 12 Humanities.
              </p>
            </div>

            {/* Core Trust Pillars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-left border-t border-white/5">
              <div className="space-y-1">
                <span className="block font-display font-bold text-2xl text-edu-accent">25+</span>
                <span className="block text-slate-400 text-xs font-medium uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="space-y-1">
                <span className="block font-display font-bold text-2xl text-edu-accent">10-15</span>
                <span className="block text-slate-400 text-xs font-medium uppercase tracking-wider">Batch Max</span>
              </div>
              <div className="space-y-1">
                <span className="block font-display font-bold text-2xl text-edu-accent">1-on-1</span>
                <span className="block text-slate-400 text-xs font-medium uppercase tracking-wider">Attention</span>
              </div>
              <div className="space-y-1">
                <span className="block font-display font-bold text-2xl text-edu-accent">100%</span>
                <span className="block text-slate-400 text-xs font-medium uppercase tracking-wider">CBSE Syllabus</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Representation Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Back Soft gold glowing drop */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-edu-accent to-sky-400 opacity-20 blur-xl" />

              {/* Main Premium Container Frame */}
              <div className="relative bg-[#11243B] border border-white/10 rounded-3xl overflow-hidden p-3 shadow-2xl">
                
                {/* Simulated classroom atmosphere card representation */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square bg-edu-indigo">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                    alt="Attentive High school Students learning CBSE Civics History with Anju Ma'am"
                    className="object-cover w-full h-full object-top group-hover:scale-102 transition-transform duration-500 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-edu-indigo via-transparent to-transparent" />
                  
                  {/* Subject tags in top area */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[90%]">
                    <span className="bg-edu-indigo/90 backdrop-blur-md text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded font-semibold border border-white/10">SST</span>
                    <span className="bg-edu-indigo/90 backdrop-blur-md text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded font-semibold border border-white/10">HINDI</span>
                    <span className="bg-edu-indigo/90 backdrop-blur-md text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded font-semibold border border-white/10">HUMANITIES</span>
                  </div>
                </div>

                {/* Trust / Achievements Micro Overlay Panels */}
                <div className="absolute -bottom-4 -left-4 bg-edu-indigo border border-white/10 rounded-2xl p-4 shadow-xl flex items-center gap-3.5 max-w-[200px]">
                  <div className="bg-edu-accent/15 text-edu-accent p-2 rounded-xl">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-display font-extrabold text-white text-base">98.4%</span>
                    <span className="block text-slate-400 text-[10px] font-semibold leading-tight uppercase tracking-wider">Top Score Record</span>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-edu-indigo border border-white/10 rounded-2xl p-4 shadow-xl flex items-center gap-3.5 max-w-[190px]">
                  <div className="bg-sky-500/10 text-sky-400 p-2 rounded-xl">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-display font-extrabold text-white text-base">Small Batches</span>
                    <span className="block text-slate-400 text-[10px] font-semibold leading-tight uppercase tracking-wider">10-15 Students Max</span>
                  </div>
                </div>

                {/* Local Info block */}
                <div className="pt-6 pb-3 px-4 text-center sm:text-left space-y-2">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-edu-accent text-xs font-mono uppercase tracking-widest font-semibold">
                    <span>Shyam Nagar Center</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                  </div>
                  <h3 className="text-white text-base font-display font-bold">Personalized Guidance Redefined</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Interactive whiteboards, personalized review checklists, and detailed handwritten feedback from the first session.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
