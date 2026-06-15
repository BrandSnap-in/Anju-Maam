import React from "react";
import { Award, Users, Target, ClipboardCheck, FileCheck, MessageSquare, BellRing, Edit3, Network, BookOpen } from "lucide-react";
import { KEY_FEATURES } from "../data";

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-5 h-5 text-edu-accent" />,
  Users: <Users className="w-5 h-5 text-edu-accent" />,
  Target: <Target className="w-5 h-5 text-edu-accent" />,
  ClipboardCheck: <ClipboardCheck className="w-5 h-5 text-edu-accent" />,
  FileCheck: <FileCheck className="w-5 h-5 text-edu-accent" />,
  MessageCircleCode: <MessageSquare className="w-5 h-5 text-edu-accent" />,
  BellRing: <BellRing className="w-5 h-5 text-edu-accent" />,
  Edit3: <Edit3 className="w-5 h-5 text-edu-accent" />,
  Network: <Network className="w-5 h-5 text-edu-accent" />,
  BookOpen: <BookOpen className="w-5 h-5 text-edu-accent" />
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Radial Backdrop */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-edu-lightgold rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-slate-100 rounded-full blur-3xl opacity-35" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-edu-accent font-mono text-xs uppercase tracking-widest font-extrabold block">
            THE ANJU MA'AM EDGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-edu-indigo tracking-tight">
            Why Discerning Parents Trust Anju Ma'am
          </h2>
          <p className="text-slate-500 font-light text-sm leading-relaxed">
            Coaching-center factories herd students into packed lecture rooms. We represent a personalized, high-attention boutique workspace where every student's learning graph is monitored individually.
          </p>
          <div className="w-16 h-1.5 bg-edu-accent mx-auto rounded-full" />
        </div>

        {/* Features Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {KEY_FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-[#FCFDFF] border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-edu-accent/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Backglow element on card hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-edu-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div className="space-y-4">
                {/* Feature Icon Container */}
                <div className="bg-edu-indigo/5 p-3 rounded-2xl w-fit group-hover:bg-edu-indigo group-hover:scale-102 transition-all duration-300">
                  {iconMap[feature.iconName] || <Award className="w-5 h-5 text-edu-accent" />}
                </div>

                {/* Info titles */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-[#0F2942] text-base leading-tight group-hover:text-edu-indigo">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-xs font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Gold Accent corner indicator */}
              <div className="w-8 h-[2px] bg-transparent group-hover:bg-edu-accent mt-5 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Interactive Bottom Trust Highlight */}
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 mt-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-inner">
          <div className="flex items-center gap-4">
            <div className="bg-edu-indigo text-white p-3.5 rounded-full shadow-inner flex-shrink-0">
              <Users className="w-5 h-5 text-edu-accent" />
            </div>
            <div>
              <p className="text-[#0F2942] text-sm font-bold">First Demo Session is Free & Committal-Free</p>
              <p className="text-slate-500 text-xs font-light">Experience the narrative storytelling teaching format firsthand. Seats are allotted strictly on verification basis.</p>
            </div>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
            className="w-full md:w-auto bg-edu-indigo hover:bg-edu-royal text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-md cursor-pointer"
          >
            Claim Your Spot
          </button>
        </div>

      </div>
    </section>
  );
}
