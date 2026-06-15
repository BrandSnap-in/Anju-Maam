import { BookOpen, FileText, Compass, Clock, CheckSquare, Award, ArrowUpRight } from "lucide-react";

export default function BoardPrep() {
  const handleScrollToForm = (subjectType: string) => {
    const element = document.getElementById("contact");
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

      // Preset the subject in the dropdown selection for easier inquiry
      const selectElem = document.getElementById("form-subject") as HTMLSelectElement;
      if (selectElem) {
        selectElem.value = subjectType;
        selectElem.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  };

  return (
    <section id="board-prep" className="py-24 bg-gradient-to-br from-[#0B1D33] via-edu-indigo to-[#081322] text-white relative overflow-hidden">
      
      {/* Decorative vector overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-edu-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-edu-accent font-mono text-xs uppercase tracking-widest font-extrabold block">
            SCORE MAXIMIZATION METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
            Specialized CBSE Board Prep Programs
          </h2>
          <p className="text-slate-300 font-light text-sm leading-relaxed">
            Humanities and Language scores in CBSE are highly dependent on presentation, structure, and keyword density. We train students to meet CBSE evaluators' expectations perfectly.
          </p>
          <div className="w-16 h-1.5 bg-edu-accent mx-auto rounded-full" />
        </div>

        {/* Board Prep Grid split between 10th and 12th */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Card 1: Class 10 Board Prep */}
          <div className="bg-[#11243B] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between hover:border-edu-accent/30 transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="bg-edu-accent/15 border border-edu-accent/30 text-edu-accent text-[10px] uppercase font-bold tracking-widest px-3.5 py-1 rounded-full">
                  Classes 8-10 SST & Hindi
                </span>
                <span className="text-slate-400 font-mono text-xs font-semibold">Max Score Target: 100/100</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl text-white">
                Class 10 Social Science & Hindi Core
              </h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Breaking the mental block of cramming. Social Science is turned into a storytelling ledger, and Hindi writing spelling penalties are completely eradicated.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/5">
                <h4 className="text-edu-accent font-mono text-xs uppercase tracking-wider font-bold">Key Board Highlights:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Compass className="w-4 h-4 text-edu-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-white">Master Map Tracing</span>
                      <span>Locating soil rivers, rivers, dams, minerals, and congress hubs instantly.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <FileText className="w-4 h-4 text-edu-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-white">Hindi Vyakaran Keys</span>
                      <span>Perfecting Ras, Alankars, and paragraph correction rules.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Clock className="w-4 h-4 text-edu-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-white">Time Splits Drill</span>
                      <span>Finishing the 3-hour theoretical board exam 20 minutes prior.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckSquare className="w-4 h-4 text-edu-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-white">10-Year PYQs Review</span>
                      <span>Solving high-probability questions repeatedly with exact scoring models.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleScrollToForm("Complete Social Science (SST) - Class 10")}
                className="w-full sm:w-auto bg-edu-accent hover:bg-edu-accent/90 text-edu-indigo font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enrol Class 10 Batch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScrollToForm("Hindi - Class 10")}
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl border border-white/10 flex items-center justify-center cursor-pointer"
              >
                Request Hindi Demo
              </button>
            </div>
          </div>

          {/* Card 2: Class 12 Humanities */}
          <div className="bg-[#11243B] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between hover:border-edu-accent/30 transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="bg-sky-500/15 border border-sky-400/30 text-sky-400 text-[10px] uppercase font-bold tracking-widest px-3.5 py-1 rounded-full">
                  Classes 11-12 Humanities Core
                </span>
                <span className="text-slate-400 font-mono text-xs font-semibold">Max Score Target: 100/100</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl text-white">
                Class 12 History, Geo & Political Science
              </h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Formulating detailed analytical arguments for 8-mark questions. Learn keyword placement strategies that compel evaluators to grant full marks.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/5">
                <h4 className="text-edu-accent font-mono text-xs uppercase tracking-wider font-bold">Key Board Highlights:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Award className="w-4 h-4 text-edu-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-white">Point-Wise Presentation</span>
                      <span>Structuring detailed arguments under headings, bold tags, and intro summaries.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <FileText className="w-4 h-4 text-edu-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-white">Source-Passage Mastery</span>
                      <span>Answering contextual comprehension passages accurately to secure easy scores.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Compass className="w-4 h-4 text-edu-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-white">Bilingual Terminology</span>
                      <span>Eliminating core expression confusion, making your presentation elegant.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Clock className="w-4 h-4 text-edu-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-white">3-Hour Mock Simulations</span>
                      <span>Practicing full papers under exact CBSE grid environment before final testing.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleScrollToForm("History - Class 12")}
                className="w-full sm:w-auto bg-edu-accent hover:bg-edu-accent/90 text-edu-indigo font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enrol Class 12 Humanities</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScrollToForm("Political Science - Class 12")}
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl border border-white/10 flex items-center justify-center cursor-pointer"
              >
                Request Pol Sci Demo
              </button>
            </div>
          </div>

        </div>

        {/* Free Writing Sample CTA */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 mt-16 max-w-4xl mx-auto text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-edu-accent font-mono text-xs uppercase tracking-wider font-bold">LIMITED ADMISSIONS OFFER</span>
              <p className="text-white font-display font-bold text-base sm:text-lg">Get Your Child's SST/Humanities Answer Sheet Analyzed by Anju Ma'am</p>
              <p className="text-slate-300 text-xs sm:text-sm font-light">Bring your child's recent exam answer sheets. Ma'am will personally evaluate spelling errors, map deficiencies, and missing score keywords completely free.</p>
            </div>
            <button
              onClick={() => handleScrollToForm("General Enquiry / Admission Consultation")}
              className="bg-white hover:bg-slate-100 text-[#0F2942] font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl whitespace-nowrap shadow-md cursor-pointer"
            >
              Book Assessment Slot
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
