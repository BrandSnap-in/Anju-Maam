import React, { useState, useEffect } from "react";
import { Phone, Menu, X, BookOpen, Award } from "lucide-react";
import { WHATSAPP_CONTACT_LINK } from "../data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Subjects", href: "#subjects" },
    { name: "Methodology", href: "#methodology" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Board Prep", href: "#board-prep" },
    { name: "FAQ", href: "#faq" },
    { name: "Location", href: "#location" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
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
    <header
      id="header-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-edu-indigo/95 backdrop-blur-md shadow-lg py-3 border-b border-edu-accent/10"
          : "bg-gradient-to-b from-edu-indigo/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Identity */}
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, "header-nav")}
            className="flex items-center gap-3 group focus:outline-none"
            id="logo-link"
          >
            <div className="bg-edu-accent text-edu-indigo p-2 rounded-lg shadow-inner group-hover:scale-105 transition-transform duration-200">
              <Award className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-display font-bold text-lg leading-tight tracking-wide group-hover:text-edu-accent transition-colors">
                ANJU MA'AM
              </span>
              <span className="text-edu-accent/95 font-mono text-[10px] tracking-widest font-semibold uppercase">
                CBSE TUTORIALS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href.substring(1))}
                className="text-slate-200/90 hover:text-edu-accent text-sm font-medium tracking-wide transition-colors relative duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-edu-accent after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Call / WhatsApp Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+919811446304"
              className="flex items-center gap-2 text-slate-200 hover:text-edu-accent text-sm font-medium transition-colors"
              title="Call Anju Ma'am"
            >
              <div className="bg-white/10 p-2 rounded-full border border-white/5">
                <Phone className="w-3.5 h-3.5 text-edu-accent" />
              </div>
              <span>+91 98114 46304</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="bg-edu-accent hover:bg-edu-accent/90 text-edu-indigo font-semibold text-xs uppercase tracking-wider py-2.5 px-5 rounded-lg transition-all duration-200 shadow-md shadow-edu-accent/10 hover:shadow-lg focus:ring-2 focus:ring-edu-accent/50 focus:outline-none"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex items-center lg:hidden gap-3">
            <a
              href="tel:+919811446304"
              className="sm:hidden flex items-center justify-center bg-white/10 p-2.5 rounded-lg border border-white/5 text-edu-accent"
              title="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-200 hover:text-edu-accent p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-edu-accent/50 transition-colors"
              aria-label="Toggle navigation menu"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed left-0 w-full bg-edu-indigo/98 border-b border-edu-accent/10 backdrop-blur-lg shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? "top-[64px] opacity-100 max-h-[85vh] overflow-y-auto py-6" : "top-[-500px] opacity-0 max-h-0 pointer-events-none"
        }`}
      >
        <div className="px-4 space-y-4">
          <div className="grid grid-cols-1 gap-2 border-b border-white/5 pb-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href.substring(1))}
                className="text-slate-200 hover:text-edu-accent hover:bg-white/5 py-3 px-4 rounded-lg text-base font-medium tracking-wide transition-all"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="tel:+919811446304"
              className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-slate-200 py-3 rounded-lg border border-white/5 transition-all font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-edu-accent" />
              <span>Call +91 98114 46304</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="bg-edu-accent hover:bg-edu-accent/90 text-edu-indigo font-bold text-center py-3 rounded-lg transition-all shadow-md text-sm uppercase tracking-wider"
            >
              Book a Demo Class
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
