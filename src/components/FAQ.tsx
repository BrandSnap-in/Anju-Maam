import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS, WHATSAPP_CONTACT_LINK } from "../data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative vector arches */}
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-slate-50 border-2 border-slate-100 flex-shrink-0 -z-10" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 rounded-full bg-slate-50 border-2 border-slate-100 flex-shrink-0 -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-edu-accent font-mono text-xs uppercase tracking-widest font-extrabold block">
            COMMON INQUIRIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-edu-indigo tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 font-light text-sm leading-relaxed">
            Everything parents and secondary students need to know and understand about our admission protocols, batched systems, assessment indexes, and lecture structures.
          </p>
          <div className="w-16 h-1.5 bg-edu-accent mx-auto rounded-full" />
        </div>

        {/* Accordion Questions Stack */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "border-edu-accent bg-slate-50/60 shadow-md"
                    : "border-slate-100 bg-white hover:border-slate-300/80 shadow-sm"
                }`}
              >
                
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-edu-accent/30 rounded-2xl cursor-pointer"
                  aria-expanded={isOpen}
                  id={`faq-btn-${index}`}
                >
                  <div className="flex items-start gap-3.5">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${
                      isOpen ? "text-edu-accent" : "text-slate-400"
                    }`} />
                    <span className={`font-display font-bold text-sm sm:text-base leading-tight ${
                      isOpen ? "text-edu-indigo" : "text-slate-700"
                    }`}>
                      {faq.question}
                    </span>
                  </div>

                  <div className={`p-1.5 rounded-full bg-slate-100 text-slate-500 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-edu-indigo text-edu-accent" : ""
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Progressive height content panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t border-slate-100" : "max-h-0 pointer-events-none"
                  }`}
                >
                  <div className="p-5 sm:p-6 text-slate-600 text-xs sm:text-sm leading-relaxed font-light bg-white/70 rounded-b-2xl">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Support Call-out Footer */}
        <div className="mt-16 text-center border-t border-slate-100 pt-8 space-y-2">
          <p className="text-slate-500 text-xs font-light">Have more doubts not answered here?</p>
          <p className="text-[#0F2942] text-sm font-bold">
            📱 Message Anju Ma’am directly on WhatsApp at <a href={WHATSAPP_CONTACT_LINK} target="_blank" rel="noopener noreferrer" className="text-edu-accent underline hover:text-slate-900">+91 98114 46304</a> for instant assistance.
          </p>
        </div>

      </div>
    </section>
  );
}
