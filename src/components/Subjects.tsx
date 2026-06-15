import React, { useState } from "react";
import { BookOpen, Map, Landmark, Globe, Scale, Coins, PenTool, CheckCircle, ArrowRight } from "lucide-react";
import { SUBJECT_GROUPS } from "../data";

const subjectIconMap: Record<string, React.ReactNode> = {
  hindi: <PenTool className="w-6 h-6 text-edu-accent" />,
  sst_history: <BookOpen className="w-6 h-6 text-edu-accent" />,
  sst_geography: <Globe className="w-6 h-6 text-edu-accent" />,
  sst_civics: <Scale className="w-6 h-6 text-edu-accent" />,
  sst_economics: <Coins className="w-6 h-6 text-edu-accent" />,
  humanities_history: <BookOpen className="w-6 h-6 text-edu-accent" />,
  humanities_geography: <Map className="w-6 h-6 text-edu-accent" />,
  humanities_polscience: <Landmark className="w-6 h-6 text-edu-accent" />
};

export default function Subjects() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleScrollTo = (id: string, customSubject?: string) => {
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

      // Safely auto-select subject in form if input field is present
      if (customSubject) {
        const selectElem = document.getElementById("form-subject") as HTMLSelectElement;
        if (selectElem) {
          selectElem.value = customSubject;
          // Dispatch change event to trigger state change in form component
          selectElem.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }
    }
  };

  return (
    <section id="subjects" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-10 left-10 w-64 h-64 border-4 border-slate-200/40 rounded-full -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-slate-200/40 rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-edu-accent font-mono text-xs uppercase tracking-widest font-extrabold block">
            CBSE COURSE DIRECTORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-edu-indigo tracking-tight">
            Subjects Offered & Curriculum Scope
          </h2>
          <p className="text-slate-500 font-light text-sm leading-relaxed">
            Every subject includes detailed visual mindmaps, customized point-wise study templates, and extensive solving of pre-released papers.
          </p>
          <div className="w-16 h-1.5 bg-edu-accent mx-auto rounded-full" />
        </div>

        {/* Custom Tab Panel Selection */}
        <div className="flex justify-center mt-12 mb-16">
          <div className="bg-white border border-slate-100 p-1.5 rounded-xl shadow-lg flex gap-1">
            {SUBJECT_GROUPS.map((group, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-3.5 px-6 sm:px-10 rounded-lg font-display text-sm font-bold tracking-wide transition-all duration-300 ${
                  activeTab === index
                    ? "bg-edu-indigo text-white shadow-md shadow-edu-indigo/20"
                    : "text-slate-500 hover:text-edu-indigo hover:bg-slate-50"
                }`}
                id={`tab-btn-${index}`}
              >
                <span className="block text-xs uppercase opacity-80 tracking-wider font-semibold mb-0.5">{group.classes}</span>
                <span className="block text-sm font-extrabold">{group.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Panel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUBJECT_GROUPS[activeTab].subjects.map((subj) => (
            <div
              key={subj.id}
              className="bg-white border border-slate-100 rounded-3xl p-6 shadow-md shadow-slate-100/30 hover:shadow-xl hover:border-edu-accent/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                
                {/* Header Icon & Tags */}
                <div className="flex items-center justify-between">
                  <div className="bg-edu-indigo/5 p-3 rounded-2xl group-hover:bg-edu-indigo group-hover:text-white transition-colors duration-300">
                    {subjectIconMap[subj.id] || <BookOpen className="w-6 h-6 text-edu-accent" />}
                  </div>
                  <span className="bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-slate-200/50">
                    CBSE Focused
                  </span>
                </div>

                {/* Subject Info */}
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-[#0F2942] text-lg leading-tight group-hover:text-edu-royal transition-colors">
                    {subj.name}
                  </h3>
                  <p className="text-slate-500 text-xs font-light leading-relaxed h-20 overflow-y-auto pr-1">
                    {subj.description}
                  </p>
                </div>

                {/* Scope list bullets */}
                <div className="space-y-2.5 pt-4 border-t border-slate-50">
                  <h4 className="text-slate-700 text-xs font-bold uppercase tracking-wider">
                    Core Learning Syllabus:
                  </h4>
                  <ul className="space-y-1.5">
                    {subj.topics.map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 font-light">
                        <CheckCircle className="w-3.5 h-3.5 text-edu-accent stroke-[2.5] mt-0.5 min-shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action trigger on card */}
              <div className="mt-8 pt-4 border-t border-slate-50 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  {SUBJECT_GROUPS[activeTab].classes}
                </span>
                <button
                  onClick={() => handleScrollTo("contact", subj.name)}
                  className="text-edu-indigo hover:text-edu-accent text-xs font-bold flex items-center gap-1.5 transition-colors group/btn cursor-pointer"
                >
                  <span>Enquire Batch</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Lower Banner Quote CTA */}
        <div className="bg-edu-indigo border border-white/10 rounded-3xl p-8 sm:p-10 mt-16 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-edu-indigo via-edu-royal to-sky-950 opacity-90 -z-10" />
          <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-[radial-gradient(circle_at_bottom_right,#C5A03C_0%,transparent_70%)] opacity-25" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <span className="bg-edu-accent/15 border border-edu-accent/30 text-edu-accent text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                Custom Batches Formed
              </span>
              <h3 className="text-white text-xl sm:text-2xl font-display font-extrabold leading-tight">
                Preparing for 10th SST or 12th Humanities Board Exams?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed max-w-2xl">
                We organize special, dedicated revision schedules and mock evaluations starting November. Book a personal counselor advice slot early to gauge preparation level.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <button
                onClick={() => handleScrollTo("contact")}
                className="bg-edu-accent hover:bg-edu-accent/90 text-edu-indigo font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-xl shadow-lg transition-all duration-200 cursor-pointer"
              >
                Book a Counsel Call
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
