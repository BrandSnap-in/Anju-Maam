import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, Award } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto-advance testimonials slowly
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      
      {/* Visual top border line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-edu-indigo/0 via-edu-accent/40 to-edu-indigo/0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-edu-accent font-mono text-xs uppercase tracking-widest font-extrabold block">
            WORDS FROM FAMILIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-edu-indigo tracking-tight">
            Trusted by Hundreds of Students & Parents
          </h2>
          <p className="text-slate-500 font-light text-sm leading-relaxed">
            Real stories of grade climbs, board exam score breakthroughs, and newfound writing comfort from current & past batches.
          </p>
          <div className="w-16 h-1.5 bg-edu-accent mx-auto rounded-full" />
        </div>

        {/* Testimonial Active Display Card */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Big Quote Symbol behind */}
          <div className="absolute -top-12 -left-6 md:-left-12 text-slate-100 flex-shrink-0 -z-10 select-none">
            <Quote className="w-24 h-24 fill-slate-50 stroke-slate-100" />
          </div>

          <div className="bg-[#FCFDFF] border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
            {/* Soft gold border top highlight */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-edu-accent" />

            {/* Layout Flex */}
            <div className="space-y-6 sm:space-y-8">
              
              {/* Rating stars & Score badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-50 pb-5">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-edu-accent stroke-edu-accent" />
                  ))}
                </div>
                {TESTIMONIALS[activeIndex].scoreOrResult && (
                  <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 py-1 px-3.5 rounded-full text-emerald-700 text-xs font-bold shadow-sm">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span>{TESTIMONIALS[activeIndex].scoreOrResult}</span>
                  </div>
                )}
              </div>

              {/* Central Review quotes */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light italic">
                "{TESTIMONIALS[activeIndex].feedback}"
              </p>

              {/* Author Info Column */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-50">
                <div className="space-y-1">
                  <h4 className="font-display font-black text-edu-indigo text-lg leading-none">
                    {TESTIMONIALS[activeIndex].studentName}
                  </h4>
                  <p className="text-slate-500 text-xs font-light">
                    Son/Daughter of <span className="font-semibold text-slate-700">{TESTIMONIALS[activeIndex].parentName}</span>
                  </p>
                </div>

                <div className="bg-slate-100 text-slate-700 font-mono text-[11px] tracking-wide font-extrabold uppercase py-1.5 px-4 rounded-lg border border-slate-200/50">
                  {TESTIMONIALS[activeIndex].className} • {TESTIMONIALS[activeIndex].subjectInfo}
                </div>
              </div>

            </div>

          </div>

          {/* Testimonial Nav Arrows */}
          <div className="flex items-center justify-between mt-8">
            {/* Left Nav Arrow Button */}
            <button
              onClick={prevTestimonial}
              className="bg-edu-indigo hover:bg-edu-royal text-white hover:text-edu-accent p-3.5 rounded-xl shadow-lg border border-white/10 transition-all flex items-center justify-center cursor-pointer"
              aria-label="Previous testimonial"
              id="testi-btn-prev"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Slider Dots Indices */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "w-8 bg-edu-accent" : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  id={`testi-dot-${idx}`}
                />
              ))}
            </div>

            {/* Right Nav Arrow Button */}
            <button
              onClick={nextTestimonial}
              className="bg-edu-indigo hover:bg-edu-royal text-white hover:text-edu-accent p-3.5 rounded-xl shadow-lg border border-white/10 transition-all flex items-center justify-center cursor-pointer"
              aria-label="Next testimonial"
              id="testi-btn-next"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
