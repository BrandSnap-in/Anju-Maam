import { Clock, CheckSquare, Target } from "lucide-react";
import { METHOD_SEQUENCE } from "../data";

export default function Methodology() {
  return (
    <section id="methodology" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative vertical patterns for academic tone */}
      <div className="absolute inset-y-0 right-1/4 w-[1px] bg-slate-200/50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-edu-accent font-mono text-xs uppercase tracking-widest font-extrabold block">
            HOW WE CONSTRUCT TOPPERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-edu-indigo tracking-tight">
            Anju Ma'am's Teaching Methodology
          </h2>
          <p className="text-slate-500 font-light text-sm leading-relaxed">
            A comprehensive, rigorous, and stress-free academic pathway designed over 25+ years to unlock conceptual mastery and supreme writing confidence.
          </p>
          <div className="w-16 h-1.5 bg-edu-accent mx-auto rounded-full" />
        </div>

        {/* Chronological Timeline Container */}
        <div className="relative mt-20 max-w-4xl mx-auto">
          
          {/* Central Track Line (visible only on md and larger) */}
          <div className="absolute left-[31px] md:left-1/2 top-4 bottom-4 w-[2px] bg-indigo-100 border-dashed border-l-2 border-edu-indigo/20 -translate-x-1/2" />

          <div className="space-y-12">
            {METHOD_SEQUENCE.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.stepNumber}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } relative`}
                >
                  
                  {/* Circle Step Index Badge */}
                  <div className="absolute left-0 md:left-1/2 top-1.5 w-16 h-16 rounded-full bg-white border-4 border-slate-50 z-20 flex items-center justify-center shadow-lg -translate-x-1/2 transform scale-90 sm:scale-100">
                    <div className="w-10 h-10 rounded-full bg-[#0F2942] flex items-center justify-center text-edu-accent font-display font-extrabold text-sm sm:text-base border border-edu-accent/30 shadow-inner">
                      0{step.stepNumber}
                    </div>
                  </div>

                  {/* Empty spacer spacer on opposite side to balance timeline (visible only on md:flex) */}
                  <div className="hidden md:block w-1/2" />

                  {/* Step Card Content */}
                  <div className="w-full md:w-[45%] pl-20 md:pl-0">
                    <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-edu-accent/30 transition-all duration-300 relative group">
                      
                      {/* Triangle pointer indicator pointing to line (visible on desktop) */}
                      <div
                        className={`hidden md:block absolute top-[28px] w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ${
                          isEven
                            ? "right-full border-r-[10px] border-r-white"
                            : "left-full border-l-[10px] border-l-white"
                        }`}
                      />

                      <div className="space-y-3">
                        {/* Title Row with indicator */}
                        <div className="flex items-center gap-2 text-edu-accent text-xs font-mono uppercase tracking-widest font-semibold">
                          <span>STAGE 0{step.stepNumber}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-edu-accent" />
                        </div>

                        <h3 className="font-display font-extrabold text-[#0F2942] text-base sm:text-lg leading-tight group-hover:text-edu-indigo transition-colors">
                          {step.title}
                        </h3>

                        <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* CTA Banner explaining focus */}
        <div className="max-w-2xl mx-auto text-center mt-16 p-6 bg-edu-indigo/5 border border-edu-indigo/10 rounded-2xl flex items-center justify-center gap-3.5">
          <Clock className="w-5 h-5 text-edu-accent flex-shrink-0" />
          <p className="text-slate-600 text-xs text-left">
            💡 <span className="font-semibold text-[#0F2942]">Method Verification:</span> We constantly calibrate our course pace around student feedback loops. Students starting during midterm periods get tailored rapid-revision tracks.
          </p>
        </div>

      </div>
    </section>
  );
}
