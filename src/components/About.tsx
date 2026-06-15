import { Award, CheckCircle, GraduationCap, HeartHandshake } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Award className="w-5 h-5 text-edu-accent" />,
      title: "25+ Years Experience",
      text: "Serving as a senior educator and mentor since 2001, guiding numerous batches to district-level academic success."
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-edu-accent" />,
      title: "Handwritten Summary Notes",
      text: "Crafted point-by-point bullet sheets designed around exact CBSE marking keys, saving hours of revision."
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-edu-accent" />,
      title: "Board Exam Specialization",
      text: "Deep mastery of answer schema, map structures, and correcting common language and grammar writing issues."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-edu-accent" />,
      title: "1-on-1 Student Counsel",
      text: "Reducing test anxieties, boosting writing speeds, and providing constant motivation leading to examinations."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-edu-lightgold/20 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#163B5F]/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Image & Quick Credentials */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Back Gold Border Panel Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-edu-accent rounded-3xl -z-10 transition-transform hover:translate-x-1 hover:translate-y-1 duration-200" />
              
              {/* Main Image Frame depicting a student mentoring setup */}
              <div className="bg-[#0F2942] p-2.5 rounded-3xl shadow-xl overflow-hidden aspect-[4/5] relative">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                  alt="Personalized CBSE mentorship by Anju Ma'am"
                  className="w-full h-full object-cover rounded-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                
                {/* Float-badge representing experience */}
                <div className="absolute bottom-6 inset-x-6 bg-[#031526]/95 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg text-center">
                  <span className="block text-edu-accent font-display font-extrabold text-2xl leading-none">25+ Years</span>
                  <span className="block text-slate-300 text-[10px] tracking-wider uppercase font-semibold mt-1">Undivided Teaching Excellence</span>
                </div>
              </div>
            </div>

            {/* Micro details beneath graphic */}
            <div className="grid grid-cols-2 gap-4 mt-6 text-center">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 shadow-sm">
                <span className="block text-2xl font-display font-bold text-edu-indigo">1,500+</span>
                <span className="block text-slate-500 text-[10px] uppercase font-semibold tracking-wider">Students Mentored</span>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 shadow-sm">
                <span className="block text-2xl font-display font-bold text-edu-indigo">98.4%</span>
                <span className="block text-slate-500 text-[10px] uppercase font-semibold tracking-wider">Peak Board Score</span>
              </div>
            </div>
          </div>

          {/* Right Column - Story Block & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-edu-accent font-mono text-xs uppercase tracking-widest font-extrabold block">
                MEET YOUR FOUNDER & EDUCATOR
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-edu-indigo tracking-tight">
                Anju Ma'am: Creating Pioneers in Hindi and SST
              </h2>
              <div className="w-16 h-1.5 bg-edu-accent rounded-full" />
            </div>

            <div className="text-slate-600 space-y-4 text-sm leading-relaxed font-light">
              <p>
                As a teacher, I have spent the last quarter-century addressing a persistent challenge: why do highly intelligent students struggle to secure high scores in subjects like <span className="font-semibold text-edu-indigo">Social Science (SST)</span> and <span className="font-semibold text-edu-indigo">Hindi</span>? 
              </p>
              <p>
                The answer rarely lies in intelligence; rather, it is about <span className="font-semibold text-edu-indigo">engagement and execution</span>. Thick history textbooks can appear dry, and civics parameters can feel abstract. Under my guidance, memory-heavy humanities are broken down into logical storylines, visual timeline links, and highly intuitive map-pointing exercises.
              </p>
              <p className="font-normal text-slate-700 bg-slate-50 p-4 border-l-4 border-edu-accent rounded-r-xl">
                "We do not encourage standard root-memorization. Every class is interactive, pushing students to think critically, formulate logical structure arguments, and highlight key academic search terms."
              </p>
              <p>
                I personally supervise each batch of <span className="font-semibold text-edu-indigo">Classes 8–10</span> and <span className="font-semibold text-edu-indigo">Classes 11–12</span>. With controlled strength of only 10–15 students per batch, I read every line of my student's response sheets to eliminate the structural errors, grammar issues, and mapping gaps that trigger critical syllabus penalties.
              </p>
            </div>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-3.5">
                  <div className="flex-shrink-0 bg-edu-indigo/5 p-2.5 rounded-xl border border-edu-indigo/10 h-11 w-11 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-slate-800 text-sm leading-snug">{item.title}</h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed font-light">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-edu-indigo hover:bg-edu-royal text-white text-center font-bold text-xs uppercase tracking-wider py-4 px-7 rounded-lg shadow-md transition-all duration-200"
              >
                Schedule an Assessment Meeting
              </a>
              <span className="text-slate-500 text-xs font-medium">or Call Ma'am Directly at <a href="tel:+919811446304" className="text-edu-indigo hover:underline font-bold">+91 98114 46304</a></span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
