import { Phone, MapPin, Mail, Award, MessageSquare, ExternalLink, CalendarDays } from "lucide-react";
import { GOOGLE_MAPS_LOCATION_URL, WHATSAPP_CONTACT_LINK } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-[#051322] border-t border-white/5 text-slate-400 font-light text-xs sm:text-sm">
      
      {/* Upper footer columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8">
          
          {/* Main profile brand summary */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="inline-flex items-center gap-3"
            >
              <div className="bg-edu-accent text-edu-indigo p-1.5 rounded-lg">
                <Award className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="block text-white font-display font-extrabold text-[#FCFDFF] tracking-wide text-base leading-none">
                  ANJU MA'AM
                </span>
                <span className="block text-edu-accent font-mono text-[9px] tracking-widest font-bold">
                  CBSE ACADEMY
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-xs leading-relaxed font-light">
              Providing top-tier bilingual coaching files in Political Science, Geography, History, complete Social Science (SST), and Hindi across Grades 8-12. Focused on conceptual clarity and rigorous exam-writing drills.
            </p>
            <div className="flex items-center gap-2.5 text-xs text-edu-accent font-medium bg-white/5 border border-white/5 p-3 rounded-xl w-fit">
              <CalendarDays className="w-4 h-4 text-edu-accent" />
              <span>Admissions Open for Year 2026-27</span>
            </div>
          </div>

          {/* Subjects reference cards quickly */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-display font-bold text-xs uppercase tracking-wider border-b border-white/5 pb-2.5">
              Subjects Offered
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="block text-slate-300 font-medium">Classes 8–10 CBSE:</span>
                <span className="block text-slate-400 text-[11px] mt-0.5">Hindi, SST (History, Geo, Civics, Economics)</span>
              </li>
              <li>
                <span className="block text-slate-300 font-medium">Classes 11–12 Core Arts:</span>
                <span className="block text-slate-400 text-[11px] mt-0.5">Themes in History, Human Geography, world Politics</span>
              </li>
              <li>
                <span className="block text-slate-300 font-medium">Core Coaching Focus:</span>
                <span className="block text-slate-400 text-[11px] mt-0.5">Active mindmapping, board-presentation layouts</span>
              </li>
            </ul>
          </div>

          {/* Quick anchor scroll lines */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-display font-bold text-xs uppercase tracking-wider border-b border-white/5 pb-2.5">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleScrollTo("about")}
                  className="hover:text-edu-accent transition-colors cursor-pointer text-left focus:outline-none"
                >
                  About Ma'am
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("subjects")}
                  className="hover:text-edu-accent transition-colors cursor-pointer text-left focus:outline-none"
                >
                  Syllabus Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("why-choose-us")}
                  className="hover:text-edu-accent transition-colors cursor-pointer text-left focus:outline-none"
                >
                  Why Families Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("methodology")}
                  className="hover:text-edu-accent transition-colors cursor-pointer text-left focus:outline-none"
                >
                  Teaching Methodology
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("board-prep")}
                  className="hover:text-edu-accent transition-colors cursor-pointer text-left focus:outline-none"
                >
                  Board Prep Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("faq")}
                  className="hover:text-edu-accent transition-colors cursor-pointer text-left focus:outline-none"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Tuition Center contacts */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-display font-bold text-xs uppercase tracking-wider border-b border-white/5 pb-2.5">
              Academy Contacts
            </h3>
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-edu-accent flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  D-102, Siddharth Path, Shyam Nagar, Jaipur, Rajasthan 302019
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-edu-accent flex-shrink-0" />
                <a href="tel:+919811446304" className="text-slate-300 hover:text-edu-accent transition-colors">
                  +91 98114 46304
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-edu-accent flex-shrink-0" />
                <a href={WHATSAPP_CONTACT_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-edu-accent transition-colors inline-flex items-center gap-1">
                  <span>WhatsApp Chat</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-edu-accent flex-shrink-0" />
                <span className="text-slate-300 select-all">anju.tutorials.cbse@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Social / bottom copyright */}
      <div className="border-t border-white/5 bg-[#030d17] py-6 text-slate-500 font-light text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            © {currentYear} Anju Ma'am CBSE Tuition Classes. All Rights Reserved. Designed to build authentic trust.
          </p>
          <div className="flex gap-4">
            <a
              href={GOOGLE_MAPS_LOCATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-edu-accent transition-colors"
            >
              Google Maps Center Location
            </a>
            <span className="text-white/5">|</span>
            <span className="text-slate-500 font-normal">Jaipur, Rajasthan</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
